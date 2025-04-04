
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { getMoviesByGenre, getCategories } from "@/services/movieService";

const GenreDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const movies = getMoviesByGenre(id || "");
  const category = getCategories().find(cat => cat.id === id);
  
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Genre not found</h1>
          <Button asChild>
            <Link to="/genres">Back to Genres</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[30vh] md:h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link to="/genres">
            <ChevronLeft className="h-4 w-4" />
            Back to all genres
          </Link>
        </Button>
        
        {movies.length > 0 ? (
          <MovieGrid movies={movies} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No movies found in this genre</h3>
            <p className="text-muted-foreground">Check back later for new additions</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GenreDetails;
