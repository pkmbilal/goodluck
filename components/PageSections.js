import Image from "next/image";
import { InfoCta, whatsappHref } from "@/components/SiteChrome";

export const productCards = [
  ["GRANULAR COPPER", "/assets/images/Granular-Copper.webp", "granular copper"],
  ["STAINLESS STEEL", "/assets/images/Stainless-Steel.webp", "stainless steel"],
  ["CS PIPES", "/assets/images/cs-pipes.webp", "cs pipes"],
  ["CONTAINERS", "/assets/images/Containers.webp", "containers"],
  ["BILLETS", "/assets/images/Billets.webp", "billets"],
  ["CABLES", "/assets/images/Cables.webp", "cables"],
  ["PANEL BOARDS", "/assets/images/Panel-Boards.webp", "panel boards"],
  ["COPPER BERRY CABLE", "/assets/images/Copper-Berry-Cable.webp", "copper berry cable"],
  ["BRASS SCRAP", "/assets/images/Brass-Scrap.webp", "brass scrap"],
  ["ALUMINIUM SCRAP", "/assets/images/Aluminium-Scrap.webp", "aluminium scrap"],
];

export const recyclingImages = [
  ["ADJUSTABLE BASE JACK", "/assets/images/Adjustable-Base-Jack.webp", "adjustable base jack"],
  ["ALUMINIUM LADDERS", "/assets/images/Aluminium-Ladders.webp", "aluminium ladders"],
  ["ALUMINIUM SCRAP", "/assets/images/Aluminium-Scrap.webp", "aluminium scrap"],
  ["BIG PIPES", "/assets/images/Big-Pipes.webp", "big pipes"],
  ["BILLETS", "/assets/images/Billets.webp", "billets"],
  ["BOLTS & SCREWS", "/assets/images/Bolts-n-Screws.webp", "bolt and screws"],
  ["BRASS SCRAP", "/assets/images/Brass-Scrap.webp", "brass scrap"],
  ["CABLES", "/assets/images/Cables.webp", "cables"],
  ["CLAMPS", "/assets/images/Clamps.webp", "clamps"],
  ["CONTAINERS", "/assets/images/Containers.webp", "containers"],
  ["COPPER BERRY CABLE", "/assets/images/Copper-Berry-Cable.webp", "copper berry cable"],
  ["CS PIPES", "/assets/images/cs-pipes.webp", "cs pipes"],
  ["ELBOWS", "/assets/images/Elbows.webp", "elbows"],
  ["FENCE GATE", "/assets/images/Fence-Gate.webp", "fence gate"],
  ["FENCE", "/assets/images/Fence.webp", "fence"],
];

export const buyImages = [
  ["ALLOY STEEL", "/assets/images/Alloy-Steel.webp", "alloy steel"],
  ["ALUMINIUM", "/assets/images/Aluminium.webp", "aluminium"],
  ["BRASS", "/assets/images/Brass.webp", "brass"],
  ["BRONZ", "/assets/images/Bronz.webp", "bronz"],
  ["COPPER", "/assets/images/Copper.webp", "copper"],
  ["GALVANIZED STEEL", "/assets/images/Galvanized-Steel.webp", "galvanized steel"],
  ["STAINLESS STEEL", "/assets/images/Stainless-Steel.webp", "stainless steel"],
  ["TIN", "/assets/images/Tin.webp", "tin"],
  ["TOOL STEEL", "/assets/images/Tool-Steel.webp", "tool steel"],
  ["ZINC", "/assets/images/Zinc.webp", "zinc"],
];

export function TextIntro({ title, children }) {
  return (
    <section>
      <div className="px-8 pb-4 pt-8 text-center xl:px-40">
        <h1 className="mb-4 text-4xl font-bold text-secondary">{title}</h1>
        <div className="space-y-2 text-lg">{children}</div>
      </div>
    </section>
  );
}

export function BlueTileGrid({ items, linked = true }) {
  return (
    <section>
      <div className="grid gap-5 px-8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const className = "flex min-h-20 items-center justify-center rounded-sm bg-primary px-5 py-4 text-center text-xl font-bold text-white";

          return linked ? (
            <a key={item} href={whatsappHref} className={`${className} transition hover:bg-secondary`}>
              <h2>{item}</h2>
            </a>
          ) : (
            <div key={item} className={className}>
            <h2>{item}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function OverlayImageGrid({ items, columns = "lg:grid-cols-5" }) {
  return (
    <section>
      <div className={`mb-8 grid gap-5 px-8 sm:grid-cols-2 ${columns}`}>
        {items.map(([title, image, alt]) => (
          <div key={title} className="relative col-span-1">
            <div className="relative aspect-square w-full">
              <Image className="rounded-md object-cover" src={image} alt={alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" />
            </div>
            <div className="absolute bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center rounded-b-md bg-black opacity-80" />
            <div className="absolute bottom-0 left-0 z-20 flex h-12 w-full items-center justify-center px-2 text-center">
              <h2 className="text-lg font-bold text-secondary">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Benefits() {
  const benefits = [
    ["Top prices paid", "for your scrap metal."],
    ["Quick payments", "always paid on time."],
    ["Fully accredited", "licensed scrap metal merchants."],
    ["Environment friendly", "and sustainable practices."],
  ];

  return (
    <section>
      <div className="grid gap-5 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([strong, text]) => (
          <div key={strong} className="flex items-center gap-4 rounded-sm bg-slate-100 p-5">
            <svg className="h-12 w-12 shrink-0 fill-secondary" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
            <p className="text-lg">
              <span className="font-bold">{strong}</span> {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section>
      <div className="grid gap-5 px-8 pb-8 md:grid-cols-2">
        <div className="rounded-sm bg-slate-100 p-8">
          <h2 className="mb-2 text-3xl font-bold text-secondary">MISSION</h2>
          <p className="text-lg">
            To safely and efficiently handle recyclable materials while reducing customer liability and supporting sustainable recycling.
          </p>
        </div>
        <div className="rounded-sm bg-slate-100 p-8">
          <h2 className="mb-2 text-3xl font-bold text-secondary">VISION</h2>
          <p className="text-lg">
            To recover, recycle, and reuse resources while maintaining cleaner industrial environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StandardPage({ active, children, ctaText }) {
  return (
    <main className="relative bg-white font-poppins text-black">
      {children}
      <InfoCta text={ctaText} />
    </main>
  );
}
