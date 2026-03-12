'use client'

import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { servicesFeatures } from '@/data/servicesData'

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background-default">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-text-primary tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
              Everything you need to create stunning digital experiences
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {servicesFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up" className="h-full">
              <div className="group border border-border-default rounded-token-xl px-7 py-8 h-full flex flex-col bg-background-default/90 backdrop-blur-sm hover:bg-background-secondary/80 hover:border-border-hover transition-colors duration-token-normal">
                <h3 className="text-xs uppercase tracking-[0.18em] text-text-tertiary mb-2">
                  {feature.shortLabel}
                </h3>
                <h4 className="text-2xl font-light mb-4 text-text-primary">
                  {feature.title}
                </h4>
                <div className="text-text-secondary leading-relaxed font-light flex-1 flex flex-col space-y-3">
                  {feature.intro}
                  <Link
                    href="/services"
                    className="mt-4 text-sm font-medium text-text-primary inline-flex items-center gap-1"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

