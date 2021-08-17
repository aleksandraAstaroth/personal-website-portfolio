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
                  projectLinkText="click here" 
                  projectPreview="pomodoro.png"/>
            <Card projectName="Pomodoro Timer" 
                  tags={["React", "Pomodoro", "this"]}
                  projectInfo="dsfsdvdf afafa efaefae" 
                  projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                  projectLinkText="click here" 
                  projectPreview="tinynightmare.png"
             />
            <Card projectName="Tic-Tac-Toe"
                  tags={["A-Frame", "Gatsby"]}
                   projectInfo="VanilaJS Tic-Tac-Toe project" 
                   projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" 
                   projectLinkText="click here" 
                   projectPreview="tictactoe.png" />
        </section>
    )
}
export default Portfolio