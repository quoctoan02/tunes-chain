require('dotenv-flow').config({
  node_env: process.env.APP_ENV || process.env.NODE_ENV || 'development',
})

const env = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith('NEXT_PUBLIC_')) {
    env[key] = process.env[key]
  }
})

const webpack = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  return config
}

module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
  env,
  webpack,
  images: {
    domains: ['seed-mix-image.spotifycdn.com'],
  },
}
