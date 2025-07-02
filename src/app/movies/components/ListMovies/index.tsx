import { MovieCard } from "./MovieCard";
import { fetchMovies } from "@/api/fetchMovies";

export const ListMovies = async () => {
  const { movies } = await fetchMovies();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};
