export interface CaseStudy {
  id: number
  slug: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  detailedChallenge: string
  detailedSolution: string
  approach: string[]
  technologies: string[]
  timeline: string
  results: {
    metric: string
    label: string
    description?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  image?: string
  gradient: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'childcare-network-evanston-redesign',
    title: 'Website Redesign & CMS Implementation',
    company: 'Childcare Network of Evanston',
    industry: 'Non-Profit',
    challenge: 'Website was difficult to update and customize, and lacked accessibility features and mobile-friendly responsive design. Staff found it difficult to maintain content consistency, and users - including families, caregivers, community members, educators, and donors - had difficulty finding relevant resources and information about programs, events, and services.',
    solution: 'We redesigned the entire website using Webflow with a modern CMS architecture, implemented responsive design with accessibility features, and created user-centered navigation organized by stakeholder groups. The new site features data-driven templates, dynamic content management, and improved information architecture.',
    detailedChallenge: 'The Childcare Network of Evanston (CNE), a non-profit connecting young learners and their families with high-quality, equitable early childhood experiences, needed to refresh their online presence. Their existing website was difficult to update and customize, had poor navigation and usability, and lacked accessibility features and mobile-friendly responsive design. Staff struggled to maintain content consistency, and users—including families, caregivers, community members, educators, and donors—had difficulty finding relevant resources and information about programs, events, and services.',
    detailedSolution: 'We conducted comprehensive stakeholder analysis to understand the needs of families, caregivers, community members, educators, and CNE staff. Through content analysis and card sorting exercises, we reorganized the information architecture with user-centered navigation grouped by stakeholder (e.g., "For Families," "For Supporters," "For Educators"). We researched and selected Webflow as the platform for its customization capabilities, integrated CMS, and ease of use. We designed and implemented data-driven templates using the Relume design system, migrated content to database tables within the CMS, and created dynamic components including a step-by-step guide for new families. The new site features responsive design across all devices, improved accessibility, and an intuitive content management system that allows staff to update content easily while maintaining visual consistency.',
    approach: [
      'Conducted stakeholder analysis to identify key user groups and their needs',
      'Performed content analysis and card sorting to reorganize information architecture',
      'Researched and evaluated CMS platforms (Wix, Squarespace, WordPress, Webflow)',
      'Designed user-centered navigation organized by stakeholder groups',
      'Created digital wireframes and high-fidelity mockups',
      'Implemented data architecture and CMS database tables',
      'Built responsive, data-driven Webflow templates using Relume design system',
      'Developed dynamic components and reusable templates',
    ],
    technologies: ['Webflow', 'Relume Design System', 'CMS', 'HTML', 'CSS', 'JavaScript'],
    timeline: '6 months',
    results: [
      { metric: '100%', label: 'Mobile Responsive', description: 'Fully responsive design across all devices' },
      { metric: 'Improved', label: 'Content Management', description: 'Intuitive CMS allows easy updates while maintaining consistency' },
      { metric: 'Enhanced', label: 'User Experience', description: 'Improved navigation and information organization by stakeholder' },
      { metric: 'Streamlined', label: 'Content Updates', description: 'Staff can now update content quickly and easily' },
    ],
    testimonial: {
      quote: 'The new website has transformed how we connect with our community. We\'re thrilled with the look and feel, and the improved ability to edit content while maintaining visual consistency. The increased user-friendliness and better organization make it so much easier for families to find the resources they need.',
      author: 'CNE Staff',
      role: 'Childcare Network of Evanston',
    },
    image: '/tapestri/images/cne/cne.png',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 2,
    slug: 'saas-dashboard-redesign',
    title: 'SaaS Dashboard Redesign',
    company: 'DataFlow Analytics',
    industry: 'SaaS',
    challenge: 'A complex analytics dashboard with poor UX that was difficult to navigate, leading to low user engagement and support tickets.',
    solution: 'We created an intuitive, data-driven dashboard with personalized views, advanced filtering, and real-time updates. The new design focused on user workflows and made complex data easily digestible.',
    detailedChallenge: 'DataFlow Analytics had built a powerful analytics platform, but users were struggling to find value in it. The dashboard was cluttered with 50+ widgets, navigation was confusing, and users couldn\'t customize their views. Support tickets were flooding in daily, and user retention was dropping month over month. The platform had all the right data but presented it in a way that overwhelmed users.',
    detailedSolution: 'We redesigned the entire dashboard experience with a user-centric approach. We conducted extensive user interviews to understand workflows and pain points. The new design features a clean, card-based layout with customizable widgets. We implemented smart defaults based on user roles, created intuitive filtering and search, and added real-time data updates. The dashboard now adapts to user behavior, showing the most relevant metrics first.',
    approach: [
      'Conducted 20+ user interviews to understand workflows',
      'Created user personas and journey maps',
      'Designed new component library and design system',
      'Built interactive prototypes for user testing',
      'Implemented role-based dashboard templates',
      'Developed real-time data streaming architecture',
    ],
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Node.js', 'PostgreSQL', 'Redis'],
    timeline: '4 months',
    results: [
      { metric: '60%', label: 'User Engagement', description: 'Daily active users increased by 60%' },
      { metric: '50%', label: 'Support Tickets', description: 'Support tickets reduced by half' },
      { metric: '2.5x', label: 'Daily Active Users', description: 'DAU increased from 1,200 to 3,000' },
      { metric: '85%', label: 'User Satisfaction', description: 'NPS score improved from 32 to 68' },
    ],
    testimonial: {
      quote: 'The new dashboard is a game-changer. Our users can finally find the insights they need quickly, and our support team has seen a dramatic reduction in tickets. The design is beautiful and functional.',
      author: 'Michael Rodriguez',
      role: 'Product Director, DataFlow Analytics',
    },
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    slug: 'healthcare-portal-modernization',
    title: 'Healthcare Portal Modernization',
    company: 'MediCare Connect',
    industry: 'Healthcare',
    challenge: 'An outdated patient portal with accessibility issues and security concerns, making it difficult for patients to access their health information.',
    solution: 'We built a secure, accessible, and user-friendly patient portal with HIPAA compliance, multi-factor authentication, and a clean interface. The platform now supports telemedicine appointments and prescription management.',
    detailedChallenge: 'MediCare Connect\'s patient portal was built in 2010 and hadn\'t been updated since. The interface was not accessible for users with disabilities, failed WCAG 2.1 compliance, and had security vulnerabilities. Patients struggled to schedule appointments, access test results, or communicate with their doctors. The portal had only 15% adoption rate, forcing patients to call the office for simple tasks.',
    detailedSolution: 'We built a modern, accessible patient portal from scratch with HIPAA compliance as the foundation. We implemented multi-factor authentication, encrypted all data in transit and at rest, and created an intuitive interface that works for all users. The new portal includes telemedicine capabilities, prescription refill requests, test result viewing, appointment scheduling, and secure messaging. We ensured full WCAG 2.1 AA compliance with screen reader support, keyboard navigation, and high contrast modes.',
    approach: [
      'Conducted accessibility audit and compliance review',
      'Engaged with patients and healthcare providers for feedback',
      'Designed HIPAA-compliant architecture and security protocols',
      'Built accessible UI components with ARIA labels',
      'Implemented telemedicine infrastructure',
      'Conducted security penetration testing',
    ],
    technologies: ['React', 'TypeScript', 'WebRTC', 'HIPAA-compliant Cloud', 'OAuth 2.0', 'Encryption', 'AWS'],
    timeline: '8 months',
    results: [
      { metric: '85%', label: 'Patient Satisfaction', description: 'Patient satisfaction score increased to 4.6/5' },
      { metric: '90%', label: 'Accessibility Score', description: 'WCAG 2.1 AA compliance achieved' },
      { metric: '55%', label: 'Portal Adoption', description: 'Adoption rate increased from 15% to 70%' },
      { metric: '40%', label: 'Call Volume Reduction', description: 'Office calls reduced by 40%' },
    ],
    testimonial: {
      quote: 'The new portal has transformed how our patients interact with our practice. It\'s secure, accessible, and easy to use. Our staff can focus on patient care instead of answering routine questions.',
      author: 'Dr. Emily Watson',
      role: 'Chief Medical Officer, MediCare Connect',
    },
    gradient: 'from-green-500 to-emerald-500',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug)
}

