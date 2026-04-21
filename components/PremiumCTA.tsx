"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
   IconSparkles,
   IconPhone,
   IconCalendar,
   IconStarFilled,
   IconAward,
   IconClock,
} from "@tabler/icons-react";

export default function PremiumCTA() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const stats = [
      { icon: IconStarFilled, value: "5000+", label: "Happy Patients" },
      { icon: IconAward, value: "10+", label: "Years Experience" },
      { icon: IconClock, value: "100%", label: "Success Rate" },
   ];

   return (
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
         {/* Premium Background with Gradient */}
         <div className="absolute inset-0">
            <div
               className="absolute inset-0"
               style={{
                  background:
                     "linear-gradient(135deg, #1A2332 0%, #2D3E50 50%, #1A2332 100%)",
               }}
            />
            {/* Animated Gradient Orbs */}
            <div
               className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
               style={{
                  background: "radial-gradient(circle, #D4AF37, transparent)",
               }}
            />
            <div
               className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
               style={{
                  background: "radial-gradient(circle, #B8960C, transparent)",
                  animationDelay: "1s",
               }}
            />
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-5">
               <div
                  className="absolute inset-0"
                  style={{
                     backgroundImage: `linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
                     linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
                     linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
                     linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)`,
                     backgroundSize: "80px 140px",
                     backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
                  }}
               />
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className="text-center"
            >
               {/* Badge */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-[#D4AF37]/30"
                  style={{
                     background:
                        "linear-gradient(to right, rgba(212, 175, 55, 0.15), rgba(244, 228, 193, 0.15))",
                  }}
               >
                  <IconSparkles size={18} className="text-[#D4AF37]" />
                  <span className="text-sm sm:text-base font-semibold text-[#D4AF37]">
                     Transform Your Smile Today
                  </span>
               </motion.div>

               {/* Main Heading */}
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
               >
                  Ready for a{" "}
                  <span
                     className="bg-clip-text text-transparent"
                     style={{
                        backgroundImage:
                           "linear-gradient(to right, #D4AF37, #F4E4C1, #D4AF37)",
                     }}
                  >
                     Brighter Smile
                  </span>
                  ?
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4"
               >
                  Experience world-class dental care with Dr. Mohsin & Dr. Harshada Minne. Book your consultation today and discover the
                  difference expert care makes.
               </motion.p>

               {/* CTA Buttons */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20 px-4"
               >
                  <motion.a
                     href="tel:+919876543210"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                  >
                     <IconPhone
                        size={20}
                        className="sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform"
                     />
                     <span className="text-white">Call Now</span>
                  </motion.a>

                  <motion.a
                     href="#contact"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 border-[#D4AF37] bg-transparent hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white transition-all duration-300 backdrop-blur-sm touch-manipulation"
                  >
                     <IconCalendar
                        size={20}
                        className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                     />
                     <span>Book Appointment</span>
                  </motion.a>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
