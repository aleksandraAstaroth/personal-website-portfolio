import React from 'react'
import Card from "../components/projectcard"

const Portfolio = () => {

    return(
        <section id="portfolio">
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
            <Card projectName="Tic-Tac-Toe"
                  tags={["Javascript", "CSS3"]}
                   projectInfo="VanilaJS Tic-Tac-Toe project" 
                   projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                   projectLinkText="github" 
                   projectPreview="tictactoe.png" />
            <Card projectName="Internago"
                   tags={["React", "Gatsby"]}
                   projectInfo="Client brief for payroll company Internago AB"
                   projectLink="https://github.com/internago/internago-webpage"
                   projectLinkText="github"
                   projectPreview="internago.png" />

        </section>
    )
}
export default Portfolio