
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { ChevronRight } from "lucide-react";
import { getCategories } from "@/services/movieService";

const Genres = () => {
  const categories = getCategories();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Browse by Genre</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/genre/${category.id}`}
              className="group bg-card rounded-lg overflow-hidden h-60 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent z-10" />
              <img 
                src={category.imageUrl} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Genres;
