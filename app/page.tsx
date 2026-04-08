import { HeroSection } from "@/components/sections/hero"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { OfferPreviewSection } from "@/components/sections/offer-preview"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <OfferPreviewSection />
      <ContactSection />
    </>
  )
}
