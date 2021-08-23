import React, {useState} from "react"
import Button from "./button";
import Expand from "react-expand-animated";
import FadeIn from 'react-fade-in';


const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textFadeIn, setTextFadeIn] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)


  const handleClick = () => {
    console.log("Button clicked")
    setIsOpen(true)
    setDeleteButton(true)
    setTimeout(() => {
        setTextFadeIn(true)}, 10000)
  }
const buttonProps = { 
className: deleteButton ? "delete" : ""
}

return (
    <section id="about">
        <div id="container">
            <div className="about-sign">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span className="off">A</span>BOUT ME
            </div>
        </div>
        <div className="about-me-text">
            <p>My name is Aleksandra. I’m front-end developer student based in Stockholm. 
                I got very <em>inquisitive</em> mind; that means constant quesioning, analysing and looking at the process from different perspectives.</p> 
                
                <p>Here’s where I should get to the point, list out my skills and show off my work...
                I promise. I <em>will</em> get there...</p>
                <p><em>But</em>, first thing that you should know about me - <strong><em>I am a big-picture thinker</em></strong>.<br/>
                It all starts with the mindset. I want to give you an insight into <em>how</em> I think, <em>what</em> actions I take, and <em>why</em> I do it this way.</p>

                <p>Here’s a glimpse of my background that shaped me, so that it can help you get a sense of what kind of person I am:</p>
                <button {...buttonProps} onClick={handleClick}>Click here</button>
                <Expand open={isOpen} duration={1000}>
                        <ul className="about-me-facts">
                        <FadeIn className="facts" delay={1500} transitionDuration={800}>
                            <li>As a teenager I became licenced glider pilot.</li>
                            <li>I came to Sweden 5 years ago, on my own, with a plan and money... that I haven’t had.</li>
                            <li>I worked in retail. I've also worked various fast-pace service jobs in the restaurant industry. And my latest job position I’ve had (before starting my frontend education) was a dog walker/caretaker.</li>
                            <li>I enjoy exploring new ways of self-expression. During that time as a hobby I practiced mixing techno music, which resulted in a few dj gigs around Stockholm.</li>
                            <li>I modelled for a few internationally recognized alternative clothing brands when I was growing my social media reach through collaborations. Along with that, I picked up interest in photography and photo editing using Adobe programs.</li>
                        </FadeIn>
                        </ul>
               </Expand>

                <FadeIn className="about-me-text-2" visible={textFadeIn} delay={3000} transitionDuration={1000}>
                    <p>Upon getting an insight into my experiences, it should be easier to tie other traits into the picture.<br/>
                    Each experience has taught me something valuable that helped me in other settings, but in a different form.</p>
                    <p>Experimenting with creative softwares has led me to becoming <del>obsessed</del> <ins>passionate</ins> about coding and development, which allows me to create new value utilising already gained skills/perspectives/experiences as contributions to new solutions-
                    depending on a given problem. 

                    <em> Taking chances</em> and <em>calculating risks</em>, required <strong><em>resourcefullness</em></strong>, <strong><em>flexibility</em></strong> and <strong><em>adaptation</em></strong> to new situations. 
                    Deep diving head-first into new settings was always conscious choice of forcing my development and challenging myself in unknown areas.</p>
                
                    <p> My extroverted nature of a curious kid plays probably the biggest role; through socialising, empathy, and A LOT OF QUESTIONS <em>(yes, I am THAT person)</em> I got to learn new things and understand different perspectives - <em>see the bigger picture</em>, analyse it, and look for learning opportunities. 
                    </p>
                 </FadeIn>
                
                <Button text="Let's Talk" />
        </div>
    
    </section>
)
}
export default About; 