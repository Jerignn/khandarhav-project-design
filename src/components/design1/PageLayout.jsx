import { Link } from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'

// The frame every extra Design 1 page shares (About, Careers, Financing, Our Work, Privacy):
// header, a page hero with breadcrumbs, the page's own sections, "Book a visit" and the footer.
// `label`       = small text above the title, e.g. "About us"
// `title`       = the big page title
// `lead`        = one sentence under the title (optional)
// `bg`          = photo shown blurred behind the hero
// `showContact` = false hides the "Book a visit" section (Careers has its own form)
export default function PageLayout({ label, title, lead, bg, showContact = true, children }) {
  return (
    <div className="d1">
      <Header />
      <main>
        <section id="top" className="d1-hero d1-page-hero" style={{ '--page-bg': 'url(' + bg + ')' }}>
          <nav className="d1-container d1-crumbs" aria-label="Breadcrumb">
            <Link to="/design-1">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{label}</span>
          </nav>

          <div className="d1-container d1-fade">
            <p className="d1-label">{label}</p>
            <h1>{title}</h1>
            {lead && <p className="d1-lead">{lead}</p>}
          </div>
        </section>

        {children}

        {showContact && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
