import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { ButtonFlashing } from "@/components";

import { Welcome } from "./Welcome";
import { Page } from "@/template";

type TypeHome = {
	location: { country: string; tz_id: string; text: string };
};

export default function Home({ location }: TypeHome) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [opened, setOpened] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpened(true);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	if (!opened) return <Welcome setOpened={setOpened} />;

	return (
		<Page>
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
					onClick={() => setIsOpen(!isOpen)}
					className="mx-auto mt-4 text-white"
				>
					{isOpen ? (
						<ChevronUpIcon className="w-6 h-6" />
					) : (
						<ChevronDownIcon className="w-6 h-6" />
					)}
				</motion.button>
			</div>
		</Page>
	);
}
