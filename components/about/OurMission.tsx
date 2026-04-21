"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
   IconTargetArrow,
   IconEye,
   IconBulb,
   IconSparkles,
} from "@tabler/icons-react";

export default function OurMission() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const cards = [
      {
         icon: IconTargetArrow,
         title: "Our Mission",
         description:
            "To provide world-class dental care that exceeds expectations while making every patient feel valued, respected, and comfortable. We're committed to transforming dental anxiety into dental confidence through compassionate care and exceptional results.",
         gradient: "from-[#D4AF37] to-[#B8960C]",
      },
      {
         icon: IconEye,
         title: "Our Vision",
         description:
            "To be the most trusted dental clinic in our community, setting the standard for excellence in comprehensive oral healthcare. We envision a future where everyone has access to premium dental services in a warm, welcoming environment.",
         gradient: "from-[#B8960C] to-[#D4AF37]",
      },
      {
         icon: IconBulb,
         title: "Our Philosophy",
         description:
            "We believe in treating the whole person, not just their teeth. Every treatment plan is customized to your unique needs, lifestyle, and goals. We combine evidence-based dentistry with a gentle touch to deliver care that truly makes a difference.",
         gradient: "from-[#D4AF37] to-[#B8960C]",
      },
   ];

   return (
      <section
         className="pb-12 pt-12 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FDFBF7, #FFF9F0)",
         }}
      >
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-[0.02]">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
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
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-[#E8E6E1] mb-4 sm:mb-6">
                     <IconSparkles size={18} className="text-[#D4AF37]" />
                     <span className="text-[#2C2C2C] font-semibold text-xs sm:text-sm">
                        What Drives Us
                     </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A2332] mb-4 sm:mb-6 font-poppins px-4">
                     Mission, Vision & Philosophy
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                     The guiding principles that shape everything we do at
                     Dr Inamdar's Master's Dental Clinic
                  </p>
               </motion.div>

               {/* Cards Grid */}
               <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {cards.map((card, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                           duration: 0.6,
                           delay: 0.2 + index * 0.1,
                        }}
                        className="group relative"
                     >
                        <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E6E1] relative overflow-hidden">
                           {/* Gradient Overlay on Hover */}
                           <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                              style={{
                                 background:
                                    index === 0
                                       ? "linear-gradient(135deg, #D4AF37, #B8960C)"
                                       : index === 1
                                       ? "linear-gradient(135deg, #B8960C, #D4AF37)"
                                       : "linear-gradient(135deg, #D4AF37, #B8960C)",
                              }}
                           />

                           {/* Icon */}
                           <div
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10"
                              style={{
                                 background:
                                    index === 0
                                       ? "linear-gradient(135deg, #D4AF37, #B8960C)"
                                       : index === 1
                                       ? "linear-gradient(135deg, #B8960C, #D4AF37)"
                                       : "linear-gradient(135deg, #D4AF37, #B8960C)",
                              }}
                           >
                              <card.icon
                                 size={24}
                                 className="text-white sm:w-7 sm:h-7 md:w-8 md:h-8"
                              />
                           </div>

                           {/* Content */}
                           <div className="relative z-10">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A2332] mb-3 sm:mb-4 font-poppins">
                                 {card.title}
                              </h3>
                              <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed">
                                 {card.description}
                              </p>
                           </div>

                           {/* Decorative Corner */}
                           <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-linear-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
