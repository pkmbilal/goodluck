import Image from "next/image";
import { services } from "./homeData";
import { Badge } from "./SharedUi";

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 pb-20 pt-10 md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
          <Badge>Services</Badge>
          <h2 className="section-title text-zinc-950">
            Scrap buying and clearance
            <br />
            for working sites.
          </h2>
          <p className="section-copy mx-auto text-zinc-600">
            From loose metal and cable to demolition recovery and surplus stock, we coordinate the right handling path for each material load.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-zinc-950 ${
                index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"
              }`}
            >
              <Image
                src={service.image}
                alt={`${service.title} material`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-72 transition duration-700 ease-luxury group-hover:scale-105 group-hover:opacity-86"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.04),rgba(24,24,27,0.86))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">0{index + 1}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
