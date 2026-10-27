import { Link } from 'react-router-dom'
import { HERO, PHONE, PHONE_HREF } from '../../data'
import Arrow from './Arrow'
import ImageCarousel from './ImageCarousel'

// Photos for the hero slider — K&R's own photos
const HERO_IMAGES = [
  '/img/hero.jpg',
  '/img/ac.jpg',
  '/img/furnace.jpg',
  '/img/ductless.jpg',
  '/img/parallax.jpg',
  '/img/commercial.jpg',
]

export default function Hero() {
  return (
    <section id="top" className="d2-hero">
      <div className="d2-container d2-hero-grid">
        <div className="d2-hero-copy">
          <p className="d2-mono">// {HERO.kicker}</p>
          <h1>{HERO.title}</h1>
          <div className="d2-actions">
            <Link to="/design-2#contact" className="d2-btn d2-btn-primary">
              Schedule service <Arrow />
            </Link>
            <a href={PHONE_HREF} className="d2-btn d2-btn-ghost">
              Call {PHONE}
            </a>
          </div>
        </div>

        {/* Same framed photo as "Why choose us" and the service pages, with the photos sliding on their own */}
        <figure className="d2-why-photo d2-hero-photo">
          <ImageCarousel images={HERO_IMAGES} slideTime={3500} />
          <figcaption className="d2-mono">Status: 24/7 emergency service</figcaption>
        </figure>
      </div>
    </section>
  )
}
