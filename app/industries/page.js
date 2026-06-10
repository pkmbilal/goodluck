import Image from "next/image";
import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink, SectionIntro } from "@/components/home/SharedUi";
import { contact, getPhoneHref, getWhatsappHref, industries } from "@/components/home/homeData";

export const metadata = {
  title: "Industries | Good Luck Scrap",
  description:
    "See the industries Good Luck Scrap serves, including contractors, factories, workshops, warehouses, demolition companies, and construction sites.",
};

const industryDetails = [
  {
    name: "Contractors",
    image: "/assets/images/generated-container-scrap.png",
    needs: "Fast clearance, mixed-load pickup, and predictable site access.",
    materials: "Steel offcuts, cable, pipe, panels, and surplus stock from active jobs.",
  },
  {
    name: "Factories",
    image: "/assets/images/generated-billets-scrap.png",
    needs: "Repeat material movement, sorted handling, and coordinated loading.",
    materials: "Production scrap, offcuts, repair material, and worn equipment parts.",
  },
  {
    name: "Workshops",
    image: "/assets/images/generated-copper-scrap.png",
    needs: "Small to mid-size loads that can be reviewed quickly and collected cleanly.",
    materials: "Copper, brass, aluminium, cable, and general fabrication leftovers.",
  },
  {
    name: "Warehouses",
    image: "/assets/images/generated-aluminium-scrap.png",
    needs: "Yard clearance, stored surplus removal, and minimal interruption to operations.",
    materials: "Palletized metal, racking parts, packaging material, and surplus stock.",
  },
  {
    name: "Demolition companies",
    image: "/assets/images/generated-cs-pipes-scrap.png",
    needs: "High-volume removal, access planning, and recovery from strip-out work.",
    materials: "Pipes, beams, panels, cable, fencing, frames, and structural scrap.",
  },
  {
    name: "Construction sites",
    image: "/assets/images/generated-why-choose-scrap-yard.png",
    needs: "Fast movement of scrap as the site changes phase and trades rotate out.",
    materials: "Cut lengths, packaging steel, offcuts, scaffold parts, and surplus metal.",
  },
];

const siteNeeds = [
  "Clear access for trucks, lifting equipment, or manual loading where needed.",
  "Photos that show the type of material, quantity, and whether the load is mixed.",
  "Simple timing so the inspection or pickup fits the site schedule.",
  "A single point of contact for the message, quote, and collection follow-up.",
];

const flowSteps = [
  ["01", "Identify the site type", "Choose the closest industry so the service fit is clear from the start."],
  ["02", "Describe the load", "Send the material type, quantity, and any access constraints."],
  ["03", "Coordinate the visit", "We align pickup, inspection, or collection with site operations."],
  ["04", "Confirm the next step", "Set the plan for quote, collection, or recurring site handling."],
];

export default function IndustriesPage() {
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
          src="/assets/images/service-site-collection.png"
          alt="Scrap material collection at an industrial site"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-zinc-950/54" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,21,19,0.84),rgba(23,21,19,0.44)_52%,rgba(23,21,19,0.18)),radial-gradient(circle_at_15%_18%,rgba(216,197,139,0.22),transparent_30%)]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>Industries</Badge>
            <h1 className="max-w-5xl text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.5rem]">
              Built around the sites where scrap needs to move.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              Good Luck Scrap works with businesses that need practical handling, predictable collection, and clear communication around scrap, surplus, and demolition material.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Request quote</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Contractors</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Factories</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Construction sites</span>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="px-4 py-16 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>Coverage</Badge>
            <h2 className="section-title text-zinc-950">
              The business types
              <br />
              we serve most often.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              The page is organized by site type so a visitor can quickly see whether their operation fits the way we work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((industry) => (
              <article key={industry.name} className="group relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-zinc-950">
                <Image
                  src={industry.image}
                  alt={`${industry.name} industrial scrap context`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-74 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-88"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.06),rgba(24,24,27,0.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">{industry.name}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{industry.needs}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">{industry.materials}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="px-4 py-24 md:px-8 md:pt-16 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>What matters</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-6xl">
                Every site needs the same basics.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
                No matter the industry, the quote conversation gets easier when the material, access, and timing are clear.
              </p>

              <ul className="mt-8 grid gap-3">
                {siteNeeds.map((item) => (
                  <li key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-stone-200">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <Badge>Flow</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                How the request is usually handled.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                The sequence below is kept short so site teams can act without a long back-and-forth.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {flowSteps.map(([number, title, text]) => (
                  <article key={number} className="rounded-[1.4rem] bg-[#f9f5ee] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6d5b2f]">{number}</p>
                    <h4 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">{title}</h4>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <CtaLink href={whatsappHref}>Start a quote</CtaLink>
                <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center">
                  <span>{contact.phoneNumber}</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="audience" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <SectionIntro
                eyebrow="Audience"
                title={
                  <>
                    A page shaped
                    <br />
                    around your customers.
                  </>
                }
                text="This page is useful when the visitor is not asking what you sell, but whether you can handle their site type."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div key={industry} className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-3 text-sm font-semibold text-zinc-800">
                    {industry}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>Final step</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                Send the site type and photos, then we will take it from there.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">
                The fastest response comes from a short WhatsApp message with the material type, location, and a rough quantity.
              </p>
              <div className="mt-8 grid gap-3">
                <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
                <a href={`mailto:${contact.email}`} className="luxury-button luxury-button-secondary justify-center">
                  <span>{contact.email}</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
