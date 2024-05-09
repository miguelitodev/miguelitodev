import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRainbowDown } from "@icons";
import { useState } from "react";

export default function Home() {
	const [opened, setOpened] = useState<boolean>(false);

	function Welcome() {
		return (
			<div className="flex justify-center flex-col items-center h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6">
				<div className="w-auto text-white font-bold">
					<span className="font-mono text-sm md:text-md lg:text-xl">
						Hi, my name is
					</span>
					<h1 className="text-3xl md:text-6xl lg:text-8xl font-bold leading-loose lg:leading-normal font-mono tracking-wider text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
						Miguel Riquelme
					</h1>

					<div className="text-right">
						<span className="font-mono text-sm">
							and I am <br />
							<TypeAnimation
								sequence={[
									"Mid-level developer",
									1000,
									"",
									"Front-end developer",
									1000,
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
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							setOpened(true);
						}}
					>
						<ArrowRainbowDown />
					</motion.button>
				</motion.div>
			</div>
		);
	}

	function Home() {
		return (
			<div className="flex flex-col items-center h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6">
				<div className="w-1/2 p-4">
					<header className="flex items-center justify-between">
						<ul>
							<li>
								<span className="text-white font-mono font-bold text-lg">
									Hi, welcome!
								</span>
							</li>
						</ul>

						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:to-indigo-800 transition duration-300 ease-in-out"
						>
							<span>Contact</span>
						</motion.button>
					</header>
				</div>
			</div>
		);
	}

	if (opened) return <Home />;

	return <Welcome />;
}
