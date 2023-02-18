/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	swcMinify: true,
	images: {
		domains: ["sattva23.space", "media.graphassets.com", "i.scdn.co", "ik.imagekit.io"],
	},
};

module.exports = nextConfig
