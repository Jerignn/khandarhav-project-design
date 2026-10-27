// Content for the extra pages (About, Careers, Financing, Our Work, Privacy Policy).
// All wording comes from the matching pages on kandrhvac.com (only typos fixed),
// so these pages live inside our site instead of sending people to the old one.

// The maintenance plan PDF, saved in /public/docs so it opens from our own site
export const MAINTENANCE_PDF = '/docs/maintenance-plan.pdf'

export const ABOUT = {
  intro: [
    'At K&R Heating & Cooling our priority is to earn the trust of the community by delivering superior heating and cooling services with an unmatched client experience. We strive to meet and exceed the expectations of our customers, resulting in the highest levels of respect from our community and a rewarding environment for our employees to succeed.',
    'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust.',
  ],
  guarantee:
    'When you call K&R Heating & Cooling, it’s not a gamble. We back up all of our work with a true 30-day 100% satisfaction guarantee. You can be confident knowing that your home comfort is our #1 priority!',
  photo: '/img/d1/team-trucks.jpg',
}

// Customer reviews from K&R's About page
export const REVIEWS = [
  {
    quote:
      'Beyond impressed. He was thorough, honest and helpful. The other company went straight to need to replace and we can’t get it operating until you figure out how much you wanna spend. K&R came in with options and got it running. He understood that we needed quality options and gave them to us.',
    name: 'Stacy F.',
  },
  {
    quote:
      'I have found the K&R team to be reliable & communicative. They worked on a unit that I sent them out to take care of. They are reasonably priced and are better than the ones that you can get at the boxed stores locally!',
    name: 'Ellysa W.',
  },
  {
    quote: 'Have a complete system replacement. Very pleased with the entire process. Very professional and timely.',
    name: 'Kuhler',
  },
  {
    quote:
      'K&R is simply the best! They provide fast reliable service at a fair price. You can trust them with all of your heating and cooling needs.',
    name: 'Shawn C.',
  },
  {
    quote:
      'Ben was prompt, polite, and proficient. Got us up and running in a jiffy. We were cool again before noon on one of the hottest days of summer so far. Highly recommend.',
    name: 'Hayden W.',
  },
  {
    quote:
      'The team does a great job of taking care of our air-conditioners and heaters during the annual maintenance checks. K&R just offered a dryer vent clean-out which I had them do and now the dryer works much better. Thank you for all you do to keep my equipment working properly.',
    name: 'Lynda A.',
  },
]

export const CAREERS = {
  headline: 'Now hiring HVAC technicians!',
  intro: [
    'K&R Heating & Cooling is a trusted heating & cooling service provider with an unmatched client experience. Our goal is to help our team grow through education, support and skilled mentors.',
    'We are always on the lookout for ambitious and skilled professionals to join our ranks. If you are looking for a rewarding career in the heating and cooling service industry please fill out the form below and upload your resume or give us a call. If we feel that you are a good fit, one of our managers will be in touch to schedule an interview!',
  ],
  positions: [
    {
      title: 'HVAC Installer',
      body: [
        'We have an immediate opening for an HVAC installer to accurately install top-of-the-line heating and air conditioning equipment for our customers. As an HVAC Installer, you will travel to our client’s properties with new HVAC equipment and replace old equipment, inform customers about the new HVAC system, and teach the customer how to use their new thermostat.',
        'A successful candidate will need excellent organizational, troubleshooting, communication, and problem-solving skills. Their essential duty is to provide professional guidance and advice for clients.',
      ],
      duties: [
        'Inspect the effectiveness and safety of current customers’ HVAC systems',
        'Remove and replace HVAC systems in existing and new construction homes and businesses',
        'Perform installation of HVAC related equipment following manufacturer’s specifications',
        'Start up new central systems and troubleshoot any problems on startup',
        'Program and set up thermostats with customers and help them understand their new equipment',
        'Comply with service standards, work instructions, and customers’ requirements',
        'Support other team members so tasks are completed on time as instructed by management',
        'Create and maintain cordial and collaborative working relationships with superiors and co-workers',
        'Ensure all paperwork needed for each job is accurately filled out',
      ],
    },
    {
      title: 'HVAC Service Technician',
      body: [],
      duties: [],
    },
  ],
  perks: [
    'Health & dental benefits',
    'Company truck provided',
    'Bonus & commission pay',
    'Holidays off',
    'Technical training provided',
  ],
}

export const FINANCING = {
  intro: [
    'Like most people, you’ve got a lot of financial commitments to meet each month. When you are faced with needing to purchase a new air conditioner or furnace when your budget already feels stretched, we can help.',
    'We provide homeowners with simple and affordable financing options for new heating and cooling systems.',
  ],
  benefits: [
    'Flexible options',
    'Competitive interest rates',
    'Monthly payments',
    'Fast, convenient application process',
    'Potential for long-term savings when purchasing a higher efficiency system',
  ],
  outro: 'Contact us today to find out more about your financing options.',
}

