import PageShell from '../../components/design2/PageShell'
import Arrow from '../../components/design2/Arrow'
import { PHONE, PHONE_HREF } from '../../data'
import { PROMO_FINE_PRINT, PROMOTIONS } from '../../components/design2/content'

// Promotions — every offer from K&R's Promotions page, as tear-off coupons
export default function PromotionsPage() {
  return (
    <PageShell
      slug="promotions"
      photo="/img/d2/work-2.jpg"
      lead="Current offers on maintenance plans, tune-ups and new systems."
      actions={
        <a href={PHONE_HREF} className="d2-btn d2-btn-ghost">
          Call {PHONE} for details
        </a>
      }
      contactNumber="02"
    >
      <section className="d2-section">
        <div className="d2-container">
          <div className="d2-section-head">
            <p className="d2-mono">// 01 — Active offers</p>
            <h2>Save on your comfort</h2>
          </div>

          <ul className="d2-coupons">
            {PROMOTIONS.map((offer, index) => (
              <li key={offer.title} className="d2-coupon">
                <div className="d2-coupon-top">
                  <span className="d2-mono">OFFER-0{index + 1}</span>
                  <span className="d2-mono d2-coupon-status">Active</span>
                </div>
                <h3>{offer.title}</h3>
                <div className="d2-coupon-foot">
                  <small>{PROMO_FINE_PRINT}</small>
                  <a href="#contact" className="d2-btn d2-btn-primary">
                    Claim offer <Arrow />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  )
}
