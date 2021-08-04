import React from "react"
import Button from "../components/button"


const Hero = () => {
    return (
        <section id="landing-page-hero">
            <div className="hero-intro">
                <h1>
                    <span className="text1">hi there, </span>
                    I’m <span className="text2">Aleksandra, </span>
                    <span className="text3">An aspiring <span className="text4">Front-End Developer</span><br/> with infinite curiosity to learn new things </span>
                </h1>
                <p>By combining creativity and problem solving with my big-picture mindset, I strive to create visually pleasing, responsive web applications that meet your needs <br/> in multidimensional aspects.</p>
                <div className="hero-btns">
                    <Button text="Let's Talk" />
                <button className="scroll-btn">
                    <span className="arrow"></span>
                    <span className="arrow"></span>
                    <span className="arrow"></span>
            </button>
                </div>
            </div>
            <div className="hero-img"></div>
        </section>
    )
}
export default Hero