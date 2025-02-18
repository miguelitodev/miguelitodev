import { motion } from "framer-motion";

interface ExperienceCardProps {
	companyName: string;
	companyLocation: string;
	position: string;
	duration: string;
	description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
	companyName,
	companyLocation,
	position,
	duration,
	description,
}) => {
	return (
		<motion.div
			className="relative p-6 max-md:p-0 overflow-hidden"
			initial={{ scale: 1 }}
			whileHover={{ scale: 1 }}
			whileTap={{ scale: 1 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div className="relative z-10 flex flex-col gap-3 p-8 bg-black bg-opacity-70 min-h-[400px] max-sm:w-full">
				<h2 className="text-xl font-semibold text-white max-md:text-lg">
					{companyName}
				</h2>
				<span className="text-sm text-gray-400 font-light max-md:text-xs">
					{duration}
				</span>

				<p className="text-sm text-gray-400 max-md:text-xs">
					{companyLocation}
				</p>
				<p className="text-md font-semibold text-white uppercase max-md:text-sm">
					{position}
				</p>

				<p className="text-md font-light text-gray-300 max-md:text-sm">
					{description}
				</p>
			</div>
		</motion.div>
	);
};

export default ExperienceCard;
