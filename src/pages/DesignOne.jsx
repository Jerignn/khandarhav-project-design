import Header from '../components/design1/Header'
import Hero from '../components/design1/Hero'
import Coupon from '../components/design1/Coupon'
import ServiceIndex from '../components/design1/ServiceIndex'
import WhyChooseUs from '../components/design1/WhyChooseUs'
import Review from '../components/design1/Review'
import Contact from '../components/design1/Contact'
import Footer from '../components/design1/Footer'

// Design 1 homepage — same sections, in the same order, as kandrhvac.com
export default function DesignOne() {
  return (
    <div className="d1">
      <Header />
      <main>
        <Hero />
        <Coupon />
        <ServiceIndex />
        <WhyChooseUs />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
