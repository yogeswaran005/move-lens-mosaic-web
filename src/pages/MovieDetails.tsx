
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { PlayCircle, Heart, Share2, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import GenrePills from "@/components/Common/GenrePills";
import MovieGrid from "@/components/Movies/MovieGrid";
import { getMovieById, getMoviesByGenre } from "@/services/movieService";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Get movie details
  const movie = getMovieById(id || "");
  
  // Get similar movies based on the first genre
  const firstGenreId = movie?.genres[0]?.id;
  const similarMovies = firstGenreId 
    ? getMoviesByGenre(firstGenreId).filter(m => m.id !== id)
    : [];
  
  useEffect(() => {
    // Scroll to top when movie changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!movie) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Added to favorites!");
    } else {
      toast.info("Removed from favorites");
    }
  };
  
  const addToWatchlist = () => {
    toast.success("Added to your watchlist!");
  };
  
  const shareMovie = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <img 
          src={movie.backdropUrl} 
          alt={movie.title} 
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 -mt-40 md:-mt-56 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded flex items-center gap-1">
                <Star className="h-4 w-4" fill="currentColor" />
                {movie.rating}
              </span>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="text-muted-foreground">{movie.duration}</span>
            </div>
            
            <GenrePills genres={movie.genres} />
            
            <p className="mt-6 text-lg text-foreground/80 mb-6">
              {movie.overview}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="gap-2" size="lg">
                <PlayCircle className="h-5 w-5" />
                Watch Trailer
              </Button>
              
              <Button 
                variant="outline" 
                className={`gap-2 ${isFavorite ? 'text-primary border-primary' : ''}`}
                onClick={toggleFavorite}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-primary' : ''}`} />
                {isFavorite ? "Favorited" : "Add to Favorites"}
              </Button>
              
              <Button variant="outline" className="gap-2" onClick={addToWatchlist}>
                <Plus className="h-5 w-5" />
                Add to Watchlist
              </Button>
              
              <Button variant="outline" className="gap-2" onClick={shareMovie}>
                <Share2 className="h-5 w-5" />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Similar Movies */}
        {similarMovies.length > 0 && (
          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
            <MovieGrid movies={similarMovies.slice(0, 5)} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MovieDetails;
