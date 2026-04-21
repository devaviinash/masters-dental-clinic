"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IconStar, IconQuote, IconSparkles } from "@tabler/icons-react";

interface Testimonial {
   id: number;
   name: string;
   treatment: string;
   rating: number;
   review: string;
   date: string;
   imageUrl: string;
}

export default function TestimonialsContent() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });
   const [filter, setFilter] = useState<string>("all");

   const testimonials: Testimonial[] = [
      {
         id: 1,
         name: "Rajesh Kumar",
         treatment: "Dental Implants",
         rating: 5,
         review:
            "Dr. Harshada and her team were absolutely amazing! I was nervous about getting dental implants, but they made the entire process so comfortable and pain-free. The results exceeded my expectations. I can finally smile with confidence again!",
         date: "2 weeks ago",
         imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 2,
         name: "Priya Sharma",
         treatment: "Teeth Whitening",
         rating: 5,
         review:
            "I'm absolutely thrilled with my teeth whitening results! Dr. Mohsin is so professional and caring. Dr. Mohsin explained everything clearly and made sure I was comfortable throughout. Worth every penny!",
         date: "1 month ago",
         imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 3,
         name: "Amit Patel",
         treatment: "Root Canal Treatment",
         rating: 5,
         review:
            "I was terrified of root canal treatment, but Dr. Mohsin made it completely painless. The clinic is spotlessly clean and equipped with the latest technology. The entire team is friendly and professional. Highly recommended!",
         date: "3 weeks ago",
         imageUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 4,
         name: "Sneha Desai",
         treatment: "Orthodontic Braces",
         rating: 5,
         review:
            "Dr. Harshada is an excellent orthodontist! She patiently answered all my questions and created a perfect treatment plan for me. After 18 months, my teeth are perfectly aligned. The clinic has a wonderful, welcoming atmosphere.",
         date: "1 week ago",
         imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 5,
         name: "Vikram Singh",
         treatment: "Cosmetic Dentistry",
         rating: 5,
         review:
            "Dr Inamdar's Master's Dental Clinic transformed my smile beyond my imagination! The veneers look so natural. Dr. Harshada is highly skilled and staff is incredibly supportive. Best dental clinic in the city!",
         date: "2 months ago",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 6,
         name: "Ananya Reddy",
         treatment: "Gum Treatment",
         rating: 5,
         review:
            "I had severe gum disease and was worried about losing my teeth. Dr. Mohsin's expertise saved my teeth! The treatment was thorough and results are amazing. I'm so grateful for their care and attention.",
         date: "3 months ago",
         imageUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 7,
         name: "Karthik Nair",
         treatment: "Dental Crowns",
         rating: 5,
         review:
            "Excellent service and outstanding results! My dental crowns fit perfectly and look completely natural. Dr. Harshada is meticulous in her work. The clinic maintains the highest standards of hygiene and professionalism.",
         date: "1 month ago",
         imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 8,
         name: "Meera Iyer",
         treatment: "Wisdom Tooth Extraction",
         rating: 5,
         review:
            "The wisdom tooth extraction was surprisingly easy! Dr. Mohsin is very gentle and skilled. There was minimal pain and swelling. The follow-up care was excellent. I couldn't have asked for a better experience.",
         date: "2 weeks ago",
         imageUrl:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 9,
         name: "Arjun Mehta",
         treatment: "Full Mouth Rehabilitation",
         rating: 5,
         review:
            "Life-changing experience! After years of dental problems, Dr Inamdar's Master's Dental Clinic gave me a complete smile makeover. Dr. Mohsin worked brilliantly. I feel like a new person!",
         date: "4 months ago",
         imageUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 10,
         name: "Divya Kapoor",
         treatment: "Pediatric Dentistry",
         rating: 5,
         review:
            "My 7-year-old daughter loves going to Dr Inamdar's Master's Dental Clinic! Dr. Mohsin is so patient and gentle with kids. The clinic has a child-friendly environment. Finally, a dentist my daughter doesn't fear!",
         date: "3 weeks ago",
         imageUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 11,
         name: "Sanjay Gupta",
         treatment: "Dentures",
         rating: 5,
         review:
            "My dentures fit perfectly and look so natural! Dr. Harshada took the time to ensure everything was just right. The quality of work is exceptional. I can eat and speak confidently now. Thank you!",
         date: "2 months ago",
         imageUrl:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&q=80",
      },
      {
         id: 12,
         name: "Pooja Joshi",
         treatment: "Emergency Dental Care",
         rating: 5,
         review:
            "I had a severe toothache on a Sunday evening and they accommodated me immediately! Dr. Mohsin provided instant relief. Their emergency care service is outstanding. So grateful for their dedication!",
         date: "1 week ago",
         imageUrl:
            "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&q=80",
      },
   ];

   const treatments = [
      "all",
      "Dental Implants",
      "Teeth Whitening",
      "Root Canal Treatment",
      "Orthodontic Braces",
      "Cosmetic Dentistry",
   ];

   const filteredTestimonials =
      filter === "all"
         ? testimonials
         : testimonials.filter((t) => t.treatment === filter);

   return (
      <section className="py-2 sm:py-4 md:py-6 lg:py-8 pb-16 bg-[#FDFBF7] relative overflow-hidden">
         {/* Background Decorations */}
         <div
            className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(244, 228, 193, 0.2), transparent)",
            }}
         />
         <div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{
               background:
                  "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)",
            }}
         />

         <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
            <div ref={ref} className="max-w-7xl mx-auto">
               {/* Header */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 md:mb-16"
               >
                  <div
                     className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border border-[#D4AF37]/30 mb-4 sm:mb-5 md:mb-6"
                     style={{
                        background:
                           "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                     }}
                  >
                     <IconSparkles
                        size={16}
                        className="text-[#D4AF37] sm:w-5 sm:h-5"
                     />
                     <span className="text-[#2C2C2C] font-semibold text-xs sm:text-sm">
                        Patient Testimonials
                     </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A2332] mb-3 sm:mb-4 md:mb-6 font-poppins px-4">
                     What Our Patients Say
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                     Real experiences from real patients who trusted us with
                     their smiles
                  </p>
               </motion.div>

               {/* Filter Buttons */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 md:mb-12 px-2"
               >
                  {treatments.map((treatment) => (
                     <button
                        key={treatment}
                        onClick={() => setFilter(treatment)}
                        className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 ${
                           filter === treatment
                              ? "text-white shadow-lg"
                              : "bg-white text-[#5A5A5A] border border-[#E8E6E1] hover:border-[#D4AF37]"
                        }`}
                        style={
                           filter === treatment
                              ? {
                                   background:
                                      "linear-gradient(135deg, #D4AF37, #B8960C)",
                                }
                              : {}
                        }
                     >
                        {treatment === "all" ? "All Reviews" : treatment}
                     </button>
                  ))}
               </motion.div>

               {/* Testimonials Grid */}
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {filteredTestimonials.map((testimonial, index) => (
                     <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                           duration: 0.5,
                           delay: 0.3 + index * 0.05,
                        }}
                        className="group"
                     >
                        <div className="h-full bg-gradient-to-br from-white via-[#FFFEF9] to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8E6E1] relative overflow-hidden group-hover:border-[#D4AF37]/30">
                           {/* Hover Gradient */}
                           <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                 background:
                                    "linear-gradient(135deg, rgba(212, 175, 55, 0.03), rgba(184, 150, 12, 0.03))",
                              }}
                           />

                           {/* Patient Info - Top */}
                           <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                              <div className="flex items-center gap-3 sm:gap-4">
                                 <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0"
                                    style={{
                                       background:
                                          "linear-gradient(135deg, #D4AF37, #B8960C)",
                                    }}
                                 >
                                    <IconQuote
                                       size={20}
                                       className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
                                    />
                                 </div>
                                 <div className="min-w-0 flex-1">
                                    <h4 className="text-sm sm:text-base md:text-lg text-[#1A2332] font-bold truncate">
                                       {testimonial.name}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-[#8B8B8B] truncate">
                                       {testimonial.treatment}
                                    </p>
                                 </div>
                              </div>
                           </div>

                           {/* Rating and Google Verified Badge - Same Line */}
                           <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5 md:mb-6 flex-wrap gap-2">
                              <div className="flex gap-0.5 sm:gap-1">
                                 {[...Array(testimonial.rating)].map((_, i) => (
                                    <IconStar
                                       key={i}
                                       size={16}
                                       className="fill-[#D4AF37] text-[#D4AF37] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                                    />
                                 ))}
                              </div>
                              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm border border-gray-200/50">
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

                           {/* Review */}
                           <p className="relative z-10 text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-3 sm:mb-4 line-clamp-6 italic">
                              "{testimonial.review}"
                           </p>

                           {/* Date */}
                           <p className="relative z-10 text-[10px] sm:text-xs text-[#8B8B8B] mt-auto">
                              {testimonial.date}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* CTA Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-12 sm:mt-16 md:mt-20 text-center px-2"
               >
                  <div
                     className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl max-w-3xl mx-auto"
                     style={{
                        background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                     }}
                  >
                     <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-poppins">
                        Ready to Join Our Happy Patients?
                     </h3>
                     <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8">
                        Experience the same exceptional care that our patients
                        rave about
                     </p>
                     <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-[#1A2332] rounded-full font-semibold text-sm sm:text-base hover:bg-[#FFFEF9] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105"
                     >
                        <IconSparkles size={18} className="sm:w-5 sm:h-5" />
                        Book Your Appointment
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
