import TestimonialsContent from "@/components/testimonials/TestimonialsContent";
import TestimonialsStats from "@/components/testimonials/TestimonialsStats";

export const metadata = {
   title: "Patient Testimonials | Dr Inamdar's Master's Dental Clinic, Dapodi",
   description:
      "Read real patient testimonials and reviews about Dr Inamdar's Master's Dental Clinic in Dapodi. Discover why patients trust Dr. Mohsin Minne & Dr. Harshada Minne for their dental care.",
};

export default function TestimonialsPage() {
   return (
      <main className="min-h-screen pt-20 md:pt-24">
         <TestimonialsContent />
         {/* <TestimonialsStats /> */}
      </main>
   );
}
