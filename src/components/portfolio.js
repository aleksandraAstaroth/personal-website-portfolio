import React from 'react'
import Card from "../components/projectcard"

const Portfolio = () => {

    return(
        <section id="portfolio">
            <Card projectName="A-Frame Game"
                  tags={["A-Frame", "Gatsby"]}
                  projectInfo="ssdvgsfsfvsdvsfvsfvbsfbvsdvsd sdvsdvsd 
                               sdvfsdv"  
                  projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                  projectLinkText="github" 
                  projectPreview="pomodoro.png"/>
            <Card projectName="Pomodoro Timer" 
                  tags={["React", "Pomodoro", "this"]}
                  projectInfo="dsfsdvdf afafa efaefae" 
                  projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                  projectLinkText="github" 
                  projectPreview="tinynightmare.png"
             />
            <Card projectName="Tic-Tac-Toe"
                  tags={["A-Frame", "Gatsby"]}
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