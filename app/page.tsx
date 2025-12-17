import { Navbar } from "@/components/navbar"
import { Hero3D } from "@/components/hero-3d"
import { VideoSection } from "@/components/video-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero3D />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
