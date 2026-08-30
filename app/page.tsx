import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import WhyFaqSection from "@/components/WhyFaqSection";
import CtaFooter from "@/components/CtaFooter";

const EMAIL_URL = "mailto:hello@vanillaantara.com?subject=Enquiry&body=Hi%20Vanilla%20Antara%2C%20I%27d%20like%20to%20ask%20about%20your%20vanilla%20products.";

export default function Home() {
  return (
    <>
      <Navbar />
      <a
        href={EMAIL_URL}
        aria-label="Email Us"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-forest hover:bg-forest/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <WhyFaqSection />
        <CtaFooter />
      </main>
    </>
  );
}
