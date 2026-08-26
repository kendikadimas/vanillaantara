import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import WhyFaqSection from "@/components/WhyFaqSection";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <Navbar />
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
