import { Link } from 'react-router-dom'
import { REVIEW } from '../../data'
import Arrow from '../shared/Arrow'

export default function Review() {
  return (
    <section id="reviews" className="d1-section d1-review">
      <div className="d1-container">
        <h2 className="d1-review-title">What our customers have to say</h2>
        <span className="d1-quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>{REVIEW.quote}</blockquote>
        <p className="d1-review-by">
          <span aria-label="5 stars">★★★★★</span> {REVIEW.name}
        </p>
        <Link to="/design-1/about#reviews" className="d1-readmore">
          Read more <Arrow />
        </Link>
      </div>
    </section>
  )
}
