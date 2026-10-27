import PageLayout from '../components/design1/PageLayout'
import { OUR_WORK } from '../pageContent'

// Design 1 "Our Work" page: a photo gallery of K&R's jobs
export default function OurWorkPageOne() {
  return (
    <PageLayout
      label="Our work"
      title="Recent projects"
      lead="Residential and commercial installs across the Texas Hill Country."
      bg="/img/d1/rooftop-lift.jpg"
    >
      <section className="d1-section">
        <div className="d1-container">
          <div className="d1-gallery">
            {OUR_WORK.map((photo) => (
              <figure key={photo.src} className="d1-gallery-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
