import { CITY, PHONE, PHONE_HREF } from '../../data'
import ContactForm from '../shared/ContactForm'

// `service` (optional) = service title to pre-select in the form
export default function Contact({ service }) {
  return (
    <section id="contact" className="d1-section d1-contact">
      <div className="d1-container d1-contact-grid">
        <div>
          <p className="d1-label">Book a visit</p>
          <h2>Let’s get your home comfortable again.</h2>
          <p>Tell us a little about what’s happening and we’ll reach out to schedule a visit.</p>
          <a href={PHONE_HREF} className="d1-bigphone">
            {PHONE}
          </a>
          <p className="d1-note">
            {CITY} · 24/7 emergency service · Free estimates on new installations
          </p>
        </div>
        <ContactForm submitLabel="Request my visit" defaultService={service} />
      </div>
    </section>
  )
}
