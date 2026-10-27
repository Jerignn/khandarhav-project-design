import { Link, Navigate, useParams } from 'react-router-dom'
import Fonts from '../components/design2/Fonts'
import Header from '../components/design2/Header'
import Contact from '../components/design2/Contact'
import Footer from '../components/design2/Footer'
import ImageCarousel from '../components/design2/ImageCarousel'
import Arrow from '../components/design2/Arrow'
import { PHONE, PHONE_HREF, SERVICES, WHY_US } from '../data'
import { SERVICE_DETAILS } from '../serviceDetails'
import { MAINTENANCE_PDF } from '../components/design2/content'

// One page per service, in the Design 2 look. The address decides which service: /design-2/services/furnaces
export default function ServicePageTwo() {
  const { slug } = useParams()
  const index = SERVICES.findIndex((item) => item.slug === slug)

  // Unknown address — go back to the services grid
  if (index === -1) {
    return <Navigate to="/design-2#services" replace />
  }

  const service = SERVICES[index]
  const details = SERVICE_DETAILS[service.id]
  const code = 'SVC-0' + (index + 1)
  const otherServices = SERVICES.filter((item) => item.id !== service.id)

  // Heating services make the hero glow warm, everything else cool
  let heroClass = 'd2-hero d2-svc-hero'
  if (service.season === 'winter') {
    heroClass = 'd2-hero d2-svc-hero mode-heat'
  }

  return (
    <div className="d2">
      <Fonts />
      <Header />
      <main>
        <section id="top" className={heroClass}>
          <div className="d2-container">
            <nav className="d2-crumbs d2-mono" aria-label="Breadcrumb">
              <Link to="/design-2">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/design-2#services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{code}</span>
            </nav>

            <div className="d2-hero-grid">
              <div>
                <p className="d2-mono">// {code} — {service.title}</p>
                <h1>{service.title}</h1>
                <p className="d2-lead">{details.tagline}</p>
                <div className="d2-actions">
                  <a href="#contact" className="d2-btn d2-btn-primary">
                    Book this service <Arrow />
                  </a>
                  <a href={PHONE_HREF} className="d2-btn d2-btn-ghost">
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <figure className="d2-why-photo d2-svc-photo">
                <ImageCarousel images={service.images} slideTime={3200} />
                <figcaption className="d2-mono">
                  <span className="d2-led" /> Status: 24/7 emergency service
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="d2-section d2-svc-overview">
          <div className="d2-container d2-why-grid">
            <div>
              <p className="d2-mono">// 01 — Overview</p>
              {details.intro.map((paragraph, i) => (
                // The first paragraph is shown bigger and brighter
                <p key={paragraph} className={i === 0 ? 'd2-svc-first' : 'd2-why-text'}>
                  {paragraph}
                </p>
              ))}

              {details.pdf && (
                // Our own copy of the PDF, so it opens from this site instead of kandrhvac.com
                <a href={MAINTENANCE_PDF} target="_blank" rel="noreferrer" className="d2-btn d2-btn-ghost">
                  Download the plan (PDF) <Arrow />
                </a>
              )}
            </div>

            <div>
              {details.stat && (
                <div className="d2-svc-stat">
                  <span className="d2-mono">Potential savings</span>
                  <strong>{details.stat.value}</strong>
                  <p>{details.stat.label}</p>
                </div>
              )}
              <ul className="d2-why-list">
                {WHY_US.map((w, i) => (
                  <li key={w}>
                    <span className="d2-mono">0{i + 1}</span>
                    {w}
                    <span className="d2-tick">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="d2-section d2-services d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-3.jpg)' }}>
          <div className="d2-container">
            <div className="d2-section-head">
              <p className="d2-mono">// 02 — Service details</p>
              <h2>What’s covered.</h2>
            </div>

            <div className="d2-svc-panels">
              {details.sections.map((section, i) => (
                <article key={section.title} className={section.wide ? 'd2-svc-panel is-wide' : 'd2-svc-panel'}>
                  <span className="d2-mono">
                    {code}.{i + 1}
                  </span>
                  <h3>{section.title}</h3>
                  {section.lead && <p className="d2-svc-lead">{section.lead}</p>}
                  <SectionBody section={section} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Same accent band as the homepage plan card */}
        <section className="d2-section d2-plan-wrap d2-svc-promise-wrap">
          <div className="d2-container">
            <div className="d2-plan d2-svc-promise">
              <div>
                <p className="d2-mono">// Our promise</p>
                <p className="d2-svc-promise-text">{details.promise}</p>
              </div>
              <a href="#contact" className="d2-btn d2-btn-light">
                Book your service <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="d2-section d2-svc-more d2-photo-bg" style={{ '--photo': 'url(/img/d2/work-6.jpg)' }}>
          <div className="d2-container">
            <div className="d2-section-head">
              <p className="d2-mono">// 03 — Other services</p>
              <h2>Every part of your comfort system, covered.</h2>
            </div>
            <div className="d2-svc-links">
              {otherServices.map((item) => (
                <Link key={item.id} to={'/design-2/services/' + item.slug}>
                  <span className="d2-mono">SVC-0{SERVICES.indexOf(item) + 1}</span>
                  <strong>{item.title}</strong>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact service={service.title} />
      </main>
      <Footer />
    </div>
  )
}

// The list inside a panel: a paragraph, rows with notes, or a checklist
function SectionBody({ section }) {
  if (section.text) {
    return <p className="d2-svc-lead">{section.text}</p>
  }

  return (
    <ul className="d2-svc-rows">
      {section.items.map((item, i) => {
        // Items are either plain text or { name, note }
        const name = typeof item === 'object' ? item.name : item
        const note = typeof item === 'object' ? item.note : null

        return (
          <li key={name}>
            <span className="d2-mono">{String(i + 1).padStart(2, '0')}</span>
            <div>
              {name}
              {note && <small>{note}</small>}
            </div>
            <span className="d2-tick">✓</span>
          </li>
        )
      })}
    </ul>
  )
}
