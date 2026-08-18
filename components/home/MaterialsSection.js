import Image from "next/image";
import Link from "next/link";
import { materials } from "./homeData";
import { Badge } from "./SharedUi";

export default function MaterialsSection() {
  return (
    <section id="materials" className="bg-ink px-4 py-24 text-stone-50 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
          <Badge light>Materials</Badge>
          <h2 className="section-title text-stone-50">
            High-value metals
            <br />
            and industrial surplus.
          </h2>
          <p className="section-copy mx-auto text-stone-300">
            Acceptance depends on material condition, quantity, location, and loading requirements. Send photos and site details for the fastest response.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {materials.map(([title, image]) => (
            <Link key={title} href="/materials" className="group relative block aspect-square overflow-hidden rounded-[1.35rem] bg-ink">
              <Image
                src={image}
                alt={`${title} scrap material`}
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover opacity-78 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,92,63,0.04),rgba(14,92,63,0.78))]" />
              <h3 className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white md:text-base">{title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}