/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd'],
  images: {
    domains: [],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
