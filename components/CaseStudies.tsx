'use client'

import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-background-secondary">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-text-primary tracking-tight">
              Case Studies
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
              Real results from real clients
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 150} direction="up">
              <Link href={`/case-studies/${study.slug}`} className="block group">
                <div className="bg-background-default rounded-token-2xl border border-border-default hover:border-border-hover transition-all duration-token-normal overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - Content */}
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-background-tertiary text-text-secondary text-xs font-medium rounded-token-full">
                          {study.industry}
                        </span>
                        <span className="text-text-tertiary">•</span>
                        <span className="text-text-secondary text-sm">{study.company}</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-light mb-6 text-text-primary tracking-tight">
                        {study.title}
                      </h3>

                      <p className="text-text-secondary leading-relaxed mb-8 font-light">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Right side - Visual */}
                    <div className="bg-background-tertiary p-12 md:p-16 flex items-center justify-center">
                        <div className="text-2xl">Image Goes Here</div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

