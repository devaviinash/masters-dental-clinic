"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
   IconDental,
   IconSparkles,
   IconStethoscope,
   IconHeart,
   IconShield,
   IconUsers,
   IconSun,
   IconBabyCarriage,
   IconTool,
   IconChevronDown,
} from "@tabler/icons-react";

interface Service {
   icon: React.ReactNode;
   title: string;
   description: string;
   specialist?: string;
}

const services: Service[] = [
   {
      icon: <IconSparkles size={32} />,
      title: "Cosmetic Dentistry",
      description:
         "Transform your smile with veneers, bonding, and aesthetic treatments for a confident, radiant look.",
      specialist: "Dr. Mohsin Minne",
   },
   {
      icon: <IconDental size={32} />,
      title: "Dental Implants",
      description:
         "Permanent, natural-looking tooth replacements using advanced implant technology for lasting results.",
      specialist: "Dr. Harshada Minne",
   },
   {
      icon: <IconStethoscope size={32} />,
      title: "Root Canal Treatment",
      description:
         "Painless, precision root canal therapy to save your natural teeth and eliminate infection.",
      specialist: "Dr. Mohsin Minne",
   },
   {
      icon: <IconSun size={32} />,
      title: "Teeth Whitening",
      description:
         "Professional whitening treatments for a brighter, whiter smile in just one session.",
      specialist: "Dr. Harshada Minne",
   },
   {
      icon: <IconShield size={32} />,
      title: "Orthodontics",
      description:
         "Braces and clear aligners to straighten teeth and create perfectly aligned smiles.",
      specialist: "Dr. Mohsin Minne",
   },
   {
      icon: <IconBabyCarriage size={32} />,
      title: "Pediatric Dentistry",
      description:
         "Gentle, specialized care for children's dental health in a friendly, comfortable environment.",
      specialist: "Dr. Harshada Minne",
   },
   {
      icon: <IconHeart size={32} />,
      title: "Preventive Care",
      description:
         "Regular check-ups, cleanings, and preventive treatments to maintain optimal oral health.",
      specialist: "Dr. Mohsin Minne",
   },
   {
      icon: <IconTool size={32} />,
      title: "Full Mouth Rehabilitation",
      description:
         "Comprehensive treatment plans to restore function, health, and beauty to your entire smile.",
      specialist: "Dr. Harshada Minne",
   },
   {
      icon: <IconUsers size={32} />,
      title: "Family Dentistry",
      description:
         "Complete dental care for the whole family, from children to seniors, all in one place.",
      specialist: "Dr. Mohsin Minne",
   },
];

const ServiceCard = ({
   service,
   index,
}: {
   service: Service;
   index: number;
}) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="group"
      >
         <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#B8960C]/5 transition-all duration-300" />

            <div className="relative z-10">
               {/* Icon */}
               <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg"
                  style={{
                     background: "linear-gradient(to right, #D4AF37, #B8960C)",
                  }}
               >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                     {service.icon}
                  </div>
               </motion.div>

               {/* Content */}
               <h3 className="text-base sm:text-lg md:text-xl font-poppins font-bold text-[#1A2332] mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {service.title}
               </h3>
               <p className="text-sm sm:text-base text-[#5A5A5A] mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
               </p>

               {/* Specialist Tag */}
               {service.specialist && (
                  <div className="inline-flex items-center space-x-1 bg-[#D4AF37]/10 px-2.5 sm:px-3 py-1 rounded-full">
                     <IconStethoscope
                        size={12}
                        className="text-[#D4AF37] sm:w-3.5 sm:h-3.5"
                     />
                     <span className="text-xs font-semibold text-[#D4AF37]">
                        {service.specialist}
                     </span>
                  </div>
               )}
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         </div>
      </motion.div>
   );
};

export default function ServicesSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const [showAll, setShowAll] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 640);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   const displayedServices =
      isMobile && !showAll ? services.slice(0, 4) : services;

   return (
      <section
         id="services"
         className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-[#FDFBF7] to-[#F4E4C1]/10 relative overflow-hidden"
      >
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
               }}
            />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-10 sm:mb-12 md:mb-16"
            >
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
                  style={{
                     background:
                        "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(244, 228, 193, 0.2))",
                  }}
               >
                  <IconDental
                     size={16}
                     className="text-[#D4AF37] sm:w-5 sm:h-5"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#5A5A5A]">
                     Comprehensive Care
                  </span>
               </motion.div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  Our <span className="text-[#D4AF37]">Dental Services</span>
               </h2>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  From routine care to advanced procedures, we offer a complete
                  range of dental services tailored to your unique needs,
                  delivered with expertise and compassion.
               </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
               <AnimatePresence mode="sync">
                  {displayedServices.map((service, index) => (
                     <ServiceCard key={index} service={service} index={index} />
                  ))}
               </AnimatePresence>
            </div>

            {/* Show More Button - Mobile Only */}
            {isMobile && !showAll && (
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-6"
               >
                  <motion.button
                     onClick={() => setShowAll(true)}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-[#D4AF37] text-[#B8960C] rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg touch-manipulation"
                  >
                     <span>Show More Services</span>
                     <IconChevronDown size={16} className="animate-bounce" />
                  </motion.button>
               </motion.div>
            )}

            {/* Bottom CTA */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8 }}
               className="text-center mt-8 sm:mt-10 md:mt-12"
            >
               <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 px-4">
                  Not sure which service you need? Let us help you find the
                  perfect treatment.
               </p>
               <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all touch-manipulation"
                  style={{
                     background: "linear-gradient(to right, #D4AF37, #B8960C)",
                  }}
               >
                  <span>Schedule a Consultation</span>
                  <IconSparkles
                     size={16}
                     className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                  />
               </motion.a>
            </motion.div>
         </div>
      </section>
   );
}
