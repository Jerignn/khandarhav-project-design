import { CITY, PHONE, PHONE_HREF } from '../../data'
import ContactForm from './ContactForm'

// `service` (optional) = service title to pre-select in the form
// `number`  (optional) = this section's number in the page's "// 01 —" labels
export default function Contact({ service, number = '04' }) {
  return (
    <section id="contact" className="d2-section d2-contact">
      <div className="d2-container d2-contact-grid">
        <div>
          <p className="d2-mono">// {number} — Open a service ticket</p>
          <h2>Tell us what’s wrong. We’ll take it from there.</h2>
          <dl className="d2-specs">
            <div>
              <dt className="d2-mono">Phone</dt>
              <dd>
                <a href={PHONE_HREF}>{PHONE}</a>
              </dd>
            </div>
            <div>
              <dt className="d2-mono">Service area</dt>
              <dd>{CITY}</dd>
            </div>
            <div>
              <dt className="d2-mono">Emergencies</dt>
              <dd>24/7</dd>
            </div>
          </dl>
        </div>

        <div className="d2-ticket">
          <div className="d2-ticket-head d2-mono">
            <span>Service ticket</span>
            <span>K&amp;R / New</span>
          </div>
          <ContactForm defaultService={service} />
        </div>
      </div>
    </section>
  )
}
