'use client';

import { motion } from 'framer-motion';
import { Thermometer, Flame, Wind, Activity } from 'lucide-react';

const pains = [
  {
    title: 'AC Failure',
    description: 'System running but no cool air? We fix compressors and refrigerant leaks fast.',
    icon: Thermometer,
  },
  {
    title: 'Furnace Issues',
    description: 'Furnace not heating like it should? Don\'t wait until it\'s too late.',
    icon: Flame,
  },
  {
    title: 'Poor Air Quality',
    description: 'Dust, allergens, or strange odors? We offer comprehensive solutions.',
    icon: Wind,
  },
  {
    title: 'High Energy Bills',
    description: 'System working too hard? A tune-up or new unit ensures efficiency.',
    icon: Activity,
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
            HVAC Problems? We've Got the Rescue!
          </h2>
          <p className="text-lg text-gray-600">
            Don't let HVAC issues only get worse (and more expensive) the longer you put them off. Let us bring comfort back to your home!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-orange-50 text-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
                <pain.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{pain.title}</h3>
              <p className="text-gray-600">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
