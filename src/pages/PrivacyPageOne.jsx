import PageLayout from '../components/design1/PageLayout'
import { PRIVACY } from '../pageContent'

// Design 1 "Privacy Policy" page — same layout as the service-page blocks (title left, text right)
export default function PrivacyPageOne() {
  return (
    <PageLayout label="Privacy policy" title="Privacy policy" lead={PRIVACY.intro} bg="/img/d1/indoor-units.jpg">
      {PRIVACY.sections.map((section) => (
        <section key={section.title} className="d1-svc-block">
          <div className="d1-container d1-svc-split">
            <h2>{section.title}</h2>
            <div>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="d1-svc-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageLayout>
  )
}
