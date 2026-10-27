import { useState } from 'react'
import { PHONE, PHONE_HREF } from '../../data'

// Job application form for the Careers page, in the same ticket style as the contact form.
// `positions` = the job titles to choose from
export default function ApplyForm({ positions }) {
  // One piece of state for each input box
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [resume, setResume] = useState(null)
  const [message, setMessage] = useState('')

  // true = show the "thank you" message instead of the form
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    // There is no backend yet, so we just print the application in the console.
    // Later this is where we would send it (and the resume file) to K&R.
    console.log('New job application:', { name, email, phone, position, resume: resume && resume.name, message })

    setName('')
    setEmail('')
    setPhone('')
    setPosition('')
    setResume(null)
    setMessage('')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="d2-form-done" role="status">
        <p className="d2-mono">Application received</p>
        <h3>Thanks for applying!</h3>
        <p>
          If we feel that you are a good fit, one of our managers will be in touch to schedule an interview. Questions?
          Call <a href={PHONE_HREF}>{PHONE}</a>.
        </p>
        <button type="button" className="d2-btn d2-btn-ghost" onClick={() => setSent(false)}>
          Send another application
        </button>
      </div>
    )
  }

  return (
    <form className="d2-form" onSubmit={handleSubmit}>
      <label className="d2-field">
        <span className="d2-mono">01 · Full name *</span>
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

      <label className="d2-field">
        <span className="d2-mono">03 · Email *</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          required
        />
      </label>

      <label className="d2-field">
        <span className="d2-mono">04 · Position</span>
        <select value={position} onChange={(event) => setPosition(event.target.value)}>
          <option value="">Select a position</option>
          {positions.map((title) => (
            <option key={title}>{title}</option>
          ))}
        </select>
      </label>

      {/* The real file input is hidden behind a styled box that shows the chosen file's name */}
      <label className="d2-field is-full">
        <span className="d2-mono">05 · Resume *</span>
        <span className="d2-file">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => setResume(event.target.files[0] || null)}
            required
          />
          <span className="d2-file-btn">Choose file</span>
          <span className="d2-file-name">{resume ? resume.name : 'PDF or Word document'}</span>
        </span>
      </label>

      <label className="d2-field is-full">
        <span className="d2-mono">06 · Anything else?</span>
        <textarea
          rows="3"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Experience, certifications, when you can start…"
        />
      </label>

      <button type="submit" className="d2-btn d2-btn-primary is-full">
        Submit application
      </button>
    </form>
  )
}
