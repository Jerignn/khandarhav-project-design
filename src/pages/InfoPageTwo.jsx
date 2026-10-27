import { Navigate, useParams } from 'react-router-dom'
import AboutPage from './design2/AboutPage'
import OurWorkPage from './design2/OurWorkPage'
import PromotionsPage from './design2/PromotionsPage'
import FinancingPage from './design2/FinancingPage'
import CareersPage from './design2/CareersPage'
import PrivacyPage from './design2/PrivacyPage'

// Design 2's extra pages. The address decides which one: /design-2/careers, /design-2/our-work, …
const PAGES = {
  about: AboutPage,
  'our-work': OurWorkPage,
  promotions: PromotionsPage,
  financing: FinancingPage,
  careers: CareersPage,
  'privacy-policy': PrivacyPage,
}

export default function InfoPageTwo() {
  const { page } = useParams()
  const Page = PAGES[page]

  // Unknown address — go back to the Design 2 homepage
  if (!Page) {
    return <Navigate to="/design-2" replace />
  }

  return <Page />
}
