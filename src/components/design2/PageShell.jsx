import { Link } from 'react-router-dom'
import Fonts from './Fonts'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'
import { INFO_PAGES } from './content'

// The frame every extra Design 2 page sits in: header, page title, the page's own
// sections, the service ticket form (optional) and the footer.
// `slug`          = which page this is, e.g. "careers" (looked up in INFO_PAGES)
// `photo`         = photo shown softly behind the page title
// `lead`          = short line under the title
// `actions`       = buttons under the title (optional)
// `contactNumber` = section number for the ticket form, or nothing to leave the form out
export default function PageShell({ slug, photo, lead, actions, contactNumber, children }) {
  const page = INFO_PAGES.find((item) => item.slug === slug)

  return (
    <div className="d2">
      <Fonts />
      <Header />
      <main>
        <section id="top" className="d2-hero d2-page-hero d2-photo-bg" style={{ '--photo': 'url(' + photo + ')' }}>
          <div className="d2-container">
            <nav className="d2-crumbs d2-mono" aria-label="Breadcrumb">
              <Link to="/design-2">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{page.title}</span>
            </nav>

            <p className="d2-mono">
              // {page.code} — {page.title}
            </p>
            <h1>{page.title}</h1>
            {lead && <p className="d2-lead">{lead}</p>}
            {actions && <div className="d2-actions">{actions}</div>}
          </div>
        </section>

        {children}

        {contactNumber && <Contact number={contactNumber} />}
      </main>
      <Footer />
    </div>
  )
}
