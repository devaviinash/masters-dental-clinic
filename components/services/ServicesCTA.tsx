"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconSparkles, IconPhone } from "@tabler/icons-react";

export default function ServicesCTA() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   return (
      <section
         className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FDFBF7, #FFF9F0)",
         }}
      >
         {/* Background Decoration */}
         <div className="absolute inset-0">
            <div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)",
               }}
            />
         </div>

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="max-w-4xl mx-auto"
            >
               <div
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl text-center relative overflow-hidden"
                  style={{
                     background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                  }}
               >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-black/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                     {/* Icon */}
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                     >
                        <IconSparkles
                           size={28}
                           className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />
                     </motion.div>

                     {/* Heading */}
                     <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-poppins px-2"
                     >
                        Ready to Transform Your Smile?
                     </motion.h2>

                     {/* Description */}
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
                     >
                        Book your appointment today and experience premium
                        dental care with our expert team. We're here to give you
                        the confidence of a beautiful, healthy smile.
                     </motion.p>

                     {/* Buttons */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
                     >
                        <a
                           href="/#contact"
                           className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1A2332] rounded-full font-semibold hover:bg-[#FFFEF9] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                           <IconSparkles size={18} className="sm:w-5 sm:h-5" />
                           Book Appointment
                        </a>
                        <a
                           href="tel:+1234567890"
                           className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                           <IconPhone size={18} className="sm:w-5 sm:h-5" />
                           Call Now
                        </a>
                     </motion.div>

                     {/* Additional Info */}
                     <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-white/80 text-sm mt-8"
                     >
                        ✨ Flexible payment options available • Same-day
                        appointments • Emergency care
                     </motion.p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
