import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import CommentForm from './CommentForm';
import Comment from './Comment';

interface CommentData {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
  parent_id: string | null;
}

interface CommentsSectionProps {
  blogSlug: string;
}

const CommentsSection = ({ blogSlug }: CommentsSectionProps) => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_slug', blogSlug)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('comments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `blog_slug=eq.${blogSlug}`
        },
        () => {
          fetchComments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [blogSlug]);

  // Organize comments into threads
  const rootComments = comments.filter(comment => !comment.parent_id);
  const getReplies = (commentId: string) => 
    comments.filter(comment => comment.parent_id === commentId);

  const totalComments = comments.length;
  const uniqueAuthors = new Set(comments.map(c => c.author_name)).size;

  if (loading) {
    return (
      <div className="mt-8">
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              Loading comments...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Discussion
            </CardTitle>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                {totalComments} {totalComments === 1 ? 'comment' : 'comments'}
              </Badge>
              {uniqueAuthors > 0 && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {uniqueAuthors} {uniqueAuthors === 1 ? 'participant' : 'participants'}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CommentForm 
            blogSlug={blogSlug} 
            onCommentAdded={fetchComments}
          />
        </CardContent>
      </Card>

      {rootComments.length > 0 ? (
        <div className="space-y-4">
          {rootComments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              blogSlug={blogSlug}
              replies={getReplies(comment.id)}
              onCommentAdded={fetchComments}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No comments yet. Be the first to start the discussion!</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CommentsSection;