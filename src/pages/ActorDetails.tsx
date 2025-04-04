
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Film } from "lucide-react";
import { getMoviesByActor } from "@/services/movieService";
import { getAllActors } from "@/services/movieService";

const ActorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const allActors = getAllActors();
  const actor = allActors.find(a => a.id === id);
  const actorMovies = getMoviesByActor(id || "");

  if (!actor) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Actor not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/4">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img
                src={actor.photoUrl}
                alt={actor.name}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{actor.name}</h1>
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Film className="h-5 w-5 text-primary" />
                Filmography
              </h2>
              <p className="text-muted-foreground mb-2">
                {actor.name} has appeared in {actorMovies.length} movies in our database.
              </p>
            </div>
          </div>
        </div>

        {actorMovies.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">{actor.name}'s Movies</h2>
            <MovieGrid movies={actorMovies} />
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/20 rounded-lg">
            <p className="text-lg text-muted-foreground">No movies found for this actor.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ActorDetails;
