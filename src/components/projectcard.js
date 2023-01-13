import React from "react"
import ProjectImage from "../components/project-image"
import Tags from "../components/tags"
import * as style from "../styles/projectcard/projectcard.module.scss"

const Card = ({projectPreview, tags, projectName, projectInfo, projectLink, projectLinkText}) => {
    return(
        <div className={style.projectContainer}>
                <div className={style.projectInnerContainer}>
                        <div className={style.projectImgWrapper}>
                            <ProjectImage src={projectPreview} alt="project preview image" />
                        </div>
                        <div className={style.gradient}></div>
                        <div className={style.projectInfo}>
                                <Tags tagList={tags}/>
                                <h5>{projectName}</h5>
                                <hr></hr>
                                <p>{projectInfo}</p>
                                <div><a href={projectLink}  rel="noreferrer" target="_blank" >{projectLinkText}</a></div>
                        </div>
                </div>
        </div>
    )
}
export default Card

