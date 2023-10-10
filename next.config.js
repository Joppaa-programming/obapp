/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
  domains: ['makeagency.co.uk','res.cloudinary.com','www.nicepng.com','10619-2.s.cdn12.com' ],
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

}

module.exports = nextConfig
