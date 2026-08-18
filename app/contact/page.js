import SiteFooter from "@/components/home/SiteFooter";
import { Badge, CtaLink, SectionIntro } from "@/components/home/SharedUi";
import { contactJsonLd, JsonLd, pageMetadata } from "../seo";
import { contact, getPhoneHref, getWhatsappHref, industries } from "@/components/home/homeData";

export const metadata = pageMetadata({
  title: "Contact GoodLuck Scrap",
  description:
    "Contact GoodLuck Scrap by phone, WhatsApp, or email for scrap metal buying, industrial scrap collection, recycling, and surplus support in Saudi Arabia.",
  path: "/contact",
});

const contactMethods = [
  {
    label: "Phone",
    href: getPhoneHref(),
    value: contact.phoneNumber,
    note: "Best for direct calls and urgent coordination.",
  },
  {
    label: "WhatsApp",
    href: getWhatsappHref(),
    value: "Open WhatsApp",
    note: "Best for photos, site location, and fast quote requests.",
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
    note: "Best for formal messages and longer material lists.",
  },
];

const messageChecklist = [
  "Material type and condition",
  "Photos of the load if available",
  "Pickup location or site name",
  "Approximate quantity or load size",
  "Any access or loading details",
];

const responseNotes = [
  ["Direct contact", "You can reach the team by phone or WhatsApp for a fast response."],
  ["Quote review", "Include photos and quantity so the first reply is practical."],
  ["Site handling", "Collection timing can be aligned with the site schedule when needed."],
  ["Saudi coverage", "The service is focused on businesses operating across Saudi Arabia."],
];

export default function ContactPage() {
  const whatsappHref = getWhatsappHref();
  const phoneHref = getPhoneHref();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-zinc-950">
      <JsonLd data={contactJsonLd()} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <section
        id="main-content"
        className="relative isolate min-h-[84dvh] overflow-hidden px-4 pb-12 pt-10 text-white md:min-h-[100dvh] md:px-8 md:pb-14 md:pt-32"
      >
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_20%_20%,rgba(216,197,139,0.18),transparent_28rem),linear-gradient(135deg,rgba(23,21,19,0.96),rgba(23,21,19,0.78))]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(23,21,19,0.88),rgba(23,21,19,0.64)_50%,rgba(23,21,19,0.46))]" />

        <div className="mx-auto flex min-h-[calc(84dvh-3.75rem)] max-w-7xl items-center md:min-h-[calc(100dvh-10.5rem)]">
          <div className="max-w-5xl">
            <Badge light>Contact</Badge>
            <h1 className="max-w-5xl text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.5rem]">
              Contact GoodLuck Scrap directly.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 md:text-lg">
              Use the details below to reach the team by phone, WhatsApp, or email. For the fastest response, send the material type, photos, and the site location together.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-hero">
                <span>Call now</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Phone</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">WhatsApp</span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2">Email</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
            <Badge>Contact details</Badge>
            <h2 className="section-title text-zinc-950">
              The main ways
              <br />
              to reach the team.
            </h2>
            <p className="section-copy mx-auto text-zinc-600">
              The contact page keeps the practical details first so a visitor can choose the fastest channel for their situation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => (
              <article key={method.label} className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8c58b]">{method.label}</p>
                <p className="mt-5 text-2xl font-semibold tracking-tight text-white">{method.value}</p>
                <p className="mt-4 text-sm leading-6 text-stone-300">{method.note}</p>
                <div className="mt-7">
                  <a
                    href={method.href}
                    className="luxury-button luxury-button-secondary justify-center !bg-white/8 !text-white hover:!bg-white/14"
                  >
                    <span>Use {method.label}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="rounded-[2rem] bg-[#ede5d9] p-7 md:p-12">
              <SectionIntro
                eyebrow="What to include"
                title={
                  <>
                    Send the details
                    <br />
                    that help us respond.
                  </>
                }
                text="A short message with the right details usually gets you a useful first reply without follow-up questions."
              />
              <ul className="mt-8 grid gap-3">
                {messageChecklist.map((item) => (
                  <li key={item} className="rounded-[1.2rem] bg-[#f9f5ee] px-4 py-3 text-sm font-semibold text-zinc-800">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-[#171513] p-7 text-stone-50 md:p-12">
              <Badge light>Service area</Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                Built for businesses across Saudi Arabia.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">
                The site is positioned for industrial and commercial operators who need scrap buying, collection, recycling, or surplus handling.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-white/14 bg-white/6 px-4 py-2">
                    {industry}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-4">
            {responseNotes.map(([title, text]) => (
              <article key={title} className="rounded-[1.6rem] bg-[#f9f5ee] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6d5b2f]">{title}</p>
                <p className="mt-5 text-sm leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#d8c58b] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-12 lg:p-16">
            <Badge>Final step</Badge>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-950 md:text-6xl">
              Send one message and we will respond with the next step.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
              If the material is mixed or you are unsure where it fits, send a photo and a short note. That is usually enough to start the conversation.
            </p>
          </div>

          <div className="bg-[#f9f5ee] p-7 md:p-12 lg:p-16">
            <p className="text-xl font-semibold tracking-tight text-zinc-950">Contact by channel</p>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Use the channel that fits your request best. For the fastest reply, WhatsApp is usually the most practical option.
            </p>
            <div className="mt-8 grid gap-3">
              <CtaLink href={whatsappHref}>Open WhatsApp</CtaLink>
              <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center">
                <span>{contact.phoneNumber}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="luxury-button luxury-button-secondary justify-center">
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
