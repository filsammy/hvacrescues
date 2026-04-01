'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.64 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

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
              Fast &amp; reliable HVAC pros in Walker County, AL. Your comfort is our mission — trust HVAC Rescue LLC for all your HVAC needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.facebook.com/profile.php/?id=61562969425101" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white bg-white/10 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://share.google/VMv5RcVdAWyHOpqLH" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white bg-white/10 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Google</span>
                <GoogleIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
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

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} HVAC Rescue LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
