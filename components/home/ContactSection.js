import { contact, getWhatsappHref } from "./homeData";
import { Badge, CtaLink } from "./SharedUi";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#d8c58b] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-7 md:p-12 lg:p-16">
          <Badge>Quick quote</Badge>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-950 md:text-6xl">
            Send the material details. We will respond with the next step.
          </h2>
        </div>
        <div className="bg-[#f9f5ee] p-7 md:p-12 lg:p-16">
          <p className="text-xl font-semibold tracking-tight text-zinc-950">Quote by WhatsApp</p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Include material type, pickup location, photos if available, and approximate quantity.
          </p>
          <div className="mt-8 grid gap-3">
            <CtaLink href={getWhatsappHref()}>Open WhatsApp</CtaLink>
            <a href={`mailto:${contact.email}`} className="luxury-button luxury-button-secondary justify-center">
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
