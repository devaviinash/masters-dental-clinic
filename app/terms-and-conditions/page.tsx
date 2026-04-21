import TermsAndConditionsContent from "@/components/legal/TermsAndConditionsContent";

export const metadata = {
   title: "Terms & Conditions | Dr Inamdar's Master's Dental Clinic & Implant Center",
   description:
      "Terms and Conditions for Dr Inamdar's Master's Dental Clinic & Implant Center. Read our terms of service, appointment policies, and patient responsibilities.",
};

export default function TermsAndConditionsPage() {
   return (
      <main className="min-h-screen pt-20 md:pt-24">
         <TermsAndConditionsContent />
      </main>
   );
}
