import React from "react"

const CTA = ({ctaHeading, ctaBtnText}) => {

    return (
        <div className="cta-section">
            <div className="cta-wrapper">
                <h3>{ctaHeading}</h3>
                <a href="mailto:aleksandra.rzepecka@outlook.com" className="cta-btn">{ctaBtnText}</a>
            </div>
        </div>
    )
}
export default CTA