import { Link } from 'react-router-dom'
import Arrow from '../components/shared/Arrow'
import SiteFooter from '../components/shared/SiteFooter'
import { PHONE, PHONE_HREF, WHY_US } from '../data'

// The two design options shown as big panels
const OPTIONS = [
  {
    to: '/design-1',
    n: '01',
    label: 'View option 1',
    name: 'Hill Country Home',
    mood: 'Warm · Editorial · Local',
    pitch:
      'Feels like a neighbor you trust. Serif type, limestone tones, arched photos and service tiles whose photos slide on their own.',
    img: '/img/parallax.jpg',
    swatches: ['#f4efe6', '#24211d', '#6b7a5e', '#ba4426'],
    typeName: 'Open Sans',
  },
  {
    to: '/design-2',
    n: '02',
    label: 'View option 2',
    name: 'Comfort Control',
    mood: 'Modern · Technical · Interactive',
    pitch:
      'Feels like a smart thermostat. A live temperature dial in the hero, glowing control-panel cards and service tiles that slide through K&R’s photos.',
    img: '/img/hero.jpg',
    swatches: ['#0b121b', '#142030', '#4fb3d9', '#ba4426'],
    typeName: 'Space Grotesk',
  },
]

export default function Overview() {
  return (
    <div className="ov">
      <header className="ov-head">
        {/* Warm-to-cool glow behind the header, echoing the two designs */}
        <div className="ov-head-glow" aria-hidden="true" />
        <img src="/img/logo-white.png" alt="K&R Heating & Cooling" />
        <div>
          <p>
            K&amp;R Heating &amp; Cooling · Homepage concepts <span className="ov-pill">2 options</span>
          </p>
          <h1>
            Hot summers. Cold snaps.
            <br />
            <em>Pick the front door that fits.</em>
          </h1>
        </div>
      </header>

      <div className="ov-split">
        {OPTIONS.map((option) => (
          <Link key={option.n} to={option.to} className={'ov-panel ov-panel-' + option.n}>
            {/* Only this image layer zooms on hover — the panel itself stays in place */}
            <div
              className="ov-panel-img"
              style={{ backgroundImage: 'url(' + option.img + ')' }}
              aria-hidden="true"
            />
            {/* A colored layer over the photo so the text is easy to read */}
            <div className="ov-panel-shade" aria-hidden="true" />

            <span className="ov-n">{option.n}</span>

            <div className="ov-panel-body">
              <span className="ov-mood">{option.mood}</span>
              <h2>{option.name}</h2>
              <p>{option.pitch}</p>
              {/* A quick preview of each design's palette and typeface */}
              <div className="ov-specimen" aria-hidden="true">
                <span className="ov-swatches">
                  {option.swatches.map((c) => (
                    <i key={c} style={{ background: c }} />
                  ))}
                </span>
                <span className="ov-type">
                  <b>Aa</b> {option.typeName}
                </span>
              </div>
              <span className="ov-cta">
                {option.label} <Arrow />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="ov-closing">
        <span className="ov-closing-mark" aria-hidden="true">K&amp;R</span>
        <div className="ov-closing-inner">
          <div>
            <p className="ov-eyebrow">Same team behind both</p>
            <h2>
              Two looks. <em>One locally owned Kerrville crew.</em>
            </h2>
            <p>
              Whichever direction K&amp;R chooses, the promise underneath stays the same: superior heating and cooling
              service with an unmatched client experience. Each option is its own full homepage, built
              to work from phone to desktop.
            </p>
            <p className="ov-note">
              In this preview, request forms show a confirmation but don’t send yet. Call buttons dial K&amp;R directly
              at <a href={PHONE_HREF}>{PHONE}</a>.
            </p>
          </div>
          <ul className="ov-promises">
            {WHY_US.map((w) => (
              <li key={w}>
                <span aria-hidden="true">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter theme="dark" showBadges={false} />
    </div>
  )
}
