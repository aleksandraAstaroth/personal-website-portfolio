import React from "react"
import ProjectImage from "../components/project-image"
import Tags from "../components/tags"
import * as style from "../styles/projectcard/projectcard.module.scss"

const Card = (props) => {
    return(
        <div className={style.projectContainer}>
                <div className={style.projectInnerContainer}>
                        <div className={style.projectImgWrapper}>
                            <ProjectImage className={style.projectImg} src={props.projectPreview} alt="project preview image" />
                        </div>
                        <div className={style.gradient}></div>
                        <div className={style.projectInfo}>
                                <Tags className={style.tagContainer} tagList={props.tags}/>
                                <h5>{props.projectName}</h5>
                                <hr></hr>
                                <p>{props.projectInfo}</p>
                                <div><a href={props.projectLink}  rel="noreferrer" target="_blank" >{props.projectLinkText}</a></div>
                        </div>
                </div>
        </div>
    )
}
export default Card

