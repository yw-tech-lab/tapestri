import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Case Study Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#case-studies"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 ease-smooth transform hover:scale-105"
          >
            View All Case Studies
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

