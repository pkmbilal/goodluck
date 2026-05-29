import { trustItems } from "./homeData";
import { Badge } from "./SharedUi";

export default function TrustSection() {
  return (
    <section className="relative z-20 -mt-28 px-4 pb-12 pt-0 md:-mt-28 md:px-8 md:pb-16 lg:-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.25rem] border border-[#d8c58b]/28 bg-[#171513] text-stone-50 shadow-[0_42px_110px_-72px_rgba(23,21,19,0.88)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative isolate min-h-[20rem] overflow-hidden border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(216,197,139,0.18),transparent_30rem),linear-gradient(135deg,rgba(245,240,231,0.08),transparent_45%)]" />
              <div className="absolute bottom-0 left-0 -z-10 h-28 w-full bg-[linear-gradient(180deg,transparent,rgba(109,91,47,0.18))]" />
              <Badge light>Operational confidence</Badge>
              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-stone-50 md:text-5xl">
                Built for serious scrap movement.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-stone-300">
                Clear coordination, practical site handling, and direct quote conversations for industrial material that needs to move without delay.
              </p>
              <div className="mt-10 flex items-center gap-4 text-[#d8c58b]">
                <span className="h-px flex-1 bg-current/40" />
                <span className="text-xs font-bold uppercase tracking-[0.26em]">Saudi industrial sites</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {trustItems.map(([title, text], index) => (
                <article
                  key={title}
                  className="group relative min-h-[13.5rem] overflow-hidden border-b border-white/10 p-7 transition duration-500 ease-luxury last:border-b-0 hover:bg-white/[0.035] sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 md:p-8"
                >
                  <div className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,rgba(216,197,139,0.62),transparent)] opacity-0 transition duration-500 ease-luxury group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8c58b]">0{index + 1}</p>
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#d8c58b]/70 shadow-[0_0_0_6px_rgba(216,197,139,0.08)]" />
                  </div>
                  <h3 className="mt-12 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
