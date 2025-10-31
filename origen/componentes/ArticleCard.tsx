import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

export const ArticleCard = ({ slug, title, date, readTime, summary, tags }: ArticleCardProps) => {
  return (
    <Link to={`/post/${slug}`} className="block">
      <article className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in cursor-pointer h-full">
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/tags?filter=${encodeURIComponent(tag)}`;
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </Link>
  );
};
