import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';

const ProjectImage = ({src}) => {
const data = useStaticQuery(graphql `
query { 
images: allFile(filter: {extension: {regex: "/(png)/"}}) {
   edges {
     node {
       relativePath
       extension
       publicURL
       name
       base
       childImageSharp {
         gatsbyImageData(
           placeholder: BLURRED
           transformOptions: {cropFocus: CENTER, fit: CONTAIN}
         )
       }
     }
   }
 }
}`);
    const match = useMemo(
        () => data.images.edges.find(({ node }) => src === node.relativePath),
        [data, src]
    );
    if (!match) return null;
    const { node: { childImageSharp, publicURL, extension, name} = {} } = match;
    if (extension === "svg" || !childImageSharp) {
        return <img src={publicURL} alt={name}/>;
      }
      
    return(<GatsbyImage image={childImageSharp.gatsbyImageData} alt=""/>)
    };

    ProjectImage.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      };
      
export default ProjectImage;