"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
   IconChevronLeft,
   IconChevronRight,
   IconSparkles,
} from "@tabler/icons-react";

interface BeforeAfterItem {
   id: number;
   title: string;
   category: string;
   description: string;
   beforeLabel?: string;
   afterLabel?: string;
   beforeImage: string;
   afterImage: string;
}

const beforeAfterData: BeforeAfterItem[] = [
   {
      id: 1,
      title: "Smile Makeover",
      category: "Cosmetic Dentistry",
      description: "Complete transformation with veneers and teeth whitening",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeImage:
         "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80",
      afterImage:
         "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80",
   },
   {
      id: 2,
      title: "Dental Implants",
      category: "Restorative",
      description: "Missing tooth replaced with natural-looking implant",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeImage:
         "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?w=800&h=600&fit=crop&q=80",
      afterImage:
         "https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?w=800&h=600&fit=crop&q=80",
   },
   {
      id: 3,
      title: "Orthodontic Treatment",
      category: "Orthodontics",
      description: "Perfectly aligned teeth after 18 months of treatment",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeImage:
         "https://images.unsplash.com/photo-1609840113972-fa87c4b98c05?w=800&h=600&fit=crop&q=80",
      afterImage:
         "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80",
   },
   {
      id: 4,
      title: "Teeth Whitening",
      category: "Cosmetic",
      description: "Professional whitening for a brighter smile",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeImage:
         "https://images.pexels.com/photos/6528857/pexels-photo-6528857.jpeg?w=800&h=600&fit=crop&q=80",
      afterImage:
         "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?w=800&h=600&fit=crop&q=80",
   },
];

export default function BeforeAfter() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const [currentIndex, setCurrentIndex] = useState(0);
   const [sliderPosition, setSliderPosition] = useState(50);
   const [isDragging, setIsDragging] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);

   const currentItem = beforeAfterData[currentIndex];

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
      setSliderPosition(50);
   };

   const prevSlide = () => {
      setCurrentIndex(
         (prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length
      );
      setSliderPosition(50);
   };

   const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
   };

   const handleTouchMove = (e: React.TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
   };

   return (
      <section className="py-12 sm:py-14 md:py-16 lg:py-16 bg-linear-to-b from-white to-[#FDFBF7] relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-5">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
               }}
            />
         </div>
         <div
            className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{
               background: "radial-gradient(circle, #D4AF37, transparent)",
            }}
         />

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-8 sm:mb-10 md:mb-12"
            >
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-3 sm:mb-4"
                  style={{
                     background:
                        "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(244, 228, 193, 0.2))",
                  }}
               >
                  <IconSparkles
                     size={16}
                     className="text-[#D4AF37] sm:w-5 sm:h-5 lg:w-4 lg:h-4"
                  />
                  <span className="text-sm font-semibold text-[#5A5A5A]">
                     Real Results
                  </span>
               </motion.div>

               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-poppins font-bold text-[#1A2332] mb-3 sm:mb-4">
                  Before & <span className="text-[#D4AF37]">After Gallery</span>
               </h2>
               <p className="text-base sm:text-lg lg:text-base text-[#5A5A5A] max-w-2xl mx-auto leading-relaxed px-4">
                  See the amazing transformations we've achieved for our
                  patients. Drag the slider to compare before and after results.
               </p>
            </motion.div>

            {/* Carousel Container */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="relative"
            >
               {/* Main Carousel Card */}
               <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[500px] sm:min-h-[550px] lg:min-h-[480px] flex flex-col">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col"
                     >
                        {/* Image Comparison Container */}
                        <div
                           ref={containerRef}
                           className="relative h-[300px] sm:h-[350px] lg:h-[320px] cursor-col-resize select-none overflow-hidden bg-linear-to-br from-gray-100 to-gray-200"
                           onMouseMove={handleMouseMove}
                           onMouseDown={() => setIsDragging(true)}
                           onMouseUp={() => setIsDragging(false)}
                           onMouseLeave={() => setIsDragging(false)}
                           onTouchMove={handleTouchMove}
                           onTouchStart={() => setIsDragging(true)}
                           onTouchEnd={() => setIsDragging(false)}
                        >
                           {/* Before Image (Full Background) */}
                           <div className="absolute inset-0">
                              <Image
                                 src={currentItem.beforeImage}
                                 alt={`${currentItem.title} - Before`}
                                 fill
                                 className="object-cover"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                              />
                              <div className="absolute inset-0 bg-black/20" />
                           </div>

                           {/* After Image (Sliding Overlay) */}
                           <div
                              className="absolute inset-0"
                              style={{
                                 clipPath: `inset(0 ${
                                    100 - sliderPosition
                                 }% 0 0)`,
                              }}
                           >
                              <Image
                                 src={currentItem.afterImage}
                                 alt={`${currentItem.title} - After`}
                                 fill
                                 className="object-cover"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                              />
                              <div className="absolute inset-0 bg-black/20" />
                           </div>

                           {/* Slider Handle */}
                           <div
                              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-2xl"
                              style={{ left: `${sliderPosition}%` }}
                           >
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                                 <div className="flex items-center space-x-0.5 sm:space-x-1">
                                    <IconChevronLeft
                                       size={18}
                                       className="text-[#D4AF37] sm:w-6 sm:h-6 lg:w-5 lg:h-5"
                                    />
                                    <IconChevronRight
                                       size={18}
                                       className="text-[#D4AF37] sm:w-6 sm:h-6 lg:w-5 lg:h-5"
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-6 sm:p-8 lg:p-6 bg-white flex-1 flex flex-col justify-center min-h-[160px]">
                           <div className="flex items-center justify-between mb-3">
                              <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-semibold">
                                 {currentItem.category}
                              </span>
                           </div>
                           <h3 className="text-xl sm:text-2xl lg:text-xl font-poppins font-bold text-[#1A2332] mb-2 sm:mb-3">
                              {currentItem.title}
                           </h3>
                           <p className="text-base lg:text-sm text-[#5A5A5A] leading-relaxed">
                              {currentItem.description}
                           </p>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

               {/* Navigation Buttons */}
               <div className="flex items-center justify-center space-x-4 sm:space-x-4 mt-6 sm:mt-8">
                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={prevSlide}
                     className="w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                     aria-label="Previous transformation"
                  >
                     <IconChevronLeft
                        size={20}
                        className="sm:w-7 sm:h-7 lg:w-6 lg:h-6"
                     />
                  </motion.button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-2 sm:space-x-2">
                     {beforeAfterData.map((_, idx) => (
                        <button
                           key={idx}
                           onClick={() => {
                              setCurrentIndex(idx);
                              setSliderPosition(50);
                           }}
                           className={`h-2.5 sm:h-3 lg:h-2.5 rounded-full transition-all touch-manipulation ${
                              idx === currentIndex
                                 ? "bg-[#D4AF37] w-8 sm:w-10 lg:w-8"
                                 : "bg-gray-300 w-2.5 sm:w-3 lg:w-2.5"
                           }`}
                           aria-label={`Go to transformation ${idx + 1}`}
                        />
                     ))}
                  </div>

                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={nextSlide}
                     className="w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                     aria-label="Next transformation"
                  >
                     <IconChevronRight
                        size={20}
                        className="sm:w-7 sm:h-7 lg:w-6 lg:h-6"
                     />
                  </motion.button>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
