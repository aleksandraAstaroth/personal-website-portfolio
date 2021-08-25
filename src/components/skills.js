import React from "react";
import HardSkillsIcon from "../assets/images/HardSkills.svg"
import SoftSkillsIcon from "../assets/images/SoftSkills.svg"

const Skills = () => {
    return(
        <section id="skills">
            <div className="skills-wrapper">
            <div className="hard-skills-wrapper">
                <div className="icon-wrapper">
                    <img src={HardSkillsIcon} />
                <h3>Hard Skills</h3>
                </div>
                <div className="skills-area">
                        <div className="department">
                            <h4>Front-End Development</h4>
                            <ul>
                                <li>HTML5/CSS3</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>GatsbyJS</li>
                                <li>Figma (UX design / prototyping)</li>
                            </ul>
                        </div>
                        <div className="department">
                            <h4>Back-End Development</h4>
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
                            <li>Git / Github</li>
                        </ul>
                    </div>
                    <div className="department">
                        <h4>Other</h4>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                        </ul>
                        </div>
                    </div>
                </div>
            <div className="soft-skills-wrapper">
                <div className="icon-wrapper">
                    <img src={SoftSkillsIcon} />
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