"use client";

import { useState, useTransition } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

interface LikeButtonProps {
  pageId: string;
  initialLikes: number;
  initialLiked: boolean;
}

interface LikeResponse {
  likes: number;
}

export default function LikeButton({
  pageId,
  initialLikes,
  initialLiked,
}: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initialLiked);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    startTransition(async () => {
      const originalLiked = liked;
      const originalLikes = likes;

      const newLikedState = !liked;
      const newLikesCount = newLikedState ? likes + 1 : likes - 1;

      setLiked(newLikedState);
      setLikes(newLikesCount);

      localStorage.setItem(`liked-${pageId}`, newLikedState.toString());

      try {
        const response = await axios.post<LikeResponse>("/api/like", {
          pageId,
          liked: newLikedState,
        });

        const { data } = response;

        if (data.likes !== newLikesCount) {
          setLikes(data.likes);
        }
      } catch (error) {
        console.error("Erro ao curtir:", error);
        // Reverter o estado em caso de erro
        setLiked(originalLiked);
        setLikes(originalLikes);
        localStorage.setItem(`liked-${pageId}`, originalLiked.toString());
      }
    });
  };

  return (
    <motion.button
      onClick={handleLike}
      disabled={isPending}
      className="flex items-center space-x-2 text-white focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {liked ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="hover:text-red-500" />
      )}
      <span>{likes}</span>
    </motion.button>
  );
}
