import { Link } from 'react-router-dom'
import { PROMO } from '../../data'

// K&R's offer banner, designed as a tear-off coupon
export default function Coupon() {
  return (
    <section id="promotions" className="d1-section d1-offer">
      <div className="d1-container">
        <div className="d1-coupon">
          <div className="d1-coupon-main">
            <p className="d1-label">{PROMO.intro}</p>
            <h2>
              {PROMO.headline}
              <sup>*</sup>
            </h2>
            <p className="d1-coupon-sub">{PROMO.sub}</p>
            <small>{PROMO.fine}</small>
          </div>
          <div className="d1-coupon-stub">
            <span>Preventive maintenance plan</span>
            <Link to="/design-1/services/maintenance-plans" className="btn btn-primary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
