'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LoginButton from '../Button/LoginButton'
import SignUpButton from '../Button/SignUpButton'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`w-full bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 lg:shadow-none ${isMenuOpen ? 'shadow-[0_2px_4px_rgba(0,0,0,0.1)]' : ''}`}>
      <div className="container container-global">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="font-neutiva text-2xl font-bold text-primary uppercase">
              sixfinity
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="font-neutiva text-sm text-text-primary hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/program" className="font-neutiva text-sm text-text-primary hover:text-primary transition-colors">
              Why Choose Us
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
           <LoginButton />
           <SignUpButton />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 mt-4 pt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={toggleMenu}
                className="font-neutiva text-sm text-text-primary hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/program" 
                onClick={toggleMenu}
                className="font-neutiva text-sm text-text-primary hover:text-primary transition-colors py-2"
              >
                Why Choose Us
              </Link>
              <div className="flex flex-row gap-3 pt-2">
                <LoginButton />
                <SignUpButton />
              </div>
            </div>
          </div>
        )}
    </div>
    </nav>
  )
}

export default Navbar