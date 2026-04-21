"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
   IconBrandFacebook,
   IconBrandInstagram,
   IconBrandTwitter,
   IconBrandLinkedin,
   IconPhone,
   IconMail,
   IconMapPin,
   IconHeart,
} from "@tabler/icons-react";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   const quickLinks = [
      { name: "About Us", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Gallery", href: "/#gallery" },
   ];

   const services = [
      { name: "Cosmetic Dentistry", href: "/#services" },
      { name: "Dental Implants", href: "/#services" },
      { name: "Orthodontics", href: "/#services" },
      { name: "Pediatric Care", href: "/#services" },
   ];

   const socialLinks = [
      { icon: <IconBrandFacebook size={20} />, href: "https://facebook.com", label: "Facebook" },
      { icon: <IconBrandInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
      { icon: <IconBrandTwitter size={20} />, href: "https://twitter.com", label: "Twitter" },
      { icon: <IconBrandLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
   ];

   return (
      <footer className="bg-[#1A2332] text-white relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
               }}
            />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
               {/* About Section */}
               <div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mb-5 sm:mb-6"
                  >
                     <h3 className="font-poppins font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-[#D4AF37]">
                        Dr Inamdar's Master's Dental Clinic
                     </h3>
                     <p className="text-sm sm:text-base text-[#C4C4C4] leading-relaxed">
                        Premium dental care & implant center by Dr. Mohsin & Dr. Harshada Minne. Your trusted partner
                        for beautiful, healthy smiles.
                     </p>
                  </motion.div>

                  {/* Social Links */}
                  <div className="flex space-x-3 sm:space-x-4">
                     {socialLinks.map((social, index) => (
                        <motion.a
                           key={index}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ scale: 1.1, y: -2 }}
                           whileTap={{ scale: 0.9 }}
                           className="w-9 h-9 sm:w-10 sm:h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors touch-manipulation"
                           aria-label={social.label}
                        >
                           <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                              {social.icon}
                           </div>
                        </motion.a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="font-poppins font-bold text-base sm:text-lg mb-3 sm:mb-4">
                     Quick Links
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                     {quickLinks.map((link, index) => (
                        <motion.li
                           key={index}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                        >
                           <Link
                              href={link.href}
                              className="text-sm sm:text-base text-[#C4C4C4] hover:text-[#D4AF37] transition-colors inline-flex items-center touch-manipulation"
                           >
                              <span className="mr-2">→</span>
                              {link.name}
                           </Link>
                        </motion.li>
                     ))}
                  </ul>
               </div>

               {/* Services */}
               <div>
                  <h4 className="font-poppins font-bold text-base sm:text-lg mb-3 sm:mb-4">
                     Our Services
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                     {services.map((service, index) => (
                        <motion.li
                           key={index}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                        >
                           <Link
                              href={service.href}
                              className="text-sm sm:text-base text-[#C4C4C4] hover:text-[#D4AF37] transition-colors inline-flex items-center touch-manipulation"
                           >
                              <span className="mr-2">→</span>
                              {service.name}
                           </Link>
                        </motion.li>
                     ))}
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h4 className="font-poppins font-bold text-base sm:text-lg mb-3 sm:mb-4">
                     Contact Us
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                     <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2.5 sm:space-x-3"
                     >
                        <IconMapPin
                           size={18}
                           className="text-[#D4AF37] mt-1 shrink-0 sm:w-5 sm:h-5"
                        />
                        <span className="text-xs sm:text-sm md:text-base text-[#C4C4C4] leading-relaxed">
                           Flat No 1, 2, Company, opp. Atlas Copco,
                           <br />
                           Agrasen Nagar Society, Seva Nagar, Dapodi,
                           <br />
                           Pune, Pimpri-Chinchwad, Maharashtra 411012
                        </span>
                     </motion.li>
                     <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center space-x-2.5 sm:space-x-3"
                     >
                        <IconPhone
                           size={18}
                           className="text-[#D4AF37] shrink-0 sm:w-5 sm:h-5"
                        />
                        <a
                           href="tel:+919923878673"
                           className="text-xs sm:text-sm md:text-base text-[#C4C4C4] hover:text-[#D4AF37] transition-colors touch-manipulation"
                        >
                           +91 99238 78673
                        </a>
                     </motion.li>
                     <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-2.5 sm:space-x-3"
                     >
                        <IconMail
                           size={18}
                           className="text-[#D4AF37] shrink-0 sm:w-5 sm:h-5"
                        />
                        <a
                           href="mailto:mastersdentalclinic.dapodi@gmail.com"
                           className="text-xs sm:text-sm md:text-base text-[#C4C4C4] hover:text-[#D4AF37] transition-colors wrap-break-word touch-manipulation"
                        >
                           mastersdentalclinic.dapodi@gmail.com
                        </a>
                     </motion.li>
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 sm:pt-8 border-t border-[#2C3E50]">
               <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 gap-3">
                  <motion.p
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="text-[#C4C4C4] text-xs sm:text-sm text-center md:text-left"
                  >
                     © {currentYear} Dr Inamdar's Master's Dental Clinic & Implant Center.
                     All rights reserved.
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="flex items-center space-x-1.5 sm:space-x-2 text-gray-400 text-xs sm:text-sm"
                  >
                     <span>Crafted by</span>
                     <span className="text-[#D4AF37]">
                        <a
                           href="https://x.com/aviinash22"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           Avinash Chavan
                        </a>
                     </span>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm"
                  >
                     <Link
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-[#D4AF37] transition-colors touch-manipulation"
                     >
                        Privacy Policy
                     </Link>
                     <Link
                        href="/terms-and-conditions"
                        className="text-gray-400 hover:text-[#D4AF37] transition-colors touch-manipulation"
                     >
                        Terms & Conditions
                     </Link>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* Decorative Bottom Border */}
         <div
            className="h-1"
            style={{
               background:
                  "linear-gradient(to right, #D4AF37, #F4E4C1, #D4AF37)",
            }}
         />
      </footer>
   );
}
