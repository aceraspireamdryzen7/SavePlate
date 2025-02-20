import Hero from '@/components/sections/Hero'
import Impact from '@/components/sections/Impact'
import HowItWorks from '@/components/sections/HowItWorks'
import MapPreview from '@/components/sections/MapPreview'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Impact />
      <HowItWorks />
      <MapPreview />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
} 