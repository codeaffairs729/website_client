/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: [
      'localhost',
      'api.codegaragetech.com',
      'www.api.codegaragetech.com',
    ],
  },
}

module.exports = nextConfig
