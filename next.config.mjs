/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		domains: ["images.unsplash.com", "a.ltrbxd.com"],
	},
};

export default nextConfig;
