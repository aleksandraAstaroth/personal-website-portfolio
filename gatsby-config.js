module.exports = {
  siteMetadata: {
    title: `Aleksandra Rzepecka`,
    description: `Front-end Developer`,
    author: {
      name: `Aleksandra Rzepecka`,
      summary: `Front-end Developer with infinite curiosity to learn new things and build visually pleasing, responsive web applications .`,
    },
    description: `Front-end Developer`,
    siteUrl: `https://aleksandrarzepecka.com/`,
    social: {
      linkedin: `https://www.linkedin.com/in/aleksandra-r-74722b155/`,
      github: `https://github.com/aleksandraAstaroth`
    },
  },
  plugins: [
    `gatsby-plugin-image`,
  
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleksandra Rzepecka Front-end Developer`,
        short_name: `Aleksandra Rzepecka Portfolio`,
        start_url: `/`,
        background_color: `rgb(23, 27, 29)`,
        theme_color: ` #00F9FF`,
        display: `minimal-ui`,
        icon: `src/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
        duration: 1500,
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
    },
    },

    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
