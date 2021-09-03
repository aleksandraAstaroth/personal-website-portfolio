import * as React from "react"


const Layout = ({ location, title, children, description}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}<br/><span>{description}</span></Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <nav className="main-nav">
        <Link to="/" className="main-heading">
        </Link>
        <ul className="desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Get to know me</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
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
