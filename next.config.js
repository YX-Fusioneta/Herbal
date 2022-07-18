/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}

const withImages = require('next-images')
module.exports = withImages()

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

const withImages = require('next-images')
module.exports = withImages({
  inlineImageLimit: false
})

module.exports = nextConfig
