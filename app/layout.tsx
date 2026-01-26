import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaayakoott – Taste The Moment | Premium Tea Brand",
  description: "Chaayakoott brings you premium quality tea crafted for taste and tradition. Order directly via WhatsApp.",
  openGraph: {
    title: "Chaayakoott – Taste The Moment | Premium Tea Brand",
    description: "Chaayakoott brings you premium quality tea crafted for taste and tradition. Order directly via WhatsApp.",
    type: "website",
    locale: "en_IN",
    siteName: "Chaayakoott",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] h-screen w-screen overflow-hidden flex items-center justify-center p-4 md:p-12 lg:p-20`}
      >
        <div className="bg-[var(--canvas-bg)] w-full h-full rounded-[2.5rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.25)] overflow-y-auto relative flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
