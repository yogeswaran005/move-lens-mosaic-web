
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import { getAllActors } from "@/services/movieService";

const Actors = () => {
  const allActors = getAllActors();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredActors = allActors.filter(actor => 
    actor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Actors & Actresses
          </h1>
          
          <div className="relative max-w-sm w-full">
            <Input
              type="text"
              placeholder="Search actors..."
              className="pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {filteredActors.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {filteredActors.map(actor => (
              <Link 
                key={actor.id} 
                to={`/actor/${actor.id}`}
                className="bg-card hover:bg-card/80 transition-colors rounded-lg p-4 flex flex-col items-center text-center"
              >
                <Avatar className="w-20 h-20 mb-3">
                  <AvatarImage src={actor.photoUrl} alt={actor.name} />
                  <AvatarFallback>{actor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium">{actor.name}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/20 rounded-lg">
            <p className="text-lg text-muted-foreground mb-4">No actors found</p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Actors;
