import React from "react"
import * as style from "../styles/button/button.module.scss"

const Button = ({text}) => {
    return (
        <div className={style.ctaSection}>
            <div className="cta-wrapper">
                <a href="mailto:aleksandra.rzepecka@outlook.com" className={style.ctaBtn} aria-label="let's talk button">{text}
                    <span aria-hidden className={style["ctaBtn__glitch"]}>{text}</span>
                    <span aria-hidden className={style["btn__tag"]}>AR</span>
                </a>
            </div>
        </div>
    )
}
export default Button;