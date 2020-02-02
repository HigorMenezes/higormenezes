module.exports = {
  siteMetadata: {
    title: `Higor Menezes`,
    description: `Just a blog to share my programmer's life`,
    author: `higormenezes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#621055`,
        theme_color: `#621055`,
        display: `minimal-ui`,
        icon: `src/assets/h-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}
