import { Page } from "@/template";
import ExperienceCard from "./components/ExperienceCard";
import { Sidemenu } from "@/components";

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
	const technologies = [
		{
			technology: "React",
			years: "3 y",
			experienceLevel: 100,
			url: "https://reactjs.org/",
		},
		{
			technology: "JavaScript (ES6+)",
			years: "5 y",
			experienceLevel: 100,
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			technology: "TypeScript",
			years: "2 y",
			experienceLevel: 50,
			url: "https://www.typescriptlang.org/",
		},
		{
			technology: "Next.js",
			years: "2 y",
			experienceLevel: 60,
			url: "https://nextjs.org/",
		},
		{
			technology: "HTML5",
			years: "5 y",
			experienceLevel: 100,
			url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		},
		{
			technology: "CSS3",
			years: "5 y",
			experienceLevel: 85,
			url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		},
		{
			technology: "Tailwind CSS",
			years: "2 y",
			experienceLevel: 60,
			url: "https://tailwindcss.com/",
		},
		{
			technology: "Git/GitHub",
			years: "5 y",
			experienceLevel: 75,
			url: "https://git-scm.com/",
		},
		{
			technology: "Node.js",
			years: "1 y",
			experienceLevel: 25,
			url: "https://nodejs.org/",
		},
		{
			technology: "API REST",
			years: "3 y",
			experienceLevel: 75,
			url: "https://restfulapi.net/",
		},
	];

	const sortedTechnologies = technologies.sort(
		(a, b) => b.experienceLevel - a.experienceLevel
	);

	return (
		<Page>
			<div className="flex justify-between px-8">
				<div className="flex gap-4 flex-wrap w-4/5">
					{sortedTechnologies.map((tech, index) => (
						<ExperienceCard
							key={index}
							experienceLevel={tech.experienceLevel}
							years={tech.years}
							technology={tech.technology}
							url={tech.url}
							gradient={generateRandomGradient()}
						/>
					))}
				</div>
				<Sidemenu />
			</div>
		</Page>
	);
}
