import Image from "next/image";
import { industries } from "./homeData";
import { Badge } from "./SharedUi";

export default function IndustriesSection() {
  return (
    <section className="px-4 pb-24 pt-0 md:px-8 md:pb-36 md:pt-0">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-accent/24 bg-ink p-6 text-center text-stone-50 shadow-[0_42px_110px_-74px_rgba(14,92,63,0.9)] md:p-12 lg:p-16">
        <Image
          src="/assets/images/generated-why-choose-scrap-yard.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 1280px, 100vw"
          className="-z-30 object-cover opacity-76"
        />
        <div className="absolute inset-0 -z-20 bg-ink/56" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(198,241,53,0.2),transparent_32rem),linear-gradient(180deg,rgba(14,92,63,0.22),rgba(14,92,63,0.72))]" />

        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <Badge light>Industries served</Badge>
          <h2 className="section-title max-w-4xl text-stone-50">
            Built for places where
            <br />
            material needs to move.
          </h2>
          <p className="section-copy mx-auto text-stone-300">
            GoodLuck Scrap supports businesses with real site constraints: access, timing, loading, sorting, and recurring material flow.
          </p>

          <div className="mt-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-[1.25rem] border border-white/12 bg-white/[0.08] p-5 text-center text-base font-semibold text-stone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md md:text-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
