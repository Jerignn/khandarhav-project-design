import { useState } from 'react'
import { PHONE, SERVICES } from '../../data'

// The contact form used by both designs.
// Each design gives it a different look through its own CSS file.
// `defaultService` (optional) = the service already picked, e.g. on a service page
export default function ContactForm({ submitLabel, defaultService = '' }) {
  // One piece of state for each input box
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(defaultService)
  const [message, setMessage] = useState('')

  // true = show the "thank you" message instead of the form
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    // There is no backend yet, so we just print the request in the console.
    // Later this is where we would send it to K&R's email or CRM.
    console.log('New service request:', { name, phone, email, service, message })

    // Clear the inputs and show the thank-you message
    setName('')
    setPhone('')
    setEmail('')
    setService(defaultService)
    setMessage('')
    setSent(true)
  }

  // After submitting, show a thank-you box instead of the form
  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>Thanks — we got your request.</h3>
        <p>Our team will reach out shortly. For emergencies, call {PHONE}.</p>
        <button type="button" className="link-btn" onClick={() => setSent(false)}>
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name *
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required />
      </label>

      <label>
        Phone *
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Best number"
          required
        />
      </label>

      <label className="full">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
        />
      </label>

      <label className="full">
        Service needed
        <select value={service} onChange={(event) => setService(event.target.value)}>
          <option value="">Select a service</option>
          {SERVICES.map((item) => (
            <option key={item.id}>{item.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>

      <label className="full">
        Message
        <textarea
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what’s going on with your system"
        />
      </label>

      <button type="submit" className="btn btn-primary full">
        {submitLabel}
      </button>
    </form>
  )
}
