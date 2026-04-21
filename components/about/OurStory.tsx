"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconQuote } from "@tabler/icons-react";

export default function OurStory() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
         {/* Background Decoration */}
         <div
            className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(244, 228, 193, 0.2), transparent)",
            }}
         />
         <div
            className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)",
            }}
         />

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div ref={ref} className="max-w-6xl mx-auto">
               {/* Section Header */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 md:mb-16"
               >
                  <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
                     Our Journey
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] font-poppins px-4">
                     Our Story
                  </h2>
               </motion.div>

               <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                  {/* Image Section */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="relative"
                  >
                     <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <img
                           src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop&q=80"
                           alt="Dr Inamdar's Master's Dental Clinic - Modern Dental Facility"
                           className="w-full h-[350px] sm:h-[400px] md:h-[675px] object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-[#E8E6E1]">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div
                                 className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                                 style={{
                                    background:
                                       "linear-gradient(135deg, #D4AF37, #B8960C)",
                                 }}
                              >
                                 <IconQuote
                                    size={20}
                                    className="text-white sm:w-6 sm:h-6"
                                 />
                              </div>
                              <div>
                                 <p className="text-[#2C2C2C] font-semibold text-xs sm:text-sm mb-1">
                                    "Excellence is not a skill, it's an
                                    attitude"
                                 </p>
                                 <p className="text-[#8B8B8B] text-[10px] sm:text-xs">
                                    - Our Founding Philosophy
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Decorative Element */}
                     <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-[#D4AF37] rounded-2xl sm:rounded-3xl -z-10" />
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     className="space-y-4 sm:space-y-6"
                  >
                     <div className="space-y-3 sm:space-y-4">
                        <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                           Dr Inamdar's Master's Dental Clinic was born from a vision
                           by Dr. Mohsin Minne — to
                           create a dental practice that doesn't just treat
                           teeth, but transforms lives through exceptional care
                           and genuine compassion.
                        </p>

                        <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                           What started as a dream has flourished into a
                           state-of-the-art dental facility where cutting-edge
                           technology meets personalized attention. We believe
                           that every smile tells a story, and we're honored to
                           be part of yours.
                        </p>

                        <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                           Today, we serve hundreds of families, each receiving
                           the same level of care and dedication that we would
                           want for our own loved ones. Our clinic has grown,
                           but our core values remain unchanged — excellence,
                           integrity, and a patient-first approach in everything
                           we do.
                        </p>
                     </div>

                     {/* Timeline Highlights */}
                     <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                        {[
                           {
                              year: "2015",
                              title: "Foundation",
                              desc: "Dr Inamdar's Master's Dental Clinic opens its doors",
                           },
                           {
                              year: "2018",
                              title: "Expansion",
                              desc: "Advanced technology & additional specialists",
                           },
                           {
                              year: "2023",
                              title: "Recognition",
                              desc: "Award-winning patient care excellence",
                           },
                        ].map((item, index) => (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                 duration: 0.5,
                                 delay: 0.6 + index * 0.1,
                              }}
                              className="flex items-start gap-3 sm:gap-4"
                           >
                              <div
                                 className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                                 style={{
                                    background:
                                       "linear-gradient(135deg, #D4AF37, #B8960C)",
                                 }}
                              >
                                 <span className="text-white font-bold text-xs sm:text-sm">
                                    {item.year}
                                 </span>
                              </div>
                              <div className="pt-1 sm:pt-2">
                                 <h4 className="text-[#1A2332] font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                                    {item.title}
                                 </h4>
                                 <p className="text-[#8B8B8B] text-xs sm:text-sm">
                                    {item.desc}
                                 </p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
}
