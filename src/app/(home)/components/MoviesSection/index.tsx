"use client";

import { useEffect, useState, useRef } from "react";
import { Movie } from "@/types/movie";
import { MovieCard } from "@/app/movies/components/ListMovies/MovieCard";
import Link from "next/link";
import { ArrowRainbowRight } from "@/assets/icons";
import { MovieSkeleton } from "./MovieSkeleton";

interface MoviesApiResponse {
  movies: Movie[];
}

export default function MoviesSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch("/api/movies");
        const data = (await response.json()) as MoviesApiResponse;
        setMovies(data.movies.slice(0, 6));
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    void getMovies();

    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="mt-16">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-white font-merriweather">
          Movies
        </h2>
        <p className="text-xl text-gray-400 font-merriweather mt-2">
          Come see the latest movies I&apos;ve watched and feel free to follow me
          on Letterboxd.
        </p>
      </div>
      <div className="mt-6">
         <div
          ref={scrollContainerRef}
          className="flex items-center overflow-x-auto space-x-4 pb-4 scrollbar-hide py-3"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex-none w-48">
                  <MovieSkeleton />
                </div>
              ))
            : movies.map((movie) => (
                <div key={movie.link} className="flex-none w-48">
                  <MovieCard movie={movie} />
                </div>
              ))}
          <Link href="/movies" className="ml-4 flex-shrink-0">
            <ArrowRainbowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
