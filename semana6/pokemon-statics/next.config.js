/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['raw.githubusercontent.com', 'cdn.dribbble.com']
  }
}

module.exports = nextConfig
