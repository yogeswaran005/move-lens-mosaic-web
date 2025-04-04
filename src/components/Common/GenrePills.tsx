
import { Link } from "react-router-dom";

interface GenrePillsProps {
  genres: { id: string; name: string }[];
}

const GenrePills = ({ genres }: GenrePillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Link
          key={genre.id}
          to={`/genre/${genre.id}`}
          className="bg-secondary/70 hover:bg-secondary text-foreground/70 px-3 py-1 rounded-full text-sm transition-colors"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenrePills;
