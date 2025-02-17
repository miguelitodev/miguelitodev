import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig);
