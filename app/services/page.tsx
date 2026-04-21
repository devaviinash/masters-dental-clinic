import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
   title: "Our Services | Dr Inamdar's Master's Dental Clinic, Dapodi - Comprehensive Care",
   description:
      "Expert dental services at Dr Inamdar's Master's Dental Clinic in Dapodi. Specializing in dental implants, oral medicine, maxillofacial radiology, and comprehensive dental care by experienced specialist.",
};

export default function ServicesPage() {
   return (
      <main className="min-h-screen">
         <ServicesHero />
         <ServicesGrid />
         <ServicesCTA />
      </main>
   );
}
