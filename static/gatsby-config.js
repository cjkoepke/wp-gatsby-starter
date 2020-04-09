/**
 * NOTE: Only set this to zero if you're
 * grabbing data from a local WP installation.
 */
NODE_TLS_REJECT_UNAUTHORIZED = "0"

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `http://gatsby.dev/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wp-gatsby-starter`,
        short_name: `wgs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2457f2`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-mark-transparent.png`,
      },
    },
  ],
}
