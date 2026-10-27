import { Link } from 'react-router-dom'
import { MISSION, WHY_US } from '../../data'
import Arrow from './Arrow'

export default function WhyChooseUs() {
  return (
    <section id="about" className="d2-section d2-why">
      <div className="d2-container d2-why-grid">
        <figure className="d2-why-photo">
          <img src="/img/parallax.jpg" alt="Two outdoor AC units installed beside a home" />
          <figcaption className="d2-mono">
            <span className="d2-led" /> Status: locally owned &amp; operated
          </figcaption>
        </figure>

        <div>
          <p className="d2-mono">// 02 — About us</p>
          <h2>Why choose us</h2>
          {MISSION.map((paragraph) => (
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
          <Link to="/design-2#contact" className="d2-btn d2-btn-primary">
            Contact us today <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}
