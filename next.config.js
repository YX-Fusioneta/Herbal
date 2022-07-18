/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },

}

module.exports = nextConfig
