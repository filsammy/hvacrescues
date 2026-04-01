'use client';

import { motion } from 'framer-motion';
import { Wrench, Settings, Activity, Wind, Fan, CheckCircle, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services: {
  id: string;
  title: string;
  icon: LucideIcon;
  bgImage: string;
  description: string;
}[] = [
  {
    id: 'hvac-repair',
    title: 'HVAC Repair',
    icon: Wrench,
    bgImage: '/assets/furnace_repair.png',
    description: 'Fast, reliable fixes to get your system running efficiently.',
  },
  {
    id: 'hvac-replacement',
    title: 'HVAC Replacement',
    icon: Settings,
    bgImage: '/assets/furnace_replacement.png',
    description: 'Brand-new HVAC installations built for comfort & reliability.',
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    icon: Activity,
    bgImage: '/assets/heatpump_repair.png',
    description: 'Regular checkups to ensure optimal performance year-round.',
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    icon: Wind,
    bgImage: '/assets/pexels-jose-andres-pacheco-cortes-3641213-5463580.jpg',
    description: 'Advanced solutions to keep the air you breathe clean and safe.',
  },
  {
    id: 'duct-deodorization',
    title: 'Duct Deodorization',
    icon: Fan,
    bgImage: '/assets/heatpump_replacement.png',
    description: 'Clear out smells and freshen the air flowing through your home.',
  },
  {
    id: 'ductwork',
    title: 'Ductwork Repair & Sealing',
    icon: CheckCircle,
    bgImage: '/assets/ductwork.png',
    description: 'Seal leaks and fix ductwork to save energy and improve airflow.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Our Specialized Services</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)]">
              How Can We Improve Your Comfort?
            </h3>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
          >
            Get a Free Quote
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300 flex flex-col h-full"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.bgImage}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-white/65 group-hover:bg-[var(--color-primary)]/85 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-300 mb-6 flex-grow transition-colors duration-300">
                  {service.description}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  className="mt-auto inline-flex items-center text-sm font-bold text-[var(--color-accent)] group-hover:text-white group-hover:opacity-80 transition-all hover:opacity-100"
                >
                  Learn More <span className="ml-1 text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
