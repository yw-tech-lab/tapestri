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
  image: string
  gradient: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'ecommerce-platform-transformation',
    title: 'E-Commerce Platform Transformation',
    company: 'RetailTech Solutions',
    industry: 'E-Commerce',
    challenge: 'A legacy e-commerce platform struggling with slow load times and poor mobile experience, resulting in high bounce rates and lost sales.',
    solution: 'We redesigned the entire platform with a modern tech stack, implementing server-side rendering, optimized images, and a mobile-first responsive design. The new architecture reduced load times by 75% and improved mobile conversion rates.',
    detailedChallenge: 'RetailTech Solutions was facing a critical challenge with their decade-old e-commerce platform. The legacy system was built on outdated technology that couldn\'t handle modern traffic demands. Page load times averaged 8-12 seconds, mobile users experienced frequent crashes, and the checkout process had a 65% abandonment rate. The platform was losing an estimated $2M annually in potential revenue due to poor user experience.',
    detailedSolution: 'Our team conducted a comprehensive audit and identified key bottlenecks in the architecture. We rebuilt the platform from the ground up using Next.js for server-side rendering, implemented a headless CMS for content management, and created a progressive web app (PWA) for mobile users. We optimized all images using next-gen formats, implemented lazy loading, and created a CDN strategy that reduced global load times. The new checkout flow was streamlined from 5 steps to 2, with one-click purchasing for returning customers.',
    approach: [
      'Conducted comprehensive user research and analytics review',
      'Performed technical audit and performance benchmarking',
      'Designed new information architecture and user flows',
      'Built MVP with core functionality in 8 weeks',
      'Implemented A/B testing for checkout optimization',
      'Launched progressive rollout with feature flags',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Headless CMS', 'Stripe', 'AWS', 'Vercel'],
    timeline: '6 months',
    results: [
      { metric: '75%', label: 'Faster Load Times', description: 'Average page load reduced from 8s to 2s' },
      { metric: '3x', label: 'Mobile Conversions', description: 'Mobile conversion rate increased from 1.2% to 3.6%' },
      { metric: '40%', label: 'Revenue Increase', description: 'Annual revenue increased by $2.8M' },
      { metric: '65%', label: 'Checkout Completion', description: 'Checkout abandonment reduced from 65% to 23%' },
    ],
    testimonial: {
      quote: 'Tapestri Collective transformed our entire digital presence. The new platform not only looks amazing but performs flawlessly. Our customers love the experience, and our revenue has never been higher.',
      author: 'Sarah Chen',
      role: 'CEO, RetailTech Solutions',
    },
    image: '🛒',
    gradient: 'from-blue-500 to-cyan-500',
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
    image: '📊',
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
    image: '🏥',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug)
}

