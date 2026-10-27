import PageShell from '../../components/design2/PageShell'
import { PRIVACY } from '../../components/design2/content'

// Turns a section title into an id for the "On this page" links, e.g. "Cookies" -> "cookies"
function toId(title) {
  return title.toLowerCase().replace(/[^a-z]+/g, '-')
}

// Privacy Policy — the full text, with a list of sections that stays on screen while you scroll
export default function PrivacyPage() {
  return (
    <PageShell slug="privacy-policy" photo="/img/d2/work-6.jpg" lead={PRIVACY.intro}>
      <section className="d2-section">
        <div className="d2-container d2-legal">
          <aside>
            <p className="d2-mono">// On this page</p>
            <ol>
              {PRIVACY.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={'#' + toId(section.title)}>
                    <span className="d2-mono">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div>
            {PRIVACY.sections.map((section, index) => (
              <article key={section.title} id={toId(section.title)} className="d2-legal-block">
                <span className="d2-mono">§ {String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
