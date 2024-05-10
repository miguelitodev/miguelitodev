import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ButtonFlashing } from "@/components";
import { ArrowRainbowDown } from "@/assets/icons";
import { socialMedias } from "@/data";
import Link from "next/link";

export default function Home() {
	const [opened, setOpened] = useState<boolean>(false);
	const [contactOpen, setContactOpen] = useState<boolean>(false);

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
			<motion.div
				initial={{ top: 300, opacity: 0 }}
				animate={{ top: 0, opacity: 1 }}
				exit={{ top: -300, opacity: 0 }}
				className="relative flex flex-col items-center"
			>
				<div className="xl:w-1/2 w-full p-4 m-auto">
					<header className="w-full flex items-center justify-between">
						<ul>
							<li>
								<span className="text-white font-mono font-bold text-lg">
									Hi, welcome!
								</span>
							</li>
						</ul>

						<ButtonFlashing
							onClick={() => {
								setContactOpen((prevState) => !prevState);
							}}
						>
							Contact me
						</ButtonFlashing>
					</header>
				</div>

				{contactOpen && (
					<motion.div
						key="contact"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.5 }}
						className="w-1/2 m-auto p-4"
					>
						<ul className="flex flex-row gap-5 flex-wrap">
							{socialMedias.map((socialMedia, index) => (
								<motion.li
									layout
									key={index}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -50 }}
									transition={{ duration: 0.5, delay: index * 0.2 }}
								>
									<Link
										href={socialMedia.link}
										passHref
										rel="noopener noreferrer"
										target="_blank"
									>
										<motion.button
											key={socialMedia.id}
											exit={{ opacity: 0, y: -50 }}
											initial={{ "--x": "100%", scale: 1 } as any}
											animate={{ "--x": "-100%" } as any}
											whileTap={{ scale: 0.7 }}
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
											className="relative radial-gradient p-5 rounded-md"
										>
											<span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
												{socialMedia.name}
											</span>
											<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
										</motion.button>
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}
