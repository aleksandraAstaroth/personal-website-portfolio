import React from "react"
import Button from "../components/button"
import "normalize.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as style from "../styles/hero/hero.module.scss"

const Hero = () => {
    return (
        <section id="landing-page-hero" className={style.landingPageHero}>
            <div className={style.heroIntro}>
                <h1>
                    <span className={style.text1}>hi there, </span>
                    I’m <span className={style.text2}>Aleksandra, </span>
                    <span className={style.text3}>a  <span className={style.text4}>Front-end Developer</span><br/> with an infinite curiosity to learn new things </span>
                </h1>
                <p>By combining creativity and problem solving with my big-picture mindset, I strive to create visually pleasing, responsive web applications that meet your needs in <br/>  multidimensional aspects.</p>
                <div className={style.heroBtns}>
                    <Button text="Let's Talk"/>
                </div>
            </div>
            <AnchorLink className={style.scrollMarkWrapper} to="#about">
                <span>Scroll down</span>
                <span className={style["arrow"]}></span>
                <span className={style["arrow"]}></span>
                <span className={style["arrow"]}></span>
            </AnchorLink>
        </section>
    )
}
export default Hero