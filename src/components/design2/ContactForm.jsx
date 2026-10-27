import { useState } from 'react'
import { PHONE, PHONE_HREF, SERVICES } from '../../data'

// Design 2's contact form, laid out as a numbered service ticket.
// `defaultService` (optional) = the service already picked, e.g. on a service page
export default function ContactForm({ defaultService = '' }) {
  // One piece of state for each input box
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(defaultService)
  const [message, setMessage] = useState('')

  // The ticket number shown after submitting (empty = show the form)
  const [ticket, setTicket] = useState('')

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    // There is no backend yet, so we just print the request in the console.
    // Later this is where we would send it to K&R's email or CRM.
    console.log('New service request:', { name, phone, email, service, message })

    // Clear the inputs and show the confirmation with a made-up ticket number
    setName('')
    setPhone('')
    setEmail('')
    setService(defaultService)
    setMessage('')
    setTicket('KR-' + String(Date.now()).slice(-5))
  }

  // After submitting, show a confirmation instead of the form
  if (ticket) {
    return (
      <div className="d2-form-done" role="status">
        <p className="d2-mono">
          <span className="d2-led" /> Ticket {ticket} · Received
        </p>
        <h3>Thanks — we got your request.</h3>
        <p>
          Our team will reach out shortly. For emergencies, call <a href={PHONE_HREF}>{PHONE}</a>.
        </p>
        <button type="button" className="d2-btn d2-btn-ghost" onClick={() => setTicket('')}>
          Open another ticket
        </button>
      </div>
    )
  }

  return (
    <form className="d2-form" onSubmit={handleSubmit}>
      <label className="d2-field">
        <span className="d2-mono">01 · Name *</span>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required />
      </label>

      <label className="d2-field">
        <span className="d2-mono">02 · Phone *</span>
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Best number"
          required
        />
      </label>

      <label className="d2-field is-full">
        <span className="d2-mono">03 · Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
        />
      </label>

      <label className="d2-field is-full">
        <span className="d2-mono">04 · Service needed</span>
        <select value={service} onChange={(event) => setService(event.target.value)}>
          <option value="">Select a service</option>
          {SERVICES.map((item) => (
            <option key={item.id}>{item.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>

      <label className="d2-field is-full">
        <span className="d2-mono">05 · What’s going on?</span>
        <textarea
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what’s going on with your system"
        />
      </label>

      <button type="submit" className="d2-btn d2-btn-primary is-full">
        Submit ticket
      </button>
    </form>
  )
}
