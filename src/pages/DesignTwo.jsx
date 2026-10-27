import Fonts from '../components/design2/Fonts'
import Header from '../components/design2/Header'
import Hero from '../components/design2/Hero'
import PlanCard from '../components/design2/PlanCard'
import ServiceGrid from '../components/design2/ServiceGrid'
import WhyChooseUs from '../components/design2/WhyChooseUs'
import Review from '../components/design2/Review'
import Contact from '../components/design2/Contact'
import Footer from '../components/design2/Footer'

// Design 2 homepage — same sections, in the same order, as kandrhvac.com
export default function DesignTwo() {
  return (
    <div className="d2">
      <Fonts />
      <Header />
      <main>
        <Hero />
        <PlanCard />
        <ServiceGrid />
        <WhyChooseUs />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
