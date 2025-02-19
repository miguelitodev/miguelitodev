"use client";

import TecnologyCard from "./components/TecnologyCard";
import { technologies } from "@/data";

const generateRandomColor = (): string => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const generateRandomGradient = (): string => {
	const color1 = generateRandomColor();
	const color2 = generateRandomColor();
	return `${color1}, ${color2}`;
};

export default function Tecnologies() {
	const sortedTechnologies = technologies.sort(
		(a, b) => b.experienceLevel - a.experienceLevel
	);

	return (
		<div className="flex gap-4 flex-wrap w-4/5 max-md:w-full">
			{sortedTechnologies.map((tech, index) => (
				<TecnologyCard
					key={index}
					experienceLevel={tech.experienceLevel}
					years={tech.years}
					technology={tech.technology}
					url={tech.url}
					gradient={generateRandomGradient()}
				/>
			))}
		</div>
	);
}
