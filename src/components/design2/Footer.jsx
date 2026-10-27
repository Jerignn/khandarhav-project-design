import { Link } from 'react-router-dom'
import { BADGES, CITY, PHONE, PHONE_HREF, SERVICES } from '../../data'

// Design 2's footer: a dark control-panel base with the same facts as kandrhvac.com
// (badges, location, phone, copyright + privacy policy), plus quick links.
export default function Footer() {
  // Always shows the current year, e.g. 2026
  const year = new Date().getFullYear()

  return (
    <footer className="d2-footer d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-7.jpg)' }}>
      <div className="d2-container">
        {/* Certification badges, each on its own tile */}
        <div className="d2-badges">
          <p className="d2-mono">// Certified &amp; trusted</p>
          <ul>
            {BADGES.map((badge) => (
              <li key={badge.src}>
                <img src={badge.src} alt={badge.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>

        <div className="d2-footer-grid">
          <div className="d2-footer-brand">
            <Link to="/design-2">
              <img src="/img/logo-white.png" alt="K&R Heating & Cooling" />
            </Link>
            <p>Locally owned &amp; operated heating and cooling in {CITY}.</p>
            <p className="d2-mono">24/7 emergency service</p>
          </div>

          <div>
            <p className="d2-mono">// Services</p>
            <ul className="d2-footer-links">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={'/design-2/services/' + service.slug}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="d2-mono">// Company</p>
            <ul className="d2-footer-links">
              <li>
                <Link to="/design-2/about">About Us</Link>
              </li>
              <li>
                <Link to="/design-2/our-work">Our Work</Link>
              </li>
              <li>
                <Link to="/design-2/careers">Careers</Link>
              </li>
              <li>
                <Link to="/design-2/financing">Financing</Link>
              </li>
              <li>
                <Link to="/design-2/promotions">Promotions</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="d2-mono">// Contact</p>
            <a href={PHONE_HREF} className="d2-footer-phone">
              {PHONE}
            </a>
            <p className="d2-footer-city">{CITY}</p>
            <Link to="/design-2#contact" className="d2-btn d2-btn-ghost">
              Open a service ticket
            </Link>
          </div>
        </div>

        <div className="d2-footer-bottom d2-mono">
          <span>Copyright © {year} K&amp;R Heating &amp; Cooling. All Rights Reserved</span>
          <Link to="/design-2/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
