
import { Link } from "react-router-dom";
import { Film, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MoveLens</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Discover the best movies from around the world. Find what to watch next with MoveLens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">MoveLens</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Discover</h3>
            <ul className="space-y-3">
              <li><Link to="/movies" className="text-muted-foreground hover:text-primary transition-colors">Movies</Link></li>
              <li><Link to="/genres" className="text-muted-foreground hover:text-primary transition-colors">Genres</Link></li>
              <li><Link to="/trending" className="text-muted-foreground hover:text-primary transition-colors">Trending</Link></li>
              <li><Link to="/new-releases" className="text-muted-foreground hover:text-primary transition-colors">New Releases</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <ul className="space-y-3">
              <li><Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
              <li><Link to="/favorites" className="text-muted-foreground hover:text-primary transition-colors">My Favorites</Link></li>
              <li><Link to="/watchlist" className="text-muted-foreground hover:text-primary transition-colors">My Watchlist</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MoveLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
