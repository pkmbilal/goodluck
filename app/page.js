import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import MaterialsSection from "@/components/home/MaterialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import TrustSection from "@/components/home/TrustSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MaterialsSection />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
