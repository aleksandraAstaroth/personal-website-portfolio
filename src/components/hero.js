import React from "react"

const Hero = () => {
    return (
        <section className="landing-page-hero">
            <div className="hero-intro">
                <h1>Hi there!<br/>I’m Aleksandra</h1>
                <p>An aspiring Front-End Developer with infinite curiosity to learn new things<br/>
                By combining creativity and problem solving with my big-picture mindset, I strive to create visually pleasing, responsive web applications that meet your needs in multidimensional aspects.</p>
                <div className="hero-btns">
                    <a href="mailto:aleksandra.rzepecka@outlook.com" className="cta-btn">Let's Talk</a>
                    <a href="/about" className="neutral-link-btn">Learn more about me</a>
                </div>
            </div>
            <div className="hero-img"></div>
        </section>
    )
}
export default Hero