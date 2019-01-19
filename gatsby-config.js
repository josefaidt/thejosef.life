const path = require('path')
module.exports = {
  siteMetadata: {
    title: `josef.aidt`,
    description: `Welcome to my personal site.`,
    author: `josefaidt`,
    // logo: path.resolve(__dirname, 'src/images/icon.png'),
    social: {
      twitter: `gatsbyjs`,
      fbAppId: `966242223397117`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
        // ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `josefaidt.me`,
        short_name: `josefaidt.me`,
        start_url: `/`,
        background_color: `#172030`,
        theme_color: `#c6797e`,
        display: `minimal-ui`,
        icon: `src/images/logonew.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Josefin Sans', 'Open Sans']
        }
      }
    },
    `gatsby-plugin-netlify`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}