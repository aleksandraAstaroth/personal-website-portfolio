import React from "react"
import ProjectImage from "../components/project-image"
import Tags from "../components/tags"
// const Card = ({projectName, projectInfo, projectLink, projectLinkName, source}) => {
const Card = (props) => {
   

    return(
        <div className="project-container">
            <div className="project-inner-container">
                    <div className="project-img-wrapper">
                        <ProjectImage className="project-img" src={props.projectPreview} alt="project preview image" />
                    </div>
                    <div className="project-info">
                        <h5>{props.projectName}</h5>
                        <Tags className="tag-list" tagList={props.tags}/>
                        <p>{props.projectInfo}</p>
                        <a href={props.projectLink}>{props.projectLinkText}</a>
                    </div>
            </div>
        </div>
    )
}
export default Card
