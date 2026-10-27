import { Link } from 'react-router-dom'
import { HERO, PHONE_HREF } from '../../data'
import Arrow from '../shared/Arrow'

export default function Hero() {
  return (
    <section id="top" className="d1-hero d1-home-hero">
      <div className="d1-container d1-hero-grid">
        <div className="d1-hero-copy d1-fade">
          <p className="d1-kicker">{HERO.kicker}</p>
          <h1>{HERO.title}</h1>

          <div className="d1-actions">
            <Link to="/design-1#contact" className="btn btn-primary">
              Schedule service <Arrow />
            </Link>
            <a href={PHONE_HREF} className="d1-textlink">
              or call us
            </a>
          </div>
        </div>

        <figure className="d1-hero-photo">
          <img src="/img/hero.jpg" alt="A comfortable living room" className="d1-fade" />
          <figcaption>
            <span>Heating &amp; cooling in</span>
            <strong>Kerrville, Texas</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
