"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { Movie } from "@/types";
import { convertLetterboxdRatingToNumber } from "./utils";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const numericRating = convertLetterboxdRatingToNumber(movie.rating);
  console.log(numericRating, movie.rating);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (numericRating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (numericRating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return (
    <motion.a
      href={movie.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden border border-gray-700 bg-darkText shadow-lg transform transition-transform duration-200 hover:scale-105"
    >
      <div className="relative w-full h-72">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 bg-darkText rounded-b-lg">
        <h3 className="text-white font-bold text-lg truncate">{movie.title}</h3>
        {movie.year && <p className="text-gray-400 text-sm font-light mt-1">{movie.year}</p>}
        <div className="flex items-center mt-2">{stars}</div>
      </div>
    </motion.a>
  );
};
