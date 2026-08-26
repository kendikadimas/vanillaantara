"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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

const qualities = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4 C12 8 6 10 4 16 C6 22 12 24 16 28 C20 24 26 22 28 16 C26 10 20 8 16 4Z" stroke="#C5A059" strokeWidth="1.2" fill="none"/>
        <path d="M16 10 C14 13 10 14 9 17 C10 20 14 21 16 24 C18 21 22 20 23 17 C22 14 18 13 16 10Z" fill="#C5A059" opacity="0.2"/>
      </svg>
    ),
    title: "Directly Sourced",
    body: "Bought from a vetted network of Indonesian growers under fair-trade terms. No middlemen, no mystery origins.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" stroke="#C5A059" strokeWidth="1.2" fill="none"/>
        <path d="M16 8 L16 16 L21 19" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="1.5" fill="#C5A059"/>
      </svg>
    ),
    title: "Vanillin & Moisture Dialled In",
    body: "Sun-cured at the right pace — plump, oily pods with vanillin levels that hold up in professional kitchens.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M8 16 L13 21 L24 10" stroke="#C5A059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="12" stroke="#C5A059" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: "Nothing Added",
    body: "No artificial flavouring, no colourants, no preservatives. Food grade and export compliant as standard.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="4" y="10" width="24" height="16" rx="1" stroke="#C5A059" strokeWidth="1.2" fill="none"/>
        <path d="M10 10 L10 7 C10 5.3 11.3 4 13 4 L19 4 C20.7 4 22 5.3 22 7 L22 10" stroke="#C5A059" strokeWidth="1.2" fill="none"/>
        <path d="M4 17 L28 17" stroke="#C5A059" strokeWidth="0.8" opacity="0.5"/>
        <circle cx="16" cy="20.5" r="1.5" fill="#C5A059" opacity="0.7"/>
      </svg>
    ),
    title: "Supply You Can Plan Around",
    body: "Structured procurement chain from artisan batches to industrial volumes. Consistent grading every order.",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-cream engraving-bg py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* About copy */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-gold" />
              <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">About Us</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-[1.15] mb-6">
              Between the Islands<br />
              <em className="not-italic text-vanilla-light">and the World's Kitchens</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:pt-16">
            <p className="font-sans text-base text-forest/65 leading-[1.85] mb-6">
              <strong className="font-medium text-forest">"Antara"</strong> is the Indonesian word for <em>between</em> — and that is exactly
              what we do. We connect the growers who hand-pollinate every blossom
              with the bakers, chefs, and producers who demand vanilla that actually
              tastes like vanilla.
            </p>
            <p className="font-serif text-lg text-forest/50 italic leading-relaxed">
              "From hand-pollinated orchid blossoms to patient, sun-cured perfection,
              Vanilla Antara honors every step of the journey."
            </p>
            <hr className="gold-rule mt-8" />
          </FadeUp>
        </div>

        {/* Brand Heritage Illustration Banner */}
        <FadeUp delay={0.2} className="mb-24">
          <div className="relative vintage-border overflow-hidden bg-parchment p-3 lg:p-4 shadow-xl">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <Image
                src="/images/about-illustration.jpg"
                alt="Vanilla Antara botanical illustration showing traditional Indonesian farmers hand-pollinating vanilla vines"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="pt-3 pb-1 text-center">
              <p className="font-serif text-xs tracking-[0.2em] uppercase text-forest/60">
                Heritage & Origin · Indonesian Vanilla Cultivation
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Quality pillars header */}
        <FadeUp delay={0} className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">Why It Matters</span>
          </div>
          <h3 className="font-serif text-3xl lg:text-4xl text-forest mb-12">
            Quality Preserved in Every Pod
          </h3>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/25">
          {qualities.map((q, i) => (
            <FadeUp key={q.title} delay={i * 0.08}>
              <div className="p-8 border-r border-b border-gold/25 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0 group hover:bg-parchment transition-colors duration-300 h-full">
                <div className="mb-5">{q.icon}</div>
                <h4 className="font-serif text-lg text-forest leading-snug mb-3">{q.title}</h4>
                <p className="font-sans text-sm text-forest/60 leading-relaxed">{q.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
