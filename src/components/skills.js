import React from "react";
import HardSkillsIcon from "../assets/images/HardSkills.svg"
import SoftSkillsIcon from "../assets/images/SoftSkills.svg"

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
        <section id="skills">
            <div id="container">
                <div className="skills-sign">
                    <i className="fa fa-heart-o" aria-hidden="true"></i> 
                    SKILLS
                </div>
            </div>
            <div className="skills-wrapper">
            <div className="hard-skills-wrapper">
                <div className="skills-icon-wrapper">
                    <img src={HardSkillsIcon} alt="neon style icon depicting computer screen representing hard skills" />
                <h3>Hard Skills</h3>
                </div>
                <div className="skills-area">
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
            <div className="soft-skills-wrapper">
                <div className="skills-icon-wrapper">
                    <img src={SoftSkillsIcon} alt="neon style icon depicting a person with speech bubble, heart, light bulb ,representing soft skills" />
                    <h3>Soft Skills</h3>
                </div>
                <div className="skills-area"></div>
                        <ul>
                          {softSkills.map((skill, id) => <li key={id + 1}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Skills;