
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCompareStore } from "@/services/compareService";
import { Button } from "@/components/ui/button";
import { SplitSquareVertical } from "lucide-react";
import { Link } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenreDetails";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Actors from "./pages/Actors";
import ActorDetails from "./pages/ActorDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CompareMovies from "./pages/CompareMovies";

const queryClient = new QueryClient();

// Floating Compare Button Component
const FloatingCompareButton = () => {
  const { comparisonList } = useCompareStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted || comparisonList.length === 0) return null;
  
  return (
    <Button 
      size="lg" 
      className="floating-compare-button"
      asChild
    >
      <Link to="/compare">
        <SplitSquareVertical className="mr-2 h-5 w-5" />
        Compare Movies
        <span className="badge">{comparisonList.length}</span>
      </Link>
    </Button>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genre/:id" element={<GenreDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/actor/:id" element={<ActorDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/compare" element={<CompareMovies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCompareButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
