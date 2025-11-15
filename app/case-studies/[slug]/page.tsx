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
    <main className="min-h-screen overflow-visible">
      <ScrollProgress />
      <Header />
      
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 py-20`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/#case-studies" 
            className="inline-flex items-center mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-mdtext-sm font-medium rounded-full">
                {caseStudy.industry}
              </span>
              <span className=" font-semibold">{caseStudy.company}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl max-w-3xl">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background-default">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-text-primary">The Challenge</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {caseStudy.detailedChallenge}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-text-primary">Our Solution</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {caseStudy.detailedSolution}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-background-secondary to-background-default rounded-3xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Key Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${caseStudy.gradient} bg-clip-text text-transparent mb-2`}>
                      {result.metric}
                    </div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{result.label}</div>
                    {result.description && (
                      <div className="text-sm text-text-secondary">{result.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-text-primary">Our Approach</h2>
            <ol className="space-y-2 list-decimal pl-8">
              {caseStudy.approach.map((step, index) => (
                <li key={index} className="text-text-secondary text-lg leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Technologies & Timeline */}
      <section className="py-20 bg-background-default">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-text-primary">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-0 bg-background-tertiary text-text-secondary rounded-token-full font-medium hover:bg-primary-100 transition-colors duration-token-slow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-text-primary">Timeline</h2>
                <div className="text-2xl font-bold text-text-primary mb-2">{caseStudy.timeline}</div>
                <p className="text-text-secondary">From initial consultation to launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className={`py-20 bg-gradient-to-br ${caseStudy.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-white/50 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="text-white/90">
                <div className="font-semibold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-white/80">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

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

