import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components/design1/Header'
import Contact from '../components/design1/Contact'
import Footer from '../components/design1/Footer'
import ImageCarousel from '../components/shared/ImageCarousel'
import Arrow from '../components/shared/Arrow'
import { PHONE_HREF, SERVICES } from '../data'
import { SERVICE_DETAILS } from '../serviceDetails'
import { MAINTENANCE_PDF } from '../pageContent'

// One page per service, in the Design 1 look. The address decides which service: /design-1/services/furnaces
export default function ServicePageOne() {
  const { slug } = useParams()
  const index = SERVICES.findIndex((item) => item.slug === slug)

  // Unknown address — go back to the services list
  if (index === -1) {
    return <Navigate to="/design-1#services" replace />
  }

  const service = SERVICES[index]
  const details = SERVICE_DETAILS[service.id]
  const number = '0' + (index + 1) // 01, 02, 03...
  const otherServices = SERVICES.filter((item) => item.id !== service.id)

  // Heating services use the winter (blue) accent, everything else the summer one
  let season = 'summer'
  if (service.season === 'winter') {
    season = 'winter'
  }

  return (
    <div className={'d1 is-' + season}>
      <Header />
      <main>
        <section id="top" className="d1-hero d1-svc-hero">
          {/* Breadcrumbs sit on their own row, so they line up with the top of the hero */}
          <nav className="d1-container d1-crumbs" aria-label="Breadcrumb">
            <Link to="/design-1">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/design-1#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <div className="d1-container d1-hero-grid">
            <div className="d1-hero-copy d1-fade">
              <p className="d1-label">Service {number} of 0{SERVICES.length}</p>
              <h1>{service.title}</h1>
              <p className="d1-lead">{details.tagline}</p>

              <div className="d1-actions">
                <a href="#contact" className="btn btn-primary">
                  Book a visit <Arrow />
                </a>
                <a href={PHONE_HREF} className="d1-textlink">
                  or call us any time
                </a>
              </div>
            </div>

            <figure className="d1-hero-photo d1-svc-photo">
              <ImageCarousel images={service.images} playing={true} />
              <figcaption>
                <span>24/7 emergency service</span>
                <strong>All makes &amp; models</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="d1-section d1-svc-overview">
          <div className="d1-container d1-svc-split">
            <p className="d1-label">Overview</p>
            <div>
              {details.intro.map((paragraph, i) => (
                // The first paragraph is shown bigger, like an article's opening line
                <p key={paragraph} className={i === 0 ? 'd1-svc-first' : 'd1-svc-text'}>
                  {paragraph}
                </p>
              ))}

              {details.stat && (
                <div className="d1-svc-stat">
                  <strong>{details.stat.value}</strong>
                  <span>{details.stat.label}</span>
                </div>
              )}

              {details.pdf && (
                <a href={MAINTENANCE_PDF} target="_blank" rel="noreferrer" className="d1-textlink">
                  Download or print a copy of our Maintenance Plan
                </a>
              )}
            </div>
          </div>
        </section>

        {details.sections.map((section) => (
          <section key={section.title} className="d1-svc-block">
            <div className="d1-container d1-svc-split">
              <div>
                <h2>{section.title}</h2>
                {section.lead && <p className="d1-svc-text">{section.lead}</p>}
              </div>
              <SectionBody section={section} />
            </div>
          </section>
        ))}

        {/* Same sage band as the homepage review */}
        <section className="d1-section d1-review">
          <div className="d1-container">
            <p className="d1-label">Our promise</p>
            <span className="d1-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{details.promise}</blockquote>
            <a href="#contact" className="d1-readmore">
              Book your service <Arrow />
            </a>
          </div>
        </section>

        <section className="d1-section d1-services">
          <div className="d1-container">
            <div className="d1-services-head">
              <p className="d1-label">More services</p>
              <h2>Everything else your system needs.</h2>
            </div>
            <ol className="d1-index d1-svc-more">
              {otherServices.map((item) => (
                <li key={item.id}>
                  <Link to={'/design-1/services/' + item.slug}>
                    <span className="d1-index-n">0{SERVICES.indexOf(item) + 1}</span>
                    <span className="d1-index-title">{item.title}</span>
                    <span className="d1-index-body">{item.body}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact service={service.title} />
      </main>
      <Footer />
    </div>
  )
}

// The right-hand side of a section: a paragraph, a numbered list (items with notes) or a checklist
function SectionBody({ section }) {
  if (section.text) {
    return <p className="d1-svc-first">{section.text}</p>
  }

  const hasNotes = typeof section.items[0] === 'object'
  if (hasNotes) {
    return (
      <ol className="d1-svc-steps">
        {section.items.map((item, i) => (
          <li key={item.name}>
            <span className="d1-index-n">0{i + 1}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ul className={section.wide ? 'd1-why-list d1-svc-checks is-wide' : 'd1-why-list d1-svc-checks'}>
      {section.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
