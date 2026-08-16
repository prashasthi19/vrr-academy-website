import { useState } from 'react'
import { Link } from 'react-router-dom'

const admissionFormUrl =
  import.meta.env.VITE_ADMISSION_FORM_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Integrated Program', href: '#integrated' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Achievers', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-darkBlue to-primaryBlue text-white z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100 sm:text-base">
              In Academic Association with Shanti Niketan PU College
            </div>
            <div className="mt-1 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-yellow-800 sm:text-sm">
              Admissions Open
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <img
                src="/VRR1.jpeg"
                alt="VRR Career Academy Logo"
                className="h-12 transition-transform duration-200 group-hover:scale-105"
              />
              <div className="leading-none">
                <div className="text-base font-black text-darkBlue sm:text-lg">VRR Career Academy</div>
              </div>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-primaryBlue px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-darkBlue sm:inline-flex"
              >
                Apply Now
              </a>

              <button
                onClick={toggleMenu}
                className="rounded-lg p-2 transition-colors hover:bg-gray md:hidden"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6 text-darkText" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="border-t border-slate-200 pb-4 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-full bg-primaryBlue px-4 py-3 text-center text-sm font-bold text-white"
                onClick={closeMenu}
              >
                Apply Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
