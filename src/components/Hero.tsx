'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden py-20 lg:py-32">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Walker County's Most <span className="text-[var(--color-accent)]">Reliable</span> HVAC Pros
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We handle HVAC repairs, & installs with expert care. Fix it right the first time, keep you comfy all year, and never overcharge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                Schedule Service
              </Link>
              <a
                href="tel:2054719474"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                205-471-9474
              </a>
            </div>

            {/* Trust Badges Inline */}
            {/* <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 items-center border-t border-white/10 text-sm font-medium">
              <div className="flex items-center text-gray-300">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                A+ BBB Rated
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                2020 Expertise Award
              </div>
              <div className="flex items-center text-gray-300">
                <ThumbsUp className="h-5 w-5 text-[var(--color-accent)] mr-2" />
                100% Satisfaction Guarantee
              </div>
            </div> */}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-video flex items-center justify-center rounded-2xl p-8 lg:p-12">
              <Image
                src="/images/transparent-bg.png"
                alt="HVAC Rescue LLC Logo"
                width={800}
                height={400}
                className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
