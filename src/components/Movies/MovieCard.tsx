
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Added to favorites!");
    } else {
      toast.info("Removed from favorites");
    }
  };

  return (
    <div className="movie-card group">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="movie-card-image">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className={`absolute top-2 right-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 ${isFavorite ? 'text-primary' : 'text-foreground/70'}`}
            onClick={toggleFavorite}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-primary' : ''}`} />
          </Button>
        </div>
        <div className="movie-card-content">
          <h3 className="font-bold truncate mb-1">{movie.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{movie.year}</span>
            <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
              {movie.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
