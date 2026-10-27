import { Link } from 'react-router-dom'
import { PROMO } from '../../data'
import Arrow from './Arrow'

// K&R's offer banner, designed as a glowing control-panel card
export default function PlanCard() {
  return (
    <section id="promotions" className="d2-section d2-plan-wrap">
      <div className="d2-container">
        <div className="d2-plan">
          <div>
            <p className="d2-mono">// {PROMO.intro}</p>
            <h2>
              <span>{PROMO.headline}</span> {PROMO.sub}
              <sup>*</sup>
            </h2>
            <small>{PROMO.fine}</small>
          </div>
          <Link to="/design-2/services/maintenance-plans" className="d2-btn d2-btn-light">
            Learn more <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}
