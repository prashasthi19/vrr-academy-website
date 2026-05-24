import Hero from '../components/Hero'
import Achievers from '../components/Achievers'
import Courses from '../components/Courses'
import WhyChooseUs from '../components/WhyChooseUs'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Achievers />
      <Courses />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  )
}
