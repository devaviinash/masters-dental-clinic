"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconSparkles, IconHeart, IconShield } from "@tabler/icons-react";

export default function AboutHero() {
   const sectionRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

   return (
      <section
         ref={sectionRef}
         className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-0"
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
                     About Our Clinic
                  </span>
               </motion.div>

               {/* Main Heading */}
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A2332] mb-4 sm:mb-6 leading-tight font-poppins px-2"
               >
                  Where Excellence Meets{" "}
                  <span
                     className="bg-clip-text text-transparent"
                     style={{
                        backgroundImage:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                  >
                     Compassion
                  </span>
               </motion.h1>

               {/* Subtitle */}
               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5A5A5A] mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
               >
                  Founded on the principles of excellence, integrity, and
                  patient-centered care, Dr Inamdar's Master's Dental Clinic has been
                  transforming smiles and lives since our inception.
               </motion.p>

               {/* Feature Pills */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2"
               >
                  {[
                     { icon: IconHeart, text: "Patient-First Approach" },
                     {
                        icon: IconShield,
                        text: "10+ Years Combined Experience",
                     },
                     { icon: IconSparkles, text: "Award-Winning Care" },
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

         {/* Decorative Bottom Wave */}
         <div className="absolute bottom-0 left-0 right-0">
            <svg
               viewBox="0 0 1440 120"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="w-full h-auto"
            >
               <path
                  d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                  fill="#FDFBF7"
               />
            </svg>
         </div>
      </section>
   );
}
