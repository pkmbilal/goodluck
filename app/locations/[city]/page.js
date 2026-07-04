import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink } from "@/components/home/SharedUi";
import { contact, getPhoneHref, materials, services } from "@/components/home/homeData";
import { JsonLd, pageMetadata } from "../../seo";
import { cityLocations, cityPagePath, cityServiceJsonLd, getCityLocation, getCityWhatsappHref } from "../locationData";

export const dynamicParams = false;

export function generateStaticParams() {
  return cityLocations.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = getCityLocation(slug);

  if (!city) {
    return {};
  }

  return pageMetadata({
    title: `Scrap Metal Buyer in ${city.name}`,
    description: `Good Luck Scrap supports ${city.name} businesses with scrap metal buying, industrial scrap collection, recycling, demolition clearance, and surplus material handling.`,
    path: cityPagePath(city),
    image: city.image,
  });
}

export default async function CityLocationPage({ params }) {
  const { city: slug } = await params;
  const city = getCityLocation(slug);

  if (!city) {
    notFound();
  }

  const whatsappHref = getCityWhatsappHref(city);
  const phoneHref = getPhoneHref();
  const nearbyCities = cityLocations.filter((item) => item.slug !== city.slug).slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <JsonLd data={cityServiceJsonLd(city)} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <section id="main-content" className="relative isolate min-h-[84dvh] overflow-hidden px-4 pb-12 pt-10 text-white md:min-h-[100dvh] md:px-8 md:pb-14 md:pt-32">
        <Image src={city.image} alt={`Scrap metal collection service in ${city.name}`} fill priority sizes="100vw" className="-z-30 object-cover" />
        <div className="absolute inset-0 -z-20 bg-zinc-950/58" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,21,19,0.88),rgba(23,21,19,0.52)_54%,rgba(23,21,19,0.22)),radial-gradient(circle_at_16%_20%,rgba(216,197,139,0.24),transparent_28%)]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>{city.region}</Badge>
            <h1 className="max-w-5xl text-[3.05rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.25rem] lg:text-[5.8rem] xl:text-[6.35rem]">
              Scrap metal buyer in {city.name}.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">{city.intro}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Request {city.name} quote</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Scrap buying</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Site collection</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Industrial surplus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>Service brief</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-6xl">
                Built for {city.name}
                <br />
                business loads.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">{city.focus}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <Link key={service.title} href="/services" className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 transition duration-500 ease-luxury hover:bg-white/10">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d8c58b]">{service.title}</p>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{service.text}</p>
                  </Link>
                ))}
              </div>
            </article>

            <aside className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <Badge>Quote details</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                What to send for a faster {city.name} review.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">{city.accessNote}</p>
              <ul className="mt-8 grid gap-3">
                {["Material type and condition", "Photos of the load", "Site location or district", "Approximate quantity", "Loading access details"].map((item) => (
                  <li key={item} className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-3 text-sm font-semibold text-zinc-800">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
                <a href={`mailto:${contact.email}`} className="luxury-button luxury-button-secondary justify-center">
                  <span>{contact.email}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#171513] px-4 py-24 text-stone-50 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Badge light>Common loads</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white md:text-6xl">
                Materials often
                <br />
                reviewed in {city.name}.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
                The first review is easiest when the load is photographed clearly and separated by material where possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {city.materials.map((materialName) => {
                const material = materials.find(([title]) => title === materialName);
                const image = material?.[1] || "/assets/images/generated-why-choose-scrap-yard.png";

                return (
                  <Link key={materialName} href="/materials" className="group relative aspect-square overflow-hidden rounded-[1.35rem] bg-zinc-900">
                    <Image
                      src={image}
                      alt={`${materialName} scrap material in ${city.name}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover opacity-78 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,19,0.04),rgba(23,21,19,0.78))]" />
                    <h3 className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white md:text-base">{materialName}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <Badge>Industries</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-zinc-950 md:text-6xl">
                Who this page
                <br />
                is built for.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {city.industries.map((industry) => (
                  <Link key={industry} href="/industries" className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-3 text-sm font-semibold text-zinc-800 transition duration-500 ease-luxury hover:bg-white">
                    {industry}
                  </Link>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#d8c58b] p-7 md:p-12">
              <Badge>Nearby pages</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">
                Compare other Saudi service areas.
              </h3>
              <div className="mt-8 grid gap-3">
                {nearbyCities.map((nearbyCity) => (
                  <Link key={nearbyCity.slug} href={cityPagePath(nearbyCity)} className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-4 text-sm font-semibold text-zinc-800 transition duration-500 ease-luxury hover:bg-white">
                    Scrap metal buyer in {nearbyCity.name}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
