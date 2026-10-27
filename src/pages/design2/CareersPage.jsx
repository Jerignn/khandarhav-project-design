import PageShell from '../../components/design2/PageShell'
import ApplyForm from '../../components/design2/ApplyForm'
import Arrow from '../../components/design2/Arrow'
import { PHONE, PHONE_HREF } from '../../data'
import { CAREERS } from '../../components/design2/content'

// Careers — open positions, perks and an application form
export default function CareersPage() {
  const titles = CAREERS.positions.map((position) => position.title)

  return (
    <PageShell
      slug="careers"
      photo="/img/d2/work-4.jpg"
      lead={CAREERS.headline}
      actions={
        <>
          <a href="#apply" className="d2-btn d2-btn-primary">
            Apply now <Arrow />
          </a>
          <a href={PHONE_HREF} className="d2-btn d2-btn-ghost">
            Call {PHONE}
          </a>
        </>
      }
    >
      <section className="d2-section">
        <div className="d2-container d2-why-grid d2-careers-intro">
          <div>
            <p className="d2-mono">// 01 — Join our team</p>
            <h2>Grow with K&amp;R</h2>
            {CAREERS.intro.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'd2-svc-first' : 'd2-why-text'}>
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <p className="d2-mono">// Why work with us?</p>
            <ul className="d2-why-list">
              {CAREERS.perks.map((perk, index) => (
                <li key={perk}>
                  <span className="d2-mono">0{index + 1}</span>
                  {perk}
                  <span className="d2-tick">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="d2-section d2-services d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-1.jpg)' }}>
        <div className="d2-container">
          <div className="d2-section-head">
            <p className="d2-mono">// 02 — Available positions</p>
            <h2>We are currently hiring</h2>
          </div>

          <div className="d2-svc-panels">
            {CAREERS.positions.map((position, index) => (
              <article key={position.title} className="d2-svc-panel">
                <span className="d2-mono">JOB-0{index + 1}</span>
                <h3>{position.title}</h3>
                <p className="d2-svc-lead">{position.lead}</p>
                <ul className="d2-svc-rows">
                  {position.duties.map((duty, i) => (
                    <li key={duty}>
                      <span className="d2-mono">{String(i + 1).padStart(2, '0')}</span>
                      <div>{duty}</div>
                      <span className="d2-tick">✓</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="d2-section d2-contact">
        <div className="d2-container d2-contact-grid">
          <div>
            <p className="d2-mono">// 03 — Apply</p>
            <h2>Send us your resume</h2>
            <p className="d2-why-text">
              Fill out the form and upload your resume, or give us a call. If we feel that you are a good fit, one of our
              managers will be in touch to schedule an interview.
            </p>
            <dl className="d2-specs">
              <div>
                <dt className="d2-mono">Phone</dt>
                <dd>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </dd>
              </div>
              <div>
                <dt className="d2-mono">Open positions</dt>
                <dd>{titles.length}</dd>
              </div>
            </dl>
          </div>

          <div className="d2-ticket">
            <div className="d2-ticket-head d2-mono">
              <span>Job application</span>
              <span>K&amp;R / Careers</span>
            </div>
            <ApplyForm positions={titles} />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
