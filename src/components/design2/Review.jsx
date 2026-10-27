import { Link } from 'react-router-dom'
import { REVIEW } from '../../data'
import Arrow from './Arrow'

export default function Review() {
  return (
    <section id="reviews" className="d2-section d2-review d2-photo-bg" style={{ '--photo': 'url(/img/d2/about.jpg)' }}>
      <div className="d2-container d2-review-grid">
        <div>
          <p className="d2-mono">// 03 — Customer log</p>
          <h2>What our customers have to say</h2>
          <div className="d2-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
        </div>
        <div className="d2-review-card">
          <blockquote>{REVIEW.quote}</blockquote>
          <div className="d2-review-foot">
            <span className="d2-mono">— {REVIEW.name}</span>
            <Link to="/design-2/about#customer-reviews" className="d2-btn d2-btn-primary">
              Read more <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
