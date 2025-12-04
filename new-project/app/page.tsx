import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ClientsSection from '@/components/ClientsSection'
import TechnologySection from '@/components/TechnologySection'
import AggregationSection from '@/components/AggregationSection'
import PersonalAccountSection from '@/components/PersonalAccountSection'
import ForITSection from '@/components/ForITSection'
import FreeTrialSection from '@/components/FreeTrialSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import MapSection from '@/components/MapSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ClientsSection />
      <TechnologySection />
      <AggregationSection />
      <PersonalAccountSection />
      <ForITSection />
      <FreeTrialSection />
      <TestimonialsSection />
      <MapSection />
      <ContactForm />
      <Footer />
      <FloatingCallButton />
    </main>
  )
}
