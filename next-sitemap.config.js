/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASEURL,
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ['/home', '/user', '/server-sitemap-index.xml','/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.BASEURL}/api/server-sitemap-index.xml`, `${process.env.BASEURL}/api/server-sitemap.xml`
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: '*',
        disallow: ['/home', '/user'],
      },
    ],
  },
  // additionalSitemaps: [`${process.env.BASEURL}/api/server-sitemap.xml`]
}