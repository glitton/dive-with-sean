require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Scuba Diving Adventures`,
    author: {
      name: `Generosa Litton`,
      summary: `who lives and works in San Francisco, CA and Puerto Morelos, Mexico.  Posts are dedicated to my late nephew, Sean Litton.`,
    },
    description: `Blog site part of Generosa Litton's portfolio site.`,
    siteUrl: `https://glcodeworks.com/`,
    social: {
      twitter: `LittonG`,
    },
  },
  pathPrefix: `/blog`,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-remark-embed-video`,
    `gatsby-remark-responsive-iframe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-emoji`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
  ],
}
