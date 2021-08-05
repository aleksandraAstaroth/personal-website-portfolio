import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout2"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import "normalize.css"

const Index = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const siteDescription = data.site.siteMetadata?.description || `Description`
    console.log(data.site.siteMetadata)
    return (
        <Layout location={location} description={siteDescription}>
            <SEO title="Home" />
            <Hero />
            <About />
            <Portfolio />
            <Skills />
        </Layout>
    )}
export default Index


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
