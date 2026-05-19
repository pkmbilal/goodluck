import Image from "next/image";
import { BlueTileGrid, TextIntro } from "@/components/PageSections";
import { Footer, Header, InfoCta } from "@/components/SiteChrome";

export const metadata = {
  title: "Demolition | Good Luck Scrap",
  description: "Demolition waste recycling and scrap recovery support by Good Luck Scrap.",
};

const demolitionItems = [
  "AIRPORT DEMOLITION",
  "BRIDGE DEMOLITION",
  "CHEMICAL PLANT DEMOLITION",
  "CITY CENTRE DEMOLITION",
  "INDUSTRIAL DEMOLITION",
  "NUCLEAR DEMOLITION",
  "PHARMACEUTICAL DEMOLITION",
  "PUBLIC SECTOR DEMOLITION",
  "REFINERY DEMOLITION",
  "SCHOOL DEMOLITION",
  "STEEL FOUNDRY DEMOLITION",
  "TOWER BLOCK DEMOLITION",
];

export default function DemolitionPage() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <Header active="DEMOLISHING" />
      <TextIntro title="DEMOLITION SERVICES IN SAUDI ARABIA">
        <p>
          Good Luck Scrap supports demolition projects with scrap recovery, material separation, and recycling coordination for metal and site waste.
        </p>
      </TextIntro>
      <BlueTileGrid items={demolitionItems} linked={false} />

      <section className="px-8 pb-8">
        <div className="grid overflow-hidden rounded-sm bg-slate-100 lg:grid-cols-3 lg:rounded-l-3xl">
          <div className="relative min-h-[300px]">
            <Image src="/assets/images/demolition1.webp" alt="demolition waste recycling" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover lg:rounded-l-3xl" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:col-span-2">
            <h2 className="mb-2 text-2xl font-bold text-secondary sm:text-3xl">DEMOLITION WASTE RECYCLING</h2>
            <p className="text-xl">
              Once a building is dismantled or demolished, recyclable metal and reusable materials can be separated, cleared, and routed for responsible reuse.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-8">
        <div className="grid overflow-hidden rounded-sm bg-slate-100 lg:grid-cols-3 lg:rounded-r-3xl">
          <div className="flex flex-col justify-center p-8 lg:col-span-2">
            <h2 className="mb-2 text-2xl font-bold text-secondary sm:text-3xl">DEMOLITION COSTS</h2>
            <p className="text-xl">
              Good planning, clean sorting, and efficient pickup coordination help customers control costs and recover value from demolition scrap.
            </p>
          </div>
          <div className="relative min-h-[300px]">
            <Image src="/assets/images/demolition2.webp" alt="demolition cost planning" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover lg:rounded-r-3xl" />
          </div>
        </div>
      </section>

      <InfoCta text="Need more information about our services?" />
      <Footer />
    </main>
  );
}
