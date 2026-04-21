"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
   IconStar,
   IconChevronLeft,
   IconChevronRight,
   IconQuote,
} from "@tabler/icons-react";
import { FaGoogle } from "react-icons/fa";

interface Testimonial {
   name: string;
   treatment: string;
   text: string;
   rating: number;
   doctor?: string;
}

const testimonials: Testimonial[] = [
   {
      name: "Priya Sharma",
      treatment: "Dental Implants",
      text: "Dr. Mohsin and expertise in dental implants is remarkable. The entire process was painless and the results are beyond my expectations. My smile looks and feels completely natural!",
      rating: 5,
      doctor: "Dr. Mohsin Minne",
   },
   {
      name: "Rajesh Patel",
      treatment: "Orthodontics",
      text: "Dr. Harshada made my orthodontic journey smooth and comfortable. Her attention to detail and caring nature made all the difference. Highly recommend!",
      rating: 5,
      doctor: "Dr. Harshada Minne",
   },
   {
      name: "Anita Desai",
      treatment: "Cosmetic Smile Makeover",
      text: "The team at Dr Inamdar's Master's Dental Clinic is amazing! Dr. Mohsin worked on my smile makeover. The coordination and results are phenomenal!",
      rating: 5,
      doctor: "Dr. Mohsin Minne",
   },
   {
      name: "Vikram Singh",
      treatment: "Root Canal Treatment",
      text: "I was terrified of root canals, but Dr. Harshada made it completely painless. Her skill and modern techniques are top-notch. The clinic is world-class!",
      rating: 5,
      doctor: "Dr. Harshada Minne",
   },
   {
      name: "Meera Reddy",
      treatment: "Pediatric Dentistry",
      text: "Dr. Mohsin is wonderful with kids! My daughter actually looks forward to dental visits now. The clinic is child-friendly and the care is exceptional.",
      rating: 5,
      doctor: "Dr. Mohsin Minne",
   },
   {
      name: "Amit Kumar",
      treatment: "Full Mouth Rehabilitation",
      text: "After years of dental issues, Dr. Mohsin transformed my oral health completely. His expertise and approach are unmatched. Forever grateful!",
      rating: 5,
      doctor: "Dr. Mohsin Minne",
   },
];

const StarRating = ({ rating }: { rating: number }) => (
   <div className="flex space-x-0.5 sm:space-x-1">
      {[...Array(5)].map((_, i) => (
         <IconStar
            key={i}
            size={16}
            className={`sm:w-5 sm:h-5 ${
               i < rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"
            }`}
         />
      ))}
   </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
   <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-xl relative h-full"
   >
      {/* Quote Icon */}
      <div
         className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
         style={{ background: "linear-gradient(to right, #D4AF37, #B8960C)" }}
      >
         <IconQuote
            size={20}
            className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
         />
      </div>

      {/* Google Verified Badge */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 flex-wrap gap-2">
         <StarRating rating={testimonial.rating} />
         <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
            <svg
               width="14"
               height="14"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
               />
               <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
               />
               <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
               />
               <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
               />
            </svg>
            <span className="text-xs font-semibold text-gray-700">
               Verified
            </span>
         </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 italic">
         "{testimonial.text}"
      </p>

      {/* Patient Info */}
      <div className="pt-4 sm:pt-5 md:pt-6 border-t border-[#E8E6E1]">
         <h4 className="font-poppins font-bold text-[#1A2332] text-base sm:text-lg">
            {testimonial.name}
         </h4>
         <p className="text-sm sm:text-base text-[#D4AF37] font-medium leading-tight mt-0.5">
            {testimonial.treatment}
         </p>
         {testimonial.doctor && (
            <p className="text-xs sm:text-sm text-[#8B8B8B] mt-1">
               Treated by {testimonial.doctor}
            </p>
         )}
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-linear-to-tl from-[#D4AF37]/5 to-transparent rounded-tl-full" />
   </motion.div>
);

export default function TestimonialsSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
   };

   const prevTestimonial = () => {
      setCurrentIndex(
         (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
   };

   const visibleTestimonials = [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
   ];

   return (
      <section
         id="testimonials"
         className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-[#F4E4C1]/10 to-white relative overflow-hidden min-h-[600px] md:min-h-[700px]"
      >
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#D4AF37] rounded-full blur-3xl" />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
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
                  <IconStar
                     size={16}
                     className="text-[#D4AF37] fill-[#D4AF37] sm:w-5 sm:h-5"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#5A5A5A]">
                     Patient Stories
                  </span>
               </motion.div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#1A2332] mb-4 sm:mb-5 md:mb-6">
                  What Our <span className="text-[#D4AF37]">Patients Say</span>
               </h2>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed px-4">
                  Don't just take our word for it. Hear from our satisfied
                  patients about their experience with Dr. Mohsin & Dr. Harshada
                  at Dr. Inamdar's Master's Dental Clinic.
               </p>
            </motion.div>

            {/* Testimonials Carousel */}
            <div className="relative flex-1 flex flex-col justify-center">
               {/* Desktop View - 2 Cards */}
               <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 h-[400px]">
                  {visibleTestimonials.map((testimonial, idx) => (
                     <AnimatePresence
                        mode="wait"
                        key={`${currentIndex}-${idx}`}
                     >
                        <div
                           key={`card-${currentIndex}-${idx}`}
                           className="h-full"
                        >
                           <TestimonialCard testimonial={testimonial} />
                        </div>
                     </AnimatePresence>
                  ))}
               </div>

               {/* Mobile View - 1 Card */}
               <div className="md:hidden h-[300px]">
                  <AnimatePresence mode="wait">
                     <div key={currentIndex} className="h-full">
                        <TestimonialCard
                           testimonial={testimonials[currentIndex]}
                        />
                     </div>
                  </AnimatePresence>
               </div>

               {/* Navigation Buttons */}
               <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-7 md:mt-8">
                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={prevTestimonial}
                     className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                     aria-label="Previous testimonial"
                  >
                     <IconChevronLeft size={20} className="sm:w-6 sm:h-6" />
                  </motion.button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-1.5 sm:space-x-2">
                     {testimonials.map((_, idx) => (
                        <button
                           key={idx}
                           onClick={() => setCurrentIndex(idx)}
                           className={`h-2 rounded-full transition-all touch-manipulation ${
                              idx === currentIndex
                                 ? "bg-[#D4AF37] w-6 sm:w-8"
                                 : "bg-gray-300 w-2"
                           }`}
                           aria-label={`Go to testimonial ${idx + 1}`}
                        />
                     ))}
                  </div>

                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={nextTestimonial}
                     className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                     aria-label="Next testimonial"
                  >
                     <IconChevronRight size={20} className="sm:w-6 sm:h-6" />
                  </motion.button>
               </div>
            </div>

            {/* Google Reviews CTA */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8 }}
               className="text-center mt-8 sm:mt-10 md:mt-12"
            >
               <p className="text-sm sm:text-base md:text-lg text-[#5A5A5A] mb-3 sm:mb-4">
                  See more reviews on Google
               </p>
               <motion.a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FFFEF9] border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] hover:text-white transition-all touch-manipulation"
               >
                  <FaGoogle size={18} className="sm:w-5 sm:h-5" />
                  <span>View Google Reviews</span>
               </motion.a>
            </motion.div>
         </div>
      </section>
   );
}
