import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(`${language}-${code.substring(0, 50)}`);
      toast({
        title: "Code copied!",
        description: `${language} code copied to clipboard`,
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedCode(null);
      }, 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy code to clipboard",
        variant: "destructive",
      });
    }
  };
  
  // Parse the content and handle code blocks and images
  const parseContent = (htmlContent: string) => {
    console.log('Raw HTML content:', htmlContent.substring(0, 500)); // Debug log
    
    // Split content by code blocks and images
    const parts = htmlContent.split(/(<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>|<img[^>]+>)/g);
    console.log('Split parts:', parts.length, parts.slice(0, 5)); // Debug log
    
    return parts
      .filter(part => part && part.trim()) // Filter out undefined, null, and empty strings
      .map((part, index) => {
        // Handle code blocks
        if (part && part.startsWith('<pre><code class="language-')) {
          const langMatch = part.match(/language-(\w+)/);
          const codeMatch = part.match(/<code[^>]*>([\s\S]*?)<\/code>/);
          
          if (langMatch && codeMatch) {
            const language = langMatch[1];
            const code = codeMatch[1]
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"');
            
            const isCopied = copiedCode === `${language}-${code.substring(0, 50)}`;
            
            return (
              <div key={index} className="my-6 relative group">
                <div className="relative">
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 backdrop-blur-sm"
                    onClick={() => copyToClipboard(code, language)}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                  <SyntaxHighlighter
                    language={language}
                    style={theme === 'dark' ? oneDark : oneLight}
                    customStyle={{
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      paddingTop: '3rem',
                    }}
                    showLineNumbers={true}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          }
        }
        
        // Handle images
        if (part && part.startsWith('<img')) {
          const srcMatch = part.match(/src="([^"]+)"/);
          const altMatch = part.match(/alt="([^"]+)"/);
          let src = srcMatch ? srcMatch[1] : '';
          const alt = altMatch ? altMatch[1] : '';
          
          // Replace placeholders with actual images
          if (src === 'PIPELINE_IMAGE_PLACEHOLDER') {
            src = '/src/assets/blog-data-pipeline.jpg';
          } else if (src === 'DASHBOARD_IMAGE_PLACEHOLDER') {
            src = '/src/assets/blog-dashboard-example.jpg';
          }
          
          return (
            <div key={index} className="my-6">
              <img 
                src={src} 
                alt={alt}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
              {alt && (
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          );
        }
        
        // Handle regular HTML content
        if (part && !part.match(/^<(pre|img)/)) {
          return (
            <div 
              key={index}
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
              dangerouslySetInnerHTML={{ __html: part }}
            />
          );
        }
        
        return null;
      })
      .filter(Boolean); // Remove any null elements
  };

  return <div className="space-y-4">{parseContent(content)}</div>;
};

export default BlogContent;