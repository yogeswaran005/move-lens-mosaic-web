
import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import MovieGrid from "@/components/Movies/MovieGrid";
import CategorySection from "@/components/Home/CategorySection";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  getFeaturedMovies, 
  getTrendingMovies, 
  getPopularMovies,
  getCategories
} from "@/services/movieService";

const Index = () => {
  const featuredMovies = getFeaturedMovies();
  const trendingMovies = getTrendingMovies();
  const popularMovies = getPopularMovies();
  const categories = getCategories();

  return (
    <Layout>
      <HeroSection featuredMovies={featuredMovies} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/trending" className="flex items-center gap-1">
              See All <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="animate-scale-in" style={{animationDelay: `${parseInt(movie.id) * 100}ms`}}>
              <MovieGrid movies={[movie]} />
            </div>
          ))}
        </div>
      </div>
      
      <CategorySection categories={categories} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Movies</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/movies" className="flex items-center gap-1">
              See All <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {popularMovies.map((movie) => (
            <MovieGrid key={movie.id} movies={[movie]} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
