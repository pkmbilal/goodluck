import Image from "next/image";

const phoneNumber = "+966 50 000 0000";
const email = "sales@goodlucksa.com";
const whatsappNumber = "966500000000";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Good Luck Scrap, I want a scrap metal quote.",
)}`;

const navItems = [
  ["Services", "#services"],
  ["Materials", "#materials"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

const trustItems = [
  ["Rapid coordination", "Pickup planning for workshops, yards, factories, and active project sites."],
  ["Clear weighing", "Material is reviewed by type so the quote discussion stays practical."],
  ["Mixed metal loads", "Support for ferrous, non-ferrous, cable, pipe, panel, and surplus material."],
  ["Saudi industrial focus", "Built for contractors, warehouses, demolition teams, and commercial operators."],
];

const services = [
  {
    title: "Scrap metal buying",
    text: "Direct buying support for steel, copper, aluminium, brass, zinc, cables, and common industrial scrap.",
    image: "/assets/images/service-scrap-metal-buying.png",
  },
  {
    title: "Metal recycling",
    text: "Sorting and handling support that moves recoverable metal into cleaner recycling and reuse channels.",
    image: "/assets/images/service-metal-recycling.png",
  },
  {
    title: "Site collection",
    text: "Collection coordination for workshops, warehouses, construction sites, and recurring scrap loads.",
    image: "/assets/images/service-site-collection.png",
  },
  {
    title: "Demolition scrap clearance",
    text: "Recovery support for steel, pipes, panels, cables, and reusable metal from demolition projects.",
    image: "/assets/images/service-demolition-clearance.png",
  },
  {
    title: "Industrial surplus",
    text: "Buying and selling support for excess stock, yard clearance, and usable surplus material.",
    image: "/assets/images/service-industrial-surplus.png",
  },
];

const materials = [
  ["Copper", "/assets/images/Copper.webp"],
  ["Aluminium", "/assets/images/Aluminium.webp"],
  ["Stainless steel", "/assets/images/Stainless-Steel.webp"],
  ["Brass scrap", "/assets/images/Brass-Scrap.webp"],
  ["Cables", "/assets/images/Cables.webp"],
  ["CS pipes", "/assets/images/cs-pipes.webp"],
  ["Panel boards", "/assets/images/Panel-Boards.webp"],
  ["Containers", "/assets/images/Containers.webp"],
  ["Zinc", "/assets/images/Zinc.webp"],
  ["Billets", "/assets/images/Billets.webp"],
];

const processSteps = [
  ["01", "Share details", "Send the material type, photos if available, site location, and estimated quantity."],
  ["02", "Plan pickup", "We coordinate inspection, access, loading needs, and collection timing."],
  ["03", "Sort and weigh", "Material is reviewed by category so the quote conversation is clear."],
  ["04", "Confirm value", "We agree the next step for payment, pickup, or recurring material supply."],
];

const advantages = [
  "Direct communication for time-sensitive clearance work.",
  "Practical handling for both mixed and sorted metal loads.",
  "Experience with factories, contractors, warehouses, and demolition sites.",
  "A cleaner path for reusable metal resources and industrial surplus.",
];

const industries = [
  "Contractors",
  "Factories",
  "Workshops",
  "Warehouses",
  "Demolition companies",
  "Construction sites",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="m5 12.6 4.1 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

function Badge({ children, light = false }) {
  return <p className={light ? "badge badge-light" : "badge"}>{children}</p>;
}

function CtaLink({ href, children, variant = "primary" }) {
  return (
    <a href={href} className={variant === "primary" ? "luxury-button luxury-button-primary" : "luxury-button luxury-button-secondary"}>
      <span>{children}</span>
      <span className="luxury-button-icon">
        <ArrowIcon />
      </span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <Badge light={light}>{eyebrow}</Badge>
      <h2 className={light ? "section-title text-stone-50" : "section-title text-zinc-950"}>{title}</h2>
      {text ? <p className={light ? "section-copy text-stone-300" : "section-copy text-zinc-600"}>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:pt-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-[#f5f0e7]/86 px-4 py-3 shadow-[0_24px_80px_-58px_rgba(24,24,27,0.72)] backdrop-blur-xl md:px-5">
          <a href="#" className="group inline-flex items-center gap-3" aria-label="Good Luck Scrap home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-xs font-bold text-[#f5f0e7] transition duration-500 ease-luxury group-hover:bg-[#6d5b2f]">
              GLS
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-900 sm:block">Good Luck Scrap</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full bg-white/45 p-1 text-sm font-semibold text-zinc-600 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 transition duration-500 ease-luxury hover:bg-zinc-950 hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${phoneNumber.replaceAll(" ", "")}`} className="hidden text-sm font-bold text-zinc-900 transition duration-500 ease-luxury hover:text-[#6d5b2f] md:block">
              {phoneNumber}
            </a>
            <a href={whatsappHref} className="nav-quote">
              Quote
              <span className="nav-quote-dot" />
            </a>
          </div>
        </div>
      </header>

      <section id="main-content" className="relative isolate min-h-[100dvh] overflow-hidden px-4 pb-10 pt-28 text-white md:px-8 md:pb-14 md:pt-32">
        <Image
          src="/assets/images/hero-vibrant-scrap-yard.png"
          alt="Industrial scrap yard with excavator handling metal"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-zinc-950/48" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(216,197,139,0.22),transparent_32%),linear-gradient(90deg,rgba(23,21,19,0.8),rgba(23,21,19,0.42)_46%,rgba(23,21,19,0.2))]" />
        <div className="mx-auto flex min-h-[calc(100dvh-10.5rem)] max-w-7xl items-center">
          <div className="max-w-5xl">
            <Badge light>Scrap buying and recycling</Badge>
            <h1 className="max-w-5xl text-[3.35rem] font-semibold leading-[0.88] tracking-[-0.035em] text-white sm:text-[4.6rem] lg:text-[6.2rem] xl:text-[6.8rem]">
              Industrial scrap, handled with discipline.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              Good Luck Scrap supports Saudi businesses with buying, selling, collection, sorting, and recycling for ferrous and non-ferrous metal.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Request quote</CtaLink>
              <a href={`tel:${phoneNumber.replaceAll(" ", "")}`} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 text-stone-50 md:grid-cols-4">
          {trustItems.map(([title, text]) => (
            <article key={title} className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-8 md:last:border-r-0">
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="Services"
              title="A refined service flow for demanding sites."
              text="The page now feels less like a product grid and more like a professional industrial partner: fewer blocks, stronger hierarchy, and clearer conversion points."
            />
            <p className="max-w-xl text-base leading-7 text-zinc-600 lg:justify-self-end">
              Every section is designed to help a buyer quickly understand what can be collected, how the process works, and how to start the quote conversation.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-zinc-950 ${
                  index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} material`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-72 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-86"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.04),rgba(24,24,27,0.86))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="bg-[#171513] px-4 py-24 text-stone-50 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionIntro
              eyebrow="Materials"
              title="High-value metals and industrial surplus, presented clearly."
              text="The materials section keeps the visual proof customers expect, but with darker finishing and quieter labels."
              light
            />
            <p className="max-w-2xl text-base leading-7 text-stone-400 lg:justify-self-end">
              Acceptance depends on material condition, quantity, location, and loading requirements. Send photos and site details for the fastest response.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {materials.map(([title, image], index) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-[1.35rem] bg-zinc-900 ${
                  index === 0 || index === 7 ? "md:row-span-2 md:aspect-auto" : "aspect-square"
                }`}
              >
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
      </section>

      <section id="process" className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionIntro
              eyebrow="How it works"
              title="From first message to cleared material."
              text="The process is intentionally simple so a customer can act quickly from mobile."
            />
            <CtaLink href={whatsappHref}>Start on WhatsApp</CtaLink>
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

      <section className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-[#d8cec0] p-2">
            <div className="relative min-h-[32rem] overflow-hidden rounded-[1.75rem] bg-zinc-950">
              <Image
                src="/assets/images/demolition2.webp"
                alt="Recoverable metal and demolition scrap at an industrial site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-82"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.02),rgba(24,24,27,0.72))]" />
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="Professional handling when scrap is slowing down the work."
              text="The experience should feel calm, direct, and reliable. No clutter. No exaggerated promises. Just a strong industrial service offer."
            />
            <div className="mt-9 grid gap-4">
              {advantages.map((item) => (
                <div key={item} className="flex gap-4 rounded-[1.25rem] bg-[#ede5d9] p-5">
                  <span className="mt-1 text-[#6d5b2f]">
                    <CheckIcon />
                  </span>
                  <p className="text-base leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-zinc-950 p-6 text-stone-50 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="Industries served"
              title="Built for places where material needs to move."
              text="Good Luck Scrap supports businesses with real site constraints: access, timing, loading, sorting, and recurring material flow."
              light
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry} className="rounded-[1.25rem] bg-white/[0.06] p-5 text-sm font-semibold text-stone-100 ring-1 ring-white/10">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#d8c58b] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-12 lg:p-16">
            <Badge>Quick quote</Badge>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-950 md:text-6xl">
              Send the material details. We will respond with the next step.
            </h2>
          </div>
          <div className="bg-[#f9f5ee] p-7 md:p-12 lg:p-16">
            <p className="text-xl font-semibold tracking-tight text-zinc-950">Quote by WhatsApp</p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Include material type, pickup location, photos if available, and approximate quantity.
            </p>
            <div className="mt-8 grid gap-3">
              <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
              <a href={`mailto:${email}`} className="luxury-button luxury-button-secondary justify-center">
                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#171513] px-4 text-stone-50 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 py-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-lg font-semibold">Good Luck Scrap</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-stone-400">
              Scrap metal buying, recycling, collection, and industrial surplus support for Saudi businesses.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-stone-300 md:text-right">
            <a href={`tel:${phoneNumber.replaceAll(" ", "")}`} className="transition duration-500 ease-luxury hover:text-white">
              {phoneNumber}
            </a>
            <a href={`mailto:${email}`} className="transition duration-500 ease-luxury hover:text-white">
              {email}
            </a>
            <p>Saudi Arabia</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-stone-500">
          Copyright 2026 Good Luck Scrap. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
