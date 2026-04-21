"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
   IconFileText,
   IconCalendar,
   IconCreditCard,
   IconAlertTriangle,
   IconShieldCheck,
   IconUser,
   IconPhone,
   IconMail,
} from "@tabler/icons-react";

export default function TermsAndConditionsContent() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   const sections = [
      {
         icon: IconFileText,
         title: "Acceptance of Terms",
         content: [
            {
               text: "By scheduling an appointment, visiting our clinic, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you (the patient or legal guardian) and Dr Inamdar's Master's Dental Clinic & Implant Center.",
            },
            {
               text: "If you do not agree with any part of these terms, please inform our staff immediately and refrain from using our services. We reserve the right to modify these terms at any time, and continued use of our services following any changes constitutes acceptance of those changes.",
            },
         ],
      },
      {
         icon: IconCalendar,
         title: "Appointment Scheduling and Cancellation",
         content: [
            {
               subtitle: "Scheduling Appointments",
               text: "Appointments can be scheduled by phone, email, or through our website. We will confirm your appointment via phone call or SMS. Please arrive 10-15 minutes before your scheduled appointment time to complete any necessary paperwork.",
            },
            {
               subtitle: "Cancellation Policy",
               text: "We request at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who may be waiting. Failure to provide adequate notice may result in a cancellation fee at the discretion of the clinic.",
            },
            {
               subtitle: "Late Arrivals",
               text: "If you arrive more than 15 minutes late for your appointment, we may need to reschedule to avoid delays for other patients. We strive to respect everyone's time and maintain our schedule.",
            },
            {
               subtitle: "Emergency Appointments",
               text: "We make every effort to accommodate dental emergencies. If you have a dental emergency, please call us immediately, and we will do our best to see you as soon as possible.",
            },
         ],
      },
      {
         icon: IconUser,
         title: "Patient Responsibilities",
         content: [
            {
               subtitle: "Medical History",
               text: "You are responsible for providing complete and accurate medical and dental history, including current medications, allergies, previous treatments, and any relevant health conditions. This information is crucial for your safety and effective treatment planning.",
            },
            {
               subtitle: "Updates to Information",
               text: "Please inform us immediately of any changes to your medical condition, medications, contact information, or insurance coverage. Keeping your information current helps us provide the best possible care.",
            },
            {
               subtitle: "Treatment Compliance",
               text: "You agree to follow the treatment plan recommended by your dentist, take prescribed medications as directed, attend follow-up appointments as scheduled, and maintain proper oral hygiene as instructed. Your cooperation is essential for successful treatment outcomes.",
            },
            {
               subtitle: "Minor Patients",
               text: "For patients under 18 years of age, a parent or legal guardian must be present during treatment and is responsible for providing consent, understanding treatment options, and ensuring compliance with post-treatment instructions.",
            },
         ],
      },
      {
         icon: IconCreditCard,
         title: "Payment Terms and Insurance",
         content: [
            {
               subtitle: "Payment Policy",
               text: "Payment is expected at the time services are rendered unless prior arrangements have been made. We accept cash, credit/debit cards, and digital payment methods. For extensive treatment plans, we may offer payment plan options subject to approval.",
            },
            {
               subtitle: "Insurance Claims",
               text: "While we will assist in processing insurance claims, we cannot guarantee coverage or reimbursement amounts. You are ultimately responsible for all charges regardless of insurance coverage. Any unpaid balance after insurance processing is your responsibility.",
            },
            {
               subtitle: "Estimates",
               text: "Treatment cost estimates are provided in good faith based on the information available at the time. Actual costs may vary if additional treatment becomes necessary. We will inform you of any significant changes to the estimated costs before proceeding.",
            },
            {
               subtitle: "Outstanding Balances",
               text: "Outstanding balances are due within 30 days of the date of service. Accounts with balances over 60 days past due may be subject to late fees and may be referred to a collection agency. Continued treatment may be suspended until outstanding balances are resolved.",
            },
         ],
      },
      {
         icon: IconShieldCheck,
         title: "Treatment and Professional Care",
         content: [
            {
               subtitle: "Standard of Care",
               text: "Dr Inamdar's Master's Dental Clinic & Implant Center is committed to providing high-quality dental care in accordance with accepted professional standards. Our dentist, Dr. Mohsin Minne, is a licensed professional with extensive experience in oral medicine and maxillofacial radiology.",
            },
            {
               subtitle: "Treatment Recommendations",
               text: "All treatment recommendations are based on professional judgment and clinical examination. While we present treatment options, the final decision regarding treatment rests with you. We encourage you to ask questions and discuss any concerns before consenting to treatment.",
            },
            {
               subtitle: "Treatment Outcomes",
               text: "While we strive for excellent results, we cannot guarantee specific outcomes as individual responses to treatment vary. Dental procedures carry inherent risks, which will be explained to you. Your cooperation in following post-treatment instructions significantly impacts treatment success.",
            },
            {
               subtitle: "Second Opinions",
               text: "You have the right to seek a second opinion before proceeding with recommended treatment. We will provide copies of relevant records upon request to facilitate this process.",
            },
         ],
      },
      {
         icon: IconAlertTriangle,
         title: "Limitation of Liability",
         content: [
            {
               subtitle: "Professional Liability",
               text: "Dr Inamdar's Master's Dental Clinic & Implant Center shall not be liable for any indirect, incidental, special, or consequential damages arising from treatment or services provided. Our liability is limited to the cost of the service rendered, except where prohibited by law.",
            },
            {
               subtitle: "Patient Non-Compliance",
               text: "We are not responsible for treatment failure or complications resulting from patient non-compliance with instructions, failure to attend follow-up appointments, or failure to disclose relevant medical information.",
            },
            {
               subtitle: "Third-Party Services",
               text: "We may refer you to specialists or laboratories for certain services. While we work with trusted partners, we are not responsible for the services provided by third parties. Any disputes with third-party providers must be resolved directly with them.",
            },
            {
               subtitle: "Website and Technology",
               text: "While we strive to ensure our website and appointment systems are accurate and functional, we are not liable for technical errors, system downtime, or information inaccuracies. Always confirm appointments by phone if you have any doubts.",
            },
         ],
      },
      {
         icon: IconFileText,
         title: "Medical Records and Confidentiality",
         content: [
            {
               subtitle: "Record Maintenance",
               text: "We maintain comprehensive medical records for all patients in accordance with professional standards and legal requirements. These records are the property of the clinic but contain your personal health information.",
            },
            {
               subtitle: "Access to Records",
               text: "You have the right to access your medical records. Requests for copies should be made in writing, and reasonable fees may apply for copying and administrative costs. Records will be provided within the timeframe required by applicable law.",
            },
            {
               subtitle: "Confidentiality",
               text: "All patient information is kept strictly confidential in accordance with our Privacy Policy and applicable healthcare privacy laws. We do not disclose patient information except as permitted or required by law.",
            },
            {
               subtitle: "Record Retention",
               text: "Medical records are retained for the period required by law and professional guidelines. After the retention period, records are securely destroyed in compliance with privacy regulations.",
            },
         ],
      },
   ];

   const additionalTerms = [
      {
         title: "Photography and Testimonials",
         text: "Dental photographs may be taken for treatment planning, documentation, and record-keeping purposes. If we wish to use your photographs or testimonials for marketing purposes, we will obtain separate written consent. You may decline without affecting the quality of care you receive.",
      },
      {
         title: "Referrals to Specialists",
         text: "Some treatments may require specialized care beyond our scope of practice. In such cases, we will refer you to appropriate specialists. You are responsible for scheduling and attending appointments with referred specialists and for any fees charged by them.",
      },
      {
         title: "Emergency Situations",
         text: "In the event of a medical emergency during treatment, we will provide immediate care and, if necessary, arrange transport to an appropriate medical facility. You consent to such emergency care and associated costs.",
      },
      {
         title: "Infectious Disease Control",
         text: "We maintain strict infection control protocols to ensure patient and staff safety. You agree to inform us of any communicable diseases or conditions that may pose a risk to staff or other patients. We reserve the right to reschedule appointments if you have symptoms of contagious illness.",
      },
      {
         title: "Dispute Resolution",
         text: "Any disputes arising from these terms or our services will be resolved through good faith discussions. If a resolution cannot be reached, disputes shall be subject to the jurisdiction of the courts in Pune, Maharashtra, India.",
      },
      {
         title: "Severability",
         text: "If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the original intent.",
      },
      {
         title: "Changes to Terms",
         text: "We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated through our website, clinic notices, or direct communication. Continued use of our services after changes constitutes acceptance of the modified terms.",
      },
      {
         title: "Governing Law",
         text: "These Terms and Conditions are governed by the laws of India and the state of Maharashtra. Any legal proceedings shall be conducted in accordance with Indian law and the jurisdiction of Pune courts.",
      },
   ];

   return (
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-[#F4E4C1]/10 via-white to-[#D4AF37]/5 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8960C]/5 rounded-full blur-3xl" />
         </div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-12 sm:mb-16"
            >
               <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  <IconFileText size={20} className="text-[#D4AF37]" />
                  <span className="text-sm font-semibold text-[#5A5A5A]">
                     Terms of Service
                  </span>
               </div>

               <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#1A2332] mb-4">
                  Terms & <span className="text-[#D4AF37]">Conditions</span>
               </h1>

               <p className="text-base sm:text-lg text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed">
                  Please read these terms carefully before using our services.
                  These terms govern your relationship with Dr. Inamdar's Master's Dental
                  Clinic & Implant Center.
               </p>

               <p className="text-sm text-[#8B8B8B] mt-4">
                  <strong>Effective Date:</strong> April 21, 2025 |{" "}
                  <strong>Last Updated:</strong> April 21, 2025
               </p>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-8 sm:space-y-10">
               {sections.map((section, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-[#E8E6E1]"
                  >
                     <div className="flex items-start gap-4 mb-6">
                        <div
                           className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                           style={{
                              background:
                                 "linear-gradient(135deg, #D4AF37, #B8960C)",
                           }}
                        >
                           <section.icon size={24} className="text-white" />
                        </div>
                        <div>
                           <h2 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332]">
                              {section.title}
                           </h2>
                        </div>
                     </div>

                     <div className="space-y-6 pl-0 sm:pl-16">
                        {section.content.map((item, idx) => (
                           <div key={idx}>
                              {"subtitle" in item && item.subtitle && (
                                 <h3 className="text-lg font-semibold text-[#1A2332] mb-2">
                                    {item.subtitle}
                                 </h3>
                              )}
                              <p className="text-[#5A5A5A] leading-relaxed text-sm sm:text-base">
                                 {item.text}
                              </p>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               ))}

               {/* Additional Terms */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-[#E8E6E1]"
               >
                  <h2 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332] mb-6">
                     Additional Terms
                  </h2>

                  <div className="space-y-6">
                     {additionalTerms.map((item, index) => (
                        <div key={index}>
                           <h3 className="text-lg font-semibold text-[#1A2332] mb-2">
                              {item.title}
                           </h3>
                           <p className="text-[#5A5A5A] leading-relaxed text-sm sm:text-base">
                              {item.text}
                           </p>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Contact Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-linear-to-br from-[#D4AF37]/10 to-[#B8960C]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/20"
               >
                  <h2 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332] mb-4">
                     Questions or Concerns?
                  </h2>
                  <p className="text-[#5A5A5A] mb-6 leading-relaxed text-sm sm:text-base">
                     If you have any questions about these Terms and Conditions
                     or need clarification on any policies, please contact us:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                     <div className="flex items-center gap-3 bg-white/50 rounded-xl p-4">
                        <IconPhone size={20} className="text-[#D4AF37]" />
                        <div>
                           <p className="text-xs text-[#8B8B8B] mb-1">Phone</p>
                           <a
                              href="tel:+919923878673"
                              className="text-[#1A2332] font-semibold hover:text-[#D4AF37] transition-colors"
                           >
                              +91 99238 78673
                           </a>
                        </div>
                     </div>

                     <div className="flex items-center gap-3 bg-white/50 rounded-xl p-4">
                        <IconMail size={20} className="text-[#D4AF37]" />
                        <div>
                           <p className="text-xs text-[#8B8B8B] mb-1">Email</p>
                           <a
                              href="mailto:dr.inamdarmastersdentalclinic.dapodi@gmail.com"
                              className="text-[#1A2332] font-semibold hover:text-[#D4AF37] transition-colors text-sm break-all"
                           >
                              dr.inamdarmastersdentalclinic.dapodi@gmail.com
                           </a>
                        </div>
                     </div>
                  </div>

                  <p className="text-sm text-[#8B8B8B] mt-6 italic">
                     Dr Inamdar's Master's Dental Clinic & Implant Center
                     <br />
                     Flat No 1, 2, Company, opp. Atlas Copco,
                     <br />
                     Agrasen Nagar Society, Seva Nagar, Dapodi,
                     <br />
                     Pune, Pimpri-Chinchwad, Maharashtra 411012
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
                     <p className="text-sm text-[#5A5A5A] leading-relaxed">
                        <strong>
                           By using our services, you acknowledge that you have
                           read, understood, and agree to be bound by these
                           Terms and Conditions.
                        </strong>{" "}
                        We appreciate your trust in Dr Inamdar's Master's Dental Clinic &
                        Implant Center and look forward to providing you with
                        excellent dental care.
                     </p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
