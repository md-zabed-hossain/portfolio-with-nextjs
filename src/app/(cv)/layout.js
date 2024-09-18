import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Template",
  description: "Next Template",
};

export default function CvLayout({ children }) {
  return (
<html lang="en">
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        {children}
        </body>
        </html>
        
    
  )
}
