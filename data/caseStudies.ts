export type CaseStudy = {
    id: number
    slug: string
    title: string
    company: string
    industry: string
    summary: string
    challenge: string
    solution: string
    services: string[]
    platforms: string[]
    timeline?: string
    outcomes: string[]
    image: string
  }

export const caseStudies: CaseStudy[] = [
    {
      id: 1,
      slug: "childcare-network-of-evanston",
      title: "Website Redesign & Platform Migration",
      company: "Childcare Network of Evanston",
      industry: "Nonprofit",
  
      summary:
        "We redesigned the Childcare Network of Evanston website and migrated it from NationBuilder to Webflow. The new site is easier for staff to update and makes it simpler for families and community members to find resources.",
  
      challenge:
        "The existing NationBuilder site was difficult to update and hard for visitors to navigate. CNE needed a clearer structure and a platform that staff could manage more easily.",
  
      solution:
        "We reorganized the site around the different audiences CNE serves and rebuilt it in Webflow with a CMS structure that makes content easier to maintain.",
  
      services: [
        "Website redesign",
        "Information architecture",
        "CMS setup",
        "Platform migration",
        "Accessibility improvements",
      ],
  
      platforms: ["NationBuilder → Webflow"],
  
      outcomes: [
        "Clearer navigation organized by audience",
        "Easier content updates for staff",
        "Improved mobile usability",
        "More consistent page design",
      ],
  
      image: "/images/cne/cne.png",
    },
  
    {
      id: 2,
      slug: "the-aux-evanston",
      title: "Website Refresh & Platform Migration",
      company: "The Aux Evanston",
      industry: "Community Space",
  
      summary:
        "The Aux had an existing Wix website that needed a clearer structure and more flexibility. We refreshed the design and migrated the site to WordPress to create a more stable and maintainable platform.",
  
      challenge:
        "The existing Wix site had grown uneven over time and was difficult to maintain. The organization needed a clearer structure and a platform that allowed for more flexibility going forward.",
  
      solution:
        "We refreshed the design, reorganized the content structure, and migrated the site to WordPress so the team could manage and expand it more easily.",
  
      services: [
        "Website refresh",
        "Content reorganization",
        "Platform migration",
        "Mobile improvements",
      ],
  
      platforms: ["Wix → WordPress"],
  
      outcomes: [
        "Clearer page structure",
        "More consistent design",
        "Improved mobile experience",
        "More flexible platform for future updates",
      ],
  
      image: "/images/aux/aux.png",
    },
  
    {
      id: 3,
      slug: "embrace-your-crown",
      title: "New Website Design & Build",
      company: "Embrace Your Crown",
      industry: "Salon",
  
      summary:
        "We designed and built a new WordPress website for Embrace Your Crown from scratch. The site creates a polished online presence and makes it easier for clients to learn about services.",
  
      challenge:
        "The business needed a professional website that reflected the brand and helped potential clients understand services and get in touch.",
  
      solution:
        "We designed and built a new WordPress site focused on clarity, visual consistency, and ease of navigation across devices.",
  
      services: [
        "Website design",
        "WordPress development",
        "Content structure",
        "Mobile optimization",
      ],
  
      platforms: ["WordPress"],
  
      outcomes: [
        "Clear presentation of services",
        "More polished online presence",
        "Improved mobile usability",
        "Stronger first impression for new clients",
      ],
  
      image: "/images/eyc/eyc.png",
    },
  ];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug)
}

