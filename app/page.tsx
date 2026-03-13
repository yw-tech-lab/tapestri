import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen overflow-visible relative">
      <ScrollProgress />
      <Header />
      <Hero />
      {/* <Features />
      <CaseStudies /> */}
      <About />
      <Footer />
    </main>
  )
}

