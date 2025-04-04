
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { getTrendingMovies, getMoods } from "@/services/movieService";

const Trending = () => {
  const trendingMovies = getTrendingMovies();
  const moods = getMoods();
  const [activeMood, setActiveMood] = useState<string | null>(null);
  
  // Filter by mood if one is selected
  const filteredMovies = activeMood 
    ? trendingMovies.filter(movie => movie.mood?.includes(activeMood))
    : trendingMovies;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Trending Now</h1>
        
        {/* Mood filters */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-3">Filter by mood:</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeMood === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveMood(null)}
            >
              All
            </Button>
            
            {moods.map(mood => (
              <Button
                key={mood.id}
                variant={activeMood === mood.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMood(mood.id)}
              >
                {mood.name}
              </Button>
            ))}
          </div>
        </div>
        
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <div className="text-center py-12 bg-secondary/20 rounded-lg">
            <p className="text-lg text-muted-foreground">No movies match the selected mood</p>
            <Button onClick={() => setActiveMood(null)} className="mt-4">Clear Filter</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Trending;
