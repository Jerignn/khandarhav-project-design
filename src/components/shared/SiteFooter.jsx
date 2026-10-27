import { Link } from 'react-router-dom'
import { BADGES, CITY, PHONE, PHONE_HREF, PRIVACY_URL } from '../../data'

// Footer modeled on kandrhvac.com: badges, location, phone, copyright + privacy policy.
// `theme` picks the look ("dark" or "light") so each page can match its own palette.
// `privacyHref` (optional) = our own privacy page; without it the link goes to kandrhvac.com
export default function SiteFooter({ theme, privacyHref }) {
  // White logo on dark backgrounds, black logo on light backgrounds
  let logo = '/img/logo.png'
  if (theme === 'dark') {
    logo = '/img/logo-white.png'
  }

  // Always shows the current year, e.g. 2026
  const year = new Date().getFullYear()

  // The 4 badges repeated 4 times, for the scrolling loop
  const badgeLoop = BADGES.concat(BADGES, BADGES, BADGES)

  return (
    <footer className={'site-footer is-' + theme}>
      {/* Certification badges (same as kandrhvac.com), scrolling in an endless loop.
          The track holds the badge list 4 times so it is wider than any screen. CSS slides it
          left by exactly half its width, then starts over — the second half looks identical
          to the first, so the jump back is invisible and the loop looks seamless. */}
      <div className="sf-badges">
        <div className="sf-badges-track">
          {badgeLoop.map((badge, index) => (
            <img key={index} src={badge.src} alt={index < BADGES.length ? badge.alt : ''} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="sf-main">
        <img src={logo} alt="K&R Heating & Cooling" className="sf-logo" />
        <div className="sf-contact">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
              />
            </svg>
            {CITY}
          </span>
          <a href={PHONE_HREF}>
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1Z"
              />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      <div className="sf-bottom">
        Copyright © {year} K&amp;R Heating &amp; Cooling. All Rights Reserved
        <span aria-hidden="true"> | </span>
        {privacyHref ? (
          <Link to={privacyHref}>Privacy Policy</Link>
        ) : (
          <a href={PRIVACY_URL} target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        )}
      </div>
    </footer>
  )
}
