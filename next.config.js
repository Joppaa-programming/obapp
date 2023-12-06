/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const nextConfig = {
  images:{
  domains: ['makeagency.co.uk','res.cloudinary.com','www.nicepng.com','10619-2.s.cdn12.com','originallyblackbucket.s3.eu-west-1.amazonaws.com' ],
  deviceSizes: [320, 640, 768, 1024, 1600],
  imageSizes: [16, 32, 48, 64, 96],
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: 'res.cloudinary.com',
  //     port: '',
  //     pathname: '/account123/**',
  //   },
  // ],
},
experimental: {
  appDir: true,
},

}
module.exports = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
