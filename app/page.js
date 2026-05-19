import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import MobileDrawer from "@/components/MobileDrawer";

const whatsappNumber = "966500000000";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Good Luck Scrap, I want a scrap metal quote.",
)}`;

const navItems = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["METAL RECYCLING", "/recycling"],
  ["DEMOLISHING", "/demolition"],
  ["CONTACT US", "/contact"],
];

const tabs = [
  ["ABOUT US", "/about"],
  ["BUY FROM US", "/buyfromus"],
  ["SELL TO US", "/selltous"],
  ["CONTACT US", "/contact"],
];

const services = [
  {
    title: "SCRAP METAL RECYCLING",
    image: "/assets/images/scarp-hero-1.webp",
    alt: "scrap metal recycling",
  },
  {
    title: "SCRAP METAL COLLECTION",
    image: "/assets/images/scrap-hero-2.webp",
    alt: "scrap metal collection",
  },
  {
    title: "BUYING & SELLING",
    image: "/assets/images/scrap-hero-3.webp",
    alt: "buying and selling",
  },
  {
    title: "WASTE MANAGEMENT",
    image: "/assets/images/scarp-hero-1.webp",
    alt: "waste management consultancy",
  },
];

const products = [
  ["GRANULAR COPPER", "/assets/images/Granular-Copper.webp", "granular copper"],
  ["STAINLESS STEEL", "/assets/images/Stainless-Steel.webp", "stainless steel"],
  ["CS PIPES", "/assets/images/cs-pipes.webp", "cs pipes"],
  ["CONTAINERS", "/assets/images/Containers.webp", "containers"],
  ["BILLETS", "/assets/images/Billets.webp", "billets"],
  ["CABLES", "/assets/images/Cables.webp", "cables"],
  ["PANEL BOARDS", "/assets/images/Panel-Boards.webp", "panel boards"],
  ["COPPER BERRY CABLE", "/assets/images/Copper-Berry-Cable.webp", "copper berry cable"],
  ["BRASS SCRAP", "/assets/images/Brass-Scrap.webp", "brass scrap"],
  ["ALUMINIUM SCRAP", "/assets/images/Aluminium-Scrap.webp", "aluminium scrap"],
];

function SocialIcon({ type }) {
  const paths = {
    facebook:
      "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
    instagram:
      "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32Z",
    linkedin:
      "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32.3-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
  };

  return (
    <svg className="h-7 w-7 fill-white transition hover:fill-secondary" viewBox="0 0 448 512" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

function TopbarContact() {
  return (
    <div className="hidden items-center justify-center gap-6 sm:flex">
      <div className="flex items-center">
        <svg className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
        </svg>
        <p className="ml-1 align-middle text-[16px] text-white">sales@goodlucksa.com</p>
      </div>
      <div className="flex items-center">
        <svg className="h-5 w-5 fill-white" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7l-49.3-40.3c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
        </svg>
        <p className="ml-1 align-middle text-[16px] text-white">+966 50 000 0000</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-white font-poppins text-black">
      <header className="w-full bg-primary">
        <div className="flex h-11 w-full items-center justify-center border-b-2 border-solid border-slate-400 px-8 sm:justify-between">
          <TopbarContact />
          <div className="flex items-center gap-1">
            <a href="#" aria-label="Facebook">
              <SocialIcon type="facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <SocialIcon type="instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
            </a>
          </div>
        </div>

        <div className="flex h-20 w-full items-center justify-between bg-primary px-8">
          <a href="#" className="text-3xl font-bold text-white transition hover:text-secondary">
            GLS
          </a>
          <nav>
            <ul className="hidden items-center justify-end gap-5 font-semibold text-white sm:flex">
              {navItems.map(([item, href], index) => (
                <li key={item}>
                  <a href={href} className={index === 0 ? "text-secondary" : "hover:text-secondary"}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MobileDrawer navItems={navItems} />
        </div>
      </header>

      <HeroSlider whatsappHref={whatsappHref} />

      <section>
        <div className="grid gap-y-3 px-8 pt-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4">
          {tabs.map(([tab, href], index) => (
            <a key={tab} href={href} className={index === 2 ? "col-span-1 sm:col-span-2 lg:col-span-1" : "col-span-1"}>
              <div className="flex w-full items-center justify-center rounded-sm bg-primary px-5 py-10 text-2xl font-bold text-white transition hover:bg-secondary">
                <h2>{tab}</h2>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about">
        <div className="mb-6 px-8 pb-4 pt-8 text-center xl:px-40">
          <h1 className="mb-2 text-4xl font-bold text-secondary">SCRAP SERVICES IN SAUDI ARABIA</h1>
          <p className="mb-2 text-lg">
            Good Luck Scrap buys and sells ferrous and non-ferrous metal including iron, aluminium, steel, copper, zinc, cables, and industrial surplus.
          </p>
          <p className="mb-2 text-lg">
            Our team helps customers arrange collection, sorting, weighing, and quote coordination for commercial and industrial scrap.
          </p>
          <h3 className="mb-2 text-xl font-semibold">Reliable scrap buying support</h3>
          <p className="mb-2 text-lg">
            We work with workshops, contractors, warehouses, and factories that need clear communication and fast collection.
          </p>
        </div>
      </section>

      <section id="metal-recycling">
        <div className="mb-8 grid gap-y-5 px-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="col-span-1 overflow-hidden shadow-xl">
              <div className="relative h-[210px]">
                <Image className="rounded-t-md object-cover" src={service.image} alt={service.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <div className="absolute left-0 top-0 z-20 h-full w-full rounded-t-md bg-black opacity-30" />
              </div>
              <a href={whatsappHref}>
                <div className="rounded-b-md bg-primary p-3 text-center transition hover:bg-secondary">
                  <h2 className="text-xl font-bold text-white">{service.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col items-center justify-center">
          <h1 className="mb-2 text-4xl font-bold text-secondary">PRODUCTS</h1>
          <p className="mb-2 text-lg">LARGEST INVENTORY OF YOUR CHOICE</p>
        </div>
        <div className="mb-8 grid gap-5 px-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map(([title, image, alt]) => (
            <div key={title} className="relative col-span-1">
              <div className="relative aspect-square w-full">
                <Image className="rounded-md object-cover" src={image} alt={alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="absolute bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center rounded-b-md bg-black opacity-80" />
              <div className="absolute bottom-0 left-0 z-20 flex h-12 w-full items-center justify-center px-2 text-center">
                <h2 className="text-lg font-bold text-secondary">{title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="flex h-auto w-full flex-col items-center border-2 border-solid border-gray-200 px-8 py-2 sm:flex-row sm:justify-center lg:h-16 lg:justify-between">
          <div className="hidden items-center justify-start gap-4 lg:flex">
            <a href="#" className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
              MAIN MENU
            </a>
            <a href="/contact" className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
              CONTACT US
            </a>
            <a href={whatsappHref} className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
              QUICK QUOTE
            </a>
          </div>
          <div className="flex items-center justify-between py-5 text-center">
            <p>Copyright 2026 Good Luck Scrap | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
