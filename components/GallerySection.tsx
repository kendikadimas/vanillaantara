"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/gallery-1.jpg",
    alt: "Gourmet Planifolia Vanilla Pods on Ceramic Dish",
  },
  {
    id: 2,
    src: "/images/gallery/gallery-2.jpg",
    alt: "Hand-harvested Vacuum Packed Gourmet Vanilla Pods",
  },
  {
    id: 3,
    src: "/images/gallery/gallery-3.jpg",
    alt: "Bulk Export Grade Vacuum Sealed Vanilla Batch",
  },
  {
    id: 4,
    src: "/images/gallery/gallery-4.jpg",
    alt: "Vacuum Sealed Planifolia Moisture Retention Detail",
  },
  {
    id: 5,
    src: "/images/gallery/gallery-5.jpg",
    alt: "Glossy Sun-cured Vanilla Beans Macro View",
  },
  {
    id: 6,
    src: "/images/gallery/gallery-6.jpg",
    alt: "Crossed Whole Planifolia Pods Close Up",
  },
  {
    id: 7,
    src: "/images/gallery/gallery-7.jpg",
    alt: "Plump Vanilla Beans Surface Detail",
  },
  {
    id: 8,
    src: "/images/gallery/gallery-8.jpg",
    alt: "Artisan Grade Vanilla Pods Display",
  },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="galeri" className="bg-cream engraving-bg py-24 lg:py-32 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp delay={0} className="mb-14 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">Gallery</span>
            <span className="block w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl text-forest mb-4">
            Our Vanilla in Detail
          </h2>
          <p className="font-sans text-sm text-forest/60 leading-relaxed">
            A visual showcase of our Planifolia vanilla pods, curing process, and export packaging.
          </p>
        </FadeUp>

        {/* Gallery Grid — Seamless Symmetrical 4x2 Tile Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <FadeUp key={item.id} delay={idx * 0.05}>
              <div
                onClick={() => setSelectedImg({ src: item.src, alt: item.alt })}
                className="group relative w-full aspect-square overflow-hidden vintage-border bg-parchment cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-forest transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current stroke-2">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-forest/90 backdrop-blur-sm p-4 md:p-10 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full h-full vintage-border overflow-hidden bg-parchment shadow-2xl flex flex-col items-center justify-center p-2"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-forest/80 hover:bg-forest text-cream flex items-center justify-center transition-colors duration-200"
                aria-label="Close image preview"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current stroke-2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  fill
                  className="object-contain"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
