import { Benefits, OverlayImageGrid, recyclingImages, TextIntro } from "@/components/PageSections";
import { Footer, Header, InfoCta } from "@/components/SiteChrome";

export const metadata = {
  title: "Sell To Us | Good Luck Scrap",
  description: "Sell scrap materials to Good Luck Scrap.",
};

export default function SellToUsPage() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <Header />
      <TextIntro title="SELLING TO US">
        <h3 className="text-xl font-semibold">
          At Good Luck Scrap we take ferrous, non-ferrous, and other common scrap materials.
        </h3>
        <p>Selling to us is simple. We coordinate clear pickup, practical weighing, and fast quote handling.</p>
        <ul className="mx-auto max-w-xl list-inside list-disc text-left">
          <li>Part of a sustainable process</li>
          <li>Suitable for workshops, contractors, yards, and factories</li>
          <li>Collection support for mixed and sorted scrap loads</li>
        </ul>
        <h2 className="text-xl font-semibold lg:text-2xl">
          Fully coordinated buying and selling support. Get in touch today for more information.
        </h2>
      </TextIntro>
      <Benefits />
      <OverlayImageGrid items={recyclingImages} />
      <InfoCta text="Need more information about us?" />
      <Footer />
    </main>
  );
}
