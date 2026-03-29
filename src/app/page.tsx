import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "HVAC Rescue LLC | Trusted HVAC Repair & Installation in Walker & Cullman Counties, AL",
  description: "Fast & reliable HVAC repair, replacement, and maintenance in Jasper, Walker County, and Cullman County, Alabama. Licensed pros, same-day emergency service, free estimates. Call 205-471-9474.",
  alternates: {
    canonical: "https://hvacrescuellc.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "HVAC Rescue LLC",
  description: "Fast & reliable HVAC repair, replacement, and maintenance serving Walker and Cullman Counties, Alabama.",
  url: "https://hvacrescuellc.com",
  telephone: "+1-205-471-9474",
  email: "hvacrescues@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1507 Josephine St",
    addressLocality: "Jasper",
    addressRegion: "AL",
    postalCode: "35501",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.8312,
    longitude: -87.2775,
  },
  areaServed: [
    { "@type": "County", name: "Walker County, Alabama" },
    { "@type": "County", name: "Cullman County, Alabama" },
  ],
  serviceType: [
    "HVAC Repair",
    "HVAC Replacement",
    "HVAC Maintenance",
    "Indoor Air Quality",
    "Duct Deodorization",
    "Ductwork Repair & Sealing",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/profile.php/?id=61562969425101",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
