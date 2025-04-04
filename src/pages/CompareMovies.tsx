
import { useState, useEffect } from "react";
import { useCompareStore } from "@/services/compareService";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { ChevronLeft, Film, Star, X, PlayCircle } from "lucide-react";
import { toast } from "sonner";
import { MovieForComparison } from "@/types/movie";
import GenrePills from "@/components/Common/GenrePills";
import { getPopularMovies } from "@/services/movieService";

const CompareMovies = () => {
  const { comparisonList, removeFromComparison, clearComparison } = useCompareStore();
  const [activeTab, setActiveTab] = useState<string>("visual");
  
  useEffect(() => {
    if (comparisonList.length === 0) {
      // If comparison list is empty, show popular movies recommendation
      toast.info("Select movies to compare", {
        description: "You can add up to 4 movies for comparison",
        duration: 5000,
      });
    }
  }, [comparisonList.length]);
  
  const handleRemoveMovie = (movieId: string) => {
    removeFromComparison(movieId);
    toast.info("Movie removed from comparison");
  };
  
  const handleClearAll = () => {
    clearComparison();
    toast.info("Comparison list cleared");
  };

  const popularMovies = getPopularMovies().slice(0, 6);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Compare Movies</h1>
          </div>
          
          {comparisonList.length > 0 && (
            <Button variant="outline" onClick={handleClearAll}>
              Clear All
            </Button>
          )}
        </div>

        {comparisonList.length === 0 ? (
          <div className="text-center py-10">
            <div className="flex justify-center mb-6">
              <Film className="h-20 w-20 text-primary/40" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">No Movies to Compare</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Add movies to your comparison list by clicking the Compare button on movie pages.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-medium mb-6">Popular Movies to Compare</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {popularMovies.map((movie) => (
                  <Card key={movie.id} className="overflow-hidden group hover:shadow-lg transition-all">
                    <Link to={`/movie/${movie.id}`} className="block">
                      <div className="aspect-[2/3] overflow-hidden relative">
                        <img 
                          src={movie.posterUrl} 
                          alt={movie.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                          <p className="text-white text-sm font-medium truncate">
                            {movie.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="visual">Visual Comparison</TabsTrigger>
                <TabsTrigger value="table">Table Comparison</TabsTrigger>
              </TabsList>
              
              <TabsContent value="visual" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {comparisonList.map((movie) => (
                    <MovieComparisonCard 
                      key={movie.id} 
                      movie={movie} 
                      onRemove={() => handleRemoveMovie(movie.id)} 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="table" className="mt-6">
                <ComparisonTable movies={comparisonList} onRemove={handleRemoveMovie} />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </Layout>
  );
};

interface MovieComparisonCardProps {
  movie: MovieForComparison;
  onRemove: () => void;
}

const MovieComparisonCard = ({ movie, onRemove }: MovieComparisonCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-auto" />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/80 hover:bg-background" 
          onClick={onRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          <div>
            <Link to={`/movie/${movie.id}`} className="hover:underline">
              <h3 className="font-bold text-lg">{movie.title}</h3>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
            <span className="font-medium">{movie.rating}/10</span>
          </div>
          
          <div className="space-y-1">
            <h4 className="font-medium text-sm">Genres</h4>
            <GenrePills genres={movie.genres} />
          </div>
          
          {movie.language && (
            <div>
              <h4 className="font-medium text-sm">Language</h4>
              <p>{movie.language}</p>
            </div>
          )}
          
          <div className="pt-2">
            <Button className="w-full gap-2" size="sm">
              <PlayCircle className="h-4 w-4" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ComparisonTableProps {
  movies: MovieForComparison[];
  onRemove: (id: string) => void;
}

const ComparisonTable = ({ movies, onRemove }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Feature</TableHead>
            {movies.map((movie) => (
              <TableHead key={movie.id}>
                <div className="flex justify-between items-center">
                  <Link to={`/movie/${movie.id}`} className="hover:underline font-medium">
                    {movie.title}
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => onRemove(movie.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Poster</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img 
                    src={movie.posterUrl} 
                    alt={movie.title} 
                    className="w-24 h-auto rounded"
                  />
                </Link>
              </TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Year</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>{movie.year}</TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Rating</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                  {movie.rating}/10
                </div>
              </TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Duration</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>{movie.duration}</TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Genres</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>
                {movie.genres.map(g => g.name).join(', ')}
              </TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Language</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>{movie.language || 'N/A'}</TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Mood</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>
                {movie.mood && movie.mood.length > 0 
                  ? movie.mood.join(', ') 
                  : 'N/A'}
              </TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Overview</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id} className="max-w-xs">
                <p className="line-clamp-3">{movie.overview}</p>
              </TableCell>
            ))}
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Actions</TableCell>
            {movies.map((movie) => (
              <TableCell key={movie.id}>
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="gap-1">
                    <PlayCircle className="h-3 w-3" />
                    Trailer
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/movie/${movie.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompareMovies;
