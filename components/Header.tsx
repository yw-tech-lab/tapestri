'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const anchorPrefix = isHome ? '' : '/'

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-token-slow ${
      scrolled 
        ? 'bg-background-default/80 backdrop-blur-xl border-b border-border-default' 
        : 'bg-background-default/60 backdrop-blur-xl'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium text-text-primary">
            <a href="/" className="text-text-primary hover:text-text-secondary transition-colors duration-token-normal">Tapestri Collective</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href={`${anchorPrefix}#services`} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal">
              Services
            </a>
            <a href={`${anchorPrefix}#case-studies`} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal">
              Case Studies
            </a>
            <a href={`${anchorPrefix}#about`} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal">
              About
            </a>
            <a href={`${anchorPrefix}#contact`} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal">
              Contact
            </a>
            <button className="bg-primary-900 text-text-inverse px-5 py-2 rounded-token-full text-sm font-medium hover:bg-primary-800 transition-colors duration-token-normal">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
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
        <div className={`md:hidden overflow-hidden transition-all duration-token-normal ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-3">
            <a href={`${anchorPrefix}#services`} className="block text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href={`${anchorPrefix}#case-studies`} className="block text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </a>
            <a href={`${anchorPrefix}#about`} className="block text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href={`${anchorPrefix}#contact`} className="block text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <button className="w-full bg-primary-900 text-text-inverse px-6 py-2 rounded-token-full text-sm font-medium hover:bg-primary-800 transition-colors duration-token-normal">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

