import { Link } from 'react-router-dom'
import { SERVICES } from '../../data'

// This design's homepage. Menu links point here, so they also work from a service page.
const HOME = '/design-2'

// Design 2's main menu, with the same items as K&R's website:
// Home · Our Services ▾ · About Us ▾ · Our Work · Promotions · Contact Us
// `onNavigate` = function to run after a click (closes the mobile menu)
//
// The dropdowns open with CSS only (on hover, or when a link inside has keyboard focus).
export default function NavMenu({ onNavigate }) {
  return (
    <ul className="d2-menu">
      <li>
        <Link to={HOME} onClick={onNavigate}>
          Home
        </Link>
      </li>

      <li className="d2-has-dropdown">
        <Link to={HOME + '#services'} onClick={onNavigate}>
          Our Services <span className="d2-caret">▾</span>
        </Link>
        {/* The services panel: every service with its SVC code */}
        <ul className="d2-dropdown is-wide">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <Link to={HOME + '/services/' + service.slug} onClick={onNavigate}>
                <span className="d2-mono">SVC-0{index + 1}</span>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="d2-has-dropdown">
        <Link to={HOME + '/about'} onClick={onNavigate}>
          About Us <span className="d2-caret">▾</span>
        </Link>
        <ul className="d2-dropdown">
          <li>
            <Link to={HOME + '/about'} onClick={onNavigate}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={HOME + '/about#customer-reviews'} onClick={onNavigate}>
              Customer Reviews
            </Link>
          </li>
          <li>
            <Link to={HOME + '/careers'} onClick={onNavigate}>
              Careers
            </Link>
          </li>
          <li>
            <Link to={HOME + '/financing'} onClick={onNavigate}>
              Financing
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to={HOME + '/our-work'} onClick={onNavigate}>
          Our Work
        </Link>
      </li>

      <li>
        <Link to={HOME + '/promotions'} onClick={onNavigate}>
          Promotions
        </Link>
      </li>

      <li>
        <Link to={HOME + '#contact'} onClick={onNavigate}>
          Contact Us
        </Link>
      </li>
    </ul>
  )
}
