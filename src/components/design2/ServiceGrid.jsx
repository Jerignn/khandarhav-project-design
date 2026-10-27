import { HOME_SERVICES } from '../../data'
import ServiceCard from './ServiceCard'

// "Heating & Cooling Services" — the same 4 tiles as K&R's homepage
export default function ServiceGrid() {
  return (
    <section id="services" className="d2-section d2-services d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-2.jpg)' }}>
      <div className="d2-container">
        <div className="d2-section-head">
          <p className="d2-mono">// 01 — Our services</p>
          <h2>Heating &amp; Cooling Services</h2>
        </div>

        <div className="d2-service-grid">
          {HOME_SERVICES.map((tile, index) => (
            <ServiceCard key={tile.slug} tile={tile} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
