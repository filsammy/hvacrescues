import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HVAC Rescue LLC | Trusted HVAC Repair & Installation in Walker & Cullman Counties, AL",
    template: "%s | HVAC Rescue LLC",
  },
  description: "Fast & reliable HVAC repair, replacement, and maintenance in Walker and Cullman Counties, Alabama. Licensed pros, same-day service, free estimates. Call 205-471-9474.",
  keywords: [
    "HVAC repair Jasper AL",
    "HVAC installation Walker County",
    "AC repair Cullman County",
    "furnace repair Alabama",
    "HVAC maintenance Jasper Alabama",
    "air conditioning Jasper AL",
    "HVAC contractor Walker County AL",
    "emergency HVAC repair",
    "ductwork repair Alabama",
    "indoor air quality Jasper",
  ],
  authors: [{ name: "HVAC Rescue LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HVAC Rescue LLC",
    title: "HVAC Rescue LLC | Trusted HVAC Pros in Walker & Cullman Counties, AL",
    description: "Fast & reliable HVAC repair, replacement, and maintenance. Licensed pros, same-day service, free estimates. Call 205-471-9474.",
    images: [{ url: "/images/bg-dark.jpg", width: 1200, height: 630, alt: "HVAC Rescue LLC" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
