
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getPopularMovies, getTrendingMovies, getCategories } from "@/services/movieService";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  const allMovies = [...getPopularMovies(), ...getTrendingMovies()];
  const categories = getCategories();
  
  // Filter movies based on search query and active filter
  const filteredMovies = allMovies.filter(movie => {
    // Apply search filter
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply category filter
    const matchesCategory = activeFilter === "all" || 
      movie.genres.some(genre => genre.id === activeFilter);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">Movies</h1>
          
          <div className="relative max-w-md w-full">
            <Input
              type="text"
              placeholder="Search movies..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Button 
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No movies found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Movies;
