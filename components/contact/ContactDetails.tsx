"use client";

import { motion } from "framer-motion";
import {
   IconPhone,
   IconMail,
   IconMapPin,
   IconClock,
   IconBrandWhatsapp,
   IconBrandInstagram,
   IconBrandFacebook,
} from "@tabler/icons-react";

export default function ContactDetails() {
   const contactInfo = [
      {
         icon: IconPhone,
         title: "Phone",
         details: ["+91 99238 78673", "Available for Appointments"],
         action: "tel:+919923878673",
      },
      {
         icon: IconMail,
         title: "Email",
         details: [
            "dr.inamdarsdentalclinic.dapodi@gmail.com",
            "For Appointments & Inquiries",
         ],
         action: "mailto:dr.inamdarsdentalclinic.dapodi@gmail.com",
      },
      {
         icon: IconMapPin,
         title: "Address",
         details: [
            "Dr Inamdar's Master's Dental Clinic & Implant Center",
            "Flat No 1, 2, Company, opp. Atlas Copco,",
            "Agrasen Nagar Society, Seva Nagar, Dapodi,",
            "Pune, Pimpri-Chinchwad, Maharashtra 411012",
         ],
         action: "https://maps.google.com/?q=Flat+No+1+2+Company+opp+Atlas+Copco+Agrasen+Nagar+Society+Seva+Nagar+Dapodi+Pune+Pimpri-Chinchwad+Maharashtra+411012",
      },
      {
         icon: IconClock,
         title: "Working Hours",
         details: [
            "10:00 AM - 9:30 PM",
            "Available 7 Days a Week",
         ],
         action: null,
      },
   ];

   const socialLinks = [
      {
         icon: IconBrandWhatsapp,
         label: "WhatsApp",
         link: "https://wa.me/919923878673",
         color: "#25D366",
      },
      {
         icon: IconBrandInstagram,
         label: "Instagram",
         link: "https://instagram.com",
         color: "#E4405F",
      },
      {
         icon: IconBrandFacebook,
         label: "Facebook",
         link: "https://facebook.com",
         color: "#1877F2",
      },
   ];

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="space-y-4 sm:space-y-5 md:space-y-6"
      >
         {contactInfo.map((info, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
               className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-[#E8E6E1] hover:shadow-xl transition-all duration-300 group"
            >
               <div className="flex items-start gap-3 sm:gap-4">
                  <div
                     className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                     style={{
                        background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                     }}
                  >
                     <info.icon
                        size={22}
                        className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
                     />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A2332] mb-1.5 sm:mb-2">
                        {info.title}
                     </h3>
                     {info.details.map((detail, idx) => (
                        <p
                           key={idx}
                           className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed overflow-wrap-anywhere"
                        >
                           {info.action && idx === 0 ? (
                              <a
                                 href={info.action}
                                 className="hover:text-[#D4AF37] transition-colors duration-300"
                              >
                                 {detail}
                              </a>
                           ) : (
                              detail
                           )}
                        </p>
                     ))}
                  </div>
               </div>
            </motion.div>
         ))}

         {/* Social Links */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-[#E8E6E1]"
         >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A2332] mb-3 sm:mb-4">
               Connect With Us
            </h3>
            <div className="flex gap-3 sm:gap-4">
               {socialLinks.map((social, index) => (
                  <a
                     key={index}
                     href={social.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                     style={{
                        background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                     }}
                  >
                     <social.icon
                        size={20}
                        className="text-white sm:w-6 sm:h-6"
                     />
                  </a>
               ))}
            </div>
         </motion.div>

         {/* Emergency Contact */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg"
            style={{
               background: "linear-gradient(135deg, #D4AF37, #B8960C)",
            }}
         >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
               Emergency Dental Care
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 sm:mb-4">
               Dental emergencies can happen anytime. Call us immediately for
               urgent care.
            </p>
            <a
               href="tel:+919876543210"
               className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white text-[#1A2332] rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-[#FFFEF9] active:scale-95 transition-all duration-300 shadow-lg"
            >
               <IconPhone size={16} className="sm:w-5 sm:h-5" />
               Emergency: +91 98765 43210
            </a>
         </motion.div>
      </motion.div>
   );
}
