import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import axios from "axios";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { ButtonFlashing } from "@/components";
import { ArrowRainbowDown } from "@/assets/icons";
import { socialMedias } from "@/data";

type GeolocationCoordinates = {
	latitude: number;
	longitude: number;
	altitude: number | null;
	accuracy: number;
	altitudeAccuracy: number | null;
	heading: number | null;
	speed: number | null;
};

type GeolocationPosition = {
	coords: GeolocationCoordinates;
	timestamp: number;
};

export default function Home() {
	const [opened, setOpened] = useState<boolean>(false);
	const [contactOpen, setContactOpen] = useState<boolean>(false);
	const [location, setLocation] = useState({
		tz_id: "",
		text: "",
		country: "",
	});
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }: GeolocationPosition) => {
				axios
					.get(
						`https://api.weatherapi.com/v1/current.json?key=bfe238425d0c4630918223040241005&q=${coords?.latitude},${coords?.longitude}&aqi=no`
					)
					.then(({ data }) => {
						console.log(data);

						setLocation({
							country: data.location.country,
							tz_id: data.tz_id,
							text: `${data.location.name}, ${data.location.region} - ${data.current.temp_c}°C / ${data.current.temp_f}°F`,
						});
					});
			}
		);

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
		<div className="h-screen bg-gradient-to-br from-opacity-10 to-transparent backdrop-blur-2xl shadow-lg p-6 flex items-center justify-between flex-col">
			<motion.div
				initial={{ top: 300, opacity: 0 }}
				animate={{ top: 0, opacity: 1 }}
				exit={{ top: -300, opacity: 0 }}
				className="w-full relative flex flex-col items-center"
			>
				<div className="xl:w-1/2 w-full p-4 m-auto">
					<header className="w-full flex items-center justify-between">
						<ul>
							<li>
								<span className="text-white font-mono font-bold text-lg">
									<TypeAnimation
										sequence={[
											"Hi, welcome!",
											1000,
											"",
											"Today is " + format(new Date(), "EEEE, do"),
											1000,
											"",
											1000,
											"",
											location?.text,
											1000,
											"",
											"5y working with Frontend O.O",
											1000,
											"",
											`Now is ${format(new Date().getTime(), "HH:mm")}`,
											1000,
										]}
										style={{ fontFamily: "Roboto mono" }}
										wrapper="span"
										speed={30}
										repeat={Infinity}
									/>
								</span>
							</li>
						</ul>
						<ButtonFlashing
							onClick={() => {
								setContactOpen((prevState) => !prevState);
							}}
						>
							{contactOpen ? "Close" : "Contact me"}
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
												delay: index * 0.335,
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

			<div className="w-1/2 flex flex-col gap-4">
				<h1 className="text-white font-bold text-5xl">Hello</h1>
				<p className="text-white font-extralight">
					Welcome to my world. I would like to present to you my inner self, all
					the achievements I have been working on, and the person I have become.
					I hope you appreciate it.
				</p>

				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
					transition={{ duration: 0.3 }}
					className="overflow-hidden flex flex-col gap-4"
				>
					<p className="text-white font-extralight">
						A summary of myself: I was born in 2002, and since high school, I
						have been working with frontend development. I have a degree in
						Software Analysis and Development and have been working for 5 years
						in the same field, so I consider myself a Senior Frontend Developer,
						specializing in the Javascript ecosystem. I have worked with
						React.js and React Native, and now I am improving my knowledge in
						Next.js and Typescript. I enjoy learning new things and am excellent
						at troubleshooting. I am known for the speed of my deliveries.
					</p>
					<p className="text-white font-extralight">
						What I want for the future: to work abroad. My goal is to go to the
						USA or countries in the European Union. My dream is to travel around
						the world and live a life where I can grow without impediments. I am
						improving my English and continuing to study technology so that one
						day I can achieve this dream through my hard work.
					</p>
					<div className="flex justify-end item-center">
						<a
							href={`pdfs/${
								location.country === "Brazil"
									? "curriculum-ptBR.pdf"
									: "curriculum-enUS.pdf"
							}`}
							download
						>
							<ButtonFlashing>Curriculum</ButtonFlashing>
						</a>
					</div>
				</motion.div>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={toggleOpen}
					className="mx-auto mt-4 text-white"
				>
					{isOpen ? (
						<ChevronUpIcon className="w-6 h-6" />
					) : (
						<ChevronDownIcon className="w-6 h-6" />
					)}
				</motion.button>
			</div>

			<div className="text-white font-thin text-xs">
				Made with ❤ by Miguel Riquelme
			</div>
		</div>
	);
}
