'use client'

import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">
              About
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Crafting digital experiences with precision and purpose
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                At Tapestri Collective, we believe that great design is invisible. It doesn&apos;t call attention to itself—it simply works, beautifully and effortlessly. We weave together technology and artistry to create digital experiences that feel natural, intuitive, and delightful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                Our approach is rooted in simplicity. We strip away the unnecessary, focus on what matters, and craft every detail with intention. The result is software that doesn&apos;t just function—it inspires.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We work with forward-thinking companies who understand that exceptional design is not a luxury, but a necessity. Together, we build products that people love to use.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-gray-200">
              <div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  To create digital experiences that are both beautiful and meaningful, where form and function exist in perfect harmony.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Simplicity, clarity, and attention to detail guide everything we do. We believe in doing less, but doing it better.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  We collaborate closely with our clients, understanding their vision and translating it into elegant, purposeful design.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

