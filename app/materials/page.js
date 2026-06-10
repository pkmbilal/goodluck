import Image from "next/image";
import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink, SectionIntro } from "@/components/home/SharedUi";
import { contact, getPhoneHref, getWhatsappHref, materials } from "@/components/home/homeData";

export const metadata = {
  title: "Materials | Good Luck Scrap",
  description:
    "Browse the scrap and surplus materials Good Luck Scrap handles, including copper, aluminium, stainless steel, brass, cables, pipes, panels, containers, zinc, and billets.",
};

const materialCatalog = [
  {
    title: "Copper",
    image: materials[0][1],
    type: "Non-ferrous",
    summary: "Often requested in clean cable, pipe, and fabrication-offcut form.",
  },
  {
    title: "Aluminium",
    image: materials[1][1],
    type: "Non-ferrous",
    summary: "Common from profiles, frames, sheet, and extrusion scrap.",
  },
  {
    title: "Stainless steel",
    image: materials[2][1],
    type: "High-value alloy",
    summary: "Useful when the load is sorted by grade or kept free of contamination.",
  },
  {
    title: "Brass scrap",
    image: materials[3][1],
    type: "Non-ferrous",
    summary: "Typical in plumbing parts, fittings, valves, and mixed workshop offcuts.",
  },
  {
    title: "Cables",
    image: materials[4][1],
    type: "Mixed load",
    summary: "Can include insulated cable, stripped cable, and bundled wire.",
  },
  {
    title: "CS pipes",
    image: materials[5][1],
    type: "Ferrous",
    summary: "Carbon steel pipe, tube, and structural offcuts from site work.",
  },
  {
    title: "Panel boards",
    image: materials[6][1],
    type: "Mixed load",
    summary: "Electrical panels and enclosures are usually handled case by case.",
  },
  {
    title: "Containers",
    image: materials[7][1],
    type: "Industrial surplus",
    summary: "Suitable for yard clear-outs, equipment shells, and mixed surplus loads.",
  },
  {
    title: "Zinc",
    image: materials[8][1],
    type: "Non-ferrous",
    summary: "Often found in sheet, coated scrap, fittings, and industrial remnants.",
  },
  {
    title: "Billets",
    image: materials[9][1],
    type: "Stock material",
    summary: "Useful when surplus metal stock, remainders, or cut lengths are available.",
  },
];

const valueFactors = [
  "Material purity and whether the load is mixed or sorted.",
  "Quantity, because larger clean loads are easier to price consistently.",
  "Condition, including contamination, corrosion, coatings, and attachments.",
  "Site access and loading requirements such as forklifts, cranes, or manual handling.",
  "Distance and timing, especially when a fast site visit is needed.",
];

const photoChecklist = [
  "Take a wide shot of the full load.",
  "Add close-ups so the material type is visible.",
  "Show any mixed items, contamination, or attachments.",
  "Include the site entrance or loading area if access matters.",
];

const prepSteps = [
  ["01", "Identify the material", "Use the catalog to match the closest material type before sending details."],
  ["02", "Separate what you can", "Clean, sorted material is easier to review than a fully mixed pile."],
  ["03", "Photograph the load", "A few clear images are enough for the first review in most cases."],
  ["04", "Send location and quantity", "Share the site, rough volume, and timing so the response is practical."],
];

export default function MaterialsPage() {
  const whatsappHref = getWhatsappHref();
  const phoneHref = getPhoneHref();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <section
        id="main-content"
        className="relative isolate min-h-[84dvh] overflow-hidden px-4 pb-12 pt-10 text-white md:min-h-[100dvh] md:px-8 md:pb-14 md:pt-32"
      >
        <Image
          src="/assets/images/generated-why-choose-scrap-yard.png"
          alt="Industrial scrap yard with metal stacks and equipment"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-zinc-950/52" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,21,19,0.86),rgba(23,21,19,0.42)_52%,rgba(23,21,19,0.16)),radial-gradient(circle_at_16%_20%,rgba(216,197,139,0.24),transparent_28%)]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>Materials</Badge>
            <h1 className="max-w-5xl text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.5rem]">
              Scrap materials catalog for business loads and surplus stock.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              Use this page to identify the material type first, then send photos and site details for a faster quote review.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Request quote</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">10 material types</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Mixed loads accepted</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Photo-based review</span>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="px-4 pb-20 pt-10 md:px-8 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>Catalog</Badge>
            <h2 className="section-title text-zinc-950">
              Material types
              <br />
              we commonly review.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              Each category gives you a quick read on what the material is usually associated with and how it is typically handled.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {materialCatalog.map((material, index) => (
              <article key={material.title} className="group overflow-hidden rounded-[1.8rem] bg-[#171513]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={material.image}
                    alt={`${material.title} material`}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-78 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,19,0.1),rgba(23,21,19,0.88))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{material.title}</h3>
                    <p className="mt-3 text-sm font-semibold text-stone-300">{material.type}</p>
                    <p className="mt-4 text-sm leading-6 text-stone-200">{material.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="value" className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>Value factors</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-6xl">
                What changes
                <br />
                the quote.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
                Materials are not priced only by name. Condition, cleanliness, quantity, and how the load is staged all affect the discussion.
              </p>

              <ul className="mt-8 grid gap-3">
                {valueFactors.map((item) => (
                  <li key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-stone-200">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <Badge>Photo guide</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                What to send before
                <br />
                asking for a quote.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                A good first message helps us identify the material and decide whether it needs a quick estimate, a site visit, or a pickup plan.
              </p>

              <ul className="mt-8 grid gap-3">
                {photoChecklist.map((item) => (
                  <li key={item} className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-3 text-sm font-semibold text-zinc-800">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <CtaLink href={whatsappHref}>Send photos</CtaLink>
                <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center">
                  <span>{contact.phoneNumber}</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="sorting" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>How to prepare</Badge>
            <h2 className="section-title text-zinc-950">
              Simple preparation
              <br />
              for a cleaner review.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              The steps below keep the first review practical and reduce back-and-forth when the load is mixed or spread across a site.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {prepSteps.map(([number, title, text]) => (
              <article key={number} className="rounded-[1.6rem] bg-[#ede5d9] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6d5b2f]">{number}</p>
                <h3 className="mt-9 text-2xl font-semibold tracking-tight text-zinc-950">{title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#d8c58b] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-12 lg:p-16">
            <Badge>Final step</Badge>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-950 md:text-6xl">
              Send the material type and photos. We will take it from there.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
              The fastest response comes from a short WhatsApp message with location, quantity, and a clear photo of the material.
            </p>
          </div>

          <div className="bg-[#f9f5ee] p-7 md:p-12 lg:p-16">
            <p className="text-xl font-semibold tracking-tight text-zinc-950">Quote by WhatsApp</p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Include the load details and access conditions so we can respond with the right next step.
            </p>
            <div className="mt-8 grid gap-3">
              <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
              <a href={`mailto:${contact.email}`} className="luxury-button luxury-button-secondary justify-center">
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
