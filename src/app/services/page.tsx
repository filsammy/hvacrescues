'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Settings, Activity, Wind, Fan, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'hvac-repair',
    title: 'HVAC Repair',
    icon: Wrench,
    image: '/assets/furnace_repair.png',
    shortDescription: 'Fast, reliable fixes to get your system running efficiently.',
    details: [
      'Diagnostics and troubleshooting',
      'Refrigerant leak detection and repair',
      'Compressor and condenser fixes',
      'Thermostat replacement',
      'Same-day emergency service',
    ],
  },
  {
    id: 'hvac-replacement',
    title: 'HVAC Replacement',
    icon: Settings,
    image: '/assets/furnace_replacement.png',
    shortDescription: 'Brand-new HVAC installations built for comfort & reliability.',
    details: [
      'Complete system changeouts',
      'Energy-efficient models',
      'Heat pumps, furnaces, and ACs',
      'Custom ductwork sizing if needed',
      'Financing available through Wisetak',
    ],
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    icon: Activity,
    image: '/assets/heatpump_repair.png',
    shortDescription: 'Regular checkups to ensure optimal performance year-round.',
    details: [
      'Bi-annual tune-ups',
      'Coil cleaning and filter changes',
      'Safety and efficiency inspections',
      'Priority scheduling for members',
      'Prolongs the life of your unit',
    ],
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    icon: Wind,
    image: '/assets/pexels-jose-andres-pacheco-cortes-3641213-5463580.jpg',
    shortDescription: 'Advanced solutions to keep the air you breathe clean and safe.',
    details: [
      'Air purifiers and scrubbers',
      'Humidifiers and dehumidifiers',
      'UV light purification systems',
      'Filtration upgrades',
      'Allergen and dust reduction',
    ],
  },
  {
    id: 'duct-deodorization',
    title: 'Duct Deodorization',
    icon: Fan,
    image: '/assets/heatpump_replacement.png',
    shortDescription: 'Clear out smells and freshen the air flowing through your home.',
    details: [
      'Eliminates stale and musty odors',
      'Pet and smoke odor removal',
      'Safe, non-toxic deodorizing agents',
      'Improves overall home scent',
      'Lasting freshness',
    ],
  },
  {
    id: 'ductwork',
    title: 'Ductwork Repair & Sealing',
    icon: CheckCircle,
    image: '/assets/ductwork.png',
    shortDescription: 'Seal leaks and fix ductwork to save energy and improve airflow.',
    details: [
      'Mastic sealing and metal taping',
      'Identification of crushed or torn ducts',
      'Improved airflow to problem rooms',
      'Reduces energy waste',
      'Stops conditioned air from escaping to the attic',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our <span className="text-[var(--color-accent)]">Services</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From AC repairs to full installations, we have the expertise to keep your Walker County home comfortable all year.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-32 md:scroll-mt-[25vh] ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Panel */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-extrabold text-[var(--color-primary)] mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.shortDescription}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-md"
                >
                  Book a Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-primary)] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free, no-obligation inspection and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg"
            >
              Schedule a Free Inspection
            </Link>
            <a
              href="tel:2054719474"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Call 205-471-9474
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
