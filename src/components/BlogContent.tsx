import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const { theme } = useTheme();
  
  // Parse the content and handle code blocks and images
  const parseContent = (htmlContent: string) => {
    // Split content by code blocks
    const parts = htmlContent.split(/(<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>|<img[^>]+>)/g);
    
    return parts.map((part, index) => {
      // Handle code blocks
      if (part.startsWith('<pre><code class="language-')) {
        const langMatch = part.match(/language-(\w+)/);
        const codeMatch = part.match(/<code[^>]*>([\s\S]*?)<\/code>/);
        
        if (langMatch && codeMatch) {
          const language = langMatch[1];
          const code = codeMatch[1]
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"');
          
          return (
            <div key={index} className="my-6">
              <SyntaxHighlighter
                language={language}
                style={theme === 'dark' ? oneDark : oneLight}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                }}
                showLineNumbers={true}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          );
        }
      }
      
      // Handle images
      if (part.startsWith('<img')) {
        const srcMatch = part.match(/src="([^"]+)"/);
        const altMatch = part.match(/alt="([^"]+)"/);
        const src = srcMatch ? srcMatch[1] : '';
        const alt = altMatch ? altMatch[1] : '';
        
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
    });
  };

  return <div className="space-y-4">{parseContent(content)}</div>;
};

export default BlogContent;