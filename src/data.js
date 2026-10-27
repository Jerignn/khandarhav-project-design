// Content shared by both design directions.
// Every fact here comes from kandrhvac.com — nothing invented (no address, hours or license are published).

export const PHONE = '830-792-3993'
export const PHONE_HREF = 'tel:+18307923993'
export const CITY = 'Kerrville, TX'

// `images` = photos from K&R's own service pages, shown in a carousel on hover
// `slug`   = the end of the service page address, e.g. /design-1/services/furnaces
export const SERVICES = [
  {
    id: 'maintenance',
    title: 'Maintenance Plans',
    body: 'Scheduled tune-ups that catch small problems before they turn into expensive ones.',
    images: ['/img/parallax.jpg', '/img/ac.jpg', '/img/furnace.jpg'],
    season: 'both',
    slug: 'maintenance-plans',
  },
  {
    id: 'ac',
    title: 'Air Conditioners',
    body: 'Repair, replacement and installation for every make and model.',
    images: ['/img/services/air-conditioners.jpg', '/img/ac.jpg', '/img/parallax.jpg'],
    season: 'summer',
    slug: 'air-conditioners',
  },
  {
    id: 'furnace',
    title: 'Furnaces',
    body: 'Safe, reliable heat — from no-heat calls to full furnace replacements.',
    images: ['/img/services/furnaces.jpg', '/img/furnace.jpg'],
    season: 'winter',
    slug: 'furnaces',
  },
  {
    id: 'air-handler',
    title: 'Air Handlers',
    body: 'Keep air moving efficiently through every room of your home.',
    images: ['/img/services/air-handler.jpg', '/img/furnace.jpg'],
    season: 'both',
    slug: 'air-handlers',
  },
  {
    id: 'ductless',
    title: 'Ductless Cooling & Heating',
    body: 'Zoned comfort for additions, garages and rooms without ductwork.',
    images: ['/img/services/ductless.jpg', '/img/ductless.jpg'],
    season: 'summer',
    slug: 'ductless-cooling-heating',
  },
  {
    id: 'heat-pump',
    title: 'Heat Pumps',
    body: 'One efficient system that heats in winter and cools in summer.',
    images: ['/img/services/heat-pump.jpg', '/img/parallax.jpg'],
    season: 'winter',
    slug: 'heat-pumps',
  },
  {
    id: 'iaq',
    title: 'Indoor Air Quality Units',
    body: 'Cleaner, healthier air through filtration and purification.',
    images: ['/img/services/indoor-air-quality.jpg', '/img/hero.jpg'],
    season: 'both',
    slug: 'indoor-air-quality-units',
  },
  {
    id: 'commercial',
    title: 'Commercial HVAC Services',
    body: 'Heating and cooling for offices, shops and commercial properties.',
    images: ['/img/services/commercial.jpg', '/img/commercial.jpg'],
    season: 'both',
    slug: 'commercial-hvac-services',
  },
]

export const REVIEWS_URL = 'https://kandrhvac.com/about#customer-reviews'
export const PRIVACY_URL = 'https://kandrhvac.com/privacy-policy'

// "Why choose us" — wording from K&R's homepage
export const WHY_US = [
  'We service all makes & models',
  'Free estimates on new installations',
  '24/7 emergency services',
  'Certified technicians',
]

export const BADGES = [
  { src: '/img/badge-tcs.png', alt: 'Trane Comfort Specialist' },
  { src: '/img/badge-nate.png', alt: 'NATE certified' },
  { src: '/img/badge-ductless.png', alt: 'Ductless Pro' },
  { src: '/img/badge-google.png', alt: 'Google Reviews' },
]

// Offer banner — wording from K&R's homepage
export const PROMO = {
  intro: 'Take advantage of our offer',
  headline: '15% off',
  sub: 'your preventive maintenance plan',
  fine: '* Conditions apply',
}

export const MISSION = [
  'At K&R Heating & Cooling our priority is to earn the trust of the community by delivering superior heating and cooling services with an unmatched client experience.',
  'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust.',
]

export const REVIEW = {
  quote:
    'Beyond impressed. He was thorough, honest and helpful. The other company went straight to need to replace and we can’t get it operating until you figure out how much you wanna spend. K&R came in with options and got it running. He understood that we needed quality options and gave them to us.',
  name: 'Stacy F.',
}

// Homepage hero — wording from K&R's homepage
export const HERO = {
  kicker: 'Locally owned & operated',
  title: 'Your home comfort is our #1 priority',
}

// The 4 service tiles K&R shows on its homepage ("Heating & Cooling Services").
// `images` start with the same product photo K&R uses on that tile, then the service page photos.
export const HOME_SERVICES = [
  {
    label: 'Air Conditioners',
    slug: 'air-conditioners',
    images: ['/img/ac.jpg', '/img/services/air-conditioners.jpg', '/img/parallax.jpg'],
  },
  {
    label: 'Furnaces',
    slug: 'furnaces',
    images: ['/img/furnace.jpg', '/img/services/furnaces.jpg'],
  },
  {
    label: 'Ductless',
    slug: 'ductless-cooling-heating',
    images: ['/img/ductless.jpg', '/img/services/ductless.jpg'],
  },
  {
    label: 'Commercial HVAC',
    slug: 'commercial-hvac-services',
    images: ['/img/commercial.jpg', '/img/services/commercial.jpg'],
  },
]

// Pages that only exist on K&R's current website — the menu links straight to them
export const KR_PAGES = {
  careers: 'https://kandrhvac.com/careers/',
  financing: 'https://kandrhvac.com/financing/',
  ourWork: 'https://kandrhvac.com/our-work/',
}
