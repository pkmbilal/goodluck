import Image from "next/image";
import Link from "next/link";
import { cityLocations, cityPagePath } from "@/app/locations/locationData";
import { contact, getPhoneHref } from "./homeData";

export default function SiteFooter() {
  return (
    <footer className="bg-[#171513] px-4 text-stone-50 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 py-10 md:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-950">
            <Image src="/Logo.svg" alt="" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <div>
          <p className="text-lg font-semibold">GoodLuck Scrap</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-400">
            Scrap metal buying, recycling, collection, and industrial surplus support for Saudi businesses.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-stone-300">
            {cityLocations.map((city) => (
              <Link key={city.slug} href={cityPagePath(city)} className="rounded-full border border-white/10 px-3 py-1.5 transition duration-500 ease-luxury hover:border-[#d8c58b]/60 hover:text-white">
                {city.name}
              </Link>
            ))}
          </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-stone-300 md:text-right">
          <a href={getPhoneHref()} className="transition duration-500 ease-luxury hover:text-white">
            {contact.phoneNumber}
          </a>
          <a href={`mailto:${contact.email}`} className="transition duration-500 ease-luxury hover:text-white">
            {contact.email}
          </a>
          <Link href="/locations" className="transition duration-500 ease-luxury hover:text-white">
            Saudi service areas
          </Link>
          <p>Saudi Arabia</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-stone-500">
        Copyright 2026 GoodLuck Scrap. All rights reserved.
      </div>
    </footer>
  );
}