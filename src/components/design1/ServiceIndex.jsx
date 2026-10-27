import { Link } from 'react-router-dom'
import { HOME_SERVICES } from '../../data'
import Arrow from '../shared/Arrow'
import ImageCarousel from '../shared/ImageCarousel'

// "Heating & Cooling Services" — the same 4 tiles as K&R's homepage,
// shown as arched cards whose photos slide on their own.
export default function ServiceIndex() {
  return (
    <section id="services" className="d1-section d1-services">
      <div className="d1-container">
        <div className="d1-services-head">
          <p className="d1-label">Our services</p>
          <h2>Heating &amp; Cooling Services</h2>
        </div>

        <div className="d1-tiles">
          {HOME_SERVICES.map((tile, index) => (
            <Link key={tile.slug} to={'/design-1/services/' + tile.slug} className="d1-tile">
              {/* Each tile uses a slightly different speed so they don't all change at once */}
              <ImageCarousel images={tile.images} playing={true} slideTime={2600 + index * 500} />

              <div className="d1-tile-label">
                <span className="d1-index-n">0{index + 1}</span>
                <span className="d1-tile-title">{tile.label}</span>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
