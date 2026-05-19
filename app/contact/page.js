import { Footer, Header, whatsappHref } from "@/components/SiteChrome";

export const metadata = {
  title: "Contact | Good Luck Scrap",
  description: "Contact Good Luck Scrap for scrap metal buying and collection.",
};

function ContactIcon({ type }) {
  const paths = {
    office:
      "M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z",
    warehouse:
      "M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z",
  };

  return (
    <svg className="h-10 w-10 fill-primary" viewBox={type === "warehouse" ? "0 0 640 512" : "0 0 384 512"} aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

const locations = [
  {
    type: "office",
    label: "HEAD OFFICE",
    title: "Good Luck Scrap",
    address: "Industrial Area, Riyadh, Saudi Arabia",
    details: ["Phone: +966 50 000 0000", "Email: sales@goodlucksa.com"],
  },
  {
    type: "warehouse",
    label: "WAREHOUSE",
    title: "Scrap Collection Yard",
    address: "Warehouse and collection yard details for scrap pickup or delivery.",
    details: ["Open for scheduled deliveries", "Ferrous and non-ferrous material handling"],
  },
];

function LocationBlock({ location }) {
  return (
    <div className="grid gap-5 border-b border-slate-200 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[80px_1fr]">
      <div className="flex h-20 w-20 items-center justify-center rounded-sm bg-primary/10">
        <ContactIcon type={location.type} />
      </div>
      <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-bold tracking-[0.18em] text-secondary">{location.label}</p>
          <h2 className="text-2xl font-bold text-primary">{location.title}</h2>
        </div>
        <div>
          <p className="mb-4 text-lg leading-7 text-slate-700">{location.address}</p>
          <div className="space-y-1 text-base font-medium text-slate-900">
            {location.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white font-poppins text-black">
      <Header active="CONTACT US" />
      <section className="flex-1 bg-slate-50 px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="h-full bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-secondary">GET IN TOUCH</p>
            <h1 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">CONTACT US</h1>
            <div className="space-y-8">
              {locations.map((location) => (
                <LocationBlock key={location.label} location={location} />
              ))}
            </div>
          </div>

          <div className="h-full bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-secondary">SEND MESSAGE</p>
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">CONTACT FORM</h2>
            <form className="flex flex-col gap-5" autoComplete="off">
              <div className="grid gap-5 sm:grid-cols-2">
                <input className="h-12 border border-slate-300 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" name="name" placeholder="Enter your name" required />
                <input className="h-12 border border-slate-300 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" name="email" placeholder="Enter your email" type="email" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <input className="h-12 border border-slate-300 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" name="mobile" placeholder="Enter your mobile" type="tel" required />
                <input className="h-12 border border-slate-300 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" name="subject" placeholder="Enter your subject" />
              </div>
              <textarea className="min-h-40 resize-y border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" name="message" rows="6" placeholder="Enter your message" />
              <a href={whatsappHref} className="inline-flex min-h-12 items-center justify-center rounded-sm bg-secondary px-8 py-3 text-lg font-semibold text-white transition hover:bg-primary">
                Submit
              </a>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
