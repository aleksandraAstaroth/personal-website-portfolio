import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="#about">Get to know me</Link></li>
                <li><Link className="nav-link" to="#skills">Skills</Link></li>
                <li><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
                <li><Link className="nav-link" to="/portfolio">Contact</Link></li>
            </ul>
        </nav>
    )
}