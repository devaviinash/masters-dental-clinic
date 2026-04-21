"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
   IconPhone,
   IconBrandWhatsapp,
   IconCalendar,
} from "@tabler/icons-react";

export default function FloatingActionButtons() {
   const [isVisible, setIsVisible] = useState(false);
   const controls = useAnimation();

   useEffect(() => {
      const handleScroll = () => {
         // Show buttons after scrolling 300px
         if (window.scrollY > 300) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      if (isVisible) {
         controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
         });
      } else {
         controls.start({
            opacity: 0,
            x: 100,
            transition: { duration: 0.3, ease: "easeIn" },
         });
      }
   }, [isVisible, controls]);

   return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
         {/* WhatsApp Button */}
         <motion.a
            href="https://wa.me/919923878673"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center group relative"
            style={{
               background: "linear-gradient(135deg, #D4AF37, #B8960C)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
         >
            <IconBrandWhatsapp size={24} className="text-white sm:w-7 sm:h-7" />
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-[#1A2332] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               WhatsApp Us
            </div>
         </motion.a>

         {/* Phone Button */}
         <motion.a
            href="tel:+919923878673"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center group relative"
            style={{
               background: "linear-gradient(135deg, #D4AF37, #B8960C)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
         >
            <IconPhone size={24} className="text-white sm:w-7 sm:h-7" />
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-[#1A2332] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               Call Us
            </div>
         </motion.a>
      </div>
   );
}
