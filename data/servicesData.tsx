import { ReactNode } from 'react'

export interface ServiceFeature {
  title: string
  shortLabel: string
  intro: ReactNode
  highlights: ReactNode
}

export const servicesFeatures: ServiceFeature[] = [
  {
    title: 'Starter Professional Presence',
    shortLabel: 'Tier 1',
    intro: (
      <p className="mb-3">
        Best for small businesses and organizations that need a polished website without a long, custom process.
        We tailor one of our proven templates to your brand so you can launch quickly and confidently.
      </p>
    ),
    highlights: (
      <>
        <p className="font-medium mb-1">Highlights:</p>
        <ul className="list-disc list-outside pl-6 space-y-1 [list-style-type:disc]">
          <li>Customized template website in Squarespace or Webflow</li>
          <li>Up to 6 pages</li>
          <li>Mobile-friendly design</li>
          <li>Basic SEO setup</li>
          <li>Domain and hosting support</li>
          <li>One training session + 30 days of post-launch support</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Strategic Growth Website',
    shortLabel: 'Tier 2',
    intro: (
      <p className="mb-3">
        Best for organizations that need more than a website refresh. This package combines strategy and implementation
        to help you clarify your message, organize your content, and build a site that supports growth.
      </p>
    ),
    highlights: (
      <>
        <p className="font-medium mb-1">Highlights:</p>
        <ul className="list-disc list-outside pl-6 mb-3 space-y-1 [list-style-type:disc]">
          <li>Everything in Tier 1, plus expanded site scope up to 10 pages</li>
          <li>Strategy workshop to clarify audience, goals, and site priorities</li>
          <li>Strategy brief with recommended page structure and messaging direction</li>
          <li>Low-fidelity wireframes for key pages</li>
          <li>Accessibility, performance, and analytics setup</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Custom Build',
    shortLabel: 'Tier 3',
    intro: (
      <p className="mb-3">
        Best for established organizations with complex needs, custom functionality, or a more tailored user experience.
        We design and build a fully custom website around your goals, audiences, and long-term plans.
      </p>
    ),
    highlights: (
      <>
        <p className="font-medium mb-1">Highlights:</p>
        <ul className="list-disc list-outside pl-6 space-y-1 [list-style-type:disc]">
          <li>Custom design and development</li>
          <li>Full discovery and strategy process</li>
          <li>UX planning and information architecture</li>
          <li>Advanced functionality and integrations</li>
          <li>Advanced SEO, accessibility, analytics, and post-launch support</li>
        </ul>
      </>
    ),
  },
]
