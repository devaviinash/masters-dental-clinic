"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
   IconUsers,
   IconAward,
   IconHeart,
   IconShield,
} from "@tabler/icons-react";

const Counter = ({
   target,
   suffix = "",
}: {
   target: number;
   suffix?: string;
}) => {
   const ref = useRef(null);
   const [displayValue, setDisplayValue] = useState(0);
   const isInView = useInView(ref, { once: true });

   useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const duration = 2000;

      const updateCounter = (currentTime: number) => {
         if (!startTime) startTime = currentTime;
         const elapsed = currentTime - startTime;
         const progress = Math.min(elapsed / duration, 1);

         const easeOut = 1 - Math.pow(1 - progress, 3);
         setDisplayValue(Math.round(easeOut * target));

         if (progress < 1) {
            requestAnimationFrame(updateCounter);
         }
      };

      requestAnimationFrame(updateCounter);
   }, [isInView, target]);

   return (
      <span ref={ref}>
         {displayValue}
         {suffix}
      </span>
   );
};

const Feature = ({
   icon,
   title,
   description,
   index,
}: {
   icon: React.ReactNode;
   title: string;
   description: string;
   index: number;
}) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.5 });

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.6, delay: index * 0.2 }}
         className="text-center px-2"
      >
         <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-5 md:mb-6 shadow-xl"
            style={{
               background: "linear-gradient(to right, #D4AF37, #B8960C)",
            }}
         >
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">{icon}</div>
         </motion.div>
         <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-bold text-[#1A2332] mb-2 sm:mb-3">
            {title}
         </h3>
         <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed">
            {description}
         </p>
      </motion.div>
   );
};

export default function WhyChooseUs() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   return (
      <section
         id="why-choose-us"
         className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
      >
         {/* Background Elements */}
         <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#B8960C]/5 rounded-full blur-3xl" />
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
                  <IconShield
                     size={16}
                     className="text-[#D4AF37] sm:w-5 sm:h-5"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#5A5A5A]">
                     The Master's Difference
                  </span>
               </motion.div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#1A2332] mb-4 sm:mb-5 md:mb-6">
                  Why Choose{" "}
                  <span className="text-[#D4AF37]">Dr Inamdar's Master's Dental Clinic</span>
               </h2>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed px-4">
                  Experience the unique advantage of having a specialist
                  dentist dedicated to your care, combining expertise,
                  technology, and a personal touch.
               </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-16">
               <Feature
                  icon={<IconUsers size={40} />}
                  title="Specialist Dentist"
                  description="Benefit from the expertise of Dr. Inamdar's Master's Dental Clinic, dedicated to your perfect smile."
                  index={0}
               />
               <Feature
                  icon={<IconAward size={40} />}
                  title="10+ Years Experience"
                  description="Nearly four decades of combined experience in advanced dental procedures and patient care."
                  index={1}
               />
               <Feature
                  icon={<IconHeart size={40} />}
                  title="Personalized Care"
                  description="We treat you like family, providing compassionate, tailored treatment plans for your unique needs."
                  index={2}
               />
               <Feature
                  icon={<IconShield size={40} />}
                  title="State-of-the-Art"
                  description="Latest dental technology and techniques for safe, effective, and comfortable treatments."
                  index={3}
               />
            </div>

            {/* Stats Section */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.6 }}
               className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl"
            >
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center">
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-1 sm:mb-2"
                     >
                        <Counter target={10} suffix="+" />
                     </motion.div>
                     <div className="text-xs sm:text-sm md:text-base text-[#5A5A5A] font-medium leading-tight">
                        Years of Experience
                     </div>
                  </div>

                  <div className="text-center">
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1, type: "spring" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-1 sm:mb-2"
                     >
                        <Counter target={5000} suffix="+" />
                     </motion.div>
                     <div className="text-xs sm:text-sm md:text-base text-[#5A5A5A] font-medium leading-tight">
                        Happy Patients
                     </div>
                  </div>

                  <div className="text-center">
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-1 sm:mb-2"
                     >
                        <Counter target={98} suffix="%" />
                     </motion.div>
                     <div className="text-xs sm:text-sm md:text-base text-[#5A5A5A] font-medium leading-tight">
                        Success Rate
                     </div>
                  </div>

                  <div className="text-center">
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1.4, type: "spring" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-1 sm:mb-2"
                     >
                        <Counter target={15} suffix="+" />
                     </motion.div>
                     <div className="text-xs sm:text-sm md:text-base text-[#5A5A5A] font-medium leading-tight">
                        Services Offered
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Highlight Box */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8 }}
               className="mt-8 sm:mt-10 md:mt-12 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border border-[#D4AF37]/20"
               style={{
                  background:
                     "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(244, 228, 193, 0.1), rgba(212, 175, 55, 0.1))",
               }}
            >
               <IconUsers
                  size={36}
                  className="text-[#D4AF37] mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12 md:w-14 md:h-14"
               />
               <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-[#1A2332] mb-3 sm:mb-4">
                  The Specialist Advantage
               </h3>
               <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl mx-auto px-2">
                  Unlike other clinics, Dr Inamdar's Master's Dental Clinic offers you
                  unique benefit of having
                  <span className="font-semibold text-[#D4AF37]">
                     a specialized dentist
                  </span>{" "}
                  dedicated to your care. Whether you need cosmetic
                  enhancements from Dr. Mohsin or restorative care from Dr. Harshada, you get comprehensive treatment
                  planning and seamless coordination—all under one roof. This
                  approach ensures you receive the highest quality
                  care for every aspect of your dental health.
               </p>
            </motion.div>
         </div>
      </section>
   );
}
