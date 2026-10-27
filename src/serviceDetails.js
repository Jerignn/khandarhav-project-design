// The full content for each service page, keyed by the service `id` in data.js.
// All wording comes from K&R's own service pages on kandrhvac.com (only typos fixed).
//
// `intro`    = the opening paragraphs
// `sections` = lists on the page. An item is either a plain string, or { name, note } when it has a short description.
// `promise`  = the closing paragraph

const GUARANTEE =
  'When you call K&R Heating & Cooling, it’s not a gamble. We back up all of our work with a true 30-day 100% satisfaction guarantee. We want to be the last company you ever need to call. You can be confident knowing that your home comfort is our #1 priority.'

const MAINTENANCE_BENEFITS = [
  'Comfort when it matters the most',
  'Lower energy costs',
  'Longer lifespan of your systems',
  'Cleaner air',
  'Less chance of costly repairs',
]

export const SERVICE_DETAILS = {
  maintenance: {
    tagline: 'Two complete tune-ups a year, so small problems never become big ones.',
    intro: [
      'Our preventative maintenance plan covers the complete inspection and tune-up of your HVAC equipment two times per year.',
    ],
    pdf: 'https://kandrhvac.com/wp-content/uploads/2022/08/PM-Plan-8_22-Google-Docs.pdf',
    sections: [
      {
        title: 'Plan benefits',
        wide: true,
        items: [
          '10% parts & labor discount',
          'Discounts on new equipment',
          'Lower utility bills',
          'One emergency service call per year',
          'Priority service',
          'Extended equipment life',
          'Improved system reliability',
          'One 1″ filter per maintenance check',
        ],
      },
      {
        title: 'Every tune-up includes a 20+ point inspection',
        wide: true,
        items: [
          'Check refrigerant charge',
          'Check all safety controls',
          'Check/clean evaporator & condenser coils',
          'Check for vibration & noise',
          'Check voltages',
          'Lubricate motors, as necessary',
          'Check/adjust gas pressures',
          'Check all capacitors',
          'Seal leaks in air handler/furnace',
          'Check amp draws on motor(s) & compressor(s)',
          'Check ductwork for cleanliness & leaks',
          'Clear condensate drain lines',
          'Change filters',
          'Check thermostat calibration & operations',
          'Check & tighten electrical connections',
          'Check for proper combustion',
          'Remove debris in & around condenser',
          'Spray inside air handler with fungicide',
        ],
      },
    ],
    promise:
      'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust.',
  },

  ac: {
    tagline: 'No one wants to get stuck in the heat on a hot Texas day.',
    intro: [
      'That’s why K&R Heating & Cooling is happy to provide our customers with 24/7 emergency services on all makes and models of air conditioning systems.',
      'When you combine superior products with the outstanding workmanship of our technicians, you can be confident that your comfort systems will consistently meet or exceed your needs, season after comfortable season. We’re fully trained to perform maintenance on any brand.',
    ],
    sections: [
      {
        title: 'Our air conditioning services include',
        items: [
          { name: 'Installation', note: 'Installation of new cooling systems.' },
          { name: 'Upgrades', note: 'Upgrading to new or more efficient systems.' },
          {
            name: 'Repair & maintenance',
            note: 'Repair and maintenance of existing systems to ensure they continue running as efficiently and for as long as possible.',
          },
        ],
      },
      {
        title: 'Benefits of regular maintenance',
        lead: 'Avoid breakdowns and expensive repairs by regularly maintaining your cooling systems.',
        items: [
          'Comfort when it matters the most',
          'Lower energy costs',
          'Longer lifespan on your air conditioning units',
          'Cleaner air',
          'Less chance of costly repairs',
        ],
      },
    ],
    promise:
      'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust. Contact us today to book your repair, service or installation.',
  },

  furnace: {
    tagline: 'As a homeowner, keeping your home comfortable all year round is your top priority.',
    intro: [
      'Our technicians are NATE-certified and ready to repair any brand of system you have, 24/7.',
      'At K&R, we work with our customers to provide trusted heating solutions. Heating systems control temperature, humidity, and the general quality of the air in your home or business. Our technicians can assess your space, comfort, and efficiency requirements and provide you with the best solution for your needs.',
    ],
    sections: [
      {
        title: 'Our services include',
        items: [
          { name: 'Installation', note: 'Installation of new heating systems.' },
          { name: 'Upgrades', note: 'Upgrading to new or more efficient systems.' },
          {
            name: 'Repair & maintenance',
            note: 'Repair and maintenance of existing systems to ensure they continue to run as efficiently and for as long as possible.',
          },
        ],
      },
      {
        title: 'We will never sell you something you don’t need',
        text: 'Our technicians are not salespeople, and they do not earn commissions. No matter the service, we will never try to sell you something that we don’t truly feel you would benefit from.',
      },
    ],
    promise:
      'At K&R, we want to be the last heating and cooling company you ever need to call. We won’t be satisfied until we are 100% sure that you are. We look forward to serving you and earning your trust!',
  },

  'air-handler': {
    tagline: 'Comfortable air, circulated through every room in every season.',
    intro: [
      'Air handlers work with your A/C or heat pump to circulate warm and cool air throughout your home. These systems are designed to keep your home comfortable throughout any season.',
      'In addition to helping regulate temperature and improve circulation, air handlers can also help regulate humidity and clean the air as it’s processed.',
    ],
    sections: [
      {
        title: 'Our services include',
        items: [
          { name: 'Repair', note: 'From minor repairs to emergency fixes.' },
          {
            name: 'Replacement',
            note: 'If a repair is not possible, we provide you with the most effective options that fit your needs.',
          },
          {
            name: 'Installation',
            note: 'Precise installation performed by our NATE-certified technicians ensures optimal and lasting performance.',
          },
        ],
      },
      { title: 'Benefits of regular maintenance', items: MAINTENANCE_BENEFITS },
    ],
    promise: GUARANTEE,
  },

  ductless: {
    tagline: 'Efficient comfort for a whole home or a single room — no ductwork needed.',
    intro: [
      'Ductless systems, commonly referred to as mini-splits, are able to control the temperature in your entire home or a single room. They are energy-efficient and can heat and cool without the fuss of ductwork.',
      'Whether you live in a newer or older home, or are adding an addition, ductless systems are an efficient way to expand your comfort, no matter the obstacles your space presents.',
    ],
    sections: [
      {
        title: 'Why choose ductless?',
        items: [
          'Affordable heating and cooling solution for spaces without ductwork',
          'Efficient energy usage because they operate in selected areas',
          'Savings on energy bills',
          'Simple installation and maintenance',
          'Environmentally friendly',
        ],
      },
      {
        title: 'Benefits of regular maintenance',
        lead: 'K&R Heating & Cooling can assist, whether you require a seasonal tune-up or are unsure of the date your system was last inspected. Maintaining your system is not only wise, but also significantly less expensive than paying for repairs or replacement.',
        items: [
          'Avoid frequent repairs and the likelihood of system failure',
          'Maintain energy-efficiency and keep energy bills down',
          'Keep your air clean and healthy',
        ],
      },
    ],
    promise: GUARANTEE,
  },

  'heat-pump': {
    tagline: 'One system that heats in winter, cools in summer and controls humidity.',
    intro: [
      'In addition to heating your home, heat pumps provide cooling and humidity control. In the winter, they pump warm air into your home and move cool air out. In the summer, they do the opposite to keep your space cool.',
      'There are a number of benefits of having a heat pump as either your primary or secondary heating and cooling source.',
    ],
    stat: {
      value: '30%',
      label:
        'Pairing a heat pump with a furnace can save up to 30% on the energy a furnace alone uses to generate heat.',
    },
    sections: [
      {
        title: 'Benefits of a heat pump',
        items: [
          'Two-in-one heating and cooling unit',
          'Energy-efficient operation',
          'Reduced wear and tear on your furnace and air conditioner',
        ],
      },
      {
        title: 'Our services include',
        items: ['New installations', 'Repairs', 'Tune-ups & maintenance'],
      },
    ],
    promise: GUARANTEE,
  },

  iaq: {
    tagline: 'The right temperature is only half of comfort. The air matters too.',
    intro: [
      'While having the right temperature is critical to your comfort, the quality of the air circulating can have a significant impact on your comfort and health as well.',
      'Allergens, dust, pet dander, chemicals, and other contaminants pollute your indoor air and continue to circulate until they are removed. Too much or too little moisture can also cause a number of issues.',
    ],
    sections: [
      {
        title: 'Signs you may benefit from improved air quality',
        items: [
          'Respiratory problems',
          'Irritated skin and eyes',
          'Headaches',
          'Mold and mildew',
          'Dry, brittle furniture and nosebleeds',
        ],
      },
      {
        title: 'Ways we remove these unwanted elements',
        items: ['Whole home air cleaners', 'Humidifiers and dehumidifiers', 'UV treatment', 'And more!'],
      },
    ],
    promise: GUARANTEE,
  },

  commercial: {
    tagline: 'When the heat or AC fails at work, you need to act quickly.',
    intro: [
      'If heating or air conditioning fails in a commercial building, you need to act quickly to ensure the comfort of your employees and customers.',
      'At K&R Heating & Cooling our technicians are familiar with all aspects of a commercial HVAC system and can respond quickly and efficiently to all your comfort needs so you can continue working as usual. We’re happy to provide tailored solutions for a wide variety of businesses.',
    ],
    sections: [
      {
        title: 'Our commercial HVAC services include',
        items: ['New installation', 'Replacements', 'Repairs', 'Maintenance'],
      },
      {
        title: 'Types of commercial properties we service',
        lead: 'We understand that no two businesses are alike, which is why we offer custom heating and cooling solutions. Our experts have specialized training on all types of HVAC systems and can come up with a configuration that suits your company’s needs.',
        items: ['Retail stores', 'Restaurants', 'Office buildings', 'Warehouses', 'Churches', 'And more'],
      },
    ],
    promise: GUARANTEE,
  },
}
