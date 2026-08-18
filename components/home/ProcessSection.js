import { processSteps } from "./homeData";
import { Badge } from "./SharedUi";

export default function ProcessSection() {
  return (
    <section id="process" className="px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
          <Badge>How it works</Badge>
          <h2 className="section-title text-zinc-950">
            From first message
            <br />
            to cleared material.
          </h2>
          <p className="section-copy mx-auto text-zinc-600">
            The process is intentionally simple so a customer can act quickly from mobile.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map(([number, title, text]) => (
            <article key={number} className="rounded-[1.6rem] bg-[#ede5d9] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep">{number}</p>
              <h3 className="mt-9 text-2xl font-semibold tracking-tight text-zinc-950">{title}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
