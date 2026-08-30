"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WA_SAMPEL  = "mailto:hello@vanillaantara.com?subject=Sample%20Request&body=Hi%20Vanilla%20Antara%2C%20I%27d%20like%20to%20order%20a%20small%20sample%20of%20your%20vanilla.";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cream engraving-bg overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left: Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-forest leading-[1.12] tracking-[-0.01em] mb-6">
                Where Indonesian
                <br />
                <em className="not-italic text-vanilla-light">Vanilla Farms</em>
                <br />
                Meet the World's Kitchens
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-sans text-base lg:text-lg text-forest/65 leading-relaxed max-w-xl mb-8">
                Gourmet-grade Planifolia vanilla sourced directly from Indonesian growers,
                supplied to bakeries, culinary producers, and export buyers worldwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@vanillaantara.com?subject=Catalogue%20%26%20Pricing%20Request&body=Hi%20Vanilla%20Antara%2C%20I%27d%20like%20to%20request%20your%20product%20catalogue%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-cream font-sans text-sm tracking-[0.1em] uppercase hover:bg-forest-light transition-all duration-300 shadow-md"
                >
                  Request Catalogue & Pricing
                </a>
                <a
                  href={WA_SAMPEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold text-gold font-sans text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-cream transition-all duration-300"
                >
                  Order a Sample
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Product photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="flex lg:col-span-5 justify-center lg:justify-end items-center"
          >
            <div className="relative vintage-border w-full aspect-[3/4] overflow-hidden bg-parchment group shadow-2xl">
              <Image
                src="/images/hero-vanilla.jpg"
                alt="Vanilla Antara gourmet vanilla pods on ceramic dish with rosemary"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-90 pointer-events-none" />
              <div className="absolute bottom-6 inset-x-6 text-center z-10">
                <hr className="gold-rule mb-3 opacity-80" />
                <p className="font-serif text-xs tracking-[0.25em] uppercase text-cream/90 font-light">
                  Vanilla Antara · Indonesia
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Horizontal Stats Bar */}
        <FadeUp delay={0.45}>
          <div className="pt-8 border-t border-gold/20 grid grid-cols-3 gap-6 sm:gap-12">
            {[
              { val: "100%", label: "Natural & Pure" },
              { val: "Export", label: "Phytosanitary Ready" },
              { val: "B2B", label: "Sample to Industrial" },
            ].map((item) => (
              <div key={item.label} className="text-left sm:text-center first:text-left last:text-right sm:last:text-center sm:first:text-center">
                <div className="font-serif text-2xl lg:text-3xl text-gold">{item.val}</div>
                <div className="font-sans text-xs tracking-[0.1em] uppercase text-forest/50 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

    </section>
  );
}
