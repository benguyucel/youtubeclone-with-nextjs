/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['randomuser.me', 'i.ytimg.com', "yt3.ggpht.com"],
  },
}

module.exports = nextConfig
