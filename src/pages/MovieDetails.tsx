
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  PlayCircle, 
  Heart, 
  Plus, 
  Star, 
  ChevronLeft,
  Info 
} from "lucide-react";
import { toast } from "sonner";
import GenrePills from "@/components/Common/GenrePills";
import MovieGrid from "@/components/Movies/MovieGrid";
import ActorsList from "@/components/Movies/ActorsList";
import ReviewSection from "@/components/Movies/ReviewSection";
import SocialShare from "@/components/Common/SocialShare";
import CompareButton from "@/components/Movies/CompareButton";
import { getMovieById, getMoviesByGenre } from "@/services/movieService";
import { isInFavorites, toggleFavorite, isInWatchlist, toggleWatchlist } from "@/services/userService";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [showCast, setShowCast] = useState(false);
  
  // Get movie details
  const movie = getMovieById(id || "");
  
  // Get similar movies based on the first genre
  const firstGenreId = movie?.genres[0]?.id;
  const similarMovies = firstGenreId 
    ? getMoviesByGenre(firstGenreId).filter(m => m.id !== id)
    : [];
  
  useEffect(() => {
    // Check if movie is in favorites/watchlist
    if (id) {
      setIsFavorite(isInFavorites(id));
      setIsInWatchList(isInWatchlist(id));
    }
    
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
  
  const handleToggleFavorite = () => {
    const result = toggleFavorite(movie.id);
    setIsFavorite(result);
    
    if (result) {
      toast.success("Added to favorites!");
    } else {
      toast.info("Removed from favorites");
    }
  };
  
  const handleToggleWatchlist = () => {
    const result = toggleWatchlist(movie.id);
    setIsInWatchList(result);
    
    if (result) {
      toast.success("Added to your watchlist!");
    } else {
      toast.info("Removed from watchlist");
    }
  };
  
  const toggleShowCast = () => {
    setShowCast(!showCast);
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
        <Button variant="ghost" className="mb-6 gap-2 text-white" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
        
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
              {movie.language && (
                <span className="bg-secondary/50 px-2 py-1 rounded text-sm">
                  {movie.language}
                </span>
              )}
            </div>
            
            <GenrePills genres={movie.genres} />
            
            {movie.mood && movie.mood.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {movie.mood.map((m) => (
                  <span key={m} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            )}
            
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
                onClick={handleToggleFavorite}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-primary' : ''}`} />
                {isFavorite ? "Favorited" : "Add to Favorites"}
              </Button>
              
              <Button 
                variant="outline" 
                className={`gap-2 ${isInWatchList ? 'text-primary border-primary' : ''}`}
                onClick={handleToggleWatchlist}
              >
                <Plus className="h-5 w-5" />
                {isInWatchList ? "In Watchlist" : "Add to Watchlist"}
              </Button>
              
              <CompareButton movieId={movie.id} />
              
              <SocialShare 
                url={window.location.href} 
                title={`Check out ${movie.title} on MoveLens!`} 
              />
              
              <Button 
                variant="ghost" 
                onClick={toggleShowCast}
                className="gap-2"
              >
                <Info className="h-5 w-5" />
                {showCast ? "Hide Cast" : "Show Cast"}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Conditionally show actors */}
        {showCast && movie.actors && (
          <div className="mt-8 bg-card/60 rounded-lg p-6">
            <ActorsList actors={movie.actors} />
          </div>
        )}
        
        {/* Reviews Section */}
        <ReviewSection movieId={movie.id} />
        
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
