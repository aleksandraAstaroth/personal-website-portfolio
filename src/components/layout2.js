import React from'react';
import { Link } from "gatsby"
import Navbar from '../components/navbar';

export default function Layout({ location, children, description}) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header
    if (isRootPath) {
        header = (
        <header className="global-header">
          <section id="header-fixed">
                <div className="page-title-wrapper">
                    <h1 className="main-heading">
                        <Link to="/"><span className="mh-title"><b>Alek<span>sa</span>n<span>d</span>ra R<span>ze</span>pec<span>ka</span></b></span>
                        <span className="mh-description"><span className="brackets">{'{ '}</span>{description}<span className="brackets">{' }'}</span></span>
                        </Link>
                    </h1>
                    </div>
                <div className="navbar-wrapper">
                    <Navbar />
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
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}
