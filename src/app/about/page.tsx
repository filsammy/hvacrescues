'use client';

import { motion } from 'framer-motion';
import { Users, Heart, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

// const teamMembers = [
//   {
//     name: 'Jaeson Fuentes',
//     role: 'Lead Technician',
//     bio: 'Jaeson is a licensed HVAC technician with 5 years of field experience. He specializes in residential and commercial HVAC services, including AC repair, heating maintenance, and air quality management.',
//     initials: 'JF',
//   },
//   {
//     name: 'Eugene Nguyen',
//     role: 'Director of Operations',
//     bio: 'Eugene has 8 years experience in the HVAC industry and an extensive professional history in the service sector. He ensures all installations and repairs meet our high standards of quality and efficiency.',
//     initials: 'EN',
//   },
//   {
//     name: 'Harold Jones, Sr.',
//     role: 'Service Manager',
//     bio: 'Harold has 30 years experience in the HVAC industry. He understands the intricacies of all major system brands and guarantees that your comfort is restored quickly. From heat pumps to furnaces, Harold is the HVAC whisperer.',
//     initials: 'HJ',
//   },
// ];

export default function AboutPage() {
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
            About <span className="text-[var(--color-accent)]">HVAC Rescue LLC</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Fast &amp; reliable HVAC pros serving Walker and Cullman Counties, AL with pride. Fix it right the first time, keep you comfy all year.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Owner Photo */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden">
                <Image
                  src="/images/owner.jpg"
                  alt="Founder and CEO of HVAC Rescue LLC"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Owner Info */}
            <div className="lg:w-3/5">
              <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Meet The Owner</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6">
                Our Mission &amp; Services
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We handle HVAC repairs & installations with expert care. Fix it right the first time, keep you comfy all year, and never overcharge.
                </p>
                <p>
                  <strong>Our List of Services:</strong> HVAC repair, replacement, maintenance, indoor air quality, duct deodorization, ductwork repair, ductwork replacement, and duct sealing.
                </p>
                <p>
                  We also offer financing through Wisetak for up to 24 month zero % interest to qualified applicants. Use our online link to see if you qualify without any impact on your credit score.
                </p>
              </div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
              The People Behind Your Protection
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="w-24 h-24 mx-auto bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md">
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{member.name}</h4>
                <p className="text-[var(--color-accent)] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values / Mission */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Users className="h-12 w-12 mx-auto text-[var(--color-accent)] mb-6" />
          <h2 className="text-3xl font-extrabold mb-4">Serving Residential, Commercial & Property Management</h2>
          <p className="text-blue-100 text-lg mb-8">
            No matter the size of your property or the severity of the infestation, our team has the tools and expertise to deliver results — guaranteed.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
