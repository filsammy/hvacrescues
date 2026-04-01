'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'How quickly can HVAC Rescue LLC respond to an emergency call?',
    answer:
      'We prioritize emergency HVAC situations and aim to respond same-day for Walker and Cullman County residents. Depending on your location and the time of day, we often arrive within a few hours of your call. For the fastest response, call us directly at 205-471-9474.',
  },
  {
    question: 'Do you offer free estimates for HVAC repairs or replacements?',
    answer:
      'Yes! We provide free, no-obligation estimates for all HVAC repairs, replacements, and new installations. Simply fill out our contact form or give us a call and we\'ll schedule a convenient time to assess your system and provide a transparent, upfront quote — no hidden fees.',
  },
  {
    question: 'How often should I have my HVAC system serviced?',
    answer:
      'We recommend scheduling professional maintenance at least twice a year — once in spring before the cooling season and once in fall before the heating season. Regular tune-ups keep your system running efficiently, extend its lifespan, catch small issues before they become expensive repairs, and help maintain your manufacturer\'s warranty.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'HVAC Rescue LLC proudly serves Walker County including Jasper, Cullman, and surrounding communities. If you\'re unsure whether we cover your area, just give us a call at 205-471-9474 and we\'ll let you know right away.',
  },
  {
    question: 'My AC is running but not cooling — what could be wrong?',
    answer:
      'Several issues can cause an AC to run without cooling properly: a refrigerant leak, a dirty or clogged air filter, a failing compressor, frozen evaporator coils, or ductwork leaks. Some of these are simple fixes while others require a licensed technician. We recommend calling us for a diagnosis — attempting to recharge refrigerant yourself is illegal without an EPA certification and can damage your system further.',
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        id={`faq-toggle-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-blue-50/60 transition-colors group"
      >
        <span className="text-gray-900 font-semibold text-base sm:text-lg leading-snug group-hover:text-[var(--color-primary)] transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 bg-white">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[var(--color-primary)] text-white py-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-200 text-lg"
          >
            Everything you need to know about HVAC Rescue LLC. Can't find your answer?{' '}
            <a href="tel:2054719474" className="text-white font-bold hover:text-[var(--color-accent)] transition-colors underline underline-offset-2">
              Call us directly.
            </a>
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* CTA below accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-14 rounded-2xl bg-[var(--color-primary)] text-white p-8 text-center shadow-xl"
          >
            <h2 className="text-2xl font-extrabold mb-2">Still have questions?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              Our team is available to answer any HVAC questions and schedule your service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                id="faq-cta-phone"
                href="tel:2054719474"
                className="flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Phone className="h-5 w-5" />
                205-471-9474
              </a>
              <Link
                id="faq-cta-schedule"
                href="/#contact"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md"
              >
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
