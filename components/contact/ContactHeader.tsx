"use client";

import { motion } from "framer-motion";
import { IconSparkles } from "@tabler/icons-react";

export default function ContactHeader() {
   return (
      <section
         className="pt-10 pb-32 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FFF9F0, #FDFBF7)",
         }}
      >
         {/* Background Decorations */}
         <div
            className="absolute top-10 right-20 w-72 h-72 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent)",
            }}
         />
         <div
            className="absolute bottom-10 left-20 w-72 h-72 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(244, 228, 193, 0.2), transparent)",
            }}
         />

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <div
                     className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border border-[#D4AF37]/30 mb-4 sm:mb-5 md:mb-6"
                     style={{
                        background:
                           "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                     }}
                  >
                     <IconSparkles
                        size={16}
                        className="text-[#D4AF37] sm:w-5 sm:h-5"
                     />
                     <span className="text-[#2C2C2C] font-semibold text-xs sm:text-sm">
                        Get In Touch
                     </span>
                  </div>
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A2332] mb-2 font-poppins px-4"
               >
                  Let's Start Your{" "}
                  <span
                     className="relative inline-block pb-2"
                     style={{
                        background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                     }}
                  >
                     Smile Journey
                  </span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-2xl mx-auto px-4"
               >
                  Have questions or ready to book an appointment? We're here to
                  help you achieve the smile of your dreams.
               </motion.p>
            </div>
         </div>
      </section>
   );
}
