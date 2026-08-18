import Image from "next/image";
import HomeImageSlider from "./HomeImageSlider";
import { getPhoneHref, getWhatsappHref } from "./homeData";
import { Badge, CtaLink } from "./SharedUi";

export default function HeroSection() {
  return (
    <section id="main-content" className="relative isolate overflow-hidden px-4 pb-12 pt-10 text-white md:px-8 md:pb-14 md:pt-32">
      <Image
        src="/assets/images/hero-vibrant-scrap-yard.png"
        alt="Industrial scrap yard with excavator handling metal"
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-zinc-950/48" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(216,197,139,0.22),transparent_32%),linear-gradient(90deg,rgba(23,21,19,0.8),rgba(23,21,19,0.42)_46%,rgba(23,21,19,0.2))]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <Badge light>Scrap buying and recycling</Badge>
          <h1 className="max-w-5xl text-[3.35rem] font-semibold leading-[0.88] tracking-[-0.035em] text-white sm:text-[4.6rem] lg:text-[6.2rem] xl:text-[6.8rem]">
            Industrial scrap, handled with discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
            GoodLuck Scrap supports Saudi businesses with buying, selling, collection, sorting, and recycling for ferrous and non-ferrous metal.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CtaLink href={getWhatsappHref()}>Request quote</CtaLink>
            <a href={getPhoneHref()} className="luxury-button luxury-button-hero">
              <span>Call now</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-7xl md:mt-14">
        <HomeImageSlider />
      </div>
    </section>
  );
}
