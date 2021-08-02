import React from "react";

const Skills = () => {
    return(
        <section id="skills-section">
            <h2>Skills</h2>
            <div className="hard-skills-wrapper">
                <h3>Hard Skills</h3>
                <div className="skills-wrapper">
                    <div className="skill-area">
                        <h4>Web Development</h4>
                        <div className="department">
                            <h5>Front-End Development</h5>
                            <ul>
                                <li>HTML5/CSS3</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>GatsbyJS</li>
                                <li>Figma(UI/UX design/wireframing/prototyping)</li>
                            </ul>
                        </div>
                        <div className="department">
                            <h5>Back-End Development</h5>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="department">
                            <h5>WebGL</h5>
                            <ul>
                                <li>A-Frame</li>
                                <li>Three.js</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-area">
                        <h4>App Development</h4>
                        <ul>
                            <li>React Native</li>
                        </ul>
                    </div>
                    <div className="skill-area">
                        <h4>Version Control</h4>
                        <ul>
                            <li>Git/Github</li>
                        </ul>
                    </div>
                    <div className="skill-area">
                        <h4>Game Development (learning goals) </h4>
                        <ul>
                            <li>C# (basic knowledge)</li>
                            <li>Unity Engine (basic knowledge)</li>
                        </ul>
                    </div>
                    <div className="skill-area">
                        <h4>Other</h4>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                        </ul>
                    </div>
                    </div>
                </div>
            <div className="soft-skills-wrapper">
            <h3>Soft Skills</h3>
                <div className="skills-wrapper"></div>
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
        </section>
    )
}

export default Skills;