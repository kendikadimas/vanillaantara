"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#tentang" },
  { label: "Products", href: "#produk" },
  { label: "Gallery", href: "#galeri" },
  { label: "Why Us", href: "#keunggulan" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#kontak" },
];

const EMAIL_URL = "mailto:hello@vanillaantara.com?subject=Enquiry&body=Hi%20Vanilla%20Antara%2C%20I%27d%20like%20to%20ask%20about%20your%20vanilla%20products.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_#C5A05940]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" aria-label="Vanilla Antara — Home" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Vanilla Antara" width={40} height={40} className="object-contain" />
          <span className="font-serif text-2xl text-forest font-bold">Vanilla Antara</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-[0.08em] uppercase text-forest/70 hover:text-forest transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={EMAIL_URL}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold font-sans text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-cream transition-all duration-300"
        >
          Contact Us
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-px bg-forest transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-forest transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-forest transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-cream border-t border-gold/30 ${
          open ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.1em] uppercase text-forest/80 hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={EMAIL_URL}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-sans text-sm tracking-[0.1em] uppercase"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
