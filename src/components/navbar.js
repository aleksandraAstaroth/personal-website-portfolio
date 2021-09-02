import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><AnchorLink className="nav-link" to="/">Home</AnchorLink></li>
                <li><AnchorLink className="nav-link" to="#about">About</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#portfolio">Portfolio</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#skills">Skills</AnchorLink></li>
                <li><AnchorLink  className="nav-link" to="#portfolio">Contact</AnchorLink ></li>
            </ul>
        </nav>
    )
}