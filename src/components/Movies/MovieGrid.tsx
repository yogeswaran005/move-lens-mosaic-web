
import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

interface MovieGridProps {
  movies: Movie[];
  title?: string;
}

const MovieGrid = ({ movies, title }: MovieGridProps) => {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
