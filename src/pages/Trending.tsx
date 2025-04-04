
import Layout from "@/components/Layout/Layout";
import MovieGrid from "@/components/Movies/MovieGrid";
import { getTrendingMovies } from "@/services/movieService";

const Trending = () => {
  const trendingMovies = getTrendingMovies();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Trending Now</h1>
        
        <MovieGrid movies={trendingMovies} />
      </div>
    </Layout>
  );
};

export default Trending;
