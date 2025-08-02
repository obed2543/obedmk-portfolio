import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock } from 'lucide-react';
import CommentForm from './CommentForm';

interface CommentData {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
  parent_id: string | null;
}

interface CommentProps {
  comment: CommentData;
  blogSlug: string;
  replies: CommentData[];
  onCommentAdded: () => void;
}

const Comment = ({ comment, blogSlug, replies, onCommentAdded }: CommentProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return diffInMinutes < 1 ? 'Just now' : `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const handleReplyAdded = () => {
    setShowReplyForm(false);
    onCommentAdded();
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-medium">
                {comment.author_name}
              </Badge>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="w-3 h-3" />
                {formatDate(comment.created_at)}
              </div>
            </div>
          </div>
          
          <p className="text-foreground mb-3 whitespace-pre-wrap">{comment.content}</p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-muted-foreground hover:text-foreground"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Reply
          </Button>
        </CardContent>
      </Card>

      {showReplyForm && (
        <CommentForm
          blogSlug={blogSlug}
          parentId={comment.id}
          onCommentAdded={handleReplyAdded}
          isReply={true}
          onCancel={() => setShowReplyForm(false)}
        />
      )}

      {replies.length > 0 && (
        <div className="ml-6 space-y-3">
          {replies.map((reply) => (
            <Card key={reply.id} className="border-l-4 border-l-primary/20">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-medium">
                      {reply.author_name}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-3 h-3" />
                      {formatDate(reply.created_at)}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground whitespace-pre-wrap">{reply.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;