import { Link } from 'react-router-dom'
import ImageCarousel from './ImageCarousel'

// One homepage service tile. Its photos slide on their own.
// `tile`      = { label, slug, images } from HOME_SERVICES
// `number`    = 1, 2, 3 or 4
export default function ServiceCard({ tile, number }) {
  return (
    <Link to={'/design-2/services/' + tile.slug} className="d2-service">
      <div className="d2-service-img">
        {/* Each card uses a slightly different speed so they don't all change at once */}
        <ImageCarousel images={tile.images} slideTime={2800 + number * 450} />
        <span className="d2-mono d2-code">SVC-0{number}</span>
      </div>
      <div className="d2-service-label">
        <h3>{tile.label}</h3>
        <span className="d2-service-go" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  )
}
