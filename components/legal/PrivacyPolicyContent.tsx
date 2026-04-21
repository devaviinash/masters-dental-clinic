"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
   IconShieldCheck,
   IconLock,
   IconEye,
   IconDatabase,
   IconUserCheck,
   IconAlertCircle,
   IconPhone,
   IconMail,
} from "@tabler/icons-react";

export default function PrivacyPolicyContent() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   const sections = [
      {
         icon: IconShieldCheck,
         title: "Information We Collect",
         content: [
            {
               subtitle: "Personal Information",
               text: "We collect personal information that you provide to us when scheduling appointments, including your name, contact details (phone number, email address), date of birth, and residential address. This information is necessary for providing quality dental care and maintaining communication regarding your appointments.",
            },
            {
               subtitle: "Medical Information",
               text: "As a healthcare provider, we collect and maintain comprehensive medical and dental records, including dental history, treatment records, diagnostic images (X-rays, radiographs), prescriptions, and insurance information. All medical information is handled in strict compliance with applicable healthcare privacy regulations.",
            },
            {
               subtitle: "Technical Information",
               text: "When you visit our website, we may collect technical information such as IP addresses, browser type, device information, and usage data through cookies and similar technologies. This helps us improve our website functionality and user experience.",
            },
         ],
      },
      {
         icon: IconDatabase,
         title: "How We Use Your Information",
         content: [
            {
               subtitle: "Treatment and Care",
               text: "Your personal and medical information is primarily used to provide, coordinate, and manage your dental treatment. This includes scheduling appointments, performing dental procedures, maintaining accurate medical records, and coordinating care with specialists when necessary.",
            },
            {
               subtitle: "Communication",
               text: "We use your contact information to send appointment reminders, follow-up communications, treatment recommendations, and important updates about our clinic services. You may opt out of promotional communications at any time.",
            },
            {
               subtitle: "Billing and Insurance",
               text: "Your information is used for billing purposes, processing insurance claims, and financial record-keeping. We work with insurance providers to facilitate coverage for your dental treatments.",
            },
            {
               subtitle: "Quality Improvement",
               text: "We may use aggregated, de-identified data to improve our services, conduct research, and enhance patient care quality. Individual patient information is never disclosed in such analyses.",
            },
         ],
      },
      {
         icon: IconLock,
         title: "Information Security",
         content: [
            {
               subtitle: "Data Protection Measures",
               text: "We implement robust security measures to protect your personal and medical information from unauthorized access, disclosure, alteration, or destruction. This includes physical security measures at our clinic, secure electronic storage systems, encrypted data transmission, and restricted access protocols.",
            },
            {
               subtitle: "Staff Training",
               text: "All our staff members receive comprehensive training on patient confidentiality and data protection. Access to patient information is strictly limited to authorized personnel who require it to perform their duties.",
            },
            {
               subtitle: "Technology Safeguards",
               text: "We use industry-standard encryption protocols, secure servers, regular security audits, and updated antivirus and firewall protection to safeguard your digital information.",
            },
         ],
      },
      {
         icon: IconEye,
         title: "Information Sharing",
         content: [
            {
               subtitle: "Healthcare Providers",
               text: "We may share your medical information with other healthcare providers involved in your care, including specialists, laboratories, and referring physicians. Such sharing is done only when necessary for your treatment and with appropriate safeguards.",
            },
            {
               subtitle: "Legal Requirements",
               text: "We may disclose your information when required by law, in response to legal proceedings, to comply with regulatory requirements, or when necessary to protect the rights, safety, or property of our clinic, patients, or others.",
            },
            {
               subtitle: "Insurance and Payment",
               text: "We share necessary information with insurance companies and payment processors to facilitate billing and claims processing. We ensure that only the minimum necessary information is disclosed for these purposes.",
            },
            {
               subtitle: "No Third-Party Marketing",
               text: "We do not sell, rent, or share your personal information with third parties for their marketing purposes. Your privacy and trust are of utmost importance to us.",
            },
         ],
      },
      {
         icon: IconUserCheck,
         title: "Your Rights and Choices",
         content: [
            {
               subtitle: "Access to Your Information",
               text: "You have the right to access your medical records and personal information that we maintain. You may request copies of your records, subject to reasonable fees for copying and administrative costs.",
            },
            {
               subtitle: "Correction of Information",
               text: "If you believe that any information we hold about you is inaccurate or incomplete, you have the right to request corrections. We will review and update the information as appropriate.",
            },
            {
               subtitle: "Communication Preferences",
               text: "You can choose how we communicate with you and opt out of non-essential communications. Please inform our staff of your preferences regarding appointment reminders and promotional materials.",
            },
            {
               subtitle: "Data Deletion",
               text: "Subject to legal and regulatory retention requirements, you may request deletion of your personal information. However, we are required to maintain certain medical records for specified periods as per healthcare regulations.",
            },
         ],
      },
      {
         icon: IconAlertCircle,
         title: "Cookies and Website Usage",
         content: [
            {
               subtitle: "Cookie Policy",
               text: "Our website uses cookies to enhance user experience, remember your preferences, and analyze website traffic. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings.",
            },
            {
               subtitle: "Analytics",
               text: "We use analytics tools to understand how visitors interact with our website. This helps us improve our online presence and provide better information to our patients. These analytics use aggregated, non-personally identifiable data.",
            },
            {
               subtitle: "Third-Party Links",
               text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
            },
         ],
      },
   ];

   const additionalInfo = [
      {
         title: "Children's Privacy",
         text: "We are committed to protecting the privacy of children. When treating minor patients, we obtain consent from parents or legal guardians. We collect only the minimum necessary information required for pediatric dental care and maintain special safeguards for children's records.",
      },
      {
         title: "Data Retention",
         text: "We retain your personal and medical information for as long as necessary to provide services and as required by applicable laws and regulations. Medical records are typically maintained for a minimum period as specified by healthcare regulatory authorities. After the retention period, information is securely destroyed.",
      },
      {
         title: "International Data Transfers",
         text: "Your information is stored and processed in India. We do not transfer personal information internationally unless necessary for your treatment, and when we do, we ensure appropriate safeguards are in place.",
      },
      {
         title: "Updates to This Policy",
         text: "We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes through our website or direct communication. The effective date at the top of this policy indicates when it was last revised.",
      },
   ];

   return (
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-[#F4E4C1]/10 via-white to-[#D4AF37]/5 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8960C]/5 rounded-full blur-3xl" />
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
                  <IconShieldCheck size={20} className="text-[#D4AF37]" />
                  <span className="text-sm font-semibold text-[#5A5A5A]">
                     Your Privacy Matters
                  </span>
               </div>

               <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#1A2332] mb-4">
                  Privacy <span className="text-[#D4AF37]">Policy</span>
               </h1>

               <p className="text-base sm:text-lg text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed">
                  At Dr Inamdar's Master's Dental Clinic & Implant Center, we are committed
                  to protecting your privacy and maintaining the confidentiality
                  of your personal and medical information.
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
                              <h3 className="text-lg font-semibold text-[#1A2332] mb-2">
                                 {item.subtitle}
                              </h3>
                              <p className="text-[#5A5A5A] leading-relaxed text-sm sm:text-base">
                                 {item.text}
                              </p>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               ))}

               {/* Additional Information */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-[#E8E6E1]"
               >
                  <h2 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332] mb-6">
                     Additional Information
                  </h2>

                  <div className="space-y-6">
                     {additionalInfo.map((item, index) => (
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
                     Questions About Your Privacy?
                  </h2>
                  <p className="text-[#5A5A5A] mb-6 leading-relaxed text-sm sm:text-base">
                     If you have any questions about this Privacy Policy,
                     concerns about how we handle your information, or wish to
                     exercise your privacy rights, please contact us:
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
               </motion.div>
            </div>
         </div>
      </section>
   );
}
