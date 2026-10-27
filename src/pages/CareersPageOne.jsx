import { useState } from 'react'
import PageLayout from '../components/design1/PageLayout'
import Arrow from '../components/shared/Arrow'
import { PHONE, PHONE_HREF } from '../data'
import { CAREERS } from '../pageContent'

// Design 1 "Careers" page: open positions, perks and a job application form
export default function CareersPageOne() {
  return (
    <PageLayout
      label="Careers"
      title={CAREERS.headline}
      lead="Grow with a local team through education, support and skilled mentors."
      bg="/img/d1/rooftop-lift.jpg"
      showContact={false}
    >
      <section className="d1-section">
        <div className="d1-container d1-svc-split">
          <div>
            <h2>Join our team</h2>
            <div className="d1-actions">
              <a href="#apply" className="btn btn-primary">
                Apply now <Arrow />
              </a>
              <a href={PHONE_HREF} className="d1-textlink">
                or call {PHONE}
              </a>
            </div>
          </div>
          <div>
            {CAREERS.intro.map((paragraph, i) => (
              <p key={paragraph} className={i === 0 ? 'd1-svc-first' : 'd1-svc-text'}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="d1-svc-block">
        <div className="d1-container d1-svc-split">
          <div>
            <h2>Available positions</h2>
            <p className="d1-svc-text">We are currently hiring for the following opportunities.</p>
          </div>
          <ol className="d1-svc-steps">
            {CAREERS.positions.map((position, i) => (
              <li key={position.title}>
                <span className="d1-index-n">0{i + 1}</span>
                <div>
                  <h3>{position.title}</h3>
                  {position.body.map((paragraph) => (
                    <p key={paragraph} className="d1-svc-text">
                      {paragraph}
                    </p>
                  ))}
                  {position.duties.length > 0 && (
                    <>
                      <p className="d1-why-provide">Key responsibilities include:</p>
                      <ul className="d1-why-list">
                        {position.duties.map((duty) => (
                          <li key={duty}>{duty}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {position.duties.length === 0 && <p>Ask us about this role when you apply.</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="d1-svc-block">
        <div className="d1-container d1-svc-split">
          <h2>Why work with us?</h2>
          <ul className="d1-why-list d1-svc-checks is-wide">
            {CAREERS.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="d1-section d1-contact">
        <div className="d1-container d1-contact-grid">
          <div>
            <p className="d1-label">Apply</p>
            <h2>Start your career with K&amp;R.</h2>
            <p>Send us your details and resume. If you’re a good fit, one of our managers will reach out to schedule an interview.</p>
            <a href={PHONE_HREF} className="d1-bigphone">
              {PHONE}
            </a>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </PageLayout>
  )
}

// Job application form, styled like the contact form (the .form class)
function ApplicationForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [resume, setResume] = useState(null)

  // true = show the "thank you" message instead of the form
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    // There is no backend yet, so we just print the application in the console
    console.log('New job application:', { name, phone, email, position, resume: resume && resume.name })

    setName('')
    setPhone('')
    setEmail('')
    setPosition('')
    setResume(null)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>Thanks — we got your application.</h3>
        <p>One of our managers will be in touch if you’re a good fit.</p>
        <button type="button" className="link-btn" onClick={() => setSent(false)}>
          Send another application
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
        Position
        <select value={position} onChange={(event) => setPosition(event.target.value)}>
          <option value="">Select a position</option>
          {CAREERS.positions.map((item) => (
            <option key={item.title}>{item.title}</option>
          ))}
        </select>
      </label>

      <label className="full">
        Resume *
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setResume(event.target.files[0])}
          required
        />
      </label>

      <button type="submit" className="btn btn-primary full">
        Send application
      </button>
    </form>
  )
}
