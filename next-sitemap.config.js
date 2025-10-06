/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://espaceprestigesenegal.com', // ← ton domaine personnalisé
  generateRobotsTxt: true, // Génère aussi robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'], // facultatif
}