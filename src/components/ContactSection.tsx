'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const hvacOptions = [
  { value: 'General HVAC Repair', label: 'General HVAC Repair' },
  { value: 'AC Repair / Install', label: 'AC Repair / Install' },
  { value: 'Furnace / Heating', label: 'Furnace / Heating' },
  { value: 'Maintenance', label: 'Routine Maintenance' },
  { value: 'Ductwork', label: 'Ductwork / Sealing' },
  { value: 'Air Quality', label: 'Indoor Air Quality' },
  { value: 'Emergency Support', label: 'Emergency Support' },
  { value: 'Other', label: 'Other' },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedPests, setSelectedPests] = useState<string[]>([]);

  const togglePest = (value: string) => {
    setSelectedPests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      pestTypes: selectedPests,
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSelectedPests([]);
        (e.target as HTMLFormElement).reset();
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
    <section id="contact" className="py-24 bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-primary)] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-200">

          {/* Contact Information — always blue bg */}
          <div className="lg:w-2/5 bg-[var(--color-primary)] text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Schedule Service</h3>
              <p className="text-blue-100 mb-10 text-lg">
                Fill out the form and our team will get back to you within 24 hours to schedule your service.
              </p>

              <div className="space-y-8">
                <a href="tel:2054719474" className="flex items-center text-xl font-bold group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>

                  <div className="flex flex-col">
                    <span>205-471-9474</span>
                  </div>
                </a>

                <a href="mailto:hvacrescues@gmail.com" className="flex items-center text-lg font-medium group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  hvacrescues@gmail.com
                </a>

                <div className="flex items-center text-lg font-medium">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  Jasper, Alabama 35501
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="font-medium text-blue-100">Guaranteed response time within 24 hours.</p>
            </div>
          </div>

          {/* Form — white bg with dark text */}
          <div className="lg:w-3/5 p-10 md:p-14 bg-white">
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h4 className="text-3xl font-bold text-[var(--color-primary)]">Message Sent!</h4>
                <p className="text-xl text-gray-600">We&apos;ve received your request and will contact you shortly.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-8 text-[var(--color-accent)] font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* System Issue Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">System Issue(s) — Select all that apply</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {hvacOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm font-medium ${selectedPests.includes(option.value)
                          ? 'bg-blue-50 border-[var(--color-primary)] text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedPests.includes(option.value)}
                          onChange={() => togglePest(option.value)}
                        />
                        <span className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center ${selectedPests.includes(option.value)
                          ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
                          : 'border-gray-400 bg-white'
                          }`}>
                          {selectedPests.includes(option.value) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </span>
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-1">Message Details</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all resize-none placeholder-gray-400"
                    placeholder="Tell us about the problem you're experiencing..."
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold">
                    There was an error sending your message. Please give us a call instead.
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-lg py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Schedule Service'}
                  </button>
                  {/* <p className="text-center text-gray-500 text-sm mt-4">No commitment required. 100% free inspection.</p> */}
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
