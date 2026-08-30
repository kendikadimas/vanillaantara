"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EMAIL_URL = "mailto:hello@vanillaantara.com?subject=Pricing%20%26%20Sample%20Request&body=Hi%20Vanilla%20Antara%2C%20I%27d%20like%20to%20request%20a%20sample%20or%20get%20pricing%20information.";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.65, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CtaFooter() {
  return (
    <>
      {/* CTA Section */}
      <section id="kontak" className="relative bg-forest engraving-bg py-28 lg:py-40 overflow-hidden">
        {/* Decorative gold rule top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Background ornament */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.04]">
          <svg viewBox="0 0 400 400" className="w-[600px] h-[600px]" fill="none" aria-hidden="true">
            <circle cx="200" cy="200" r="180" stroke="#C5A059" strokeWidth="0.8"/>
            <circle cx="200" cy="200" r="140" stroke="#C5A059" strokeWidth="0.4"/>
            <line x1="20" y1="200" x2="380" y2="200" stroke="#C5A059" strokeWidth="0.4"/>
            <line x1="200" y1="20" x2="200" y2="380" stroke="#C5A059" strokeWidth="0.4"/>
            <circle cx="200" cy="200" r="6" fill="#C5A059"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          {/* Top label */}
          <FadeUp delay={0.05} className="flex items-center justify-center gap-3 mb-12">
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold/70">Get in Touch</span>
            <span className="block w-12 h-px bg-gold/40" />
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Headline + CTAs + Trust */}
            <FadeUp delay={0.1} className="flex flex-col">
              <h2 className="font-serif text-5xl lg:text-6xl text-cream leading-[1.05] tracking-[-0.01em] mb-6">
                Source Premium<br />
                <em className="not-italic text-gold">Vanilla Antara</em>
              </h2>
              <p className="font-sans text-base text-cream/55 leading-relaxed mb-10">
                Request a sample, discuss bulk pricing, or ask about export documentation.
                Our team responds within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={EMAIL_URL}
                  className="inline-flex items-center gap-3 px-9 py-4 bg-gold text-forest font-sans text-sm font-medium tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email Us
                </a>
                <a
                  href="mailto:hello@vanillaantara.com"
                  className="inline-flex items-center gap-3 px-9 py-4 border border-cream/25 text-cream font-sans text-sm tracking-[0.1em] uppercase hover:border-cream/60 transition-all duration-300 justify-center"
                >
                  Email Us
                </a>
              </div>
              <div className="border-t border-gold/15 pt-8 grid grid-cols-3 gap-6">
                {[
                  { val: "< 24h", label: "Response Time" },
                  { val: "Free", label: "Sample Available" },
                  { val: "Global", label: "Export Ready" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-serif text-xl text-gold mb-1">{item.val}</div>
                    <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-cream/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: Contact Form */}
            <FadeUp delay={0.2}>
              <form
                action={`mailto:hello@vanillaantara.com`}
                method="get"
                encType="text/plain"
                className="border border-gold/20 p-8 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/70">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/70">Enquiry</label>
                  <select
                    name="subject"
                    className="bg-forest border border-cream/15 px-4 py-3 font-sans text-sm text-cream/70 focus:border-gold/50 focus:outline-none transition-colors duration-200"
                  >
                    <option value="Sample Request">Sample Request</option>
                    <option value="Bulk Pricing">Bulk Pricing</option>
                    <option value="Export Documentation">Export Documentation</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/70">Message</label>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 px-8 py-4 bg-gold text-forest font-sans text-sm font-medium tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </FadeUp>
          </div>
        </div>

        {/* Decorative gold rule bottom */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t border-gold/20">
        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            {/* Col 1 — Brand */}
            <div>
              <span className="font-serif text-2xl text-cream font-bold">Vanilla Antara</span>
              <p className="font-sans text-sm text-cream/70 leading-relaxed mt-6 max-w-[240px]">
                Fine vanilla from Indonesian growers, supplied to culinary producers worldwide.
              </p>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2 mt-6 font-sans text-xs tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email Us
              </a>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold/80 mb-5">Navigation</p>
              <nav className="flex flex-col gap-3" aria-label="Footer navigation">
                {[
                  { label: "About", href: "#tentang" },
                  { label: "Products", href: "#produk" },
                  { label: "Why Us", href: "#keunggulan" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#kontak" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-sans text-sm text-cream/65 hover:text-cream transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold/80 mb-5">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@vanillaantara.com"
                  className="font-sans text-sm text-cream/65 hover:text-cream transition-colors duration-200 w-fit"
                >
                  hello@vanillaantara.com
                </a>
                <span className="font-sans text-sm text-cream/65">Indonesia</span>
              </div>
              <div className="mt-8 pt-8 border-t border-gold/20">
                <p className="font-serif text-sm text-cream/50 italic leading-relaxed">
                  "From hand-pollinated orchid blossoms to patient, sun-cured perfection."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="border-t border-gold/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-sans text-xs text-cream/50 tracking-wide">
              © {new Date().getFullYear()} Vanilla Antara. All rights reserved.
            </p>
            <p className="font-sans text-xs text-cream/40 tracking-wide">
              Developed by <a href="https://kalanalabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream/70 transition-colors duration-200">kalanalabs.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
