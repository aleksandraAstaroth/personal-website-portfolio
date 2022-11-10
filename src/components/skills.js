import React from "react";
import HardSkillsIcon from "../assets/images/HardSkills.svg"
import SoftSkillsIcon from "../assets/images/SoftSkills.svg"
import * as style from "../styles/skills/skills.module.scss"

const Skills = () => {
const hardSkills = [
    {   "id": "Front-end",
        "skills": ["HTML", "CSS3", "Javascript", "Typescript", "React", "GatsbyJS", "SCSS", "Tailwind"],
    },
     {
        "id": "Back-end",
        "skills": ["Node.js", "Express.js"],
     },
     {
        "id": "WebGL",
        "skills": ["A-Frame", "Three.js"],
     },
     {
        "id": "App Development",
        "skills": ["React Native"],
     },
     {
        "id": "Version Control",
        "skills": ["Git"],
     },
     {
        "id": "Other",
        "skills": ["Adobe Photoshop", "Adobe Lightroom", "Figma (UX design)"],
     },
]
const softSkills = ["Big-picture thinking", "Problem solving", "Analytical skills", "Teamwork & Collaboration" , "Open communication", "Resourcefullness", "Adaptability", "Working remotely"]

    return(
        <section id="skills" className={style.skills}>
            <div className="container">
                <div className="skills-sign">
                    <i className="fa fa-heart-o" aria-hidden="true"></i> 
                    SKILLS
                </div>
            </div>
            <div className={style.skillsWrapper}>
            <div className={style.hardSkillsWrapper}>
                <div className={style.skillsIconWrapper}>
                    <img src={HardSkillsIcon} alt="neon style icon depicting computer screen representing hard skills" />
                <h3>Hard Skills</h3>
                </div>
                <div className={style.skillsArea}>
                    {hardSkills.map((field) =>
                         <div className="department">
                            <h4>{field.id}</h4>
                            <ul>
                                {field.skills.map((skill, id) =>
                                    <li key={id + 1}>{skill}</li>
                                )}
                            </ul>
                     </div>)}
                    </div> 
                </div>
            <div className={style.softSkillsWrapper}>
                <div className={style.skillsIconWrapper}>
                    <img src={SoftSkillsIcon} alt="neon style icon depicting a person with speech bubble, heart, light bulb ,representing soft skills" />
                    <h3>Soft Skills</h3>
                </div>
                <div className={style.skillsArea}></div>
                        <ul>
                          {softSkills.map((skill, id) => <li key={id + 1}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Skills;