import { motion, MotionProps } from "framer-motion";
import React from "react";

type ButtonFlashingProps = {
	children: string | React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps;

const initial: { [key: string]: string | number } = {
	"--x": "100%",
	scale: 1,
};

const animate: { [key: string]: string | number } = {
	"--x": "-100%",
};
/**
 * Props para o componente ButtonFlashing.
 * @typedef {Object} ButtonFlashingProps
 * @property {string|ReactNode} children - O conteúdo do botão.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} rest - Restante das propriedades de um botão HTML.
 */

/**
 * Componente de botão com efeito de flash.
 * @param {ButtonFlashingProps} props - Props para o componente ButtonFlashing.
 * @returns {JSX.Element} - O elemento do botão com o efeito de flash.
 */
export const ButtonFlashing: React.FC<ButtonFlashingProps> = ({
	children,
	className,
	...rest
}: ButtonFlashingProps): JSX.Element => {
	return (
		<motion.button
			initial={initial}
			animate={animate}
			whileTap={{ scale: 0.8 }}
			transition={{
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 1,
				type: "spring",
				stiffness: 20,
				damping: 15,
				mass: 2,
				scale: {
					type: "spring",
					stiffness: 10,
					damping: 5,
					mass: 0.1,
				},
			}}
			{...rest}
			className={`px-6 py-2 rounded-md relative radial-gradient border ${className}`}
		>
			<span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
				{children}
			</span>
			<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
		</motion.button>
	);
};
