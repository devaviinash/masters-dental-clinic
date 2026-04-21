"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
   IconHeart,
   IconShield,
   IconUsers,
   IconSparkles,
   IconAward,
   IconLeaf,
} from "@tabler/icons-react";

const getGradientStyle = (colorClass: string) => {
   const gradients: Record<string, string> = {
      "from-rose-400 to-rose-600": "linear-gradient(135deg, #fb7185, #e11d48)",
      "from-[#D4AF37] to-[#B8960C]":
         "linear-gradient(135deg, #D4AF37, #B8960C)",
      "from-blue-400 to-blue-600": "linear-gradient(135deg, #60a5fa, #2563eb)",
      "from-purple-400 to-purple-600":
         "linear-gradient(135deg, #c084fc, #9333ea)",
      "from-amber-400 to-amber-600":
         "linear-gradient(135deg, #fbbf24, #d97706)",
      "from-green-400 to-green-600":
         "linear-gradient(135deg, #4ade80, #16a34a)",
   };
   return gradients[colorClass] || "linear-gradient(135deg, #D4AF37, #B8960C)";
};

export default function OurValues() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const values = [
      {
         icon: IconHeart,
         title: "Compassion",
         description:
            "We treat every patient with empathy, kindness, and genuine care, ensuring comfort at every step.",
         color: "from-rose-400 to-rose-600",
      },
      {
         icon: IconShield,
         title: "Excellence",
         description:
            "We maintain the highest standards in dental care through continuous learning and advanced techniques.",
         color: "from-[#D4AF37] to-[#B8960C]",
      },
      {
         icon: IconUsers,
         title: "Patient-Centered",
         description:
            "Your needs, comfort, and goals are at the heart of every decision we make.",
         color: "from-blue-400 to-blue-600",
      },
      {
         icon: IconSparkles,
         title: "Innovation",
         description:
            "We embrace cutting-edge technology and modern techniques to deliver superior results.",
         color: "from-purple-400 to-purple-600",
      },
      {
         icon: IconAward,
         title: "Integrity",
         description:
            "We believe in honest, transparent communication and ethical practices in all we do.",
         color: "from-amber-400 to-amber-600",
      },
      {
         icon: IconLeaf,
         title: "Sustainability",
         description:
            "We're committed to eco-friendly practices that benefit both our patients and the planet.",
         color: "from-green-400 to-green-600",
      },
   ];

   return (
      <section className="py-2 sm:py-6 md:py-8 lg:py-10 bg-[#FDFBF7] relative overflow-hidden">
         {/* Background Pattern */}
         <div
            className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(244, 228, 193, 0.2), transparent)",
            }}
         />
         <div
            className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)",
            }}
         />

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div ref={ref} className="max-w-7xl mx-auto">
               {/* Section Header */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 md:mb-16"
               >
                  <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
                     What We Stand For
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] mb-4 sm:mb-6 font-poppins px-4">
                     Our Core Values
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                     Six fundamental principles that guide our approach to
                     dental care and patient relationships
                  </p>
               </motion.div>

               {/* Values Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {values.map((value, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                           duration: 0.5,
                           delay: 0.1 + index * 0.1,
                        }}
                        className="group"
                     >
                        <div className="h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-[#E8E6E1] relative overflow-hidden">
                           {/* Hover Gradient */}
                           <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                              style={{
                                 background: getGradientStyle(value.color),
                              }}
                           />

                           {/* Icon */}
                           <div className="relative z-10 mb-4 sm:mb-6">
                              <div
                                 className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                                 style={{
                                    background: getGradientStyle(value.color),
                                 }}
                              >
                                 <value.icon
                                    size={22}
                                    className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
                                 />
                              </div>
                           </div>

                           {/* Content */}
                           <div className="relative z-10">
                              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A2332] mb-2 sm:mb-3 font-poppins">
                                 {value.title}
                              </h3>
                              <p className="text-[#5A5A5A] leading-relaxed text-xs sm:text-sm">
                                 {value.description}
                              </p>
                           </div>

                           {/* Decorative Element */}
                           <div className="absolute -bottom-2 -right-2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-linear-to-tl from-[#F4E4C1]/20 to-transparent rounded-tl-full" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
