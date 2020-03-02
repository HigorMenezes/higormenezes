module.exports = {
  siteMetadata: {
    title: `Higor Menezes`,
    description: `Just a blog to share my programmer's life`,
    author: `higormenezes`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 512,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `200`,
              className: `remark-autolink`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `÷`,
            },
          },
          `gatsby-remark-copy-linked-files`, // maybe remove it
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Higor Menezes`,
        short_name: `HMenezes`,
        description: `Apenas um blog para compartilhar minha vida de programador`,
        lang: `pt-BR`,
        display: `standalone`,
        icon: `src/assets/h-icon.png`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#67d1eb`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Higor Menezes`,
            short_name: `HMenezes`,
            description: `Just a blog to share my programmer's life`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "pt-br",
        useLangKeyLayout: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}
