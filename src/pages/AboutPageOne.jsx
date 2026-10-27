import { Link } from 'react-router-dom'
import PageLayout from '../components/design1/PageLayout'
import Arrow from '../components/shared/Arrow'
import { WHY_US } from '../data'
import { ABOUT, REVIEWS } from '../pageContent'

// Design 1 "About Us" page, with all of K&R's customer reviews
export default function AboutPageOne() {
  return (
    <PageLayout
      label="About us"
      title="Your home comfort is our #1 priority"
      lead="Locally owned & operated in Kerrville, Texas."
      bg="/img/d1/team-trucks.jpg"
    >
      <section className="d1-section d1-why">
        <div className="d1-container d1-why-grid">
          <figure className="d1-why-photo">
            <img src={ABOUT.photo} alt="K&R Heating & Cooling trucks outside the shop" />
          </figure>

          <div>
            <p className="d1-label">Who we are</p>
            <h2>
              Earning your <em>trust</em>
            </h2>
            {ABOUT.intro.map((paragraph) => (
              <p key={paragraph} className="d1-why-text">
                {paragraph}
              </p>
            ))}
            <p className="d1-why-provide">K&amp;R Heating &amp; Cooling is happy to provide:</p>
            <ul className="d1-why-list">
              {WHY_US.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="d1-section d1-page-band">
        <div className="d1-container">
          <div className="d1-svc-stat">
            <strong>100%</strong>
            <span>{ABOUT.guarantee}</span>
          </div>
        </div>
      </section>

      <section id="reviews" className="d1-section d1-review">
        <div className="d1-container d1-reviews-wide">
          <p className="d1-label">Customer reviews</p>
          <h2 className="d1-review-title">What our customers have to say</h2>

          <div className="d1-review-grid">
            {REVIEWS.map((review) => (
              <figure key={review.name} className="d1-review-card">
                <span className="d1-review-stars" aria-label="5 stars">
                  ★★★★★
                </span>
                <blockquote>{review.quote}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            ))}
          </div>

          <Link to="/design-1/about#contact" className="d1-readmore">
            Book your service <Arrow />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
