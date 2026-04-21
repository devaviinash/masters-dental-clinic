"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconAward,
  IconStethoscope,
  IconSparkles,
  IconCheck,
  IconHeart,
} from "@tabler/icons-react";

export default function MeetOurTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const credentials = [
    "B.D.S., M.D.S. (Reg No: A-98765)",
    "Oral Medicine & Radiology Specialist",
    "Advanced Dental Implantology",
    "Maxillofacial Diagnostic Imaging",
    "Digital Dentistry Expert",
  ];

  const harshadaCredentials = [
    "B.D.S., M.D.S. (Reg No: A-98766)",
    "Cosmetic & Restorative Dentistry",
    "Pediatric Dental Care Specialist",
    "Orthodontic Treatments",
    "Smile Design Expert",
  ];

  const stats = [
    { num: "10+", label: "Years Exp." },
    { num: "5k+", label: "Patients" },
    { num: "3", label: "Degrees" },
  ];

  const harshadaStats = [
    { num: "8+", label: "Years Exp." },
    { num: "3k+", label: "Patients" },
    { num: "2", label: "Degrees" },
  ];

  return (
    <section
      id="about"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8960C] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-white shadow-sm border border-[#D4AF37]/20"
          >
            <IconHeart size={16} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              Meet Our Expert
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 mb-4 leading-tight">
            Your{" "}
            <span className="text-[#D4AF37]">
              Dental Care
            </span>
            <br className="hidden sm:block" />
            <span> Expert</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience world-class dental care from our specialist.
            <span className="block mt-1 text-gray-500">
              Decades of expertise, one exceptional standard of excellence.
            </span>
          </p>
        </motion.div>

        {/* Profile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-[#FFFEF9] rounded-3xl overflow-hidden shadow-lg border border-[#E8E6E1]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
            {/* Portrait */}
            <div className="relative h-80 lg:h-auto min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. Mohsin Minne - Dental Specialist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />

              {/* Experience pill */}
              <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black/40 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <IconStethoscope size={15} className="text-white" />
                <span className="text-white text-sm font-semibold">
                  10+ Years of Excellence
                </span>
              </div>

              {/* Gold accent bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent lg:hidden" />
            </div>

            {/* Info */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1A2332] mb-1 font-poppins">
                Dr. Mohsin Minne
              </h3>
              <p className="text-[#C5971A] font-semibold text-xs tracking-widest uppercase mb-6">
                Consultant Oral Physician & Maxillofacial Radiologist
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-[#E8E6E1] to-transparent mb-6" />

              {/* Credentials */}
              <div className="flex items-center gap-2 text-[#5A5A5A] mb-4">
                <IconSparkles size={16} className="text-[#D4AF37]" />
                <span className="font-semibold text-xs tracking-widest uppercase">
                  Specializations
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <IconCheck size={12} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5A5A5A] text-sm leading-relaxed">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-xl px-4 py-3 border border-[#E8E6E1]"
                  >
                    <div className="text-2xl font-bold text-[#C5971A] font-poppins leading-none mb-1">
                      {num}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dr. Harshada Minne Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="bg-[#FFFEF9] rounded-3xl overflow-hidden shadow-lg border border-[#E8E6E1] mt-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
            {/* Portrait */}
            <div className="relative h-80 lg:h-auto min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. Harshada - Dental Specialist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />

              {/* Experience pill */}
              <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black/40 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <IconStethoscope size={15} className="text-white" />
                <span className="text-white text-sm font-semibold">
                  8+ Years of Excellence
                </span>
              </div>

              {/* Gold accent bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent lg:hidden" />
            </div>

            {/* Info */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1A2332] mb-1 font-poppins">
                Dr. Harshada Minne
              </h3>
              <p className="text-[#C5971A] font-semibold text-xs tracking-widest uppercase mb-6">
                Cosmetic & Restorative Dentistry Specialist
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-[#E8E6E1] to-transparent mb-6" />

              {/* Credentials */}
              <div className="flex items-center gap-2 text-[#5A5A5A] mb-4">
                <IconSparkles size={16} className="text-[#D4AF37]" />
                <span className="font-semibold text-xs tracking-widest uppercase">
                  Specializations
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {harshadaCredentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <IconCheck size={12} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5A5A5A] text-sm leading-relaxed">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {harshadaStats.map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-xl px-4 py-3 border border-[#E8E6E1]"
                  >
                    <div className="text-2xl font-bold text-[#C5971A] font-poppins leading-none mb-1">
                      {num}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
