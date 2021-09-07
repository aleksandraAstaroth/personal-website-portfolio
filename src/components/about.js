import React, {useState} from "react"
import Button from "./button";
import Expand from "react-expand-animated";
import FadeIn from 'react-fade-in';

const About = () => {
    const [isOpenText1, setIsOpenText1] = useState(false)
    const [isOpenText2, setIsOpenText2] = useState(false)
    const [textFadeIn, setTextFadeIn] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)
    const [delete2ndButton, setDelete2ndButton] = useState(false)
    const [showSecondButton, setShowSecondButton ] = useState(false)

  const handleClick = () => {
    console.log("Button clicked")
    setIsOpenText1(true)
    setTimeout(() => {setDeleteButton(true)}, 200)
    setTimeout(() => {setShowSecondButton(true)}, 6000)
  }

  const handleClick2 = () => {
    console.log("Another Button clicked")
    setIsOpenText2(true)
    setTimeout(() => {setDelete2ndButton(true)}, 200)
    setTextFadeIn(true)
  }
const buttonProps = { 
className: deleteButton ? "delete" : "about-button"
}
const buttonProps2 = {
    className: delete2ndButton ? "delete" : "about-button"
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
            <p>My name is Aleksandra. I’m a front-end developer student based in Stockholm. 
                I got a very <em>inquisitive</em> mind; that means constant questioning, analysing and looking at processes from different perspectives.</p> 
                
                <p>Here’s where I should get to the point, list out my skills and show off my work...
                I promise. I <em>will</em> get there...</p>
                <p>First thing that you should know about me - <strong><em>I am a big-picture thinker</em></strong>.<br/>
                It all starts with the mindset. I want to give you an insight into <em>how</em> I think, <em>what</em> actions I take, and <em>why</em> I do it this way.</p>

                <p>Here’s a glimpse of my background that shaped me, so that it can help you get a sense of what kind of person I am. Each of these 5 points has taught me something valuable that helped me in other settings, but in a different form.</p>
                <div className="about-button-wrapper">
                <button {...buttonProps} onClick={handleClick}> <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Get to know me</button>
                </div>
                <Expand open={isOpenText1}>
                        <ul className="about-me-facts">
                        <FadeIn className="facts" delay={1000} transitionDuration={500} >
                            <li>As a teenager I became a licenced glider pilot.</li>
                            <li>I came to Sweden 5 years ago, on my own, with a plan and money... that I didn't have.</li>
                            <li>I've worked in various fast-paced service jobs including retail and the restaurant industry. My latest job position was as a dog walker.</li>
                            <li>I enjoy exploring new ways of self-expression. As a hobby I practiced mixing techno music, which resulted in a few dj gigs around Stockholm.</li>
                            <li>I also collaborated with a few internationally recognized alternative clothing brands when I was growing my social media reach. Along with that, I picked up an interest in photography and photo editing using Adobe software.</li>
                        </FadeIn>
                        </ul>
                        <FadeIn className="about-me-question" visible={showSecondButton}  delay={1000} transitionDuration={400}>
                            <p>...where am I going with this?</p>
                            <div className="about-button-wrapper">
                            <button {...buttonProps2} onClick={handleClick2}> <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>Get to understand me</button>
                            </div>
                        </FadeIn>
               </Expand>
               <Expand open={isOpenText2}>
                <FadeIn className="about-me-text-2" visible={textFadeIn} delay={1000} transitionDuration={700}>
                    <p>Experimenting with creative software has led me to becoming <del>obsessed</del> <ins>passionate</ins> about coding and development, which allows me to create new value utilising already gained skills/perspectives/experiences as contributions to new solutions</p>

                    <p><em> Taking chances</em> and <em>calculating risks</em>, required <strong><em>resourcefullness</em></strong>, <strong><em>flexibility</em></strong> and <strong><em>adaptation</em></strong> to new situations. Therefore
                    deep diving head-first into new settings was always conscious choice of forcing my development and challenging myself in unknown areas.</p>
                
                    <p> My extroverted nature of a curious kid plays probably the biggest role; through socialising, empathy, and A LOT OF QUESTIONS <em>(yes, I am THAT person)</em> I got to learn new things and understand different perspectives - <em>see the bigger picture</em>, analyse it, and look for learning opportunities. <br/>
                    Now that I've introduced myself, let's collaborate and create something awesome together!  
                    </p>
                    <Button text="Let's Talk" />
                 </FadeIn>
                 </Expand>
        </div>
    
    </section>
)
}
export default About; 