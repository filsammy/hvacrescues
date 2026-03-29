'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Highly recommend!! You can expect honest hard work and transparent professionalism from Tyler! A company you can trust to take care of you and yours like he would his own!",
    name: 'Samantha Dunaway Hamilton',
    // location: 'Walker County, AL',
    initials: 'SDH',
    rating: 5,
  },
  {
    quote: "Tyler did an awesome job servicing and cleaning our unit and installed a new split unit for us . He is the best and I highly recommend him for your HVAC needs . Give him a call I promise you won’t regret it !",
    name: 'Denise Bauer',
    // location: 'Jasper, AL',
    initials: 'DB',
    rating: 5,
  },
  {
    quote: "I highly recommend the prompt service, professional attitude, fair price we received from Tyler Souder of HVAC RESCUE LLC. Thanks again, Tyler!",
    name: 'Jay Babcock',
    // location: 'Walker County, AL',
    initials: 'JB',
    rating: 5,
  },
  {
    quote: "Highly recommended Tyler! We had a Freon leak. Tyler came out and identified the leak, fixed it and everything is running good as new! Also will come out and perform yearly service on your unit.",
    name: 'Joey Erkhart',
    location: 'Jasper, AL',
    initials: 'JE',
    rating: 5,
  },
  {
    quote: "This company came to my home and done an excellent job when my A/C was down! Tyler the owner was on time and very knowledgeable about my issue, he explained in detail about the repair and gave me an excellent price! Would recommend them to anyone.",
    name: 'Jeremy Calvert',
    // location: 'Walker County, AL',
    initials: 'JC',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Real Walker County Homeowners</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
            Hear What Our Clients Say
          </h3>
        </div>

        {/* Featured Testimonial */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-[var(--color-primary)] text-white p-10 md:p-12 rounded-3xl shadow-2xl relative"
          >
            <Quote className="absolute top-8 right-8 h-20 w-20 text-white/10" />

            <div className="flex gap-1 text-[var(--color-accent)] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>

            <div className="flex items-center">
              <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-inner">
                {testimonials[0].initials}
              </div>
              <div>
                <p className="font-bold text-lg">{testimonials[0].name}</p>
                {/* <p className="text-blue-200 text-sm">{testimonials[0].location}</p> */}
              </div>
            </div>
          </motion.div>

          {/* Google Reviews Badge */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Excellent</h4>
              <div className="flex justify-center gap-1 text-[#FBBC05] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">Based on 100+ reviews</p>
            </div>
          </motion.div> */}
        </div>

        {/* Additional Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 text-[var(--color-accent)] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
