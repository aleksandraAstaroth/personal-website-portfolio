import React, {useState} from "react"
import Button from "./button";
import Expand from "react-expand-animated";


const About = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log("Button clicked")
    setIsOpen(true)
    if(isOpen){
        setIsOpen(false)
    }
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
                <button onClick={toggle}>Click here</button>
                <Expand open={isOpen} duration={500}>
                        <ul className="about-me-facts">
                            <li>As a teenager I became licenced glider pilot.</li>
                            <li>I came to Sweden 5 years ago, on my own, with a plan and money... that I haven’t had.</li>
                            <li>I started out working in retail. I also worked various fast-pace service jobs in the restaurant industry. And my latest position I’ve had,  before starting my frontend education, was a dog walker/caretaker at the dog day care.</li>
                            <li>I’ve also enjoyed exploring new exciting ways of self-expression. During that time as a hobby I practiced mixing techno music, which resulted in a few dj gigs around Stockholm.</li>
                            <li>I also modelled for a few internationally recognized alternative clothing brands when I was growing my social media reach through collaborations. Along with that, I picked up interest in photography and photo editing using Adobe programs.</li>
                        </ul>
                </Expand>
              
                <p>...where am I going with it ? <em>Please</em>, bear with me, I am getting there!</p>

                <p>Upon getting an insight into my experiences, it should be easier to tie other traits into the picture.<br/>
                Each experience has taught me something valuable that helped me in other settings, but in a different form.</p>
                <p>Experimenting with creative softwares has led me to becoming <del>obsessed</del> <ins>passionate</ins> about coding and development, which allows me to create new value utilising already gained skills/perspectives/experiences as contributions to new solutions-
                depending on a given problem. 

                <em> Taking chances</em> and <em>calculating risks</em>, required <strong><em>resourcefullness</em></strong>, <strong><em>flexibility</em></strong> and <strong><em>adaptation</em></strong> to new situations. 
                Deep diving head-first into new settings was always conscious choice of forcing my development and challenging myself in unknown areas.</p>
            <p> My extroverted nature of a curious kid plays probably the biggest role; through socialising, empathy, and A LOT OF QUESTIONS <em>(yes, I am THAT person)</em> I got to learn new things and understand different perspectives - <em>see the bigger picture</em>, analyse it, and look for learning opportunities. 
                </p>
                
                <Button ctaHeading="And yes, I enjoy discussing and sharing perspectives! If your outlook on things is alike, or completely different -  I would love to listen and learn!" text="Let's Talk" />
        </div>
    
    </section>
)
}
export default About; 