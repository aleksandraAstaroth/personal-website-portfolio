import React from 'react'
import Card from "../components/projectcard"


const Portfolio = () => {
    return(
        <section id="portfolio">
        <div className="portfolio-wrapper">
            <div id="container">
                <div className="portfolio-sign">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                PORTFOLIO
                </div>
            </div>
            <div className="cards-wrapper">
                <Card projectName="Portfolio Website"
                    tags={["Gatsby", "React", "SCSS"]}
                    projectInfo="Personal Website-Portfolio built using Gatsby React framework (this website)"  
                    projectLink="https://github.com/aleksandraAstaroth/personal-website-portfolio" 
                    projectLinkText="Source code" 
                    projectPreview="portfolio.png"/>

                <Card projectName="A-Frame Game"
                    tags={["A-Frame", "Javascript", "Three.js"]}
                    projectInfo="Small 3D web based game/experience, built using A-Frame"  
                    projectLink="https://github.com/aleksandraAstaroth/tiny-nightmares" 
                    projectLinkText="github" 
                    projectPreview="tinynightmare.png"/>
        
                 <Card projectName="Pomodoro Timer" 
                        tags={["React", "SCSS", "CSS3"]}
                        projectInfo="Timer for Pomodoro technique built with React" 
                        projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                        projectLinkText="github"
                        projectPreview="pomodoro.png"
                        />
                    <Card projectName="Trime"
                            tags={["React Native", "App Development"]}
                            projectInfo="Client brief, mockup of redesigned Trime app - first shot at React Native "
                            projectLink="https://github.com/emiliafrisell/Trime-React-Native"
                            projectLinkText="github"
                            projectPreview="trime.png" />

                    <Card projectName="Internago"
                        tags={["React", "Gatsby"]}
                        projectInfo="Client brief for payroll company Internago AB"
                        projectLink="https://github.com/internago/internago-webpage"
                        projectLinkText="github" 
                        projectPreview="internago.png" />

                    <Card projectName="Tic-Tac-Toe"
                        tags={["Javascript", "CSS3"]}
                        projectInfo="VanillaJS Tic-Tac-Toe project" 
                        projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                        projectLinkText="github" 
                        projectPreview="tictactoe.png" />
                </div>
            </div>
        </section>
    )
}
export default Portfolio