"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
   IconUsers,
   IconHeart,
   IconStar,
   IconTrophy,
} from "@tabler/icons-react";

const getStatGradient = (colorClass: string) => {
   const gradients: Record<string, string> = {
      "from-blue-400 to-blue-600": "linear-gradient(135deg, #60a5fa, #2563eb)",
      "from-rose-400 to-rose-600": "linear-gradient(135deg, #fb7185, #e11d48)",
      "from-[#D4AF37] to-[#B8960C]":
         "linear-gradient(135deg, #D4AF37, #B8960C)",
      "from-purple-400 to-purple-600":
         "linear-gradient(135deg, #c084fc, #9333ea)",
   };
   return gradients[colorClass] || "linear-gradient(135deg, #D4AF37, #B8960C)";
};

const Counter = ({
   target,
   suffix = "",
   prefix = "",
}: {
   target: number;
   suffix?: string;
   prefix?: string;
}) => {
   const ref = useRef(null);
   const [displayValue, setDisplayValue] = useState(0);
   const isInView = useInView(ref, { once: true });
   const isDecimal = target % 1 !== 0;

   useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const duration = 2000;

      const updateCounter = (currentTime: number) => {
         if (!startTime) startTime = currentTime;
         const elapsed = currentTime - startTime;
         const progress = Math.min(elapsed / duration, 1);

         const easeOut = 1 - Math.pow(1 - progress, 3);
         const currentValue = easeOut * target;
         setDisplayValue(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.round(currentValue));

         if (progress < 1) {
            requestAnimationFrame(updateCounter);
         }
      };

      requestAnimationFrame(updateCounter);
   }, [isInView, target, isDecimal]);

   return (
      <span ref={ref}>
         {prefix}
         {displayValue}
         {suffix}
      </span>
   );
};

export default function Achievements() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const stats = [
      {
         icon: IconUsers,
         value: 5000,
         suffix: "+",
         label: "Happy Patients",
         color: "from-blue-400 to-blue-600",
      },
      {
         icon: IconHeart,
         value: 6000,
         suffix: "+",
         label: "Successful Treatments",
         color: "from-rose-400 to-rose-600",
      },
      {
         icon: IconStar,
         value: 4.8,
         suffix: "",
         label: "Average Rating",
         color: "from-[#D4AF37] to-[#B8960C]",
      },
      {
         icon: IconTrophy,
         value: 10,
         suffix: "+",
         label: "Years of Excellence",
         color: "from-purple-400 to-purple-600",
      },
   ];

   return (
      <section
         className="py-2 sm:py-6 md:py-8 lg:py-10 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FFF9F0, #FDFBF7)",
         }}
      >
         {/* Decorative Background */}
         <div className="absolute inset-0">
            <div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(212, 175, 55, 0.05), transparent)",
               }}
            />
         </div>

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
                     Our Achievements
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] mb-4 sm:mb-6 font-poppins px-4">
                     Numbers That Speak
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                     A testament to our commitment to excellence and patient
                     satisfaction
                  </p>
               </motion.div>

               {/* Stats Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                           duration: 0.5,
                           delay: 0.1 + index * 0.1,
                        }}
                        className="group"
                     >
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E6E1] text-center relative overflow-hidden">
                           {/* Gradient Background on Hover */}
                           <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                              style={{
                                 background: getStatGradient(stat.color),
                              }}
                           />

                           {/* Icon */}
                           <div className="relative z-10 flex justify-center mb-4 sm:mb-6">
                              <div
                                 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
                                 style={{
                                    background: getStatGradient(stat.color),
                                 }}
                              >
                                 <stat.icon
                                    size={24}
                                    className="text-white sm:w-7 sm:h-7 md:w-8 md:h-8"
                                 />
                              </div>
                           </div>

                           {/* Value */}
                           <div className="relative z-10">
                              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2332] mb-2 sm:mb-3 font-poppins">
                                 <Counter
                                    target={stat.value}
                                    suffix={stat.suffix}
                                 />
                              </div>
                              <p className="text-[#5A5A5A] font-semibold text-xs sm:text-sm md:text-base">
                                 {stat.label}
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Awards Section */}
               {/* <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20"
               >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#E8E6E1]">
                     <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4 font-poppins">
                           Recognition & Awards
                        </h3>
                        <p className="text-lg text-[#5A5A5A]">
                           Honored for our dedication to exceptional dental care
                        </p>
                     </div>

                     <div className="grid md:grid-cols-3 gap-8">
                        {[
                           {
                              year: "2023",
                              title: "Best Dental Clinic",
                              org: "Healthcare Excellence Awards",
                           },
                           {
                              year: "2022",
                              title: "Patient Choice Award",
                              org: "Dental Association",
                           },
                           {
                              year: "2021",
                              title: "Innovation in Dentistry",
                              org: "Medical Innovation Council",
                           },
                        ].map((award, index) => (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{
                                 duration: 0.5,
                                 delay: 0.7 + index * 0.1,
                              }}
                              className="text-center"
                           >
                              <div
                                 className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                                 style={{
                                    background:
                                       "linear-gradient(135deg, #D4AF37, #B8960C)",
                                 }}
                              >
                                 <IconTrophy size={36} className="text-white" />
                              </div>
                              <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                                 {award.year}
                              </div>
                              <h4 className="text-lg font-bold text-[#1A2332] mb-1">
                                 {award.title}
                              </h4>
                              <p className="text-sm text-[#8B8B8B]">
                                 {award.org}
                              </p>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </motion.div> */}
            </div>
         </div>
      </section>
   );
}
