/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		domains: ["images.unsplash.com"],
	},
};

export default nextConfig;
