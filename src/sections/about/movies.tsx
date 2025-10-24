"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { getLatestMovies } from "@/lib/letterboxd";
import Link from "next/link";
import { Movie, MoviesApiResponse } from "@/types";

export function Movies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data: MoviesApiResponse = await getLatestMovies();
        // Ensure data.movies exists and is an array before setting state
        if (data && Array.isArray(data.movies)) {
          setMovies(data.movies);
        } else {
          console.warn("Unexpected data structure from getLatestMovies:", data);
          setMovies([]);
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  // Efeito para adicionar scroll com o mouse e drag
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleWheel = (e: WheelEvent) => {
      if (container.contains(e.target as Node)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("active");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      container.scrollLeft = scrollLeft - walk;
    };

    // Event listeners para scroll com mouse wheel
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Event listeners para drag scroll
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col gap-8 px-6 pt-[120px] uppercase w-full"
    >
      <motion.h1
        className="text-2xl text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        Recently Watched
      </motion.h1>

      {/* Adicionando um container com altura automática para os filmes */}
      <div className="h-auto overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto space-x-6 py-4 h-auto scrollbar-hide hover:cursor-grab active:cursor-grabbing select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {movies.map((movie, index) => (
            <motion.a
              key={`${movie.title}-${index}`}
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-shrink-0 w-[300px] group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                y: -2,
                scale: 1.01,
                transition: { duration: 0.1 },
              }}
            >
              <div className="relative w-full pb-[133.33%] overflow-hidden">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                  <h3 className="text-white font-medium text-sm truncate">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white/80 text-xs">{movie.year}</span>
                    <span className="text-yellow-400 text-xs">
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Link para o perfil do Letterboxd */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          href="https://letterboxd.com/miguelitodev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
        >
          View all on Letterboxd
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
