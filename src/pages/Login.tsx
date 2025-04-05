
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Film } from "lucide-react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

// Create a separate component that uses the theme context
const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { theme } = useTheme();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate login
    toast.success("Login successful!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-4 relative">
      {/* Background overlay with movie collage */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/q4OftN9aYLMFFhRQbzw4PghkhZb.jpg')] bg-cover bg-center opacity-20"></div>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-background/90' : 'bg-background/80'} backdrop-blur-sm`}></div>
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 relative group">
            <Film className="h-8 w-8 text-primary group-hover:animate-pulse transition-all duration-300" />
            <span className="text-2xl font-bold group-hover:text-gradient-primary transition-all duration-300">MoveLens</span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/30 group-hover:to-accent/30 blur-xl rounded-full transition-all duration-500"></span>
          </Link>
        </div>
        
        <div className={`${theme === 'dark' ? 'bg-card/90' : 'bg-card/95'} backdrop-blur-sm rounded-lg shadow-lg p-8 transition-all duration-300`}>
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe} 
                onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main component that wraps the content with ThemeProvider
const Login = () => {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  );
};

export default Login;
