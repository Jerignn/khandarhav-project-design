import { Link } from 'react-router-dom'
import { BADGES, CITY, PHONE, PHONE_HREF, SERVICES } from '../../data'
import Arrow from '../shared/Arrow'

// Design 1's own footer: the scrolling badge strip, then a dark 4-column footer
// (brand · services · company · contact card), then the copyright line.
const HOME = '/design-1'

const COMPANY_LINKS = [
  { to: HOME + '/about', label: 'About us' },
  { to: HOME + '/our-work', label: 'Our work' },
  { to: HOME + '/financing', label: 'Financing' },
  { to: HOME + '/careers', label: 'Careers' },
  { to: HOME + '#promotions', label: 'Promotions' },
]

export default function Footer() {
  // Always shows the current year, e.g. 2026
  const year = new Date().getFullYear()

  // The 4 badges repeated 4 times, for the scrolling loop (see .sf-badges in base.css)
  const badgeLoop = BADGES.concat(BADGES, BADGES, BADGES)

  return (
    <footer className="d1-footer">
      <div className="sf-badges">
        <div className="sf-badges-track">
          {badgeLoop.map((badge, index) => (
            <img key={index} src={badge.src} alt={index < BADGES.length ? badge.alt : ''} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="d1-footer-main">
        <div className="d1-container d1-footer-grid">
          <div className="d1-footer-brand">
            <Link to={HOME} aria-label="K&R Heating & Cooling home">
              <img src="/img/logo-white.png" alt="K&R Heating & Cooling" />
            </Link>
            <p>
              Locally owned &amp; operated in {CITY}. Superior heating and cooling service with an unmatched client
              experience.
            </p>
            <p className="d1-footer-guarantee">30-day 100% satisfaction guarantee</p>
          </div>

          <nav aria-label="Services">
            <h3>Services</h3>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={HOME + '/services/' + service.slug}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3>Company</h3>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="d1-footer-card">
            <h3>Need service?</h3>
            <p>24/7 emergency service · Free estimates on new installations</p>
            <a href={PHONE_HREF} className="d1-footer-phone">
              {PHONE}
            </a>
            <Link to={HOME + '#contact'} className="btn btn-primary">
              Book a visit <Arrow />
            </Link>
            <p className="d1-footer-city">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
                />
              </svg>
              {CITY}
            </p>
          </div>
        </div>
      </div>

      <div className="d1-footer-bottom">
        <div className="d1-container">
          <span>Copyright © {year} K&amp;R Heating &amp; Cooling. All Rights Reserved</span>
          <Link to={HOME + '/privacy-policy'}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
