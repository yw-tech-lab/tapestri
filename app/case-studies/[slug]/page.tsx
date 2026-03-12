import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/caseStudies'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.company} | Tapestri Collective`,
    description: caseStudy.challenge,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background-default">
      <ScrollProgress />
      <Header />

      {/* Main content */}
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-sm text-text-tertiary hover:text-text-primary transition-colors duration-token-normal mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to case studies
          </Link>

          <div className="space-y-20">
            {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.3fr)] gap-16 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-text-tertiary mb-4">
                  Case study · {caseStudy.industry}
                </p>
                <h1 className="text-5xl md:text-6xl font-light mb-4 text-text-primary tracking-tight">
                  {caseStudy.company}
                </h1>
                <p className="text-2xl font-light text-text-primary mb-6">
                  {caseStudy.title}
                </p>
                <p className="text-xl text-text-secondary max-w-3xl font-light">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="space-y-6">
                <div className="border border-border-default rounded-token-xl px-6 py-5 bg-background-secondary/70">
                  <h2 className="text-sm uppercase tracking-[0.16em] text-text-tertiary mb-3">
                    At a glance
                  </h2>
                  <dl className="space-y-2 text-sm text-text-secondary">
                    <div className="flex justify-between gap-4">
                      <dt className="text-text-tertiary">Industry</dt>
                      <dd className="text-text-primary">{caseStudy.industry}</dd>
                    </div>
                    {caseStudy.timeline && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-text-tertiary">Timeline</dt>
                        <dd className="text-text-primary">{caseStudy.timeline}</dd>
                      </div>
                    )}
                    {caseStudy.platforms.length > 0 && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-text-tertiary">Platform</dt>
                        <dd className="text-text-primary">
                          {caseStudy.platforms.join(', ')}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                {caseStudy.services.length > 0 && (
                  <div>
                    <h2 className="text-sm uppercase tracking-[0.16em] text-text-tertiary mb-3">
                      Services
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 bg-background-secondary text-text-secondary rounded-token-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-light mb-4 text-text-primary">The challenge</h2>
                <p className="text-lg text-text-secondary leading-relaxed font-light">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-light mb-4 text-text-primary">Our approach</h2>
                <p className="text-lg text-text-secondary leading-relaxed font-light">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <div className="border border-border-default rounded-token-2xl px-8 py-10 bg-background-secondary/60">
                <h2 className="text-3xl font-light mb-6 text-text-primary">
                  Outcomes
                </h2>
                <ul className="list-disc list-outside pl-6 space-y-2 text-lg text-text-secondary leading-relaxed font-light">
                  {caseStudy.outcomes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background-default">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-text-primary tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary mb-12 font-light">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-primary-900 text-text-inverse px-8 py-3 rounded-token-full text-base font-medium hover:bg-primary-800 transition-colors duration-token-normal"
              >
                Get Started
              </Link>
              <Link
                href="/#case-studies"
                className="text-text-primary px-8 py-3 rounded-token-full text-base font-medium hover:bg-background-secondary transition-colors duration-token-normal"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

