import { Page } from "@/template";
import TecnologyCard from "./components/TecnologyCard";

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
			years: "3 y",
			experienceLevel: 70,
			url: "https://www.typescriptlang.org/",
		},
		{
			technology: "Next.js",
			years: "2 y",
			experienceLevel: 70,
			url: "https://nextjs.org/",
		},
		{
			technology: "Node.js",
			years: "2 y",
			experienceLevel: 50,
			url: "https://nodejs.org/",
		},
		{
			technology: "Express.js",
			years: "1 y",
			experienceLevel: 40,
			url: "https://expressjs.com/",
		},
		{
			technology: "React Native",
			years: "1 y",
			experienceLevel: 40,
			url: "https://reactnative.dev/",
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
			technology: "SCSS/SASS",
			years: "2 y",
			experienceLevel: 60,
			url: "https://sass-lang.com/",
		},
		{
			technology: "Tailwind CSS",
			years: "2 y",
			experienceLevel: 70,
			url: "https://tailwindcss.com/",
		},
		{
			technology: "Bootstrap",
			years: "2 y",
			experienceLevel: 60,
			url: "https://getbootstrap.com/",
		},
		{
			technology: "Git/GitHub",
			years: "5 y",
			experienceLevel: 80,
			url: "https://git-scm.com/",
		},
		{
			technology: "API REST",
			years: "3 y",
			experienceLevel: 75,
			url: "https://restfulapi.net/",
		},
		{
			technology: "GraphQL",
			years: "0 y",
			experienceLevel: 30,
			url: "https://graphql.org/",
		},
		{
			technology: "Firebase",
			years: "0 y",
			experienceLevel: 10,
			url: "https://firebase.google.com/",
		},
		{
			technology: "SQL (MySQL/PostgreSQL)",
			years: "0 y",
			experienceLevel: 20,
			url: "https://www.mysql.com/",
		},
		{
			technology: "NoSQL (MongoDB)",
			years: "0 y",
			experienceLevel: 10,
			url: "https://www.mongodb.com/",
		},
		{
			technology: "Framer Motion",
			years: "0 y",
			experienceLevel: 30,
			url: "https://www.framer.com/motion/",
		},
		{
			technology: "Jest & Testing Library",
			years: "2 y",
			experienceLevel: 40,
			url: "https://jestjs.io/",
		},
		{
			technology: "Vite",
			years: "2 y",
			experienceLevel: 50,
			url: "https://vitejs.dev/",
		},
	];

	const sortedTechnologies = technologies.sort(
		(a, b) => b.experienceLevel - a.experienceLevel
	);

	return (
		<Page>
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
		</Page>
	);
}
