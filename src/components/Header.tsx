'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, Facebook } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/#testimonials', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-primary)] shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/transparent-bg.png"
                alt="HVAC Rescue LLC Logo"
                width={300}
                height={120}
                className="max-h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${pathname === link.href
                  ? 'text-[var(--color-accent)] font-bold'
                  : 'text-blue-100 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className="flex space-x-2">
              <Link href="https://www.facebook.com/profile.php/?id=61562969425101" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white bg-white/10 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://share.google/VMv5RcVdAWyHOpqLH" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white bg-white/10 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Google</span>
                <GoogleIcon className="h-5 w-5" />
              </Link>
            </div>
            <a href="tel:2054719474" className="flex items-center text-white font-bold text-lg hover:text-[var(--color-accent)]">
              <Phone className="h-5 w-5 mr-2 text-[var(--color-accent)]" />
              205-471-9474
            </a>
            <Link
              href="/#contact"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-md"
            >
              Schedule Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[var(--color-accent)] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${pathname === link.href
                  ? 'text-[var(--color-primary)] bg-blue-50 font-bold'
                  : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-100 mb-2">
            <div className="flex items-center justify-center space-x-6 px-4">
              <Link href="https://www.facebook.com/profile.php/?id=61562969425101" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-white bg-blue-50 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://share.google/VMv5RcVdAWyHOpqLH" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-white bg-blue-50 hover:bg-[var(--color-accent)] p-2 rounded-md transition-colors">
                <span className="sr-only">Google</span>
                <GoogleIcon className="h-6 w-6" />
              </Link>
              <a href="tel:2054719474" className="flex items-center text-[var(--color-primary)] font-bold text-lg">
                <Phone className="h-5 w-5 mr-2" />
                205-471-9474
              </a>
            </div>
            <div className="mt-4 px-4 flex justify-center">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-md font-bold shadow-md"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
