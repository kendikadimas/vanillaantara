"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const products = [
  {
    tag: "Best Seller",
    name: "Planifolia Vanilla Pods",
    grade: "Gourmet Grade A",
    desc: "Whole cured pods with a bold, complex aroma and an oily, plump texture. The working ingredient for fine dining, pâtisserie, and serious dessert work.",
    image: "/images/product1.jpeg",
    alt: "Gourmet Grade A Planifolia vanilla pods in vacuum package",
    zoom: "",
    specs: [
      { label: "Length", val: "14–18 cm" },
      { label: "Moisture", val: "25–35%" },
      { label: "MOQ", val: "By Request" },
    ],
  },
  {
    tag: "Rare & Aromatic",
    name: "Vanilla Tahitensis",
    grade: "Gourmet Grade · Export Ready",
    desc: "Prized for its floral, cherry-anise notes and exceptionally plump pods. A distinct profile from Planifolia — preferred by pastry chefs and perfumers who need something more delicate.",
    image: "/images/tahitensis.jpeg",
    alt: "Gourmet Vanilla Tahitensis pods",
    zoom: "scale-125",
    specs: [
      { label: "Origin", val: "Indonesia" },
      { label: "Profile", val: "Floral & Fruity" },
      { label: "Docs", val: "CoA & Phyto" },
      { label: "MOQ", val: "By Request" },
    ],
  },
];

const apps = [
  "Bakery & Pastry",
  "Premium Beverage",
  "Gelato & Desserts",
  "Food Production",
  "Flavourist",
  "Fine Dining",
  "Confectionery",
  "Artisan Chocolate",
];

export default function ProductsSection() {
  return (
    <section id="produk" className="bg-parchment engraving-bg py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <FadeUp delay={0} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">Our Products</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-forest">
            What We Supply
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-8 mb-20">
          {products.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.12}>
              <div className="group bg-cream border border-gold/25 hover:border-gold/60 transition-all duration-500 overflow-hidden flex flex-col md:flex-row shadow-md hover:shadow-xl">
                <div className="w-full md:w-2/5 aspect-[3/4] relative shrink-0 border-b md:border-b-0 md:border-r border-gold/20 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className={`object-cover object-center transition-transform duration-700 ${p.zoom ?? "scale-100 group-hover:scale-110"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-start gap-6">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block font-sans text-xs tracking-[0.15em] uppercase text-gold mb-2">
                          {p.tag}
                        </span>
                        <h3 className="font-serif text-2xl text-forest">{p.name}</h3>
                        <p className="font-sans text-xs tracking-[0.1em] uppercase text-forest/40 mt-1">{p.grade}</p>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-forest/65 leading-relaxed mb-6">{p.desc}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-4 gap-0 border border-gold/20 mb-6">
                      {p.specs.map((s, si) => (
                        <div key={s.label} className={`p-3 text-center ${si < 3 ? "border-r border-gold/20" : ""}`}>
                          <div className="font-serif text-sm text-gold font-medium">{s.val}</div>
                          <div className="font-sans text-[10px] tracking-[0.08em] uppercase text-forest/40 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="mailto:hello@vanillaantara.com?subject=Pricing%20Request&body=Hi%20Vanilla%20Antara%2C%20I%27m%20interested%20in%20pricing%20for%20one%20of%20your%20products."
                      className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-gold hover:text-forest transition-colors duration-300 group/link"
                    >
                      <span>Request Pricing</span>
                      <span className="block w-6 h-px bg-gold group-hover/link:w-10 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Sample Pack Banner */}
        <FadeUp delay={0.1} className="mb-20">
          <div className="border border-gold/40 bg-cream p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8 shadow-sm">
            <div className="flex-1">
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold block mb-3">Try Our Gourmet Quality</span>
              <h3 className="font-serif text-2xl lg:text-3xl text-forest mb-2">International Sample Pack — <span className="text-gold">€20 All-In</span></h3>
              <p className="font-sans text-sm text-forest/60 leading-relaxed">
                4 Premium Pods (Planifolia &amp; Tahitensis) · Worldwide Express Delivery · Official Phytosanitary Certificate
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:hello@vanillaantara.com?subject=Sample%20Pack%20Request%20%E2%80%94%20%E2%82%AC20&body=Hi%20Vanilla%20Antara%2C%0A%0AI%27d%20like%20to%20order%20the%20%E2%82%AC20%20International%20Sample%20Pack.%0A%0ABusiness%20Name%20%2F%20Name%3A%20%0AShipping%20Address%3A%20%0APhone%20Number%3A%20%0APreferred%20Vanilla%20Type%3A%20%5B%20%5D%20Planifolia%20%5B%20%5D%20Tahitensis%20%5B%20%5D%20Both"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-forest text-cream font-sans text-xs tracking-[0.12em] uppercase hover:bg-forest/80 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Order via Email
              </a>
              <a
                href="https://instagram.com/vanillaantara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gold text-gold font-sans text-xs tracking-[0.12em] uppercase hover:bg-gold hover:text-cream transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                DM on Instagram
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold/40" />
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-forest/70">Used In</span>
            <span className="block flex-1 h-px bg-gold/30" />
          </div>
          <div className="flex flex-wrap gap-3">
            {apps.map((app) => (
              <span
                key={app}
                className="px-4 py-2 border border-gold/50 font-sans text-xs tracking-[0.12em] uppercase text-forest/80 hover:border-gold hover:text-gold transition-all duration-300 cursor-default"
              >
                {app}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
