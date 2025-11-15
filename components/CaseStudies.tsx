'use client'

import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Real results from real clients
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 150} direction="up">
              <Link href={`/case-studies/${study.slug}`} className="block group">
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - Content */}
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 text-sm">{study.company}</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 tracking-tight">
                        {study.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-8 font-light">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Right side - Visual */}
                    <div className="bg-gray-100 p-12 md:p-16 flex items-center justify-center">
                        {study.image ? <img src={study.image} alt={study.title} className="w-full h-full object-contain max-w-[350px]" /> : <div className="text-2xl">Image Goes Here</div>}
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

