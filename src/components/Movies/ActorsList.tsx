
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";

interface ActorsListProps {
  actors?: { id: string; name: string; photoUrl: string }[];
}

const ActorsList = ({ actors }: ActorsListProps) => {
  if (!actors || actors.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">No actor information available</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        Cast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {actors.map((actor) => (
          <Link 
            key={actor.id} 
            to={`/actor/${actor.id}`}
            className="flex flex-col items-center bg-card/60 p-3 rounded-lg hover:bg-card/90 transition-colors"
          >
            <Avatar className="w-16 h-16 mb-2">
              <AvatarImage src={actor.photoUrl} alt={actor.name} />
              <AvatarFallback>{actor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-center">{actor.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActorsList;
