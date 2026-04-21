"use client";

import { useState, useEffect } from "react";
import {
   motion,
   AnimatePresence,
   useMotionValueEvent,
   useScroll,
} from "framer-motion";
import { IconPhone, IconSparkles, IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function Navbar() {
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isAtTop, setIsAtTop] = useState(true);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const { scrollY } = useScroll();

   useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = lastScrollY;

      if (latest < 100) {
         setIsAtTop(true);
         setIsVisible(true);
      } else {
         setIsAtTop(false);
         if (latest > previous && latest > 100) {
            setIsVisible(false);
            setIsMobileMenuOpen(false);
         } else {
            setIsVisible(true);
         }
      }

      setLastScrollY(latest);
   });

   const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <>
         <motion.nav
            initial={{ y: 0 }}
            animate={{
               y: isVisible ? 0 : -120,
               scale: isAtTop ? 1 : 0.95,
            }}
            transition={{
               duration: 0.4,
               ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-3 md:px-4 pt-2"
         >
            <div
               className={`max-w-7xl mx-auto transition-all duration-500 ${
                  isAtTop
                     ? "bg-[#FFFEF9]/85 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-lg border border-[#E8E6E1]/50"
                     : "bg-[#FDFBF7]/98 backdrop-blur-xl rounded-xl sm:rounded-full shadow-2xl border border-[#E8E6E1]"
               }`}
            >
               <div className="px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
                     {/* Logo with Premium Effect */}
                     <motion.a
                        href="/"
                        className="relative flex items-center space-x-1.5 sm:space-x-2 group"
                        whileHover={{ scale: 1.02 }}
                     >
                        <div
                           className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{
                              background:
                                 "linear-gradient(to right, rgba(212, 175, 55, 0.2), rgba(184, 150, 12, 0.2))",
                           }}
                        />
                        <div className="relative flex items-center space-x-1.5 sm:space-x-2">
                           <Image
                              src="/logo.png"
                              alt="mastersdentalclinic Dental Logo"
                              width={60}
                              height={60}
                           />
                           <span className="font-poppins font-bold text-xl lg:text-2xl text-[#D4AF37] whitespace-nowrap">
                              Master's Dental Clinic
                           </span>
                        </div>
                     </motion.a>

                     {/* Desktop Navigation with Hover Effects */}
                     <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link, idx) => (
                           <motion.a
                              key={link.name}
                              href={link.href}
                              className="relative px-4 py-2 text-sm font-semibold text-[#5A5A5A] transition-colors group"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                           >
                              <span className="relative z-10 group-hover:text-[#D4AF37] transition-colors duration-300">
                                 {link.name}
                              </span>
                              <motion.div
                                 className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                                 style={{
                                    background:
                                       "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                                 }}
                                 layoutId="navbar-hover"
                                 transition={{ duration: 0.3 }}
                              />
                           </motion.a>
                        ))}
                     </div>

                     {/* Premium CTA Group */}
                     <div className="hidden lg:flex items-center space-x-3">
                        <motion.a
                           href="tel:+1234567890"
                           className="relative px-4 py-2 text-sm font-semibold text-[#5A5A5A] transition-colors group"
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 }}
                        >
                           <span className="relative z-10 group-hover:text-[#D4AF37] transition-colors duration-300 flex items-center space-x-2">
                              <IconPhone size={18} />
                              <span className="hidden xl:inline">Call Now</span>
                           </span>
                           <motion.div
                              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                              style={{
                                 background:
                                    "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(184, 150, 12, 0.1))",
                              }}
                              layoutId="navbar-hover"
                              transition={{ duration: 0.3 }}
                           />
                        </motion.a>

                        <motion.a
                           href="#contact"
                           className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group"
                           style={{
                              background:
                                 "linear-gradient(to right, #D4AF37, #B8960C)",
                           }}
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           <span className="flex items-center space-x-2">
                              <span>Book Now</span>
                              <motion.span
                                 animate={{ x: [0, 4, 0] }}
                                 transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                 }}
                              >
                                 →
                              </motion.span>
                           </span>
                        </motion.a>
                     </div>

                     {/* Mobile Menu Button */}
                     <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-1.5 sm:p-2 rounded-full hover:bg-[#F5F3EE] transition-colors touch-manipulation"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                     >
                        <AnimatePresence mode="wait">
                           {isMobileMenuOpen ? (
                              <motion.div
                                 key="close"
                                 initial={{ rotate: -90, opacity: 0 }}
                                 animate={{ rotate: 0, opacity: 1 }}
                                 exit={{ rotate: 90, opacity: 0 }}
                                 transition={{ duration: 0.2 }}
                              >
                                 <IconX
                                    size={22}
                                    className="text-[#5A5A5A] sm:w-6 sm:h-6"
                                 />
                              </motion.div>
                           ) : (
                              <motion.div
                                 key="menu"
                                 initial={{ rotate: 90, opacity: 0 }}
                                 animate={{ rotate: 0, opacity: 1 }}
                                 exit={{ rotate: -90, opacity: 0 }}
                                 transition={{ duration: 0.2 }}
                              >
                                 <IconMenu2
                                    size={22}
                                    className="text-[#5A5A5A] sm:w-6 sm:h-6"
                                 />
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.button>
                  </div>
               </div>
            </div>
         </motion.nav>

         {/* Premium Mobile Menu */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                     onClick={() => setIsMobileMenuOpen(false)}
                  />
                  <motion.div
                     initial={{ opacity: 0, y: -20, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 0.95 }}
                     transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                     }}
                     className="fixed top-18 sm:top-20 md:top-24 left-2 right-2 sm:left-4 sm:right-4 z-50 lg:hidden mx-auto"
                  >
                     <div className="bg-[#FFFEF9]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E8E6E1] overflow-hidden">
                        <div className="p-4 sm:p-5 md:p-6 space-y-1.5 sm:space-y-2">
                           {navLinks.map((link, idx) => (
                              <motion.a
                                 key={link.name}
                                 href={link.href}
                                 onClick={() => setIsMobileMenuOpen(false)}
                                 className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5A5A5A] font-medium rounded-xl sm:rounded-2xl hover:bg-linear-to-r hover:from-[#D4AF37]/10 hover:to-[#B8960C]/10 hover:text-[#D4AF37] transition-all touch-manipulation"
                                 initial={{ opacity: 0, x: -20 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: idx * 0.05 }}
                              >
                                 {link.name}
                              </motion.a>
                           ))}

                           <div className="pt-3 sm:pt-4 space-y-2.5 sm:space-y-3">
                              <motion.a
                                 href="tel:+1234567890"
                                 className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#2C2C2C] font-medium rounded-xl sm:rounded-2xl border-2 border-[#E8E6E1] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all touch-manipulation"
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.3 }}
                              >
                                 <IconPhone
                                    size={18}
                                    className="sm:w-5 sm:h-5"
                                 />
                                 <span>Call Now</span>
                              </motion.a>

                              <motion.a
                                 href="#contact"
                                 onClick={() => setIsMobileMenuOpen(false)}
                                 className="block w-full px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base text-white text-center rounded-xl sm:rounded-2xl shadow-lg touch-manipulation"
                                 style={{
                                    background:
                                       "linear-gradient(to right, #D4AF37, #B8960C)",
                                 }}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.35 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 Book Appointment
                              </motion.a>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
   );
}
