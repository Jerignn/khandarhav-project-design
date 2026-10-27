import { Link } from 'react-router-dom'
import { SERVICES } from '../../data'

// The main menu, with the same items as K&R's website:
// Home · Our Services ▾ · About Us ▾ · Our Work · Promotions · Contact Us
//
// `base`       = the design's homepage, "/design-1" or "/design-2"
// `onNavigate` = function to run after a click (closes the mobile menu)
//
// The dropdowns open with CSS only (on hover, or when a link inside has keyboard focus).
export default function NavMenu({ base, onNavigate }) {
  return (
    <ul className="menu">
      <li>
        <Link to={base} onClick={onNavigate}>
          Home
        </Link>
      </li>

      <li className="has-dropdown">
        <Link to={base + '#services'} onClick={onNavigate}>
          Our Services <span className="caret">▾</span>
        </Link>
        <ul className="dropdown">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <Link to={base + '/services/' + service.slug} onClick={onNavigate}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* About, Careers, Financing and Our Work are pages inside our own site */}
      <li className="has-dropdown">
        <Link to={base + '/about'} onClick={onNavigate}>
          About Us <span className="caret">▾</span>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to={base + '/about'} onClick={onNavigate}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={base + '/careers'} onClick={onNavigate}>
              Careers
            </Link>
          </li>
          <li>
            <Link to={base + '/financing'} onClick={onNavigate}>
              Financing
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to={base + '/our-work'} onClick={onNavigate}>
          Our Work
        </Link>
      </li>

      <li>
        <Link to={base + '#promotions'} onClick={onNavigate}>
          Promotions
        </Link>
      </li>

      <li>
        <Link to={base + '#contact'} onClick={onNavigate}>
          Contact Us
        </Link>
      </li>
    </ul>
  )
}
