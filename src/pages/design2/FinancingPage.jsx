import PageShell from '../../components/design2/PageShell'
import Arrow from '../../components/design2/Arrow'
import { PHONE, PHONE_HREF } from '../../data'
import { FINANCING } from '../../components/design2/content'

// Financing — why and how to finance a new system
export default function FinancingPage() {
  return (
    <PageShell
      slug="financing"
      photo="/img/d2/work-5.jpg"
      lead="Simple and affordable financing options for new heating and cooling systems."
      actions={
        <>
          <a href="#contact" className="d2-btn d2-btn-primary">
            Ask about financing <Arrow />
          </a>
          <a href={PHONE_HREF} className="d2-btn d2-btn-ghost">
            Call {PHONE}
          </a>
        </>
      }
      contactNumber="03"
    >
      <section className="d2-section">
        <div className="d2-container d2-why-grid">
          <div>
            <p className="d2-mono">// 01 — Special financing is available</p>
            <h2>We can help</h2>
            {FINANCING.intro.map((paragraph, index) => (
              // The first paragraph is shown bigger and brighter
              <p key={paragraph} className={index === 0 ? 'd2-svc-first' : 'd2-why-text'}>
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="d2-why-photo">
            <img src="/img/d2/financing.jpg" alt="Customer signing financing paperwork" />
            <figcaption className="d2-mono">
              <span className="d2-led" /> Status: financing available
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="d2-section d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-3.jpg)' }}>
        <div className="d2-container">
          <div className="d2-section-head">
            <p className="d2-mono">// 02 — Benefits</p>
            <h2>Benefits of financing your new heating or cooling system</h2>
          </div>

          <ul className="d2-tiles">
            {FINANCING.benefits.map((benefit, index) => (
              <li key={benefit}>
                <span className="d2-mono">0{index + 1}</span>
                <strong>{benefit}</strong>
              </li>
            ))}
          </ul>

          <p className="d2-svc-first d2-tiles-outro">{FINANCING.outro}</p>
          <a href="#contact" className="d2-btn d2-btn-primary">
            Contact us today <Arrow />
          </a>
        </div>
      </section>
    </PageShell>
  )
}
