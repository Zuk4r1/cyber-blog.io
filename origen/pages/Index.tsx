import { BlogSidebar } from "@/components/BlogSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { SearchBar } from "@/components/SearchBar";
import { ArticleCard } from "@/components/ArticleCard";
import { ChatButton } from "@/components/ChatButton";
import { getRecentPosts } from "@/data/posts";

const Index = () => {
  const recentPosts = getRecentPosts(6);
  
  return (
    <div className="min-h-screen bg-background">
      <BlogSidebar />
      <MobileMenu />
      
      <main className="md:ml-64 min-h-screen">
        {/* Header with Search */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl md:text-4xl font-bold text-primary glow-text ml-12 md:ml-0">CIBERBLOG</h1>
            </div>
            <SearchBar />
          </div>
        </header>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Publicaciones recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
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

      <ChatButton />
    </div>
  );
};

export default Index;
