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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] min-h-screen`}
      >
        <div className="bg-[var(--canvas-bg)] min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
