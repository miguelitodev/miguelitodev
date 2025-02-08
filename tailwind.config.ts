import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/template/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/content/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Roboto", "ui-sans-serif", "system-ui"],
			serif: ["Roboto", "ui-serif", "Georgia"],
			mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular"],
			display: ["Oswald"],
			body: ['"Open Sans"'],
		},
		extend: {
			animation: {
				gradient: "gradient 8s linear infinite",
			},
			keyframes: {
				gradient: {
					to: { "background-position": "200% center" },
				},
			},
			fontFamily: {
				merriweather: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
};

export default config;
