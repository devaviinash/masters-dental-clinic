"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
   IconX,
   IconCheck,
   IconClock,
   IconCurrencyRupee,
} from "@tabler/icons-react";
import { useEffect } from "react";

interface Service {
   id: string;
   icon: React.ElementType;
   title: string;
   shortDescription: string;
   fullDescription: string;
   benefits: string[];
   process: string[];
   duration: string;
   price: string;
   imageUrl: string;
}

interface ServiceModalProps {
   service: Service;
   onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
   // Prevent body scroll when modal is open
   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "unset";
      };
   }, []);

   // Close on escape key
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
   }, [onClose]);

   return (
      <AnimatePresence>
         <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={onClose}
               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               transition={{ duration: 0.3 }}
               className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[80vh] bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-100"
            >
               {/* Close Button */}
               <button
                  onClick={onClose}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white active:scale-95 transition-all duration-300"
               >
                  <IconX
                     size={16}
                     className="text-[#2C2C2C] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                  />
               </button>

               {/* Scrollable Content */}
               <div className="overflow-y-auto max-h-[85vh] sm:max-h-[80vh] custom-scrollbar">
                  {/* Hero Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 overflow-hidden">
                     <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                     />
                     <div
                        className="absolute inset-0"
                        style={{
                           background:
                              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        }}
                     />

                     {/* Service Icon */}
                     <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6">
                        <div
                           className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl mb-1.5 sm:mb-2 md:mb-3 lg:mb-4"
                           style={{
                              background:
                                 "linear-gradient(135deg, #D4AF37, #B8960C)",
                           }}
                        >
                           <service.icon
                              size={20}
                              className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                           />
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-poppins pr-10 sm:pr-12 leading-tight">
                           {service.title}
                        </h2>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                     {/* Quick Info */}
                     <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 p-2.5 sm:p-3 md:p-4 bg-[#FFF9F0] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#E8E6E1] mb-4 sm:mb-6 md:mb-8 max-w-md">
                        <div
                           className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center shrink-0"
                           style={{
                              background:
                                 "linear-gradient(135deg, #D4AF37, #B8960C)",
                           }}
                        >
                           <IconClock
                              size={18}
                              className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6"
                           />
                        </div>
                        <div className="min-w-0">
                           <p className="text-[9px] sm:text-[10px] md:text-xs text-[#8B8B8B] uppercase tracking-wide leading-tight">
                              Treatment Duration
                           </p>
                           <p className="text-xs sm:text-sm md:text-base text-[#1A2332] font-bold leading-tight mt-0.5">
                              {service.duration}
                           </p>
                        </div>
                     </div>

                     {/* Description */}
                     <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A2332] mb-2 sm:mb-3 md:mb-4 font-poppins">
                           About This Treatment
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
                           {service.fullDescription}
                        </p>
                     </div>

                     {/* Benefits */}
                     <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A2332] mb-2 sm:mb-3 md:mb-4 font-poppins">
                           Key Benefits
                        </h3>
                        <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                           {service.benefits.map((benefit, index) => (
                              <div
                                 key={index}
                                 className="flex items-start gap-2 sm:gap-2.5 md:gap-3"
                              >
                                 <div className="shrink-0 mt-0.5">
                                    <div
                                       className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center"
                                       style={{
                                          background:
                                             "linear-gradient(135deg, #D4AF37, #B8960C)",
                                       }}
                                    >
                                       <IconCheck
                                          size={10}
                                          className="text-white sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                                       />
                                    </div>
                                 </div>
                                 <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed flex-1">
                                    {benefit}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Process */}
                     <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A2332] mb-2 sm:mb-3 md:mb-4 font-poppins">
                           Treatment Process
                        </h3>
                        <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                           {service.process.map((step, index) => (
                              <div
                                 key={index}
                                 className="flex items-start gap-2.5 sm:gap-3 md:gap-4"
                              >
                                 <div
                                    className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm md:text-base"
                                    style={{
                                       background:
                                          "linear-gradient(135deg, #D4AF37, #B8960C)",
                                    }}
                                 >
                                    {index + 1}
                                 </div>
                                 <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed pt-0.5 sm:pt-1 md:pt-2 flex-1">
                                    {step}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* CTA Buttons */}
                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                        <a
                           href="/#contact"
                           onClick={onClose}
                           className="flex-1 py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 rounded-full text-center font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
                           style={{
                              background:
                                 "linear-gradient(135deg, #D4AF37, #B8960C)",
                           }}
                        >
                           Book Appointment
                        </a>
                        <a
                           href="tel:+1234567890"
                           className="flex-1 py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 bg-white border-2 border-[#D4AF37] rounded-full text-center font-semibold text-sm sm:text-base text-[#D4AF37] hover:bg-[#FFF9F0] active:scale-95 transition-all duration-300"
                        >
                           Call Now
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </AnimatePresence>
   );
}
