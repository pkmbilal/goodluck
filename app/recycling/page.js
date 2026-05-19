import { BlueTileGrid, OverlayImageGrid, recyclingImages, TextIntro } from "@/components/PageSections";
import { Footer, Header, InfoCta } from "@/components/SiteChrome";

export const metadata = {
  title: "Metal Recycling | Good Luck Scrap",
  description: "Scrap metal recycling and collection services by Good Luck Scrap.",
};

const recyclingItems = [
  "LIGHT IRON",
  "STEEL",
  "WEEE STEEL",
  "DOMESTIC APPLIANCES",
  "PLATE & GRINDER",
  "MIXED METAL SCRAP",
  "CAST IRON",
  "WROUGHT IRON",
  "DEMOLITION STEEL",
  "ENGINEERING STEEL",
  "COPPER",
  "BRASS",
  "ALUMINIUM",
  "LEAD",
  "SS SQUARE BARS",
  "ANGLES",
  "C CHANNEL",
  "FERROUS SCRAP",
  "SS SHEETS",
  "BRASS",
];

const serviceNotes = [
  ["SCRAP METAL RECYCLING", "We recycle ferrous and non-ferrous metals for customers across industrial and commercial sites."],
  ["METAL COLLECTION", "A practical collection process helps customers clear scrap with flexible scheduling and clear coordination."],
  ["WEEE RECYCLING", "Electrical and equipment scrap can be separated and prepared for responsible recycling routes."],
  ["METAL ANALYSIS", "Material grading and segregation support helps customers understand mixed metal loads before collection."],
];

export default function RecyclingPage() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <Header active="METAL RECYCLING" />
      <TextIntro title="SCRAP METAL RECYCLING SERVICES IN SAUDI ARABIA">
        <p>
          Good Luck Scrap provides metal recycling support for businesses that need ferrous and non-ferrous scrap collected, sorted, and moved efficiently.
        </p>
      </TextIntro>
      <BlueTileGrid items={recyclingItems} linked={false} />
      <section>
        <div className="grid gap-5 px-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceNotes.map(([title, text]) => (
            <article key={title} className="rounded-sm bg-slate-100 p-5">
              <h2 className="text-2xl font-bold text-primary">{title}</h2>
              <p className="text-lg">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <OverlayImageGrid items={recyclingImages} />
      <InfoCta text="Need more information about our services?" />
      <Footer />
    </main>
  );
}
