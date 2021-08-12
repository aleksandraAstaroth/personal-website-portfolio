import React from 'react'
import Card from "../components/projectcard"
import ProjectImage from "../components/project-image"

const Portfolio = () => {

    return(
        <section id="portfolio">
            <Card  projectName="A-Frame Game" projectInfo="ssdvgsfsfvsdvsfvsfvbsfbvsdvsd sdvsdvsd 
            sdvfsdv"  projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" projectLinkName="click here"/>
            <ProjectImage src="pomodoro.png" alt="pomodoro project preview" />
            <Card projectName="Neon pomodoro" projectInfo="dsfsdvdf afafa efaefae" projectLink="https://github.com/aleksandraAstaroth/neon-pomodoro-app" projectLinkName="click here"
             />
             <ProjectImage src="tinynightmare.png" alt="tiny nightmare project preview" />
            
        </section>
    )
}
export default Portfolio