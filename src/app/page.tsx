import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <TrustSection />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </>
  );
}
