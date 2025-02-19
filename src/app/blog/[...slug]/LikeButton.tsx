"use client";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

type LikeResponse = {
	success: boolean;
	likes: number;
};

const LikeButton = ({
	postId,
	currentLikes,
}: {
	postId: string;
	currentLikes: number;
}) => {
	const [likes, setLikes] = useState(currentLikes);
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		const storedLike = localStorage.getItem(`liked_${postId}`);
		if (storedLike === "true") {
			setLiked(true);
		}
	}, [postId]);

	const handleLike = async (): Promise<void> => {
		const newLikes = liked ? likes - 1 : likes + 1;

		setLikes(newLikes);
		setLiked(!liked);

		localStorage.setItem(`liked_${postId}`, !liked ? "true" : "false");

		try {
			const response = await fetch("/api/like", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					postId,
					currentLikes: newLikes,
				}),
			});

			if (response.ok) {
				const data = (await response.json()) as LikeResponse;
				console.log("Resposta do servidor:", data);
			} else {
				console.error("Erro ao atualizar curtidas", response.status);
			}
		} catch (error) {
			console.error("Erro ao atualizar curtidas:", error);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<FaHeart
				onClick={() => {
					void handleLike(); // Evita o erro do ESLint
				}}
				className={`cursor-pointer transition-transform duration-300 outline-white ${
					liked ? "text-red-500 scale-110" : "text-gray-400"
				}`}
				size={25}
			/>
			<span className="text-lg text-white font-mono">{likes}</span>
		</div>
	);
};

export default LikeButton;
