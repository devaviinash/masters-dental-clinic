"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconMapPin } from "@tabler/icons-react";

export default function ContactMap() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   return (
      <section className="pt-4 pb-20 bg-[#FDFBF7]">
         <div className="container mx-auto px-4 sm:px-6">
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="max-w-7xl mx-auto"
            >
               <div className="text-center mb-12">
                  <div
                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D4AF37]/30 mb-4"
                     style={{
                        background:
                           "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                     }}
                  >
                     <IconMapPin size={20} className="text-[#D4AF37]" />
                     <span className="text-[#2C2C2C] font-semibold text-sm">
                        Find Us
                     </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] font-poppins">
                     Visit Our Clinic
                  </h2>
               </div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-[#E8E6E1]"
               >
                  <div className="relative w-full h-[500px]">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4980550371392!2d73.82687757533668!3d18.596654982511655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8a2baaaaaad%3A0xfce549ec3393fab3!2sDr%20Inamdar&#39;s%20Master&#39;s%20Dental%20Clinic%20Dapodi!5e0!3m2!1sen!2sin!4v1776778708962!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-500"
                     />
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
