"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IconPhoto, IconX, IconHeart } from "@tabler/icons-react";

const clientSmiles = [
   { 
     id: 1, 
     title: "Sarah's Smile Transformation", 
     category: "Cosmetic Dentistry",
     imageUrl: "https://images.unsplash.com/photo-1684607632041-32d729cdee35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGFsJTIwcGF0aWVudCUyMGhhcHB5fGVufDB8fDB8fHww",
     description: "Complete smile makeover with veneers"
   },
   { 
     id: 2, 
     title: "Sarah's Dental Implants", 
     category: "Implants",
     imageUrl: "https://plus.unsplash.com/premium_photo-1681997233950-c1b53818b3e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbnRhbCUyMHBhdGllbnQlMjBoYXBweXxlbnwwfHwwfHx8MA%3D%3D",
     description: "Full mouth reconstruction with dental implants"
   },
   { 
     id: 3, 
     title: "Emma's Teeth Whitening", 
     category: "Cosmetic",
     imageUrl: "https://plus.unsplash.com/premium_photo-1661765293243-557af0a99e49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbnRhbCUyMHBhdGllbnQlMjBoYXBweXxlbnwwfHwwfHx8MA%3D%3D",
     description: "Professional teeth whitening treatment"
   },
   { 
     id: 4, 
     title: "David's Orthodontic Success", 
     category: "Orthodontics",
     imageUrl: "https://images.unsplash.com/photo-1631051103633-24959376b92d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlbnRhbCUyMHBhdGllbnQlMjBoYXBweXxlbnwwfHwwfHx8MA%3D%3D",
     description: "Life-changing orthodontic treatment"
   },
   { 
     id: 5, 
     title: "Lisa's Pediatric Care", 
     category: "Kids Dentistry",
     imageUrl: "https://plus.unsplash.com/premium_photo-1661582655203-2be93140473c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwcGF0aWVudCUyMGhhcHB5fGVufDB8fDB8fHww",
     description: "Gentle dental care for our youngest patients"
   },
   { 
     id: 6, 
     title: "Robert's Full Mouth Restoration", 
     category: "Reconstruction",
     imageUrl: "https://plus.unsplash.com/premium_photo-1661582108205-c7a204eb35cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVudGFsJTIwcGF0aWVudCUyMGhhcHB5fGVufDB8fDB8fHww",
     description: "Complete dental rehabilitation"
   },
];

const GalleryCard = ({
   image,
   index,
   onClick,
}: {
   image: typeof clientSmiles[0];
   index: number;
   onClick: () => void;
}) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, scale: 0.9 }}
         animate={isInView ? { opacity: 1, scale: 1 } : {}}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         onClick={onClick}
         className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 touch-manipulation"
      >
         {/* Image */}
         <div className="aspect-4/3 relative overflow-hidden">
            <img 
               src={image.imageUrl} 
               alt={image.title}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
               <p className="font-poppins font-semibold text-sm sm:text-base mb-1 drop-shadow-lg">
                  {image.title}
               </p>
               <p className="text-xs sm:text-sm opacity-90 drop-shadow-lg">
                  {image.category}
               </p>
            </div>
         </div>

         {/* Overlay */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <motion.div
               initial={{ scale: 0, opacity: 0 }}
               whileHover={{ scale: 1, opacity: 1 }}
               className="text-white font-semibold text-sm sm:text-base bg-[#D4AF37] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
               View Image
            </motion.div>
         </div>

         {/* Category Badge */}
         <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full">
            <span className="text-xs font-semibold text-[#D4AF37]">
               {image.category}
            </span>
         </div>
      </motion.div>
   );
};

const Lightbox = ({ image, onClose }: { image: typeof clientSmiles[0]; onClose: () => void }) => (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
   >
      <button
         onClick={onClose}
         className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
         <IconX size={24} className="text-gray-900" />
      </button>

      <motion.div
         initial={{ scale: 0.9 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0.9 }}
         onClick={(e) => e.stopPropagation()}
         className="max-w-4xl w-full"
      >
         <div className="bg-white rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
               <img 
                  src={image.imageUrl} 
                  alt={image.title}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-2">
                     {image.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-2">{image.category}</p>
                  <p className="text-base opacity-80">{image.description}</p>
               </div>
            </div>
         </div>
      </motion.div>
   </motion.div>
);

export default function GallerySection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const [selectedImage, setSelectedImage] = useState<typeof clientSmiles[0] | null>(null);

   return (
      <>
         <section
            id="gallery"
            className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
         >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
               <div
                  className="absolute inset-0"
                  style={{
                     backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                     backgroundSize: "40px 40px",
                  }}
               />
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
                     <IconHeart
                        size={16}
                        className="text-[#D4AF37] sm:w-5 sm:h-5"
                     />
                     <span className="text-xs sm:text-sm font-semibold text-gray-700">
                        Happy Smiles
                     </span>
                  </motion.div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                     Our Client{" "}
                     <span className="text-[#D4AF37]"> Gallery</span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                     Transforming lives one smile at a time. See the amazing results our patients have achieved with our expert dental care.
                  </p>
               </motion.div>

               {/* Gallery Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {clientSmiles.map((image, index) => (
                     <GalleryCard
                        key={image.id}
                        image={image}
                        index={index}
                        onClick={() => setSelectedImage(image)}
                     />
                  ))}
               </div>

               {/* Bottom CTA */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-center mt-8 sm:mt-10 md:mt-12"
               >
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 px-4">
                     Ready to transform your smile? Join our happy family of satisfied patients
                  </p>
                  <motion.a
                     href="#contact"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="inline-flex items-center space-x-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all touch-manipulation"
                     style={{
                        background:
                           "linear-gradient(to right, #D4AF37, #B8960C)",
                     }}
                  >
                     <span>Book Your Consultation</span>
                     <IconHeart
                        size={16}
                        className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                     />
                  </motion.a>
               </motion.div>
            </div>
         </section>

         {/* Lightbox */}
         {selectedImage && (
            <Lightbox
               image={selectedImage}
               onClose={() => setSelectedImage(null)}
            />
         )}
      </>
   );
}
