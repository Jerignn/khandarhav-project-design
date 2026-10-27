import { Link } from 'react-router-dom'
import PageShell from '../../components/design2/PageShell'
import Arrow from '../../components/design2/Arrow'
import { CITY, WHY_US } from '../../data'
import { ABOUT, GOOGLE_REVIEWS_URL, REVIEWS } from '../../components/design2/content'

// About Us — mission, what K&R provides, the guarantee, and every customer review
export default function AboutPage() {
  return (
    <PageShell
      slug="about"
      photo="/img/hero.jpg"
      lead={'Locally owned & operated heating and cooling in ' + CITY + '.'}
      actions={
        <>
          <a href="#customer-reviews" className="d2-btn d2-btn-primary">
            Read customer reviews <Arrow />
          </a>
          <Link to="/design-2/our-work" className="d2-btn d2-btn-ghost">
            See our work
          </Link>
        </>
      }
      contactNumber="03"
    >
      <section className="d2-section">
        <div className="d2-container d2-why-grid">
          <figure className="d2-why-photo">
            <img src="/img/d2/about.jpg" alt="K&R Heating & Cooling truck outside the K&R office" />
            <figcaption className="d2-mono">Status: locally owned &amp; operated</figcaption>
          </figure>

          <div>
            <p className="d2-mono">// 01 — Our mission</p>
            <h2>Earning the trust of our community</h2>
            {ABOUT.intro.map((paragraph) => (
              <p key={paragraph} className="d2-why-text">
                {paragraph}
              </p>
            ))}
            <p className="d2-why-text">K&amp;R Heating &amp; Cooling is happy to provide:</p>
            <ul className="d2-why-list">
              {WHY_US.map((item, index) => (
                <li key={item}>
                  <span className="d2-mono">0{index + 1}</span>
                  {item}
                  <span className="d2-tick">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The guarantee, in the same accent card as the homepage offer */}
      <section className="d2-section d2-plan-wrap">
        <div className="d2-container">
          <div className="d2-plan">
            <div>
              <p className="d2-mono">// Our guarantee</p>
              <h2>
                <span>30-day</span> 100% satisfaction guarantee
              </h2>
              <p className="d2-plan-text">{ABOUT.guarantee}</p>
            </div>
            <a href="#contact" className="d2-btn d2-btn-light">
              Book your service <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section
        id="customer-reviews"
        className="d2-section d2-photo-bg"
        style={{ '--photo': 'url(/img/d2/work-4.jpg)' }}
      >
        <div className="d2-container">
          <div className="d2-section-head">
            <p className="d2-mono">// 02 — Customer reviews</p>
            <h2>What our customers have to say</h2>
            <div className="d2-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
          </div>

          <div className="d2-reviews-grid">
            {REVIEWS.map((review) => (
              <figure key={review.name} className="d2-review-card is-small">
                <blockquote>{review.quote}</blockquote>
                <figcaption className="d2-mono">— {review.name}</figcaption>
              </figure>
            ))}
          </div>

          <div className="d2-actions">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="d2-btn d2-btn-ghost">
              See all of our Google reviews <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
