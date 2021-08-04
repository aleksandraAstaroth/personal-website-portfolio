import React from "react"

const Button = ({text}) => {
    return (
        <div className="cta-section">
            <div className="cta-wrapper">
                <a href="mailto:aleksandra.rzepecka@outlook.com" className="cta-btn">{text}
                    <span aria-hidden className="cta-btn__glitch">{text}</span>
                    <span aria-hidden className="btn__tag">AR</span>
                </a>
            </div>
        </div>
    )
}
export default Button;