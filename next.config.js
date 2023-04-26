// @ts-check

/**
 * @type { import('next').NextConfig }
 */
const config = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  images: {
    domains: ["lh3.googleusercontent.com"]
  }
}

module.exports = config
