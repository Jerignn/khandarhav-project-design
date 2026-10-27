import PageShell from '../../components/design2/PageShell'
import Gallery from '../../components/design2/Gallery'
import Arrow from '../../components/design2/Arrow'
import { OUR_WORK } from '../../components/design2/content'

// Our Work — K&R's project photos
export default function OurWorkPage() {
  return (
    <PageShell
      slug="our-work"
      photo="/img/parallax.jpg"
      lead="We service commercial and residential homes and buildings. Here are a few of our jobs."
      actions={
        <a href="#contact" className="d2-btn d2-btn-primary">
          Get a free quote <Arrow />
        </a>
      }
      contactNumber="02"
    >
      <section className="d2-section">
        <div className="d2-container">
          <div className="d2-section-head">
            <p className="d2-mono">// 01 — Project log</p>
            <h2>Jobs from our crews</h2>
            <p className="d2-why-text">Click any photo to see it bigger.</p>
          </div>
          <Gallery photos={OUR_WORK} />
        </div>
      </section>
    </PageShell>
  )
}
