
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Featured } from "@/types/movie";

interface HeroSectionProps {
  featuredMovies: Featured[];
}

const HeroSection = ({ featuredMovies }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = featuredMovies[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const selectDot = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {featuredMovies.map((movie, index) => (
          <div 
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
            <img 
              src={movie.backdropUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-4 md:p-12 container mx-auto">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{movie.title}</h1>
                <div className="flex items-center gap-4 mb-3 md:mb-6">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">{movie.rating}</span>
                  <span className="text-muted-foreground">{movie.year}</span>
                  <span className="text-muted-foreground">{movie.duration}</span>
                </div>
                <p className="text-md md:text-lg text-foreground/80 mb-6 line-clamp-3">
                  {movie.description}
                </p>
                <div className="flex gap-4">
                  <Button className="gap-2" size="lg" asChild>
                    <Link to={`/movie/${movie.id}`}>
                      <PlayCircle className="h-5 w-5" />
                      Watch Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2" size="lg" asChild>
                    <Link to={`/movie/${movie.id}`}>
                      <Info className="h-5 w-5" />
                      More Info
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => selectDot(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
