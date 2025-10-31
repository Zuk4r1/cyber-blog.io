import { BlogSidebar } from "@/components/BlogSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllTags, getPostsByTag } from "@/data/posts";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { sanitizeTag } from "@/utils/sanitize";

const Tags = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<ReturnType<typeof getPostsByTag>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const allTags = getAllTags();

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      const sanitized = sanitizeTag(filterParam);
      setSelectedTag(sanitized);
      handleTagClick(sanitized);
    }
  }, [searchParams]);

  const handleTagClick = async (tagName: string) => {
    setIsLoading(true);
    setSelectedTag(tagName);
    
    // Simular pequeño delay para mostrar el spinner
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const posts = getPostsByTag(tagName);
    setFilteredPosts(posts);
    setIsLoading(false);
    
    // Actualizar URL
    setSearchParams({ filter: tagName });
  };

  const handleClearFilter = () => {
    setSelectedTag(null);
    setFilteredPosts([]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogSidebar />
      <MobileMenu />
      
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">Etiquetas</h1>
          <p className="text-muted-foreground mb-8">
            Explora artículos por temática
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <Badge
                  key={tag.name}
                  variant="outline"
                  className={`px-4 py-2 text-base cursor-pointer transition-all duration-200 ${
                    selectedTag === tag.name
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-primary/10 text-primary border-primary/30 hover:bg-primary/20'
                  }`}
                  onClick={() => handleTagClick(tag.name)}
                >
                  {tag.name} ({tag.count})
                </Badge>
              ))}
            </div>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-3 text-muted-foreground">Cargando publicaciones...</span>
            </div>
          )}

          {!isLoading && selectedTag && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Publicaciones con "{selectedTag}"
                </h2>
                <button
                  onClick={handleClearFilter}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Limpiar filtro
                </button>
              </div>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No se encontraron publicaciones con esta etiqueta.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tags;
