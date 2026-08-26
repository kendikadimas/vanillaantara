"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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

const trustPoints = [
  {
    num: "01",
    title: "Consistent Grading",
    body: "Independent QC on every batch. Vanillin content, moisture levels, and contamination checked before anything ships.",
  },
  {
    num: "02",
    title: "Export Documentation Included",
    body: "Phytosanitary Certificate and Certificate of Analysis (CoA) come standard with every export order. No chasing paperwork.",
  },
  {
    num: "03",
    title: "Priced at Source",
    body: "Direct procurement from growers cuts out the distribution chain. You get competitive prices without the quality trade-off.",
  },
];

const faqs = [
  {
    q: "Can I order a small sample before committing to a larger quantity?",
    a: "Yes. Sample packs are available so you can evaluate the aroma and quality before placing a trade order. Contact our team via WhatsApp to arrange one.",
  },
  {
    q: "What is the minimum order quantity for business or export orders?",
    a: "We handle everything from small samples (from 50g) through to bulk orders of several hundred kilograms. Tell us your volume and we will work out the right format.",
  },
  {
    q: "What export documents do you provide?",
    a: "Every export shipment includes a Phytosanitary Certificate and Certificate of Analysis (CoA). Additional documentation can be arranged depending on the destination country's requirements.",
  },
  {
    q: "How long does delivery take?",
    a: "Domestic orders typically arrive within 2 to 5 business days. For international shipments we coordinate directly with you on logistics and documentation timelines.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold/20 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-serif text-base lg:text-lg text-forest group-hover:text-vanilla-light transition-colors duration-200">
          {q}
        </span>
        <span
          className={`mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center border border-gold/40 rounded-full text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-forest/60 leading-relaxed pb-5 pr-9">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhyFaqSection() {
  return (
    <section id="keunggulan" className="bg-cream engraving-bg py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Why us */}
          <div>
            <FadeUp delay={0} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-gold" />
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">Why Us</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-[1.15]">
                What You Can<br />
                <em className="not-italic text-vanilla-light">Count On</em>
              </h2>
            </FadeUp>

            <div className="space-y-0 border-t border-gold/20">
              {trustPoints.map((tp, i) => (
                <FadeUp key={tp.num} delay={i * 0.1}>
                  <div className="flex gap-6 py-7 border-b border-gold/20 group">
                    <span className="font-serif text-3xl text-gold/30 leading-none flex-shrink-0 group-hover:text-gold/60 transition-colors duration-300">
                      {tp.num}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg text-forest mb-2">{tp.title}</h4>
                      <p className="font-sans text-sm text-forest/60 leading-relaxed">{tp.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq">
            <FadeUp delay={0} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-gold" />
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-gold">FAQ</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-[1.15]">
                Common<br />
                <em className="not-italic text-vanilla-light">Questions</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-gold/20">
                {faqs.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
