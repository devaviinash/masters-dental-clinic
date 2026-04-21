import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata = {
   title: "Privacy Policy | Dr Inamdar's Master's Dental Clinic & Implant Center",
   description:
      "Privacy Policy for Dr Inamdar's Master's Dental Clinic & Implant Center. Learn how we collect, use, and protect your personal and medical information.",
};

export default function PrivacyPolicyPage() {
   return (
      <main className="min-h-screen pt-20 md:pt-24">
         <PrivacyPolicyContent />
      </main>
   );
}
