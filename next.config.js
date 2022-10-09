/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    APIpath: 'http://api.kyzyl-chyraa.rtyva.ru'
  },

  images: {
    domains: ['api.kyzyl-chyraa.rtyva.ru', 'localhost', '95.167.178.44'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/'
      },
    ]
  },

  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig