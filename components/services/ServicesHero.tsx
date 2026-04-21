"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconSparkles, IconStethoscope, IconShield } from "@tabler/icons-react";

export default function ServicesHero() {
   const sectionRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
   const indicatorScaleX = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

   return (
      <section
         ref={sectionRef}
         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-8 sm:pb-0"
         style={{
            background:
               "linear-gradient(135deg, #FAFAFA 0%, #FFF9F0 25%, #FFF5E6 50%, #FFF9F0 75%, #FAFAFA 100%)",
         }}
      >
         {/* Luxury Background Patterns */}
         <motion.div className="absolute inset-0" style={{ y }}>
            <div className="absolute inset-0 opacity-[0.03]">
               <div
                  className="absolute inset-0"
                  style={{
                     backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
                     backgroundSize: "60px 60px",
                  }}
               />
            </div>

            {/* Premium Radial Gradient Orbs */}
            <div
               className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent)",
               }}
            />
            <div
               className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(184, 150, 12, 0.15), transparent)",
               }}
            />
         </motion.div>

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
               style={{ opacity }}
               className="max-w-5xl mx-auto text-center"
            >
               {/* Badge */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#D4AF37]/30 mb-4 sm:mb-8"
                  style={{
                     background:
                        "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                  }}
               >
                  <IconSparkles size={18} className="text-[#D4AF37]" />
                  <span className="text-[#2C2C2C] font-semibold text-xs sm:text-sm">
                     Premium Dental Services
                  </span>
               </motion.div>

               {/* Main Heading */}
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A2332] mb-4 sm:mb-6 leading-tight font-poppins px-2"
               >
                  Comprehensive Dental{" "}
                  <span
                     className="bg-clip-text text-transparent"
                     style={{
                        backgroundImage:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                  >
                     Excellence
                  </span>
               </motion.h1>

               {/* Subtitle */}
               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5A5A5A] mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
               >
                  From routine care to advanced cosmetic procedures, we offer a
                  complete range of dental services tailored to your unique
                  needs.
               </motion.p>

               {/* Feature Pills */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2"
               >
                  {[
                     { icon: IconStethoscope, text: "Advanced Technology" },
                     { icon: IconShield, text: "Safe & Painless" },
                     { icon: IconSparkles, text: "Expert Specialists" },
                  ].map((item, index) => (
                     <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#E8E6E1] shadow-sm hover:shadow-md transition-all duration-300"
                     >
                        <item.icon
                           size={18}
                           className="text-[#D4AF37] sm:w-5 sm:h-5"
                        />
                        <span className="text-[#2C2C2C] font-semibold text-xs sm:text-sm whitespace-nowrap">
                           {item.text}
                        </span>
                     </div>
                  ))}
               </motion.div>
            </motion.div>
         </div>

         {/* Scroll Indicator */}
         <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
            style={{ opacity }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
         >
            <div className="flex flex-col items-center gap-3">
               {/* Progress Bar */}
               <div className="w-32 sm:w-40 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                     className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8960C] rounded-full"
                     style={{
                        scaleX: indicatorScaleX,
                        transformOrigin: "left",
                     }}
                  />
               </div>

               {/* Scroll Hint Text */}
               <motion.p
                  className="text-xs sm:text-sm text-[#1A2332]/70 font-medium tracking-wider"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                     duration: 1.5,
                     repeat: Infinity,
                     ease: "easeInOut",
                  }}
               >
                  SCROLL TO EXPLORE
               </motion.p>

               {/* Animated Down Arrow */}
               <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                     duration: 1.5,
                     repeat: Infinity,
                     ease: "easeInOut",
                  }}
                  className="text-[#D4AF37]"
               >
                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
               </motion.div>
            </div>
         </motion.div>
      </section>
   );
}
