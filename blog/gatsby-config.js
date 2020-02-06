module.exports = {
  siteMetadata: {
    title: `Space Theories`,
    description: `Space is not what it seems`,
    author: `@Nathan`,
    contact: 
    {
      Name: 'Nate',
      location: 'Milwauke',
      company: 'NATIONAL JAWA TRADE',
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: '4i29g2g2d19j',
        accessToken: 'BPp8cJoKyVSXh1bGrcT5vruqQIRJ0qJYFXWRsglpkBc'
      }
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
