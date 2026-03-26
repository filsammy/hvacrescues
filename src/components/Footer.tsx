'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/transparent-bg.png"
                alt="HVAC Rescue LLC Logo"
                width={350}
                height={150}
                className="max-h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              Fast &amp; reliable HVAC pros in Walker County, AL. Your comfort is our mission trust HVAC Rescue LLC for all your HVAC needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#hvac-repair" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">HVAC Repair</Link></li>
              <li><Link href="/services#hvac-replacement" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">HVAC Replacement</Link></li>
              <li><Link href="/services#hvac-maintenance" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">HVAC Maintenance</Link></li>
              <li><Link href="/services#indoor-air-quality" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Indoor Air Quality</Link></li>
              <li><Link href="/services#duct-deodorization" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Duct Deodorization</Link></li>
              <li><Link href="/services#ductwork" className="text-blue-100 hover:text-[var(--color-accent)] transition-colors">Ductwork Repair &amp; Sealing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:2054719474" className="text-blue-100 hover:text-white transition-colors">
                  205-471-9474
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:hvacrescues@gmail.com" className="text-blue-100 hover:text-white break-all transition-colors">
                  hvacrescues@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 leading-tight">
                  1507 Josephine St,<br />
                  Jasper, AL 35501
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / BBB */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-white mb-4">Subscribe</h4>
              <p className="text-sm text-blue-100 mb-3">Get seasonal tips &amp; offers — enter your email</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 w-full text-gray-900 bg-white border-2 border-white/80 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder-gray-500"
                />
                <button type="submit" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-4 py-2 rounded-r-md transition-colors font-medium text-white">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} HVAC Rescue LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
