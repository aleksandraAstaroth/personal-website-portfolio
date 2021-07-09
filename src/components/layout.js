import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children, description}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <nav className="main-nav">
        <a href="/" className="nav-logo">{title}<br/>
          <span>{description}</span></a>
        <ul className="desktop-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Get to know me</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>


      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
