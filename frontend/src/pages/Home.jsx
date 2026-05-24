import { Suspense, lazy, useEffect } from 'react'
import { setSeoMeta, addOrganizationSchema } from '../utils/seo'

const Hero = lazy(() => import('../components/Hero'))
const Achievers = lazy(() => import('../components/Achievers'))
const Courses = lazy(() => import('../components/Courses'))
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'))
const Features = lazy(() => import('../components/Features'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const Contact = lazy(() => import('../components/Contact'))

// Loading component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray">
    <div className="text-center">
      <div className="inline-block">
        <div className="w-12 h-12 border-4 border-primaryBlue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600">Loading section...</p>
    </div>
  </div>
)

export default function Home() {
  useEffect(() => {
    // Set SEO meta tags for home page
    setSeoMeta(
      'VRR Academy - Excellence in JEE, NEET & Foundation Coaching',
      'Transform your dreams into reality with VRR Academy. Expert faculty, proven methodology, and personalized mentoring for JEE, NEET, and Foundation courses. 98% success rate.',
      'https://vrr-academy.com/og-image.jpg',
      'https://vrr-academy.com'
    )

    // Add structured data
    addOrganizationSchema()

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Achievers />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Courses />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
  )
}
