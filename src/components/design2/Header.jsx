import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CITY, PHONE, PHONE_HREF } from '../../data'
import NavMenu from './NavMenu'

// This design's homepage. Menu links point here, so they also work from a service page.
const HOME = '/design-2'

export default function Header() {
  // Is the mobile menu open?
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  // Add the "is-open" class when the menu is open (CSS uses it to show the menu)
  let navClass = 'd2-nav'
  let burgerClass = 'd2-burger'
  if (menuOpen) {
    navClass = 'd2-nav is-open'
    burgerClass = 'd2-burger is-open'
  }

  return (
    <header className="d2-header">
      {/* Thin top bar with the same items as K&R's site: location, email, call */}
      <div className="d2-topbar d2-mono">
        <div className="d2-container d2-topbar-inner">
          <span>
            {CITY} · Locally owned &amp; operated
          </span>
          <div className="d2-topbar-links">
            <Link to={HOME + '#contact'}>Email us</Link>
            <a href={PHONE_HREF}>Call us</a>
          </div>
        </div>
      </div>

      <div className="d2-container d2-header-inner">
        <Link to={HOME} className="d2-logo">
          <img src="/img/logo-white.png" alt="K&R Heating & Cooling" />
        </Link>

        <nav className={navClass}>
          <NavMenu onNavigate={closeMenu} />

          <a href={PHONE_HREF} className="d2-btn d2-btn-primary">
            {PHONE}
          </a>
        </nav>

        {/* Hamburger button — only visible on small screens */}
        <button className={burgerClass} aria-label="Toggle menu" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
