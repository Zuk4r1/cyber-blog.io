import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchPosts } from "@/data/posts";
import { sanitizeSearchInput, searchRateLimiter } from "@/utils/sanitize";
import { Card } from "@/components/ui/card";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof searchPosts extends (...args: any[]) => infer R ? R : never>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sanitizedQuery = sanitizeSearchInput(query);
    
    if (sanitizedQuery.length >= 3) {
      // Rate limiting para prevenir abuse
      if (!searchRateLimiter.checkLimit('search', 10, 5000)) {
        console.warn('Rate limit excedido para búsqueda');
        return;
      }
      
      const results = searchPosts(sanitizedQuery);
      setSuggestions(results.slice(0, 5)); // Máximo 5 sugerencias
      setShowSuggestions(results.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSuggestionClick = (slug: string) => {
    setShowSuggestions(false);
    setQuery("");
    navigate(`/post/${slug}`);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl" ref={wrapperRef}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
      <Input
        type="search"
        placeholder="Buscar publicaciones, etiquetas..."
        className="pl-10 pr-10 bg-card border-border focus:border-primary focus:ring-primary/20"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        maxLength={100}
        autoComplete="off"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground z-10"
          aria-label="Limpiar búsqueda"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full bg-card border-border shadow-lg z-50 max-h-96 overflow-y-auto">
          {suggestions.map((post) => (
            <div
              key={post.id}
              onClick={() => handleSuggestionClick(post.slug)}
              className="p-4 hover:bg-muted cursor-pointer transition-colors border-b border-border last:border-b-0"
            >
              <h4 className="font-semibold text-foreground mb-1">{post.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-1">{post.summary}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-primary">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};
