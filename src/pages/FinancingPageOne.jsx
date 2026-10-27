import PageLayout from '../components/design1/PageLayout'
import Arrow from '../components/shared/Arrow'
import { PHONE, PHONE_HREF } from '../data'
import { FINANCING } from '../pageContent'

// Design 1 "Financing" page
export default function FinancingPageOne() {
  return (
    <PageLayout
      label="Financing"
      title="Special financing is available"
      lead="Simple and affordable options for new heating and cooling systems."
      bg="/img/d1/condensers.jpg"
    >
      <section className="d1-section">
        <div className="d1-container d1-svc-split">
          <div>
            <h2>A new system, on a budget that works</h2>
          </div>
          <div>
            {FINANCING.intro.map((paragraph, i) => (
              // The first paragraph is shown bigger, like an article's opening line
              <p key={paragraph} className={i === 0 ? 'd1-svc-first' : 'd1-svc-text'}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="d1-svc-block">
        <div className="d1-container d1-svc-split">
          <div>
            <h2>Benefits of financing</h2>
            <p className="d1-svc-text">{FINANCING.outro}</p>
            <div className="d1-actions">
              <a href="#contact" className="btn btn-primary">
                Ask about financing <Arrow />
              </a>
              <a href={PHONE_HREF} className="d1-textlink">
                or call {PHONE}
              </a>
            </div>
          </div>
          <ul className="d1-why-list d1-svc-checks">
            {FINANCING.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}
