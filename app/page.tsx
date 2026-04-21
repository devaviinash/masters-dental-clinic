import HeroSection from "@/components/HeroSection";
import MeetDoctors from "@/components/MeetDoctors";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurValues from "@/components/about/OurValues";
import Achievements from "@/components/about/Achievements";
import ServicesGrid from "@/components/services/ServicesGrid";
import PremiumCTA from "@/components/PremiumCTA";
import BeforeAfter from "@/components/BeforeAfter";
import GallerySection from "@/components/GallerySection";

export default function Home() {
   return (
      <main className="min-h-screen">
         <HeroSection />
         <MeetDoctors />
         <ServicesGrid />
         <BeforeAfter />
         <GallerySection />
         <OurValues />
         <Achievements />
         <TestimonialsSection />
         <PremiumCTA />
      </main>
   );
}
