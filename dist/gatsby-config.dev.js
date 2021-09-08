"use strict";

var _siteMetadata;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  siteMetadata: (_siteMetadata = {
    title: "Aleksandra Rzepecka",
    description: "Front-End Developer Portfolio",
    author: {
      name: "Aleksandra Rzepecka",
      summary: "An aspiring Front-End Developer with infinite curiosity to learn new things and build visually pleasing, responsive web applications ."
    }
  }, _defineProperty(_siteMetadata, "description", "Front-End Developer Portfolio"), _defineProperty(_siteMetadata, "siteUrl", "https://aleksandrarzepecka.com/"), _defineProperty(_siteMetadata, "social", {
    linkedin: "https://www.linkedin.com/in/aleksandra-r-74722b155/",
    github: "https://github.com/aleksandraAstaroth"
  }), _siteMetadata),
  plugins: ["gatsby-plugin-image", // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     path: `${__dirname}/content/blog`,
  //     name: `blog`,
  //   },
  // },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [{
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 630
        }
      }, {
        resolve: "gatsby-remark-responsive-iframe",
        options: {
          wrapperStyle: "margin-bottom: 1.0725rem"
        }
      }, "gatsby-remark-prismjs", "gatsby-remark-copy-linked-files", "gatsby-remark-smartypants"]
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", // {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: `ADD YOUR TRACKING ID HERE`,
  //   },
  // },
  {
    resolve: "gatsby-plugin-feed",
    options: {
      query: "\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",
      feeds: [{
        serialize: function serialize(_ref) {
          var _ref$query = _ref.query,
              site = _ref$query.site,
              allMarkdownRemark = _ref$query.allMarkdownRemark;
          return allMarkdownRemark.nodes.map(function (node) {
            return Object.assign({}, node.frontmatter, {
              description: node.excerpt,
              date: node.frontmatter.date,
              url: site.siteMetadata.siteUrl + node.fields.slug,
              guid: site.siteMetadata.siteUrl + node.fields.slug,
              custom_elements: [{
                "content:encoded": node.html
              }]
            });
          });
        },
        query: "\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  nodes {\n                    excerpt\n                    html\n                    fields {\n                      slug\n                    }\n                    frontmatter {\n                      title\n                      date\n                    }\n                  }\n                }\n              }\n            ",
        output: "/rss.xml"
      }]
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Aleksandra Rzepecka Front-end Developer Portfolio",
      short_name: "Aleksandra Rzepecka Portfolio",
      start_url: "/",
      background_color: "rgb(23, 27, 29)",
      theme_color: " #00F9FF",
      display: "minimal-ui",
      icon: "src/images/website-icon.png" // This path is relative to the root of the site.

    }
  }, {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -150,
      duration: 1500
    }
  }, "gatsby-plugin-smoothscroll", "gatsby-plugin-react-helmet", "gatsby-plugin-gatsby-cloud", "gatsby-plugin-netlify" // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ]
};