import React from'react';
import { Link } from "gatsby"
import Navbar from '../components/navbar';

export default function Layout({ location, title, children, description}) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header
    if (isRootPath) {
        header = (
        <header className="global-header">
          <h1 className="main-heading">
            <Link to="/">{title}<br/>
            <span>{'{ '}{description}{' }'}</span>
            </Link>
          </h1>
          <Navbar />
        </header>
        )
      } else {
        header = (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
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
