import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/shared/ScrollToTop'
import BackToDesigns from './components/shared/BackToDesigns'
import Overview from './pages/Overview'
import DesignOne from './pages/DesignOne'
import DesignTwo from './pages/DesignTwo'
import ServicePageOne from './pages/ServicePageOne'
import ServicePageTwo from './pages/ServicePageTwo'
import AboutPageOne from './pages/AboutPageOne'
import CareersPageOne from './pages/CareersPageOne'
import FinancingPageOne from './pages/FinancingPageOne'
import OurWorkPageOne from './pages/OurWorkPageOne'
import PrivacyPageOne from './pages/PrivacyPageOne'
import InfoPageTwo from './pages/InfoPageTwo'
import './styles/base.css'
import './styles/overview.css'
import './styles/design1.css'
import './styles/design2.css'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/design-1" element={<DesignOne />} />
        <Route path="/design-2" element={<DesignTwo />} />
        <Route path="/design-1/services/:slug" element={<ServicePageOne />} />
        <Route path="/design-1/about" element={<AboutPageOne />} />
        <Route path="/design-1/careers" element={<CareersPageOne />} />
        <Route path="/design-1/financing" element={<FinancingPageOne />} />
        <Route path="/design-1/our-work" element={<OurWorkPageOne />} />
        <Route path="/design-1/privacy-policy" element={<PrivacyPageOne />} />
        <Route path="/design-2/services/:slug" element={<ServicePageTwo />} />
        {/* Design 2's About, Our Work, Promotions, Financing, Careers and Privacy Policy pages */}
        <Route path="/design-2/:page" element={<InfoPageTwo />} />
        <Route path="*" element={<Overview />} />
      </Routes>
      <BackToDesigns />
    </>
  )
}
