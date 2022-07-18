/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}
module.exports = {
  images: {
    domains: [''],
    formats: ['image/avif', 'image/webp'],
  },
}

