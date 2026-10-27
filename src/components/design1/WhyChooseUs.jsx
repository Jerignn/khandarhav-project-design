import { Link } from 'react-router-dom'
import { MISSION, WHY_US } from '../../data'
import Arrow from '../shared/Arrow'

export default function WhyChooseUs() {
  return (
    <section id="about" className="d1-section d1-why">
      <div className="d1-container d1-why-grid">
        <figure className="d1-why-photo">
          <img src="/img/parallax.jpg" alt="Two outdoor AC units installed beside a home" />
        </figure>

        <div>
          <p className="d1-label">About us</p>
          <h2>
            Why <em>choose us</em>
          </h2>
          {MISSION.map((paragraph) => (
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
          <Link to="/design-1#contact" className="btn btn-primary">
            Contact us today <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}
