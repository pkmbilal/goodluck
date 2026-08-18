import Image from "next/image";
import { advantages } from "./homeData";
import { CheckIcon, SectionIntro } from "./SharedUi";

export default function WhyChooseSection() {
  return (
    <section className="px-4 pb-24 pt-0 md:px-8 md:pb-36 md:pt-0">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-accent/24 bg-[#d8cec0] p-2 shadow-[0_34px_90px_-70px_rgba(14,92,63,0.82)]">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[1.75rem] bg-ink lg:h-full">
            <Image
              src="/assets/images/generated-why-choose-scrap-yard.png"
              alt="Organized scrap metal clearance at an industrial yard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-88"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,92,63,0.02),rgba(14,92,63,0.64))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="max-w-sm text-xs font-bold uppercase tracking-[0.22em] text-accent">Prepared for collection</p>
              <p className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-3xl">
                Sorted material, clearer access, faster site movement.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[2.2rem] border border-accent/20 bg-[#ede5d9] p-7 md:p-10 lg:p-12">
          <SectionIntro
            eyebrow="Why choose us"
            title="Professional handling when scrap is slowing down the work."
            text="The experience should feel calm, direct, and reliable. No clutter. No exaggerated promises. Just a strong industrial service offer."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="flex min-h-40 flex-col justify-between rounded-[1.35rem] border border-accent-strong/12 bg-[#f5f0e7] p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-accent">
                  <CheckIcon />
                </span>
                <p className="mt-6 text-base leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
