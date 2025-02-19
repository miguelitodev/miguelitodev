import { motion, MotionProps } from "framer-motion";
import React from "react";

type ButtonFlashingProps = {
	children: string | React.ReactNode;
	className?: string;
	action: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps;

const initial: { [key: string]: string | number } = {
	"--x": "100%",
	scale: 1,
};

const animate: { [key: string]: string | number } = {
	"--x": "-100%",
};

export const ButtonFlashing: React.FC<ButtonFlashingProps> = ({
	children,
	className,
	action,
	...rest
}: ButtonFlashingProps): JSX.Element => {
	return (
		<motion.button
			onClick={() => action()}
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
