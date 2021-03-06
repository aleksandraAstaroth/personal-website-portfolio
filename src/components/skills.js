import React from "react";
import HardSkillsIcon from "../assets/images/HardSkills.svg"
import SoftSkillsIcon from "../assets/images/SoftSkills.svg"

const Skills = () => {
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
                        <div className="department">
                            <h4>Front-End</h4>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>GatsbyJS</li>
                            </ul>
                        </div>
                        <div className="department">
                            <h4>Back-End</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="department">
                            <h4>WebGL</h4>
                            <ul>
                                <li>A-Frame</li>
                                <li>Three.js</li>
                            </ul>
                        </div>
                      <div className="department">
                        <h4>App Development</h4>
                        <ul>
                            <li>React Native</li>
                        </ul>
                     </div>
                     <div className="department">
                        <h4>Version Control</h4>
                        <ul>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="department">
                        <h4>Other</h4>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                            <li>Figma (UX design)</li>
                        </ul>
                        </div>
                    </div>
                </div>
            <div className="soft-skills-wrapper">
                <div className="skills-icon-wrapper">
                    <img src={SoftSkillsIcon} alt="neon style icon depicting a person with speech bubble, heart, light bulb ,representing soft skills" />
                    <h3>Soft Skills</h3>
                </div>
                <div className="skills-area"></div>
                        <ul>
                            <li>Big-picture thinking</li>
                            <li>Problem solving</li>
                            <li>Pattern recognition</li>
                            <li>Analytical skills</li>
                            <li>Teamwork & Collaboration</li>
                            <li>Empathy/Emotional Intelligence</li>
                            <li>Open Communication</li> 
                            <li>Self-awareness</li>
                            <li>Resourcefullness</li>
                            <li>Adaptability</li>
                            <li>Working remotely</li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Skills;