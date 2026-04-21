"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
   IconBuildingHospital,
   IconDevices,
   IconShieldCheck,
   IconLeaf,
   IconSparkles,
} from "@tabler/icons-react";

const getFeatureGradient = (index: number) => {
   return "linear-gradient(135deg, #D4AF37, #B8960C)";
};

export default function ClinicTour() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const features = [
      {
         icon: IconBuildingHospital,
         title: "Modern Infrastructure",
         description:
            "State-of-the-art facility designed for comfort and efficiency",
      },
      {
         icon: IconDevices,
         title: "Advanced Technology",
         description: "Latest dental equipment and digital diagnostic tools",
      },
      {
         icon: IconShieldCheck,
         title: "Sterilization Protocol",
         description: "Hospital-grade sterilization ensuring complete safety",
      },
      {
         icon: IconLeaf,
         title: "Eco-Friendly",
         description: "Sustainable practices for a healthier environment",
      },
   ];

   const galleryImages = [
      {
         url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&q=80",
         title: "Reception Area",
         description: "Welcoming and comfortable waiting space",
      },
      {
         url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&q=80",
         title: "Treatment Room",
         description: "Advanced equipment in pristine environment",
      },
      {
         url: "https://images.unsplash.com/photo-1629909615957-be38b9e00e1a?w=600&h=400&fit=crop&q=80",
         title: "Consultation Space",
         description: "Private and comfortable consultation rooms",
      },
      {
         url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop&q=80",
         title: "Sterilization Area",
         description: "Hospital-grade sterilization facility",
      },
   ];

   return (
      <section
         className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FDFBF7, #FFF9F0)",
         }}
      >
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.02]">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
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
                        Our Facility
                     </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] mb-4 sm:mb-6 font-poppins px-4">
                     Virtual Clinic Tour
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                     Explore our state-of-the-art facility designed with your
                     comfort and care in mind
                  </p>
               </motion.div>

               {/* Features Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
                  {features.map((feature, index) => (
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
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-[#E8E6E1] text-center h-full">
                           <div
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
                              style={{
                                 background:
                                    "linear-gradient(135deg, #D4AF37, #B8960C)",
                              }}
                           >
                              <feature.icon
                                 size={20}
                                 className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
                              />
                           </div>
                           <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1A2332] mb-1.5 sm:mb-2 font-poppins">
                              {feature.title}
                           </h3>
                           <p className="text-xs sm:text-sm text-[#5A5A5A]">
                              {feature.description}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Gallery Grid */}
               <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {galleryImages.map((image, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                           duration: 0.5,
                           delay: 0.5 + index * 0.1,
                        }}
                        className="group relative"
                     >
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                           <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-60 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                           />

                           {/* Overlay */}
                           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                           {/* Content */}
                           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 font-poppins">
                                 {image.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/90">
                                 {image.description}
                              </p>
                           </div>

                           {/* Decorative Corner */}
                           <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl sm:rounded-tr-2xl" />
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* CTA Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-8 sm:mt-12 md:mt-16 text-center"
               >
                  <div
                     className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
                     style={{
                        background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                     }}
                  >
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-poppins px-2">
                        Experience Our Clinic in Person
                     </h3>
                     <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Schedule a visit to see our premium facilities and meet
                        our caring team
                     </p>
                     <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A2332] rounded-full font-semibold hover:bg-[#FFFEF9] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                     >
                        Book a Tour
                        <IconSparkles size={20} />
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
