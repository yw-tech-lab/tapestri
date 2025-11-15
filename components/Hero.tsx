export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 animate-slide-up leading-[1.1] tracking-tight text-gray-900">
            Tapestri Collective
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-200 font-light leading-relaxed">
            Weave your story into the digital fabric of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
            <button className="text-gray-900 px-8 py-3 rounded-full text-base font-medium hover:bg-gray-50 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a href="#services" className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <svg className="w-5 h-5 text-gray-400 animate-bounce hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}

