
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Category } from "@/types/movie";

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <div className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/genre/${category.id}`}
              className="group bg-card rounded-lg overflow-hidden h-40 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
              <img 
                src={category.imageUrl} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{category.name}</h3>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
