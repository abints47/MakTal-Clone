/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maktalseo.com',
      },
    ],
  },
};

module.exports = nextConfig;