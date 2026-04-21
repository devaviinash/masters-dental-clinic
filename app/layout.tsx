import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Footer from "@/components/Footer";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
   variable: "--font-playfair",
   weight: ["400", "500", "600", "700", "800", "900"],
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Dr Inamdar's Master's Dental Clinic, Dapodi",
   description:
      "Premier dental clinic in Dapodi offering expert care by Dr. Mohsin Minne(B.D.S., M.D.S.) & Dr. Harshada Minne(B.D.S., M.D.S.) - Specialist in Oral Medicine & Maxillofacial Radiology with 15+ years experience.",
   keywords: [
      "dental clinic Dapodi",
      "dental clinic Pune",
      "Dr Inamdar's Master's Dental Clinic",
      "Dr. Mohsin Minne",
      "Dr. Harshada Minne",
      "dental implants Pune",
      "oral medicine specialist",
      "maxillofacial radiology",
      "Dapodi dental clinic",
   ],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${inter.variable} ${playfairDisplay.variable} antialiased font-inter`}
         >
            <Navbar />
            {children}
            <Footer />
            <FloatingActionButtons />
         </body>
      </html>
   );
}
