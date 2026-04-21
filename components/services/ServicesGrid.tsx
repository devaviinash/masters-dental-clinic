"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
   IconSparkles,
   IconStethoscope,
   IconShieldCheck,
   IconHeart,
   IconStars,
   IconWand,
   IconMedicalCross,
   IconBandage,
   IconActivity,
   IconScissors,
} from "@tabler/icons-react";
import ServiceModal from "./ServiceModal";

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

export default function ServicesGrid() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });
   const [selectedService, setSelectedService] = useState<Service | null>(null);

   const services: Service[] = [
      {
         id: "cosmetic-dentistry",
         icon: IconSparkles,
         title: "Cosmetic Dentistry",
         shortDescription:
            "Enhance your smile's beauty with teeth whitening, veneers, and bonding for a confident, radiant appearance.",
         fullDescription:
            "Our cosmetic dentistry services are designed to enhance the appearance of your teeth, gums, and smile. Using state-of-the-art technology and proven techniques, we help you achieve the smile you've always dreamed of. From subtle changes to major repairs, we offer solutions that can improve your confidence and overall quality of life.",
         benefits: [
            "Enhanced smile aesthetics and facial appearance",
            "Improved self-confidence and self-esteem",
            "Long-lasting, natural-looking results",
            "Minimally invasive procedures with quick recovery",
            "Customized treatment plans for individual needs",
         ],
         process: [
            "Initial consultation and smile analysis",
            "Digital smile design and preview",
            "Treatment planning and timeline discussion",
            "Professional teeth whitening or veneers application",
            "Follow-up care and maintenance guidance",
         ],
         duration: "1-3 visits",
         price: "Starting from ₹15,000",
         imageUrl:
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "dental-implants",
         icon: IconStethoscope,
         title: "Dental Implants",
         shortDescription:
            "Replace missing teeth permanently with titanium implants that look and function just like your natural teeth.",
         fullDescription:
            "Dental implants are the gold standard for replacing missing teeth. They provide a permanent, stable foundation that looks, feels, and functions like natural teeth. Our experienced implantologists use the latest technology to ensure precise placement and optimal results.",
         benefits: [
            "Permanent tooth replacement solution",
            "Prevents bone loss and maintains facial structure",
            "No damage to adjacent healthy teeth",
            "Improved chewing ability and speech",
            "95% success rate with proper care",
         ],
         process: [
            "Comprehensive oral examination and 3D imaging",
            "Treatment planning and implant selection",
            "Surgical implant placement under local anesthesia",
            "Healing period (3-6 months) for osseointegration",
            "Crown placement and final adjustments",
         ],
         duration: "3-6 months",
         price: "₹25,000 - ₹50,000 per implant",
         imageUrl:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "orthodontics",
         icon: IconStethoscope,
         title: "Orthodontics & Braces",
         shortDescription:
            "Straighten crooked teeth and fix bite issues with metal braces, ceramic braces, or clear invisible aligners.",
         fullDescription:
            "Our orthodontic treatments correct misaligned teeth and jaws, improving both function and aesthetics. We offer various options including traditional metal braces, ceramic braces, and clear aligners like Invisalign to suit your lifestyle and preferences.",
         benefits: [
            "Properly aligned teeth for better oral health",
            "Improved bite function and jaw alignment",
            "Enhanced facial aesthetics and smile",
            "Easier cleaning and reduced cavity risk",
            "Multiple treatment options available",
         ],
         process: [
            "Initial orthodontic assessment and X-rays",
            "Digital scanning and treatment simulation",
            "Custom treatment plan creation",
            "Braces or aligner fitting and adjustment",
            "Regular monitoring and progress evaluations",
         ],
         duration: "12-24 months",
         price: "₹40,000 - ₹1,50,000",
         imageUrl:
            "https://images.unsplash.com/photo-1609540584580-2ccb9b9cce7c?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "root-canal",
         icon: IconShieldCheck,
         title: "Root Canal Treatment",
         shortDescription:
            "Save infected teeth with painless root canal therapy",
         fullDescription:
            "Root canal treatment is a highly effective procedure to save teeth that are badly infected or decayed. Using modern techniques and sedation options, we ensure a comfortable, pain-free experience while preserving your natural tooth.",
         benefits: [
            "Saves natural tooth from extraction",
            "Eliminates pain and infection",
            "Prevents spread of infection to other teeth",
            "Maintains natural bite and jaw function",
            "Cost-effective compared to tooth replacement",
         ],
         process: [
            "Thorough examination and diagnosis with X-rays",
            "Local anesthesia for pain-free treatment",
            "Removal of infected pulp and cleaning",
            "Disinfection and filling of root canals",
            "Crown placement for protection and strength",
         ],
         duration: "1-2 visits",
         price: "₹5,000 - ₹15,000",
         imageUrl:
            "https://images.unsplash.com/photo-1629909615957-be38b9e00e1a?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "teeth-whitening",
         icon: IconWand,
         title: "Teeth Whitening",
         shortDescription:
            "Get noticeably whiter teeth in just one hour with professional-grade whitening treatment.",
         fullDescription:
            "Professional teeth whitening is the fastest way to dramatically improve your smile. Our advanced whitening systems can lighten teeth by several shades in just one visit, with results lasting for months with proper care.",
         benefits: [
            "Immediate visible results in one session",
            "Professional-grade whitening agents",
            "Safe and effective for tooth enamel",
            "Customizable to desired shade",
            "Boosts confidence and appearance",
         ],
         process: [
            "Initial shade assessment and documentation",
            "Professional cleaning and preparation",
            "Application of whitening gel",
            "LED light activation for optimal results",
            "Post-treatment care instructions",
         ],
         duration: "1 hour",
         price: "₹8,000 - ₹20,000",
         imageUrl:
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "dental-crowns",
         icon: IconStars,
         title: "Dental Crowns & Bridges",
         shortDescription:
            "Cover and protect damaged teeth with custom-made caps or replace missing teeth with bridges.",
         fullDescription:
            "Dental crowns and bridges are versatile restorations that can repair damaged teeth or replace missing ones. We use high-quality materials including porcelain and zirconia to create natural-looking, durable restorations.",
         benefits: [
            "Restores tooth strength and function",
            "Natural appearance matching existing teeth",
            "Long-lasting durability (10-15 years)",
            "Protects weak or damaged teeth",
            "Improves bite alignment and chewing",
         ],
         process: [
            "Examination and tooth preparation",
            "Digital impressions or molds",
            "Temporary crown placement",
            "Custom crown fabrication in dental lab",
            "Final crown fitting and cementation",
         ],
         duration: "2-3 visits",
         price: "₹6,000 - ₹25,000",
         imageUrl:
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "periodontics",
         icon: IconHeart,
         title: "Gum Disease Treatment",
         shortDescription:
            "Treat bleeding, swollen, or infected gums with deep cleaning and specialized periodontal therapy.",
         fullDescription:
            "Periodontal (gum) disease treatment focuses on preventing, diagnosing, and treating conditions affecting the gums and supporting structures of teeth. Early intervention can prevent tooth loss and improve overall oral health.",
         benefits: [
            "Prevents tooth loss from gum disease",
            "Reduces inflammation and bleeding",
            "Eliminates bad breath caused by bacteria",
            "Improves overall oral and systemic health",
            "Prevents progression to advanced stages",
         ],
         process: [
            "Comprehensive periodontal examination",
            "Professional deep cleaning (scaling)",
            "Root planing to remove bacteria",
            "Antimicrobial treatment if needed",
            "Regular maintenance and monitoring",
         ],
         duration: "2-4 visits",
         price: "₹3,000 - ₹12,000",
         imageUrl:
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "pediatric",
         icon: IconMedicalCross,
         title: "Pediatric Dentistry",
         shortDescription:
            "Child-friendly dental care including cleanings, fluoride treatments, and cavity prevention for kids.",
         fullDescription:
            "Our pediatric dental services provide specialized care for children from infancy through adolescence. We create a fun, friendly environment that helps kids develop positive attitudes toward dental health.",
         benefits: [
            "Early detection of dental problems",
            "Education on proper oral hygiene habits",
            "Prevention of childhood cavities",
            "Gentle, child-friendly approach",
            "Builds positive dental experiences",
         ],
         process: [
            "Initial consultation and oral examination",
            "Gentle cleaning and fluoride treatment",
            "Cavity prevention with dental sealants",
            "Parent education and home care tips",
            "Regular check-ups every 6 months",
         ],
         duration: "30-45 minutes",
         price: "₹1,500 - ₹5,000",
         imageUrl:
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "dentures",
         icon: IconStars,
         title: "Dentures",
         shortDescription: "Complete or partial dentures for missing teeth",
         fullDescription:
            "Dentures are removable appliances that replace missing teeth and restore your smile. We offer both complete and partial dentures, custom-made to fit comfortably and look natural.",
         benefits: [
            "Restores ability to eat and speak properly",
            "Improves facial appearance and smile",
            "Cost-effective tooth replacement option",
            "Supports facial muscles and structure",
            "Easy to maintain and clean",
         ],
         process: [
            "Initial consultation and oral examination",
            "Impressions and measurements",
            "Trial fitting and adjustments",
            "Final denture fabrication",
            "Delivery and fitting instructions",
         ],
         duration: "3-5 visits",
         price: "₹15,000 - ₹80,000",
         imageUrl:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "wisdom-teeth",
         icon: IconScissors,
         title: "Wisdom Tooth Extraction",
         shortDescription:
            "Painless removal of wisdom teeth that are causing pain, crowding, or growing in the wrong direction.",
         fullDescription:
            "Wisdom tooth extraction is often necessary when these third molars cause pain, infection, or crowding. Our oral surgeons perform safe, comfortable extractions with minimal downtime.",
         benefits: [
            "Prevents crowding and misalignment",
            "Eliminates pain and discomfort",
            "Reduces infection and cyst risk",
            "Prevents damage to adjacent teeth",
            "Quick recovery with proper care",
         ],
         process: [
            "Comprehensive examination and X-rays",
            "Anesthesia or sedation administration",
            "Careful tooth extraction",
            "Socket cleaning and suturing if needed",
            "Post-operative care instructions",
         ],
         duration: "30-60 minutes",
         price: "₹3,000 - ₹10,000 per tooth",
         imageUrl:
            "https://images.unsplash.com/photo-1629909615957-be38b9e00e1a?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "emergency",
         icon: IconActivity,
         title: "Emergency Dental Care",
         shortDescription:
            "Same-day treatment for severe toothaches, broken teeth, knocked-out teeth, or any dental emergency.",
         fullDescription:
            "Dental emergencies require prompt attention. We provide same-day emergency care for severe toothaches, broken teeth, knocked-out teeth, and other urgent dental issues.",
         benefits: [
            "Same-day appointment availability",
            "Immediate pain relief",
            "Prevention of further damage",
            "Expert emergency treatment",
            "Quick response during clinic hours",
         ],
         process: [
            "Immediate triage and assessment",
            "Pain management and stabilization",
            "Emergency treatment or temporary fix",
            "Follow-up appointment scheduling",
            "Comprehensive care plan",
         ],
         duration: "As needed",
         price: "Varies by condition",
         imageUrl:
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80",
      },
      {
         id: "preventive",
         icon: IconBandage,
         title: "Preventive Care & Checkups",
         shortDescription:
            "Regular dental checkups, professional cleaning, X-rays, and early detection to keep your teeth healthy.",
         fullDescription:
            "Preventive dental care is the foundation of good oral health. Regular checkups, professional cleanings, and early detection help you avoid complex dental problems and maintain a healthy smile.",
         benefits: [
            "Early detection of dental problems",
            "Prevents cavities and gum disease",
            "Maintains overall oral health",
            "Cost-effective long-term care",
            "Professional cleaning and polishing",
         ],
         process: [
            "Comprehensive oral examination",
            "Professional teeth cleaning",
            "X-rays (if needed)",
            "Oral cancer screening",
            "Personalized care recommendations",
         ],
         duration: "45-60 minutes",
         price: "₹1,000 - ₹3,000",
         imageUrl:
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80",
      },
   ];

   return (
      <>
         <section id="services" className="py-12 sm:py-12 md:py-12 lg:py-12 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Decorations */}
            <div
               className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(244, 228, 193, 0.2), transparent)",
               }}
            />
            <div
               className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
               style={{
                  background:
                     "radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)",
               }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
               <div ref={ref} className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.6 }}
                     className="text-center mb-8 sm:mb-12 md:mb-16"
                  >
                     <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
                        What We Offer
                     </span>
                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] mb-3 sm:mb-4 md:mb-6 font-poppins px-4">
                        Our Services
                     </h2>
                     <p className="text-base sm:text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto px-4">
                        Click on any service to learn more about the treatment,
                        benefits, and pricing
                     </p>
                  </motion.div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                     {services.map((service, index) => (
                        <motion.div
                           key={service.id}
                           initial={{ opacity: 0, y: 30 }}
                           animate={isInView ? { opacity: 1, y: 0 } : {}}
                           transition={{
                              duration: 0.5,
                              delay: 0.1 + index * 0.05,
                           }}
                           onClick={() => setSelectedService(service)}
                           className="group cursor-pointer"
                        >
                           <div className="h-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E6E1] relative overflow-hidden">
                              {/* Background Image */}
                              <div className="absolute inset-0">
                                 <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                                 />
                                 <div
                                    className="absolute inset-0"
                                    style={{
                                       background:
                                          "linear-gradient(to bottom, rgba(253, 251, 247, 0.95), rgba(253, 251, 247, 0.98))",
                                    }}
                                 />
                              </div>

                              {/* Hover Gradient */}
                              <div
                                 className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                 style={{
                                    background:
                                       "linear-gradient(135deg, #D4AF37, #B8960C)",
                                 }}
                              />

                              {/* Content Container */}
                              <div className="relative z-10 p-5 sm:p-6 md:p-8">
                                 {/* Icon */}
                                 <div className="mb-4 sm:mb-6">
                                    <div
                                       className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
                                       style={{
                                          background:
                                             "linear-gradient(135deg, #D4AF37, #B8960C)",
                                       }}
                                    >
                                       <service.icon
                                          size={24}
                                          className="text-white sm:w-7 sm:h-7 md:w-8 md:h-8"
                                       />
                                    </div>
                                 </div>

                                 {/* Content */}
                                 <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A2332] mb-2 sm:mb-3 font-poppins group-hover:text-[#D4AF37] transition-colors duration-300">
                                       {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed mb-3 sm:mb-4">
                                       {service.shortDescription}
                                    </p>
                                    <div className="flex items-center text-[#D4AF37] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300">
                                       Learn More
                                       <span className="ml-2 group-hover:ml-0 transition-all duration-300">
                                          →
                                       </span>
                                    </div>
                                 </div>
                              </div>

                              {/* Decorative Corner */}
                              <div
                                 className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-bl-full opacity-50 z-10"
                                 style={{
                                    background:
                                       "linear-gradient(to bottom left, rgba(212, 175, 55, 0.1), transparent)",
                                 }}
                              />
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Service Modal */}
         {selectedService && (
            <ServiceModal
               service={selectedService}
               onClose={() => setSelectedService(null)}
            />
         )}
      </>
   );
}
