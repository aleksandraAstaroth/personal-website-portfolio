import React from "react"

const Card = ({projectName, projectInfo, projectLink, projectLinkName}) => {

    return(
        <div className="project-container">
            <div className="project-inner-container">
                <div className="project-preview">
                    <div className="project-info">
                        <h5>{projectName}</h5>
                        <p>{projectInfo}</p>
                        <a href={projectLink}>{projectLinkName}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card