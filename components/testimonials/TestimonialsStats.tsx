"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IconUsers, IconHeart, IconStar, IconAward } from "@tabler/icons-react";

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

export default function TestimonialsStats() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   const stats = [
      {
         icon: IconUsers,
         value: 5000,
         suffix: "+",
         label: "Happy Patients",
      },
      {
         icon: IconHeart,
         value: 98,
         suffix: "%",
         label: "Satisfaction Rate",
      },
      {
         icon: IconStar,
         value: 4.9,
         suffix: "/5",
         label: "Average Rating",
      },
      {
         icon: IconAward,
         value: 15,
         suffix: "+",
         label: "Years Experience",
      },
   ];

   return (
      <section
         className="py-20 md:py-32 relative overflow-hidden"
         style={{
            background: "linear-gradient(to bottom, #FDFBF7, #FFF9F0)",
         }}
      >
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div ref={ref} className="max-w-6xl mx-auto">
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                           duration: 0.5,
                           delay: 0.1 + index * 0.1,
                        }}
                        className="text-center"
                     >
                        <div
                           className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                           style={{
                              background:
                                 "linear-gradient(135deg, #D4AF37, #B8960C)",
                           }}
                        >
                           <stat.icon size={36} className="text-white" />
                        </div>
                        <div className="text-5xl font-bold text-[#1A2332] mb-3 font-poppins">
                           <Counter target={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-[#5A5A5A] font-semibold">
                           {stat.label}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
