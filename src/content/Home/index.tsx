import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link"; // Importando o componente Link

import { Welcome } from "./Welcome";
import { Page } from "@/template";
import { LocationContext } from "@/context";

// Removido o ButtonFlashing, pois não está sendo utilizado no código

type TypeHomePage = {
	location: { country: string; tz_id: string; text: string };
};

const initial: { [key: string]: string | number } = {
	"--x": "100%",
	scale: 1,
};

const animate: { [key: string]: string | number } = {
	"--x": "-100%",
};

export default function HomePage({ location }: TypeHomePage) {
	const [opened, setOpened] = useState<boolean>(false);

	const { setDataLocation } = useContext(LocationContext);

	useEffect(() => {
		setDataLocation(location);
	}, [setDataLocation, location]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpened(true);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	if (!opened) return <Welcome setOpened={setOpened} />;

	return (
		<Page>
			<div className="w-full flex flex-row justify-between px-8">
				<div className="w-3/5">
					<h1 className="text-white text-5xl font-bold font-merriweather mb-8">
						Hi, I&apos;m Miguel Riquelme
					</h1>
					<p className="text-white font-light font-merriweather text-3xl leading-loose">
						I develop user interfaces and enhance user experiences using web
						technologies. With 5 years of experience, I build responsive and
						efficient web applications while solving real-world user problems.
					</p>
				</div>
				<div>
					{/* eslint-disable @typescript-eslint/ban-ts-comment */}
					<ul className="space-y-4 flex flex-col items-end">
						<motion.li
							initial={initial}
							animate={animate}
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
							className="relative"
						>
							<Link
								href="/projetos"
								passHref
								className="text-neutral-100 tracking-wide font-light relative linear-mask font-merriweather text-lg"
							>
								Projetos
							</Link>
							<ChevronRightIcon className="h-5 w-5 text-neutral-100 inline-block ml-2" />
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
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
							className="relative"
						>
							<Link
								href="/experiencias"
								passHref
								className="text-neutral-100 tracking-wide font-light relative linear-mask font-merriweather text-lg"
							>
								Experiências
							</Link>
							<ChevronRightIcon className="h-5 w-5 text-neutral-100 inline-block ml-2" />
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
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
							className="relative"
						>
							<Link
								href="/tecnologias"
								passHref
								className="text-neutral-100 tracking-wide font-light relative linear-mask font-merriweather text-lg"
							>
								Tecnologias
							</Link>
							<ChevronRightIcon className="h-5 w-5 text-neutral-100 inline-block ml-2" />
						</motion.li>
					</ul>
					{/* eslint-disable @typescript-eslint/ban-ts-comment */}
				</div>
			</div>
		</Page>
	);
}
