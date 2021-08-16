import React from "react";
import PropTypes from 'prop-types';

const Tags = ({tagList}) => {
    let tags = tagList

    return ( 
    <ul className="tag-list">{tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
    )}

Tags.propTypes = {
    tagList: PropTypes.array
    
  };
export default Tags;