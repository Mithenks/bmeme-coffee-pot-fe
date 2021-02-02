module.exports = {
  siteMetadata: {
    title: `BMEME Coffee Pot`,
    description: `Frontend application for BMEME Coffee Pot.`,
    author: `@michele.mondelli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        callbackPath: "/auth/cb", // Optional
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `CRYSTALLIZE_CATALOGUE`,
        // This is the field under which it's accessible
        fieldName: `crystallize_catalogue`,
        // URL to query from
        url: `${process.env.CRYSTALLIZE_API_BASE}/${process.env.CRYSTALLIZE_TENANT_ID}/catalogue`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `CRYSTALLIZE_ORDERS`,
        // This is the field under which it's accessible
        fieldName: `crystallize_orders`,
        // URL to query from
        url: `${process.env.CRYSTALLIZE_API_BASE}/${process.env.CRYSTALLIZE_TENANT_ID}/orders`,
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "X-Crystallize-Access-Token-Id": `${process.env.CRYSTALLIZE_ACCESS_TOKEN_ID}`,
          "X-Crystallize-Access-Token-Secret": `${process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET}`,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `HASURA_ENDPOINT`,
        // This is the field under which it's accessible
        fieldName: `hasura_endpoint`,
        // URL to query from
        url: `${process.env.HASURA_URL}`,
        // HTTP headers
        headers: {
          "x-hasura-admin-secret": `${process.env.HASURA_TOKEN}`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
