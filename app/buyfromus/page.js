import { Benefits, buyImages, OverlayImageGrid, TextIntro } from "@/components/PageSections";
import { Footer, Header, InfoCta } from "@/components/SiteChrome";

export const metadata = {
  title: "Buy From Us | Good Luck Scrap",
  description: "Buy processed scrap materials from Good Luck Scrap.",
};

export default function BuyFromUsPage() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <Header />
      <TextIntro title="BUYING FROM US">
        <h3 className="text-xl font-semibold">At Good Luck Scrap we supply material to match customer requirements.</h3>
        <p>
          We handle ferrous and non-ferrous material categories for customers looking for sorted scrap and recycled metal products.
        </p>
        <p>Check out our products for more information.</p>
        <h2 className="text-xl font-semibold lg:text-2xl">
          Fully coordinated buying and selling support. Get in touch today for more information.
        </h2>
      </TextIntro>
      <Benefits />
      <OverlayImageGrid items={buyImages} />
      <InfoCta text="Need more information about us?" />
      <Footer />
    </main>
  );
}
