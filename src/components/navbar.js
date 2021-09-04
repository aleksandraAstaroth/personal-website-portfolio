import React, {useState} from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar() {
    const [stylingMobile, setStylingMobile] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    const navListProps = {
        className: stylingMobile ? "mobile" : ""
    }

    const toggleHamburgerMenu = () => {
        console.log("button clicked")
        setShowHamburger(!showHamburger)
        setStylingMobile(!stylingMobile)
        
        
    }

    return (
        <nav {...navListProps}>
        <div className="hamburger-wrapper">  
            <button className="hamburger" aria-label="hamburger-menu" onClick={toggleHamburgerMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
            <ul className={ showHamburger ? "" : "hide"}>
                <li><AnchorLink className="nav-link" to="/">Home</AnchorLink></li>
                <li><AnchorLink className="nav-link" to="#about">About</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#portfolio">Portfolio</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#skills">Skills</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#portfolio">Contact</AnchorLink ></li>
            </ul>
        </nav>
    )
}