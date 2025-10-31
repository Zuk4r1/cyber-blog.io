import { BlogSidebar } from "@/components/BlogSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllPosts } from "@/data/posts";

const Content = () => {
  const allPosts = getAllPosts();
  
  return (
    <div className="min-h-screen bg-background">
      <BlogSidebar />
      <MobileMenu />
      
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">Contenido</h1>
          <p className="text-muted-foreground mb-8">
            Todos los artículos organizados por fecha (más recientes primero)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allPosts.map((post) => (
              <ArticleCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                date={post.date}
                readTime={post.readTime}
                summary={post.summary}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
