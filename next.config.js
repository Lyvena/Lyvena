/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eleven-public-cdn.elevenlabs.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.marblism.com',
      },
    ],
  },
}

module.exports = nextConfig
