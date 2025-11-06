import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Input validation schema
const commentSchema = z.object({
  authorName: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  content: z.string()
    .trim()
    .min(3, { message: "Comment must be at least 3 characters" })
    .max(1000, { message: "Comment must be less than 1000 characters" })
});

interface CommentFormProps {
  blogSlug: string;
  parentId?: string;
  onCommentAdded?: () => void;
  isReply?: boolean;
  onCancel?: () => void;
}

const CommentForm = ({ blogSlug, parentId, onCommentAdded, isReply = false, onCancel }: CommentFormProps) => {
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    try {
      commentSchema.parse({ authorName, content });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          blog_slug: blogSlug,
          author_name: authorName.trim(),
          content: content.trim(),
          parent_id: parentId || null
        });

      if (error) throw error;

      toast({
        title: isReply ? "Reply added!" : "Comment added!",
        description: "Your comment has been posted successfully."
      });

      // Reset form
      setAuthorName('');
      setContent('');
      
      // Notify parent component
      if (onCommentAdded) {
        onCommentAdded();
      }

      // Cancel reply mode
      if (isReply && onCancel) {
        onCancel();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={isReply ? "ml-6 mt-4" : ""}>
      <CardHeader>
        <CardTitle className="text-lg">
          {isReply ? "Add a Reply" : "Add a Comment"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              disabled={isSubmitting}
              required
              maxLength={100}
            />
          </div>
          <div>
            <Textarea
              placeholder={isReply ? "Write your reply..." : "Write your comment..."}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isSubmitting}
              required
              maxLength={1000}
              className="min-h-[100px]"
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : (isReply ? "Post Reply" : "Post Comment")}
            </Button>
            {isReply && onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentForm;