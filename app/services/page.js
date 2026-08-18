import Image from "next/image";
import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink, SectionIntro } from "@/components/home/SharedUi";
import { JsonLd, pageMetadata, servicesJsonLd } from "../seo";
import {
  contact,
  getPhoneHref,
  getWhatsappHref,
  industries,
  materials,
  processSteps,
  services,
  trustItems,
} from "@/components/home/homeData";

export const metadata = pageMetadata({
  title: "Scrap Metal Buying and Collection Services",
  description:
    "Explore GoodLuck Scrap services for scrap metal buying, industrial scrap collection, metal recycling, demolition scrap clearance, and surplus handling in Saudi Arabia.",
  path: "/services",
});

const serviceCards = [
  {
    ...services[0],
    points: ["Ferrous and non-ferrous scrap", "Best for workshops, factories, and mixed yard loads"],
  },
  {
    ...services[1],
    points: ["Sorting and recycling support", "Useful when material needs a cleaner recovery path"],
  },
  {
    ...services[2],
    points: ["Site visits and loading coordination", "Built for recurring pickup requests"],
  },
  {
    ...services[3],
    points: ["Demolition and strip-out recovery", "Good for pipes, panels, cables, and structural metal"],
  },
  {
    ...services[4],
    points: ["Surplus stock and usable material", "Helpful for inventory clear-out and resale support"],
  },
];

const quoteChecklist = [
  "Material type and condition",
  "Photos of the load if available",
  "Pickup location and access details",
  "Approximate quantity or weight",
  "Timing for inspection or collection",
];

export default function ServicesPage() {
  const whatsappHref = getWhatsappHref();
  const phoneHref = getPhoneHref();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <JsonLd data={servicesJsonLd(services)} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <section id="main-content" className="relative isolate min-h-[84dvh] overflow-hidden px-4 pb-12 pt-10 text-white md:min-h-[100dvh] md:px-8 md:pb-14 md:pt-32">
        <Image
          src="/assets/images/hero-vibrant-scrap-yard.png"
          alt="Industrial scrap yard with metal stock and loading equipment"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-zinc-950/54" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,21,19,0.84),rgba(23,21,19,0.5)_50%,rgba(23,21,19,0.24)),radial-gradient(circle_at_15%_18%,rgba(216,197,139,0.22),transparent_30%)]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>Services</Badge>
            <h1 className="max-w-5xl text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.5rem] lg:text-[6rem] xl:text-[6.6rem]">
              Scrap buying, collection, and clearance built for working sites.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              GoodLuck Scrap helps businesses move metal, surplus, and demolition material through a clear path for inspection, pickup, sorting, and recycling.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Request quote</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Mixed loads</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Pickup planning</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Industrial surplus</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-20 pt-10 md:px-8 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>What we do</Badge>
            <h2 className="section-title text-zinc-950">
              Services shaped around
              <br />
              actual site conditions.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              Each service is set up to keep the next step obvious: send details, plan access, inspect the load, and move the material into the right handling path.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {serviceCards.map((service, index) => (
              <article
                key={service.title}
                className={`group relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-zinc-950 ${
                  index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} service`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-74 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-88"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.06),rgba(24,24,27,0.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">{service.text}</p>

                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-stone-200">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c58b]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <CtaLink href={whatsappHref} variant="secondary">
                      Ask about this service
                    </CtaLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="bg-[#171513] px-4 py-24 text-stone-50 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <SectionIntro
                light
                eyebrow="Accepted loads"
                title={
                  <>
                    Metals and surplus
                    <br />
                    we commonly handle.
                  </>
                }
                text="Use this list as a reference when sending photos. If the load is mixed, that is usually fine as long as the material type and access details are clear."
              />

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
                {materials.map(([title, image]) => (
                  <article key={title} className="group relative aspect-square overflow-hidden rounded-[1.35rem] bg-zinc-900">
                    <Image
                      src={image}
                      alt={`${title} scrap material`}
                      fill
                      sizes="(min-width: 768px) 20vw, 50vw"
                      className="object-cover opacity-78 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,19,0.04),rgba(23,21,19,0.78))]" />
                    <h3 className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white md:text-base">{title}</h3>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-[#f9f5ee] p-7 text-zinc-950 md:p-10">
              <Badge>Send details</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                The fastest quote comes from a clear message.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                Include the basics and we can narrow the handling path quickly before any pickup or inspection is scheduled.
              </p>

              <ul className="mt-8 grid gap-3">
                {quoteChecklist.map((item) => (
                  <li key={item} className="rounded-[1.2rem] border border-[#6d5b2f]/12 bg-white/68 px-4 py-3 text-sm font-semibold text-zinc-800">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <CtaLink href={whatsappHref}>Share photos</CtaLink>
                <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center">
                  <span>{contact.phoneNumber}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>How it works</Badge>
            <h2 className="section-title text-zinc-950">
              A short process,
              <br />
              built for fast decisions.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              The request flow stays simple so site teams can send details, get reviewed, and move on without a long back-and-forth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="rounded-[1.6rem] bg-[#ede5d9] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6d5b2f]">{number}</p>
                <h3 className="mt-9 text-2xl font-semibold tracking-tight text-zinc-950">{title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>Who we serve</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-6xl">
                Service coverage
                <br />
                for industrial teams.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
                The page is designed for businesses that need practical handling of scrap, metal stock, and clearance work on active sites.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-white/14 bg-white/6 px-4 py-2">
                    {industry}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <Badge>Why us</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                The service needs to be clear before it is fast.
              </h3>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {trustItems.map(([title, text]) => (
                  <div key={title} className="rounded-[1.4rem] bg-[#f9f5ee] p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d5b2f]">{title}</p>
                    <p className="mt-4 text-sm leading-7 text-zinc-600">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#d8c58b] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-12 lg:p-16">
            <Badge>Final step</Badge>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-950 md:text-6xl">
              Send the details. We will respond with the next step.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
              The quickest way to get moving is a WhatsApp message with photos, location, and the material type.
            </p>
          </div>

          <div className="bg-[#f9f5ee] p-7 md:p-12 lg:p-16">
            <p className="text-xl font-semibold tracking-tight text-zinc-950">Quote by WhatsApp</p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Include the load details, access conditions, and approximate quantity so we can respond with the right next step.
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
