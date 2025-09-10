
import { motion } from "framer-motion";

interface TecnologyCardProps {
  technology: string;
  years: string;
  url: string;
}

const TecnologyCard: React.FC<TecnologyCardProps> = ({
  technology,
  years,
  url,
}) => {

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center justify-center bg-gradient-to-r from-black via-neutral-900 to-neutral-800 shadow-lg border border-neutral-700 rounded-lg hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-105 p-4 min-h-[100px]"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative z-10 flex flex-row items-center justify-between gap-4">
        <h4 className="text-center text-white text-base font-semibold max-sm:text-sm">
          {technology}
        </h4>
        <p className="text-slate-300 leading-normal font-light text-xs max-sm:text-xs">
          {years}
        </p>
      </div>
    </motion.a>
  );
};

export default TecnologyCard;
