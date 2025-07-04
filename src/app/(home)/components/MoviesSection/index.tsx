
"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";
import { MovieCard } from "@/app/movies/components/ListMovies/MovieCard";
import Link from "next/link";
import { ArrowRainbowRight } from "@/assets/icons";

interface MoviesApiResponse {
  movies: Movie[];
}

export default function MoviesSection() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch("/api/movies");
        const data = (await response.json()) as MoviesApiResponse;
        setMovies(data.movies.slice(0, 6));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    void getMovies();
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-white font-merriweather">Movies</h2>
      <p className="text-xl text-gray-400 font-merriweather mt-2">
        Come see the latest movies I&apos;ve watched and feel free to follow me on
        Letterboxd.
      </p>
      <div className="flex items-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.link} movie={movie} />
          ))}
        </div>
        <Link href="/movies" className="ml-4">
          <ArrowRainbowRight />
        </Link>
      </div>
    </div>
  );
}
