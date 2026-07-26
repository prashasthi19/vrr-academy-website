import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-primaryBlue rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">VRR</span>
            </div>
            <span className="hidden sm:block font-bold text-lg text-darkBlue">VRR Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-darkText font-medium hover:text-primaryBlue hover:bg-lightBlue rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Hamburger */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block px-6 py-2 bg-primaryBlue text-white font-semibold rounded-lg hover:bg-darkBlue transform hover:scale-105 transition-all duration-200 shadow-md">
              Enroll Now
            </a>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-darkText"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-darkText font-medium hover:text-primaryBlue hover:bg-lightBlue rounded-lg transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block w-full mt-4 px-4 py-2 bg-primaryBlue text-white font-semibold rounded-lg hover:bg-darkBlue transition-colors text-center" onClick={closeMenu}>
              Enroll Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
