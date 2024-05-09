import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="flex justify-center flex-col items-center h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6">
			<div className="w-auto text-white font-bold">
				<span className="text-3xl font-mono">Hi, my name is</span>
				<h1 className="text-8xl font-bold leading-normal font-mono tracking-wider text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
					Miguel Riquelme
				</h1>

				<div className="text-right">
					<span className="font-mono">
						and I am <br />
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Mid-level developer",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"",
								// Same substring at the start will only be typed out once, initially
								"Front-end developer",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"",
								1000,
								"Designer",
								1000,
								"",
								"Mobile developer",
								1000,
							]}
							style={{ fontFamily: "Roboto mono" }}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</span>
				</div>
			</div>

			<motion.div
				animate={{
					y: [-10, 10, -10],
					rotate: [0, 5, -5, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatType: "mirror",
					ease: "easeInOut",
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: "#6366F1" }} />
							<stop offset="12.5%" style={{ stopColor: "#BFDBFE" }} />
							<stop offset="25%" style={{ stopColor: "#93C5FD" }} />
							<stop offset="37.5%" style={{ stopColor: "#F9A8D4" }} />
							<stop offset="50%" style={{ stopColor: "#93C5FD" }} />
							<stop offset="62.5%" style={{ stopColor: "#BFDBFE" }} />
							<stop offset="100%" style={{ stopColor: "#6366F1" }} />
						</linearGradient>
					</defs>
					<path
						d="M5 12l7 7 7-7"
						stroke="url(#grad)"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</motion.div>
		</div>
	);
}
