'use client'

import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-32 bg-background-default">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-text-primary tracking-tight">
              About
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-text-secondary leading-relaxed font-light mb-6">
                Tapestri Tech Collective is a women-led network of designers and developers who build websites and digital tools for nonprofits, small businesses, and community organizations.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed font-light mb-6">
                We focus on clear design, accessible technology, and solutions that organizations can confidently maintain over time. We are committed to building long-lasting relationships with our clients, providing ongoing support and maintenance to ensure their digital presence continues to thrive.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <section id="contact" className="mt-16">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-text-primary tracking-tight">
                Contact
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed font-light">
                Reach us at{' '}
                <a
                  href="mailto:info@tapestri.tech"
                  className="text-primary underline underline-offset-2"
                >
                  info@tapestri.tech
                </a>
                .
              </p>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

