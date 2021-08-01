import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav>
            <ul className="desktop-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Get to know me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
    )
}