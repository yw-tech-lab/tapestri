import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { servicesFeatures } from '@/data/servicesData'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background-default">
      <ScrollProgress />
      <Header />

      <section className="pt-32 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-text-tertiary mb-4">
                Services
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-text-primary tracking-tight">
                Websites that grow with you.
              </h1>
              <p className="text-xl text-text-secondary max-w-xl font-light mb-8">
                Three levels of partnership, from a fast-track launch to a fully custom build.
                Every engagement is designed to feel calm, considered, and deeply aligned with your goals.
              </p>
              <p className="text-sm text-text-tertiary max-w-md">
                Start where you are today and know that your site can evolve over time—without starting from scratch.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 items-stretch">
              {servicesFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border border-border-default rounded-token-xl px-8 py-10 bg-background-default/80 backdrop-blur-sm"
                >
                  <h2 className="text-sm uppercase tracking-[0.18em] text-text-tertiary mb-2">
                    {feature.shortLabel}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-text-primary">
                    {feature.title}
                  </h3>
                  <div className="text-text-secondary leading-relaxed font-light space-y-3">
                    {feature.intro}
                    <div>{feature.highlights}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
