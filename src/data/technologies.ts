export const TECHNOLOGY_CATEGORIES = [
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
  "Testing",
  "Mobile",
  "Styling",
  "Libraries",
] as const;

export type TechnologyCategory = (typeof TECHNOLOGY_CATEGORIES)[number];

export interface Technology {
  technology: string;
  years: string;
  experienceLevel: number;
  url: string;
  category: TechnologyCategory;
}

export const technologiesCategoryColors: Record<TechnologyCategory, string> = {
  Frontend: "#FF5733, #FFC300",
  Backend: "#3366FF, #33FF57",
  Databases: "#FF33B5, #FFA400",
  Tools: "#4A90E2, #90E24A",
  Testing: "#FF4081, #F50057",
  Mobile: "#00BFFF, #00FFFF",
  Styling: "#7F00FF, #E100FF",
  Libraries: "#00FFAB, #00A6FF",
};

export const categoryOrder: TechnologyCategory[] = [
  "Frontend",
  "Backend",
  "Databases",
  "Styling",
  "Libraries",
  "Testing",
  "Tools",
  "Mobile",
];

export const technologies: Technology[] = [
  {
    technology: "React",
    years: "4 y",
    experienceLevel: 100,
    url: "https://reactjs.org/",
    category: "Frontend",
  },
  {
    technology: "JavaScript (ES6+)",
    years: "5 y",
    experienceLevel: 100,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "Frontend",
  },
  {
    technology: "TypeScript",
    years: "3 y",
    experienceLevel: 70,
    url: "https://www.typescriptlang.org/",
    category: "Frontend",
  },
  {
    technology: "Next.js",
    years: "3 y",
    experienceLevel: 70,
    url: "https://nextjs.org/",
    category: "Frontend",
  },
  {
    technology: "Node.js",
    years: "2 y",
    experienceLevel: 50,
    url: "https://nodejs.org/",
    category: "Backend",
  },
  {
    technology: "Express.js",
    years: "1 y",
    experienceLevel: 40,
    url: "https://expressjs.com/",
    category: "Backend",
  },
  {
    technology: "React Native",
    years: "1 y",
    experienceLevel: 40,
    url: "https://reactnative.dev/",
    category: "Mobile",
  },
  {
    technology: "HTML5",
    years: "5 y",
    experienceLevel: 100,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "Frontend",
  },
  {
    technology: "CSS3",
    years: "5 y",
    experienceLevel: 85,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: "Frontend",
  },
  {
    technology: "SCSS/SASS",
    years: "2 y",
    experienceLevel: 60,
    url: "https://sass-lang.com/",
    category: "Frontend",
  },
  {
    technology: "Tailwind CSS",
    years: "3 y",
    experienceLevel: 70,
    url: "https://tailwindcss.com/",
    category: "Frontend",
  },
  {
    technology: "Bootstrap",
    years: "2 y",
    experienceLevel: 60,
    url: "https://getbootstrap.com/",
    category: "Frontend",
  },
  {
    technology: "Git/GitHub",
    years: "5 y",
    experienceLevel: 80,
    url: "https://git-scm.com/",
    category: "Tools",
  },
  {
    technology: "API REST",
    years: "3 y",
    experienceLevel: 75,
    url: "https://restfulapi.net/",
    category: "Backend",
  },
  {
    technology: "GraphQL",
    years: "0 y",
    experienceLevel: 30,
    url: "https://graphql.org/",
    category: "Backend",
  },
  {
    technology: "Firebase",
    years: "0 y",
    experienceLevel: 10,
    url: "https://firebase.google.com/",
    category: "Databases",
  },
  {
    technology: "SQL (MySQL/PostgreSQL)",
    years: "0 y",
    experienceLevel: 20,
    url: "https://www.mysql.com/",
    category: "Databases",
  },
  {
    technology: "NoSQL (MongoDB)",
    years: "0 y",
    experienceLevel: 10,
    url: "https://www.mongodb.com/",
    category: "Databases",
  },
  {
    technology: "Framer Motion",
    years: "1 y",
    experienceLevel: 30,
    url: "https://www.framer.com/motion/",
    category: "Frontend",
  },
  {
    technology: "Jest & Testing Library",
    years: "2 y",
    experienceLevel: 40,
    url: "https://jestjs.io/",
    category: "Testing",
  },
  {
    technology: "Vite",
    years: "2 y",
    experienceLevel: 50,
    url: "https://vitejs.dev/",
    category: "Tools",
  },
  {
    technology: "Zod",
    years: "0 y",
    experienceLevel: 40,
    url: "https://zod.dev/",
    category: "Libraries",
  },
  {
    technology: "React Hook Form",
    years: "2 y",
    experienceLevel: 60,
    url: "https://react-hook-form.com/",
    category: "Libraries",
  },
  {
    technology: "Sonner",
    years: "1 y",
    experienceLevel: 100,
    url: "https://sonner.emilkowal.ski/",
    category: "Libraries",
  },
  {
    technology: "React Icons",
    years: "2 y",
    experienceLevel: 100,
    url: "https://react-icons.github.io/react-icons/",
    category: "Libraries",
  },
  {
    technology: "@emotion/react",
    years: "1 y",
    experienceLevel: 40,
    url: "https://emotion.sh/docs/introduction",
    category: "Styling",
  },
  {
    technology: "@emotion/styled",
    years: "1 y",
    experienceLevel: 40,
    url: "https://emotion.sh/docs/styled",
    category: "Styling",
  },
  {
    technology: "@mui/material",
    years: "1 y",
    experienceLevel: 60,
    url: "https://mui.com/material-ui/",
    category: "Styling",
  },
  {
    technology: "date-fns",
    years: "3 y",
    experienceLevel: 50,
    url: "https://date-fns.org/",
    category: "Libraries",
  },
  {
    technology: "react-rewards",
    years: "1 y",
    experienceLevel: 80,
    url: "https://www.npmjs.com/package/react-rewards",
    category: "Libraries",
  },
  {
    technology: "ESLint",
    years: "3 y",
    experienceLevel: 60,
    url: "https://eslint.org/",
    category: "Tools",
  },
  {
    technology: "Prettier",
    years: "3 y",
    experienceLevel: 60,
    url: "https://prettier.io/",
    category: "Tools",
  },
  {
    technology: "PNPM",
    years: "1 y",
    experienceLevel: 50,
    url: "https://pnpm.io/",
    category: "Tools",
  },
  {
    technology: "Styled Components",
    years: "4 y",
    experienceLevel: 100,
    url: "https://styled-components.com/",
    category: "Styling",
  },
] satisfies Technology[];

const categoryCounts = technologies.reduce<Record<TechnologyCategory, number>>(
  (acc, tech) => {
    acc[tech.category] = (acc[tech.category] || 0) + 1;
    return acc;
  },
  {} as Record<TechnologyCategory, number>
);

const sortedCategories = Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([category]) => category);

export const sortedTechnologies = technologies.sort((a, b) => {
  const categoryDiff =
    sortedCategories.indexOf(a.category) - sortedCategories.indexOf(b.category);
  if (categoryDiff !== 0) return categoryDiff;
  return a.technology.localeCompare(b.technology);
});

export const groupedTechnologies = TECHNOLOGY_CATEGORIES.reduce(
  (acc, category) => {
    acc[category] = sortedTechnologies.filter(
      (tech) => tech.category === category
    );
    return acc;
  },
  {} as Record<TechnologyCategory, Technology[]>
);
