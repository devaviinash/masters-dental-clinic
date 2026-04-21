"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  IconSparkles,
  IconAwardFilled,
  IconStarFilled,
  IconChevronDown,
  IconPhone,
  IconCalendar,
  IconShieldCheck,
  IconHeartFilled,
} from "@tabler/icons-react";
import { useRef, useEffect, useState } from "react";

const TESTIMONIALS = [
  { name: "Priya M.", text: "Best dental experience ever!", rating: 5 },
  { name: "Rahul S.", text: "Painless & professional care.", rating: 5 },
  { name: "Anita K.", text: "My smile transformed completely.", rating: 5 },
];

const TRUST_BADGES = [
  { icon: IconShieldCheck, label: "ISO Certified" },
  { icon: IconAwardFilled, label: "Clinical Excellence" },
  { icon: IconHeartFilled, label: "5000+ Patients" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => setTestimonialIdx(i => (i + 1) % TESTIMONIALS.length), 3500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 20);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 20);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
      style={{
        background: "linear-gradient(135deg, #FAFAFA 0%, #FFF9F0 25%, #FFF5E6 50%, #FFF9F0 75%, #FAFAFA 100%)",
      }}
    >
      {/* ── Background Layer ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        {/* Fine gold grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        />
        {/* Diagonal accent line */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(45deg, #D4AF37 1px, transparent 1px)`, backgroundSize: "80px 80px" }}
        />
        {/* Radial orbs */}
        <motion.div style={{ x: springX, y: springY }}
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/25 to-transparent rounded-full blur-3xl" />
        <motion.div style={{ x: useTransform(springX, v => -v * 0.6), y: useTransform(springY, v => -v * 0.6) }}
          className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#B8960C]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#F4E4C1]/8 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />

        {/* Floating geometric deco */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            className="absolute rounded-full border border-[#D4AF37]/15"
            style={{
              width: `${40 + i * 20}px`, height: `${40 + i * 20}px`,
              top: `${10 + i * 12}%`, left: `${5 + i * 14}%`,
              opacity: 0.3 - i * 0.03,
            }}
          />
        ))}
      </motion.div>

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:order-2 flex justify-center"
          >
            {/* Decorative ring behind image */}
            <div className="absolute inset-0 m-auto w-[105%] h-[105%] rounded-3xl border border-[#D4AF37]/20 rotate-2" />
            <div className="absolute inset-0 m-auto w-[108%] h-[108%] rounded-3xl border border-[#D4AF37]/10 -rotate-1" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(212,175,55,0.2)]">
              <div className="aspect-[10/11]">
                <img src="clinic0.png" alt="Dr. Mohsin & Dr. Harshada– Premium Dental Specialist"
                  className="w-full h-full object-cover" />
              </div>
              {/* Gold overlay shimmer at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#D4AF37]/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating: Accredited badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="hidden sm:flex absolute -bottom-6 -left-8 md:-left-10 items-center space-x-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#D4AF37]/20"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #D4AF37, #B8960C)" }}>
                <IconAwardFilled size={20} className="text-white" />
              </div>
              <div className="text-center">
                <div className="font-bold text-sm text-gray-900 leading-tight">Accredited Specialists</div>
                <div className="text-xs text-[#5A5A5A] font-medium mt-1">Clinical Excellence in Dentistry</div>
              </div>
            </motion.div>

            {/* Floating: Live testimonial carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
              className="hidden sm:block absolute top-2 right-2 md:right-2 bg-white/90 backdrop-blur-md px-3 py-3 rounded-2xl shadow-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center space-x-0.5 mb-1">
                {[...Array(5)].map((_, i) => <IconStarFilled key={i} size={11} className="text-[#D4AF37]" />)}
              </div>
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs text-gray-700 font-medium leading-snug">"{TESTIMONIALS[testimonialIdx].text}"</p>
                <p className="text-xs text-[#B8960C] font-semibold mt-1">— {TESTIMONIALS[testimonialIdx].name}</p>
              </motion.div>
              <div className="flex space-x-1 mt-2">
                {TESTIMONIALS.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === testimonialIdx ? "w-5 bg-[#D4AF37]" : "w-1.5 bg-[#D4AF37]/30"}`} />
                ))}
              </div>
            </motion.div>

            {/* Floating: Trust score */}
            <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1.5 }}
  className="hidden md:flex absolute bottom-2 right-2 items-center gap-2.5 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-[#D4AF37]/20"
