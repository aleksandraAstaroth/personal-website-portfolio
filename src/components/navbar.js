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
        animateHamburgerButton()
    }
    function animateHamburgerButton() {
        let lines = Array.from(document.querySelectorAll(".hamburger span"))
        lines.forEach(line => line.style.animation = `${line.className} 0.3s ease ${showHamburger ? "reverse" : "normal"}`);
      }

    return (
        <nav {...navListProps}>
        <div className="hamburger-wrapper">  
            <button className="hamburger" aria-label="menu" onClick={toggleHamburgerMenu}>
                <span className="line1" style={{ transform: showHamburger ? "translateY(9px) rotate(45deg)" : "translateY(0px) rotate(0deg)" }} onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
                <span className="line2" style={{ opacity: showHamburger ? 0 : 1 }} onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
                <span className="line3"style={{ transform: showHamburger ? "translateY(-9px) rotate(-45deg)" : "translateY(0px) rotate(0deg)" }}onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
            </button>
        </div>
            <ul className={ showHamburger ? "" : "hide"}>
                <li><AnchorLink className="nav-link" to="/">Home</AnchorLink></li>
                <li><AnchorLink className="nav-link" to="#about">About</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#portfolio">Portfolio</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#skills">Skills</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#footer">Contact</AnchorLink ></li>
            </ul>
        </nav>
    )
}