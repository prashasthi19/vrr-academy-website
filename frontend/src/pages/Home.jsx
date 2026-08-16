import { Suspense, lazy, useEffect } from 'react'
import { setSeoMeta, addOrganizationSchema } from '../utils/seo'

const Hero = lazy(() => import('../components/Hero'))
const Achievers = lazy(() => import('../components/Achievers'))
const Courses = lazy(() => import('../components/Courses'))
const IntegratedProgram = lazy(() => import('../components/IntegratedProgram'))
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'))
const Features = lazy(() => import('../components/Features'))
const AcademicLeadership = lazy(() => import('../components/AcademicLeadership'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const Contact = lazy(() => import('../components/Contact'))
const AdmissionsProcess = lazy(() => import('../components/AdmissionsProcess'))
const AdmissionsCTA = lazy(() => import('../components/AdmissionsCTA'))

const SectionLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray">
    <div className="text-center">
      <div className="inline-block">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primaryBlue border-t-transparent" />
      </div>
      <p className="mt-4 text-gray-600">Loading section...</p>
    </div>
  </div>
)

export default function Home() {
  useEffect(() => {
    setSeoMeta(
      'VRR Career Academy | PU Integrated Academy for KCET, JEE & NEET in Bengaluru',
      'VRR Career Academy offers PU integrated coaching for PCMB, PCMC and PCME with PU Boards, KCET, JEE and NEET preparation in Bengaluru. Admissions open.',
      'https://vrr-academy.com/og-image.jpg',
      'https://vrr-academy.com'
    )

    addOrganizationSchema()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <IntegratedProgram />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Courses />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AcademicLeadership />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdmissionsProcess />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Achievers />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdmissionsCTA />
      </Suspense>
    </div>
  )
}
