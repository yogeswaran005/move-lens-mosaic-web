
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, ChevronLeft } from "lucide-react";
import { searchMovies } from "@/services/movieService";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState(searchMovies(initialQuery));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchMovies(searchQuery);
      setSearchResults(results);
      
      // Update URL query parameter
      const newUrl = `/search?q=${encodeURIComponent(searchQuery)}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };
  
  useEffect(() => {
    // Update search results when URL query changes
    const query = queryParams.get("q") || "";
    setSearchQuery(query);
    setSearchResults(searchMovies(query));
  }, [location.search]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
        
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for movies..."
              className="w-full pr-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </form>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            {searchResults.length > 0 
              ? `Search results for "${initialQuery}"`
              : `No results found for "${initialQuery}"`}
          </h1>
          <p className="text-muted-foreground mt-2">
            {searchResults.length > 0 
              ? `Found ${searchResults.length} results`
              : "Try searching for a different term"}
          </p>
        </div>
        
        {searchResults.length > 0 ? (
          <MovieGrid movies={searchResults} />
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No movies match your search criteria</p>
            <Button asChild>
              <Link to="/movies">Browse all movies</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
