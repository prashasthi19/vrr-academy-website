import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const admissionFormUrl =
  import.meta.env.VITE_ADMISSION_FORM_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false)
  const [isMobileCoursesExpanded, setIsMobileCoursesExpanded] = useState(false)
  const aboutDropdownRef = useRef(null)
  const coursesDropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen)
  const toggleCoursesDropdown = () => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)

  const toggleMobileAbout = () => setIsMobileAboutExpanded(!isMobileAboutExpanded)
  const toggleMobileCourses = () => setIsMobileCoursesExpanded(!isMobileCoursesExpanded)

  const aboutDropdownItems = [
    { label: 'About VRR Academy', href: '/about' },
    { label: 'Founder & Principal', href: '/about#leadership' },
  ]

  const coursesDropdownItems = [
    { label: 'VRR Courses', href: '/courses' },
  ]

  const navLinks = [
    { label: 'Home', href: '/#home', isRoute: false },
    { label: 'Integrated Program', href: '/#integrated', isRoute: false },
    { label: 'Achievers', href: '/#achievements', isRoute: false },
    { label: 'Contact Us', href: '/#contact', isRoute: false },
  ]

  const handleNavLinkClick = (href) => {
    closeMenu()

    if (location.pathname !== '/') {
      navigate(href)
      return
    }

    const hash = href.includes('#') ? href.split('#')[1] : null

    if (hash) {
      const element = document.getElementById(hash)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  const handleDropdownItemClick = () => {
    setIsAboutDropdownOpen(false)
    setIsCoursesDropdownOpen(false)
    closeMenu()
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false)
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
        setIsCoursesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdowns when route changes
  useEffect(() => {
    setIsAboutDropdownOpen(false)
    setIsCoursesDropdownOpen(false)
    setIsMobileAboutExpanded(false)
    setIsMobileCoursesExpanded(false)
  }, [location])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-y-[6px] border-primaryGold bg-gradient-to-r from-darkBlue to-primaryBlue text-white z-50">
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

      <nav className="fixed top-20 left-0 right-0 z-40 border-y-[6px] border-primaryGold bg-white shadow-lg">
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
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue"
                    onClick={() => handleNavLinkClick(link.href)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue"
                    onClick={() => handleNavLinkClick(link.href)}
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* Courses Dropdown */}
              <div className="relative" ref={coursesDropdownRef}>
                <button
                  onClick={toggleCoursesDropdown}
                  aria-haspopup="true"
                  aria-expanded={isCoursesDropdownOpen}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue"
                >
                  Courses
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isCoursesDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {isCoursesDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 rounded-lg border border-slate-200 bg-white shadow-lg z-50">
                    {coursesDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-3 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue first:rounded-t-lg last:rounded-b-lg"
                        onClick={handleDropdownItemClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us Dropdown */}
              <div className="relative" ref={aboutDropdownRef}>
                <button
                  onClick={toggleAboutDropdown}
                  aria-haspopup="true"
                  aria-expanded={isAboutDropdownOpen}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue"
                >
                  About Us
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isAboutDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-56 rounded-lg border border-slate-200 bg-white shadow-lg z-50">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-3 text-sm font-medium text-darkText transition-colors duration-200 hover:bg-lightBlue hover:text-primaryBlue first:rounded-t-lg last:rounded-b-lg"
                        onClick={handleDropdownItemClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue"
                    onClick={() => {
                      handleNavLinkClick(link.href)
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue"
                    onClick={() => {
                      handleNavLinkClick(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* Mobile Courses Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={toggleMobileCourses}
                  aria-haspopup="true"
                  aria-expanded={isMobileCoursesExpanded}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue"
                >
                  Courses
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileCoursesExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {isMobileCoursesExpanded && (
                  <div className="mt-2 space-y-1 bg-slate-50 rounded-lg p-2">
                    {coursesDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-3 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue rounded"
                        onClick={handleDropdownItemClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About Us Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={toggleMobileAbout}
                  aria-haspopup="true"
                  aria-expanded={isMobileAboutExpanded}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue"
                >
                  About Us
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileAboutExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {isMobileAboutExpanded && (
                  <div className="mt-2 space-y-1 bg-slate-50 rounded-lg p-2">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-3 py-2 text-sm font-medium text-darkText transition-colors hover:bg-lightBlue hover:text-primaryBlue rounded"
                        onClick={handleDropdownItemClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-3 block w-auto rounded-full bg-primaryBlue px-4 py-3 text-center text-sm font-bold text-white"
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
