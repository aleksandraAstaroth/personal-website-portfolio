import React, {useState} from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar() {
    const [stylingMobile, setStylingMobile] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    const navElements = [
        {path: "/",name: "Home"},
        {path: "#about", name: "About"},
        {path: "#portfolio", name: "Portfolio"},
        {path: "#skills", name: "Skills"},
        {path: "#footer", name: "Contact"}]

    const toggleHamburgerMenu = () => {
        setShowHamburger(!showHamburger)
        setStylingMobile(!stylingMobile)
        animateHamburgerButton()
    }
    function animateHamburgerButton() {
        let lines = Array.from(document.querySelectorAll(".hamburger span"))
        lines.forEach(line => line.style.animation = `${line.className} 0.3s ease ${showHamburger ? "reverse" : "normal"}`);
      }

    return (
        <nav className={stylingMobile ? "mobile" : ""}>
        <div className="hamburger-wrapper">  
            <button className="hamburger" aria-label="menu" onClick={toggleHamburgerMenu}>
                <span className="line1" style={{ transform: showHamburger ? "translateY(9px) rotate(45deg)" : "translateY(0px) rotate(0deg)" }} onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
                <span className="line2" style={{ opacity: showHamburger ? 0 : 1 }} onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
                <span className="line3"style={{ transform: showHamburger ? "translateY(-9px) rotate(-45deg)" : "translateY(0px) rotate(0deg)" }}onAnimationEnd={(e) => e.target.style.animation = "none"}></span>
            </button>
        </div>
            <ul className={showHamburger ? "" : "hide"}>
                {navElements.map((element, id) => {
                    return  <li key={id + 1}><AnchorLink className="nav-link" to={element.path}>{element.name}</AnchorLink></li>
                })}
            </ul>
        </nav>
    )
}