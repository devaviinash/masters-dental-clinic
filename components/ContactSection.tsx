"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
   IconPhone,
   IconMail,
   IconMapPin,
   IconClock,
   IconSend,
   IconUser,
   IconCalendar,
} from "@tabler/icons-react";

export default function ContactSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      message: "",
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", formData);
      alert(
         "Thank you! We will contact you shortly to confirm your appointment."
      );
      setFormData({
         name: "",
         email: "",
         phone: "",
         doctor: "",
         date: "",
         message: "",
      });
   };

   return (
      <section
         id="contact"
         className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-[#F4E4C1]/20 via-white to-[#D4AF37]/10 relative overflow-hidden"
      >
         {/* Background Elements */}
         <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#B8960C]/10 rounded-full blur-3xl" />
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
                  <IconCalendar
                     size={16}
                     className="text-[#D4AF37] sm:w-5 sm:h-5"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#5A5A5A]">
                     Get In Touch
                  </span>
               </motion.div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#1A2332] mb-4 sm:mb-5 md:mb-6">
                  Book Your <span className="text-[#D4AF37]">Appointment</span>
               </h2>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed px-4">
                  Schedule your consultation with Dr. Mohsin & Dr. Harshada Minne.
                  We're here to give you the smile you deserve.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
               {/* Contact Information */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 sm:space-y-7 md:space-y-8"
               >
                  {/* Info Cards */}
                  <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl">
                     <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332] mb-5 sm:mb-6">
                        Contact Information
                     </h3>

                     <div className="space-y-5 sm:space-y-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                           <div
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                              style={{
                                 background:
                                    "linear-gradient(to right, #D4AF37, #B8960C)",
                              }}
                           >
                              <IconMapPin
                                 size={20}
                                 className="text-white sm:w-6 sm:h-6"
                              />
                           </div>
                           <div>
                              <h4 className="font-semibold text-sm sm:text-base text-[#1A2332] mb-1">
                                 Visit Us
                              </h4>
                              <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                                 Flat No 1, 2, Company, opp. Atlas Copco,
                                 <br />
                                 Agrasen Nagar Society, Seva Nagar, Dapodi,
                                 <br />
                                 Pune, Pimpri-Chinchwad, Maharashtra 411012
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start space-x-3 sm:space-x-4">
                           <div
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                              style={{
                                 background:
                                    "linear-gradient(to right, #D4AF37, #B8960C)",
                              }}
                           >
                              <IconPhone
                                 size={20}
                                 className="text-white sm:w-6 sm:h-6"
                              />
                           </div>
                           <div>
                              <h4 className="font-semibold text-sm sm:text-base text-[#1A2332] mb-1">
                                 Call Us
                              </h4>
                              <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                                 +91 99238 78673
                                 <br />
                                 Available for Appointments
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start space-x-3 sm:space-x-4">
                           <div
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                              style={{
                                 background:
                                    "linear-gradient(to right, #D4AF37, #B8960C)",
                              }}
                           >
                              <IconMail
                                 size={20}
                                 className="text-white sm:w-6 sm:h-6"
                              />
                           </div>
                           <div>
                              <h4 className="font-semibold text-sm sm:text-base text-[#1A2332] mb-1">
                                 Email Us
                              </h4>
                              <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed wrap-break-word">
                                 mastersdentalclinic.dapodi@gmail.com
                                 <br />
                                 For Appointments & Inquiries
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start space-x-3 sm:space-x-4">
                           <div
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                              style={{
                                 background:
                                    "linear-gradient(to right, #D4AF37, #B8960C)",
                              }}
                           >
                              <IconClock
                                 size={20}
                                 className="text-white sm:w-6 sm:h-6"
                              />
                           </div>
                           <div>
                              <h4 className="font-semibold text-sm sm:text-base text-[#1A2332] mb-1">
                                 Working Hours
                              </h4>
                              <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                                 10:00 AM - 9:30 PM
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Emergency Note */}
                  <div
                     className="rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#D4AF37]/20"
                     style={{
                        background:
                           "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(244, 228, 193, 0.2))",
                     }}
                  >
                     <h4 className="font-poppins font-bold text-base sm:text-lg text-[#1A2332] mb-2">
                        Emergency Care
                     </h4>
                     <p className="text-xs sm:text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                        Need urgent dental care? Call us during clinic hours for
                        emergency services. Dr. Mohsin & Dr. Harshada are
                        ready to help with your dental emergencies.
                     </p>
                  </div>
               </motion.div>

               {/* Appointment Form */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
               >
                  <form
                     onSubmit={handleSubmit}
                     className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl"
                  >
                     <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#1A2332] mb-5 sm:mb-6">
                        Schedule Your Visit
                     </h3>

                     <div className="space-y-4 sm:space-y-5">
                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-[#2C2C2C] mb-1.5 sm:mb-2">
                              Full Name *
                           </label>
                           <div className="relative">
                              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#8B8B8B]">
                                 <IconUser
                                    size={18}
                                    className="sm:w-5 sm:h-5"
                                 />
                              </div>
                              <input
                                 type="text"
                                 required
                                 value={formData.name}
                                 onChange={(e) =>
                                    setFormData({
                                       ...formData,
                                       name: e.target.value,
                                    })
                                 }
                                 className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
                                 placeholder="Enter your full name"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                              Email Address *
                           </label>
                           <div className="relative">
                              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <IconMail
                                    size={18}
                                    className="sm:w-5 sm:h-5"
                                 />
                              </div>
                              <input
                                 type="email"
                                 required
                                 value={formData.email}
                                 onChange={(e) =>
                                    setFormData({
                                       ...formData,
                                       email: e.target.value,
                                    })
                                 }
                                 className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
                                 placeholder="your.email@example.com"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                              Phone Number *
                           </label>
                           <div className="relative">
                              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <IconPhone
                                    size={18}
                                    className="sm:w-5 sm:h-5"
                                 />
                              </div>
                              <input
                                 type="tel"
                                 required
                                 value={formData.phone}
                                 onChange={(e) =>
                                    setFormData({
                                       ...formData,
                                       phone: e.target.value,
                                    })
                                 }
                                 className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
                                 placeholder="+91 98765 43210"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                              Preferred Doctor *
                           </label>
                           <select
                              required
                              value={formData.doctor}
                              onChange={(e) =>
                                 setFormData({
                                    ...formData,
                                    doctor: e.target.value,
                                 })
                              }
                              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
                           >
                              <option value="">Select a doctor</option>
                              <option value="dr-mohsin">
                                 Dr. Mohsin Minne
                              </option>
                              <option value="dr-harshada">
                                 Dr. Harshada Minne
                              </option>
                           </select>
                        </div>

                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                              Preferred Date *
                           </label>
                           <div className="relative">
                              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <IconCalendar
                                    size={18}
                                    className="sm:w-5 sm:h-5"
                                 />
                              </div>
                              <input
                                 type="date"
                                 required
                                 value={formData.date}
                                 onChange={(e) =>
                                    setFormData({
                                       ...formData,
                                       date: e.target.value,
                                    })
                                 }
                                 className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                              Message (Optional)
                           </label>
                           <textarea
                              value={formData.message}
                              onChange={(e) =>
                                 setFormData({
                                    ...formData,
                                    message: e.target.value,
                                 })
                              }
                              rows={4}
                              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none resize-none"
                              placeholder="Tell us about your dental concerns..."
                           />
                        </div>

                        <motion.button
                           type="submit"
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           className="w-full py-2.5 sm:py-3 md:py-3.5 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 touch-manipulation"
                           style={{
                              background:
                                 "linear-gradient(to right, #D4AF37, #B8960C)",
                           }}
                        >
                           <span>Book Appointment</span>
                           <IconSend
                              size={16}
                              className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                           />
                        </motion.button>
                     </div>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
