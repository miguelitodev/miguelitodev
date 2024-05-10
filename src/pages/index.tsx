import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { Header } from "@/template";
import { ArrowRainbowDown } from "@/assets/icons";

export default function Home() {
	const [opened, setOpened] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpened(true);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	function Welcome() {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex justify-center flex-col items-center h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6"
			>
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
								speed={70}
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
			</motion.div>
		);
	}

	if (!opened) return <Welcome />;

	return (
		<div className="h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6">
			<Header />
		</div>
	);
}
