import React, {useState, useEffect} from'react';
import { Link } from "gatsby"
import Navbar from '../components/navbar';
import Footer from '../components/footer'

export default function Layout({ location, children, description}) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    const [navChange, setNavChange] = useState(false)
    
useEffect(() => {
    const changeNavColor = () => {
        if (window.scrollY >= 360) {
            setNavChange(true);
        }
        else {
            setNavChange(false)
        }
    }
    window.addEventListener('scroll', changeNavColor);
    
}, []);
   
    let header
    if (isRootPath) {
        header = (
        <header className="global-header">
          <section id="header-fixed" className={navChange ? "active" : "header-container"}>
                <div className="page-title-wrapper">
                    <h1 className={navChange ? " main-heading show" : "main-heading"}>
                        <Link to="/"><span className="mh-title"><b>Alek<span>sa</span>ndra Rzepec<span>ka</span></b></span>
                        <span className="mh-description">
                            <span className="brackets">{'{ '}</span>{description}<span className="brackets">{' }'}</span></span>
                        </Link>
                    </h1>
                    </div>
                <div className="navbar-wrapper">
                 <Navbar></Navbar>
                </div>
            </section>
        </header>
        )
      } else {
        header = (
          <Link className="header-link-home" to="/">Aleksandra Rzepecka</Link>
        )
      }
    return (
        <div className="layout">
            <header>{header}</header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
