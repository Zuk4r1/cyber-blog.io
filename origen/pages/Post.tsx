import { useParams, Link, Navigate } from "react-router-dom";
import { BlogSidebar } from "@/components/BlogSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/data/posts";
import { sanitizeHtml, isValidSlug } from "@/utils/sanitize";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Validación de seguridad del slug
  if (!slug || !isValidSlug(slug)) {
    return <Navigate to="/404" replace />;
  }
  
  const post = getPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogSidebar />
      <MobileMenu />
      
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <article className="bg-card border border-border rounded-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link key={tag} to={`/tags?filter=${encodeURIComponent(tag)}`}>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({...props}) => <h1 className="text-2xl font-bold text-primary mt-6 mb-4" {...props} />,
                  h2: ({...props}) => <h2 className="text-xl font-bold text-primary mt-5 mb-3" {...props} />,
                  h3: ({...props}) => <h3 className="text-lg font-bold text-primary mt-4 mb-2" {...props} />,
                  p: ({...props}) => <p className="text-foreground mb-4 leading-relaxed" {...props} />,
                  ul: ({...props}) => <ul className="list-disc list-inside mb-4 text-foreground space-y-2" {...props} />,
                  ol: ({...props}) => <ol className="list-decimal list-inside mb-4 text-foreground space-y-2" {...props} />,
                  code: ({...props}) => {
                    const className = props.className || '';
                    const isInline = !className.includes('language-');
                    return isInline ? (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-primary" {...props} />
                    ) : (
                      <code className="block bg-muted p-4 rounded-lg mb-4 overflow-x-auto text-sm" {...props} />
                    );
                  },
                  blockquote: ({...props}) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />,
                  strong: ({...props}) => <strong className="text-primary font-semibold" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Post;
