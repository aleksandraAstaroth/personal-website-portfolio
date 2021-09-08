import React from "react";
import LinkedInIcon from "../assets/images/linkedin-icon.svg"
import GithubIcon from "../assets/images/github-icon.svg"
import OutlookIcon from "../assets/images/outlook-icon.svg"

const Footer = () => {
    return(
        <section id="footer">
            <div className="contact-wrapper">
                <div className="icon-wrapper">
                    <div><a href="https://www.linkedin.com/in/aleksandrarzepecka/"><img src={LinkedInIcon} alt="linkedin icon"></img></a></div>

                    <div><a href="https://github.com/aleksandraAstaroth"><img src={GithubIcon} alt="github icon"></img></a></div>
                    
                </div>
                <div className="contact-text">
                    <h2>Contact</h2>
                    <p>If you'd like to know more, ask some additional questions, discuss a possible project, or simply just say hi - you can contact me at LinkedIn or via e-mail at: </p>
                    <div className="email">
                        <img src={OutlookIcon} alt="outlook e-mail icon"></img>
                        <p>aleksandra.rzepecka@outlook.com</p>
                    </div>

                </div>
            </div>
            <div className="copyright-wrapper">
                <span>© {new Date().getFullYear()} Aleksandra Rzepecka </span><br/> Built using
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
        </section>
    )
}
export default Footer;