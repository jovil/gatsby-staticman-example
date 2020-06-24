import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import s from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={s.header}>
      <h1>
        <Link className={s.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={s.navList}>
          <li><Link className={s.navItem} activeClassName={s.activeNavItem} to="/">Home</Link></li>
          <li><Link className={s.navItem} activeClassName={s.activeNavItem} to="/blog">Blog</Link></li>
          <li><Link className={s.navItem} activeClassName={s.activeNavItem} to="/about">About</Link></li>
        </ul>
      </nav>

    </header>
  )
}
export default Header
