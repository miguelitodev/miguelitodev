import { motion } from "framer-motion";

interface TecnologyCardProps {
	technology: string;
	years: string;
	experienceLevel: number;
	url: string;
	gradient: string; // Gradiente
}

const TecnologyCard: React.FC<TecnologyCardProps> = ({
	technology,
	years,
	experienceLevel,
	url,
	gradient,
}) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="relative p-6  bg-black bg-opacity-20 rounded-lg overflow-hidden shadow-lg w-max max-sm:w-full"
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div
				className="absolute bottom-0 left-0 h-1"
				style={{
					width: `${experienceLevel}%`,
					background: `linear-gradient(to right, ${gradient})`, // Gradiente aleatório
				}}
			/>
			<div className="relative z-10 flex justify-between items-center gap-2">
				<h2 className="text-lg font-semibold text-white">{technology}</h2>
				<span className="text-sm text-gray-400">{years}</span>
			</div>
		</motion.a>
	);
};

export default TecnologyCard;
