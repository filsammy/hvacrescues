'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, CheckCircle, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

const hvacOptions = [
  { value: 'General HVAC Repair', label: 'General HVAC' },
  { value: 'AC Repair / Install', label: 'AC Repair/Install' },
  { value: 'Furnace / Heating', label: 'Furnace/Heating' },
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'Ductwork', label: 'Ductwork' },
  { value: 'Air Quality', label: 'Air Quality' },
  { value: 'Emergency Support', label: 'Emergency' },
  { value: 'Other', label: 'Other' },
];

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [selectedPests, setSelectedPests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState('');

  const togglePest = (value: string) => {
    setSelectedPests((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pestTypes: selectedPests,
          message: `${formData.message}`,
          website: honeypot,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setSelectedPests([]);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Your <span className="text-[var(--color-accent)]">Reliable</span> HVAC Pros of Walker and Cullman Counties
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We handle HVAC repairs & installations with expert care. Fix it right the first time, keep you comfy all year, and never overcharge.
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
            <div className="relative w-full rounded-2xl p-8 lg:p-10 bg-white shadow-2xl text-gray-900 border border-white/20">
              <h3 className="text-2xl font-extrabold mb-2 text-[var(--color-primary)]">Get a Free Estimate</h3>
              <p className="text-gray-600 mb-6 text-sm">Schedule your service in seconds.</p>

              {submitStatus === 'success' ? (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--color-primary)]">Request Sent!</h4>
                  <p className="text-gray-600 text-sm">We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  {/* Honeypot — hidden from real users */}
                  <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                    <input
                      type="text"
                      name="website"
                      autoComplete="off"
                      tabIndex={-1}
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                    />
                  </div>

                  {/* System Issue Checkboxes */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">System Issue(s)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {hvacOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-2 px-2 py-2 rounded cursor-pointer transition-all text-xs font-medium border ${selectedPests.includes(option.value)
                            ? 'bg-blue-50 border-[var(--color-primary)] text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                            }`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={selectedPests.includes(option.value)}
                            onChange={() => togglePest(option.value)}
                          />
                          <span className={`flex-shrink-0 w-3 h-3 rounded flex items-center justify-center border ${selectedPests.includes(option.value)
                            ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
                            : 'border-gray-300 bg-white'
                            }`}>
                            {selectedPests.includes(option.value) && (
                              <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            )}
                          </span>
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Message Details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all resize-none placeholder-gray-400"
                    ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-50 text-red-600 rounded flex text-sm font-bold">
                      Error sending request. Please call us.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-lg py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