>
  {/* Google G logo */}
  <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>

  {/* Divider */}
  <div className="w-px h-8 bg-gray-200 shrink-0" />


  {/* Stars column */}
  <div className="flex flex-col items-center gap-0.5">
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <IconStarFilled key={i} size={9} className="text-[#FBBC05]" />
      ))}
    </div>
    <span className="text-[9px] font-medium text-[#5A5A5A]">Google Reviews</span>
  </div>
  {/* Rating column */}
  <div className="flex flex-col items-center">
    <span className="text-lg font-bold text-[#1A2332] leading-none">4.8</span>
  </div>
</motion.div>
          </motion.div>

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left lg:order-1"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-5 border border-[#D4AF37]/30"
              style={{ background: "linear-gradient(to right, rgba(212,175,55,0.12), rgba(244,228,193,0.25))" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#2C2C2C] tracking-wide">Now Accepting New Patients</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[4.25rem] font-bold text-[#1A2332] leading-[1.1] mb-5"
            >
              <span className="relative inline-block">
                Your Perfect
                <motion.img
                  src="/logo.png"
                  alt="Dr. Mohsin & Dr. Harshada Dental Clinic Logo"
                  initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 8 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  className="absolute -right-14 sm:-right-14 md:-right-24 -top-3 md:-top-5 w-14 h-14 sm:w-16 sm:h-16 md:w-28 md:h-28 object-contain drop-shadow-lg"
                />
              </span>
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #F0D070 45%, #B8960C 100%)" }}>
                Smile
              </span>{" "}
              <span className="relative">
                Starts Here
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none"
                >
                  <motion.path d="M2 6 Q100 2 198 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1 }} />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-[#5A5A5A] mb-4 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Experience world-class dental care with{" "}
              <span className="font-semibold text-[#1A2332]">Dr. Mohsin & Dr. Harshada Minne</span> —{" "}
              where cutting-edge technology meets a gentle, personalised touch.
            </motion.p>

            {/* Feature micro-list */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start mb-8 text-sm text-[#4A4A4A]"
            >
              {["Pain-Free Procedures", "Same-Day Emergency Care", "Flexible Payment Plans"].map((item, i) => (
                <li key={i} className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(212,175,55,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm sm:text-base text-white shadow-xl transition-shadow inline-flex items-center space-x-2 touch-manipulation"
                style={{ background: "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)" }}
              >
                <IconCalendar size={18} />
                <span>Book Free Consultation</span>
              </motion.a>
              <motion.a
                href="tel:+91XXXXXXXXXX"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-[#D4AF37]/60 text-[#B8960C] rounded-full font-bold text-sm sm:text-base hover:bg-[#FFF9F0] transition-all inline-flex items-center space-x-2 touch-manipulation shadow-md"
              >
                <IconPhone size={18} />
                <span>Call Now</span>
              </motion.a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 mt-6 justify-center lg:justify-start"
            >
              {TRUST_BADGES.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center space-x-1.5 text-xs text-[#5A5A5A] font-medium">
                  <Icon size={14} className="text-[#D4AF37]" />
                  <span>{label}</span>
                  {i < TRUST_BADGES.length - 1 && <span className="ml-3 h-3 w-px bg-[#D4AF37]/30" />}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-10 pt-8 border-t border-[#E8E6E1]"
            >
              {[
                { target: 10, suffix: "+", label: "Years Experience" },
                { target: 5000, suffix: "+", label: "Happy Patients" },
                { target: 98, suffix: "%", label: "Success Rate" },
              ].map(({ target, suffix, label }, i) => (
                <motion.div key={i}
                  whileHover={{ y: -3 }}
                  className="text-center lg:text-left group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] font-poppins group-hover:scale-105 transition-transform inline-block">
                    <AnimatedCounter target={target} suffix={suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-[#5A5A5A] mt-1 font-medium leading-tight">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}