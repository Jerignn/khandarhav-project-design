import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CITY, PHONE, PHONE_HREF } from '../../data'
import NavMenu from '../shared/NavMenu'

// This design's homepage. Menu links point here, so they also work from a service page.
const HOME = '/design-1'

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
  let navClass = 'd1-nav'
  if (menuOpen) {
    navClass = 'd1-nav is-open'
  }

  return (
    <header className="d1-header">
      {/* Thin top bar with the same items as K&R's site: location, email, call */}
      <div className="d1-topbar">
        <div className="d1-container d1-topbar-inner">
          <span>{CITY} · Locally owned &amp; operated</span>
          <div className="d1-topbar-links">
            <Link to={HOME + '#contact'}>Email us</Link>
            <a href={PHONE_HREF}>Call us · {PHONE}</a>
          </div>
        </div>
      </div>

      <div className="d1-container d1-header-inner">
        <Link to={HOME} className="d1-logo">
          <img src="/img/logo.png" alt="K&R Heating & Cooling" />
        </Link>

        <nav className={navClass}>
          <NavMenu base={HOME} onNavigate={closeMenu} />

          <Link to={HOME + '#contact'} className="btn btn-primary" onClick={closeMenu}>
            Book your service
          </Link>
        </nav>

        {/* Only visible on small screens */}
        <button className="d1-menu" aria-expanded={menuOpen} onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
