import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink } from "@/components/home/SharedUi";
import { getWhatsappHref } from "@/components/home/homeData";
import { JsonLd, pageMetadata } from "../seo";
import { cityLocations, cityPagePath, locationsItemListJsonLd } from "./locationData";

export const metadata = pageMetadata({
  title: "Scrap Metal Service Areas in Saudi Arabia",
  description:
    "Find Good Luck Scrap city service areas for scrap metal buying, industrial scrap collection, recycling, demolition clearance, and surplus handling in Saudi Arabia.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <JsonLd data={locationsItemListJsonLd()} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <section id="main-content" className="relative isolate min-h-[84dvh] overflow-hidden px-4 pb-12 pt-10 text-white md:min-h-[100dvh] md:px-8 md:pb-14 md:pt-32">
        <Image
          src="/assets/images/service-site-collection.png"
          alt="Industrial scrap collection site in Saudi Arabia"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-zinc-950/58" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,21,19,0.86),rgba(23,21,19,0.5)_54%,rgba(23,21,19,0.24)),radial-gradient(circle_at_16%_20%,rgba(216,197,139,0.24),transparent_28%)]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>Service areas</Badge>
            <h1 className="max-w-5xl text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.5rem]">
              Scrap metal buying across key Saudi cities.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              Choose the closest city page for scrap collection, metal recycling, demolition scrap clearance, and industrial surplus handling.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={getWhatsappHref()}>Request quote</CtaLink>
              <Link href="/services" className="luxury-button luxury-button-hero">
                <span>View services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>City pages</Badge>
            <h2 className="section-title text-zinc-950">
              Local pages for
              <br />
              practical quote requests.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              Each city page gives visitors a clearer way to describe the load, site access, and material type before asking for pickup or review.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cityLocations.map((city) => (
              <Link key={city.slug} href={cityPagePath(city)} className="group overflow-hidden rounded-[2rem] bg-[#171513] text-stone-50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={city.image}
                    alt={`Scrap metal service area for ${city.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-78 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-92"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,19,0.08),rgba(23,21,19,0.86))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8c58b]">{city.region}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{city.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-stone-300">{city.focus}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
