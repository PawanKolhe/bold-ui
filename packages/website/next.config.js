/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@color-ui/react"],
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
