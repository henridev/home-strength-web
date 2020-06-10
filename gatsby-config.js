/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// Define site URL here
let URL
if (process.env.NODE_ENV === "production") {
  URL = "https://www.addelhaizedoknoord.be"
} else {
  URL = "http://localhost:8000"
}

module.exports = {
  siteMetadata: {
    keywords: [
      "delhaize",
      "dok-noord",
      "gent",
      "supermarkt",
      "kwaliteit",
      "voeding",
      "drank",
      "open op zondag",
    ],
    title: "ad delhaize dok-noord",
    author: "Henri De bel",
    titleTemplate: "ad-delhaize dok noord",
    description: "beste supermarkt",
    url: "https://www.addelhaizedoknoord.be", // No trailing slash allowed!
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              maxHeight: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.SNIPCART_PUBLIC_KEY,
        autopop: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
