
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Film,
  Search,
  Menu,
  X,
  Home,
  Compass,
  Heart,
  Star,
  Users,
  Settings
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeSwitcher from "./ThemeSwitcher";
import ProfileMenu from "@/components/Profile/ProfileMenu";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MoveLens</span>
            </Link>
          </div>

          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link to="/movies" className="text-foreground/80 hover:text-primary transition-colors">Movies</Link>
              <Link to="/genres" className="text-foreground/80 hover:text-primary transition-colors">Genres</Link>
              <Link to="/trending" className="text-foreground/80 hover:text-primary transition-colors">Trending</Link>
              <Link to="/actors" className="text-foreground/80 hover:text-primary transition-colors">Actors</Link>
            </div>
          )}

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <Input
                type="text"
                placeholder="Search movies..."
                className="pr-8 w-56 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <ThemeSwitcher />
            
            <ProfileMenu />
            
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-16 animate-slide-in">
          <div className="p-4 flex flex-col gap-4">
            <form onSubmit={handleSearch} className="relative mb-6">
              <Input
                type="text"
                placeholder="Search movies..."
                className="pr-8 w-full bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <Link to="/" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Home className="h-5 w-5 text-primary" />
              <span>Home</span>
            </Link>
            <Link to="/movies" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Film className="h-5 w-5 text-primary" />
              <span>Movies</span>
            </Link>
            <Link to="/genres" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Compass className="h-5 w-5 text-primary" />
              <span>Genres</span>
            </Link>
            <Link to="/trending" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Star className="h-5 w-5 text-primary" />
              <span>Trending</span>
            </Link>
            <Link to="/actors" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Users className="h-5 w-5 text-primary" />
              <span>Actors</span>
            </Link>
            <Link to="/favorites" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Heart className="h-5 w-5 text-primary" />
              <span>Favorites</span>
            </Link>
            <Link to="/settings" className="flex items-center p-3 gap-3 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <Settings className="h-5 w-5 text-primary" />
              <span>Settings</span>
            </Link>
            
            <div className="border-t border-border my-4"></div>
            
            <Button className="w-full" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
