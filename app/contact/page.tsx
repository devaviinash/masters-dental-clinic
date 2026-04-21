import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
   title: "Contact Us | Dr Inamdar's Master's Dental Clinic, Thane - Book Appointment",
   description:
      "Contact Dr Inamdar's Master's Dental Clinic in Thane. Call +91 99238 78673 or visit us. Expert dental care by Dr. Mohsin & Dr. Harshada Minne.",
};

export default function ContactPage() {
   return (
      <main className="min-h-screen pt-20 md:pt-24">
         <ContactHeader />
         <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="max-w-7xl mx-auto -mt-12 sm:-mt-16 md:-mt-20 relative z-10">
               <div className="grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
                  <ContactForm />
                  <ContactDetails />
               </div>
            </div>
         </div>
         <ContactMap />
      </main>
   );
}
