import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import MaterialsSection from "@/components/home/MaterialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import SiteFooter from "@/components/home/SiteFooter";
import TrustSection from "@/components/home/TrustSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Scrap Metal Buyer and Recycling in Saudi Arabia",
  description:
    "GoodLuck Scrap buys, collects, recycles, and handles ferrous and non-ferrous scrap metal for Saudi businesses, contractors, factories, and demolition sites.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

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