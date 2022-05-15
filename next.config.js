/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: process.env.DB_URL
  }
}

module.exports = nextConfig