// Project photos from K&R's "Our Work" page
export const OUR_WORK = [
  { src: '/img/d1/work/work-1.jpg', alt: 'Crew lifting a rooftop unit into place' },
  { src: '/img/d1/work/work-2.jpg', alt: 'New Trane rooftop package unit' },
  { src: '/img/d1/work/work-3.jpg', alt: 'Indoor air handlers installed side by side' },
  { src: '/img/d1/work/work-4.jpg', alt: 'K&R truck and crane on a commercial job site' },
  { src: '/img/d1/work/work-5.jpg', alt: 'Ductwork running through a new commercial build' },
  { src: '/img/d1/work/work-6.jpg', alt: 'Row of new condensers beside a stone building' },
  { src: '/img/d1/work/work-7.jpg', alt: 'K&R truck outside a finished commercial building' },
]

export const PRIVACY = {
  intro:
    'The following discloses the information gathering and dissemination practices for K&R Heating & Cooling. We reserve the right to modify the information contained herein at any time without prior notice. If we do make changes to our privacy policies, we will modify this page accordingly.',
  sections: [
    {
      title: 'Information collected from normal browsing',
      body: [
        'Like many websites, we collect certain information when you access our site. When you browse, read, or download information from this site, data is collected by us, including but not limited to your IP address, URL request, browser type, web pages visited, and date and time of your request. We use this information to generate statistics and measure site activity, so that we can improve the usefulness of the site to our visitors and for other business purposes. For example, we track which pages are most popular among visitors. Currently, we handle this information on an aggregated basis and do not use this information to identify any users.',
        'We often use analytics companies, such as Webtrends, Google Analytics and others, to assist us, and we may use additional or different service providers in the future.',
      ],
    },
    {
      title: 'Information you provide',
      body: [
        'At several places on the site, K&R Heating & Cooling asks you to provide additional information so that we can respond to inquiries from you. For example, we may ask for your name, your email address, and your location, or may ask for other information about you. We will use this information to contact you, administer mailing lists or online communities, or other activities related to the mission or services of K&R Heating & Cooling. You do not have to provide us with this information to use many features of the site, but we will be unable to provide you with certain information unless you do so. We will manage and store this information as an ordinary business record. Should you wish to unsubscribe from receiving future communications from K&R Heating & Cooling, submit a request to be removed from our mailing list.',
      ],
    },
    {
      title: 'Disclosure of information',
      body: [
        'Available log records, account information, and all data stored on servers hosting this website, our blogs and any other online sites we use may be accessed by our system administrators who may make the information available to other K&R Heating & Cooling personnel for business purposes.',
        'K&R Heating & Cooling may share information that you have provided to us, including your name and email address, with our affiliated franchisors and with the companies that provide analytical services to us in support of the website. In some circumstances, we may share information that you have provided to one or more of our franchisees located in your area.',
        'In addition, we may share information that you have provided to us with non-affiliated third parties where we think doing so may allow you to receive information regarding products and services that may be useful to you.',
        'Finally, we will provide information that you have given us when required by legal process to do so, such as by a subpoena.',
      ],
    },
    {
      title: 'Cookies',
      body: [
        'Cookies are small computer files placed on your computer by our site. Our site may use both session and permanent cookies. Session cookies make it easier to use our site by, for example, enabling you to move through the site without having to reenter your personal information on each page. Session cookies are deleted automatically when you close your browser.',
        'In addition, our site also uses permanent cookies to facilitate our registration and login functions, we may also use cookies to recognize when you return to our website. In addition, some cookies may be set by advertising networks that provide advertising services on our website. In some instances, cookies set by those networks may trigger specific advertisements based on the parts of our site, and other websites, that your browser visits.',
      ],
    },
    {
      title: 'Posting',
      body: [
        'Posting or updating content is a public action, and all content may be publicly visible. All content may be retained for restorative, archival, research or business purposes by K&R Heating & Cooling.',
      ],
    },
    {
      title: 'Security',
      body: [
        'K&R Heating & Cooling employs reasonable administrative and technical security measures in place to help protect against loss, misuse and alteration of the information under our control. However, as with any Internet website, it is not possible to guarantee that the site will not be attacked or that information you provided may not be compromised.',
      ],
    },
    {
      title: 'Other websites',
      body: [
        'This website may contain links to independently run websites outside of this one. K&R Heating & Cooling is not responsible for the privacy practices or content of such websites. We encourage you to read the privacy policies of any websites you visit from this website and its accompanying blog.',
      ],
    },
  ],
}
