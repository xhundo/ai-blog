/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://aithewave.com',
  generateRobotsTxt: true // (optional)
  // ...other options
};
