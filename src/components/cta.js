import React from "react"

const CTA = ({ctaBtnText}) => {

    return (
        <div className="cta-section">
            <div className="cta-wrapper">
                <a href="mailto:aleksandra.rzepecka@outlook.com" className="cta-btn">{ctaBtnText}
    <span aria-hidden className="cta-btn__glitch">{ctaBtnText}</span>
                    <span aria-hidden className="cta-btn__tag">AR</span>
                </a>
            </div>
        </div>
    )
}
export default CTA;