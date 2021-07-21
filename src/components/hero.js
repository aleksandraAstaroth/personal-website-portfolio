import React from "react"
import CTA from "../components/cta"
import { Link } from "gatsby"

const Hero = () => {
    return (
        <section className="landing-page-hero">
            <div className="hero-intro">
                <h1>Hi there!<br/>I’m Aleksandra</h1>
                <p>An aspiring Front-End Developer with infinite curiosity to learn new things<br/>
                By combining creativity and problem solving with my big-picture mindset, I strive to create visually pleasing, responsive web applications that meet your needs in multidimensional aspects.</p>
                <div className="hero-btns">
                    <a href="mailto:aleksandra.rzepecka@outlook.com" className="cta-btn">Let's Talk</a>
                    <Link to="/about" className="neutral-link-btn">Learn more about me</Link>
                </div>
            </div>
            <div className="hero-img"></div>
        </section>
    )
}
export default Hero