'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200' 
        : 'bg-white/60 backdrop-blur-xl'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium text-gray-900">
            Tapestri Collective
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Services
            </a>
            <a href="#case-studies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Case Studies
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Contact
            </a>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-3">
            <a href="#features" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#case-studies" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </a>
            <a href="#about" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <button className="w-full bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

