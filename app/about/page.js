import { Benefits, MissionVision, TextIntro } from "@/components/PageSections";
import { Footer, Header, InfoCta } from "@/components/SiteChrome";

export const metadata = {
  title: "About | Good Luck Scrap",
  description: "About Good Luck Scrap metal processing and recycling services.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <Header active="ABOUT" />
      <TextIntro title="THE SPECIALISTS IN METAL PROCESSING">
        <p>
          Good Luck Scrap specialises in the granulation, shredding, sorting, and separation of scrap metal for commercial and industrial customers.
        </p>
        <p>
          Our process is built around clear collection coordination, practical weighing support, and reliable communication for recurring scrap needs.
        </p>
        <h3 className="text-xl font-semibold">Top scrap support in Saudi Arabia</h3>
        <p>
          We work with cable, aluminium, ferrous, and non-ferrous material and help customers move scrap into a cleaner recycling stream.
        </p>
      </TextIntro>
      <Benefits />
      <MissionVision />
      <InfoCta text="Need more information about us?" />
      <Footer />
    </main>
  );
}
