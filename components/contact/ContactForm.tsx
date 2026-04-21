"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconSend, IconCheck } from "@tabler/icons-react";

export default function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
   });
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
         setIsSubmitted(false);
         setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            time: "",
            message: "",
         });
      }, 3000);
   };

   const handleChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-[#E8E6E1]"
      >
         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2332] mb-1.5 sm:mb-2 font-poppins">
            Book an Appointment
         </h2>
         <p className="text-sm sm:text-base text-[#5A5A5A] mb-6 sm:mb-7 md:mb-8">
            Fill out the form below and we'll get back to you shortly
         </p>

         {isSubmitted ? (
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-center py-8 sm:py-10 md:py-12"
            >
               <div
                  className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full flex items-center justify-center"
                  style={{
                     background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                  }}
               >
                  <IconCheck
                     size={32}
                     className="text-white sm:w-9 sm:h-9 md:w-10 md:h-10"
                  />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-[#1A2332] mb-2">
                  Thank You!
               </h3>
               <p className="text-sm sm:text-base text-[#5A5A5A]">
                  We've received your appointment request and will contact you
                  soon.
               </p>
            </motion.div>
         ) : (
            <form
               onSubmit={handleSubmit}
               className="space-y-4 sm:space-y-5 md:space-y-6"
            >
               <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                     <label
                        htmlFor="name"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Full Name *
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                        placeholder="John Doe"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Email Address *
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                        placeholder="john@example.com"
                     />
                  </div>
               </div>

               <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                     <label
                        htmlFor="phone"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Phone Number *
                     </label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                        placeholder="+91 98765 43210"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="service"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Service *
                     </label>
                     <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                     >
                        <option value="">Select a service</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="implants">Dental Implants</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="root-canal">Root Canal</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="crowns">Crowns & Bridges</option>
                        <option value="gum">Gum Disease Treatment</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="checkup">General Checkup</option>
                     </select>
                  </div>
               </div>

               <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                     <label
                        htmlFor="date"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Preferred Date *
                     </label>
                     <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="time"
                        className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                     >
                        Preferred Time *
                     </label>
                     <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300"
                     >
                        <option value="">Select time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                     </select>
                  </div>
               </div>

               <div>
                  <label
                     htmlFor="message"
                     className="block text-sm sm:text-base text-[#2C2C2C] font-semibold mb-1.5 sm:mb-2"
                  >
                     Additional Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     rows={4}
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-[#E8E6E1] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300 resize-none"
                     placeholder="Tell us more about your dental needs..."
                  />
               </div>

               <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 sm:hover:scale-105"
                  style={{
                     background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                  }}
               >
                  <IconSend size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  Submit Appointment Request
               </button>
            </form>
         )}
      </motion.div>
   );
}
