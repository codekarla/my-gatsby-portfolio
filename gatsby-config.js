/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    }
  ],
  siteMetadata: {
    title: "Karla Vargas",
    description: "My WebDev Portfolio",
    copyright: "Copyright 2021 Karla Vargas.",
    contact: "karla@email.com"
  }
}
