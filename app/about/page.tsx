import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import MeetOurTeam from "@/components/about/MeetOurTeam";

export const metadata = {
   title: "About Us | Dr Inamdar's Master's Dental Clinic, Dapodi",
   description:
      "Learn about Dr Inamdar's Master's Dental Clinic in Dapodi, founded by Dr. Mohsin & Dr. Harshada Minne. Specialist in Oral Medicine & Maxillofacial Radiology with 15+ years experience.",
};

export default function AboutPage() {
   return (
      <main className="min-h-screen">
         <AboutHero />
         <OurStory />
         {/* <OurValues /> */}
         {/* <Achievements /> */}
         <MeetOurTeam />
         <OurMission />
         {/* <ClinicTour /> */}
      </main>
   );
}
