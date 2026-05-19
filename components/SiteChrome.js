import Link from "next/link";
import MobileDrawer from "@/components/MobileDrawer";

const whatsappNumber = "966500000000";

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Good Luck Scrap, I want a scrap metal quote.",
)}`;

export const navItems = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["METAL RECYCLING", "/recycling"],
  ["DEMOLISHING", "/demolition"],
  ["CONTACT US", "/contact"],
];

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

export function Header({ active = "HOME" }) {
  return (
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
        <Link href="/" className="text-3xl font-bold text-white transition hover:text-secondary">
          GLS
        </Link>
        <nav>
          <ul className="hidden items-center justify-end gap-5 font-semibold text-white sm:flex">
            {navItems.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className={active === label ? "text-secondary" : "hover:text-secondary"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileDrawer navItems={navItems} />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="flex h-auto w-full flex-col items-center border-2 border-solid border-gray-200 px-8 py-2 sm:flex-row sm:justify-center lg:h-16 lg:justify-between">
        <div className="hidden items-center justify-start gap-4 lg:flex">
          <Link href="/" className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
            MAIN MENU
          </Link>
          <Link href="/contact" className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
            CONTACT US
          </Link>
          <a href={whatsappHref} className="font-bold text-primary underline underline-offset-4 hover:decoration-secondary">
            QUICK QUOTE
          </a>
        </div>
        <div className="flex items-center justify-between py-5 text-center">
          <p>Copyright 2026 Good Luck Scrap | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export function InfoCta({ text = "Need more information about our services?" }) {
  return (
    <section className="px-8 pb-10">
      <div className="flex flex-col items-center justify-between gap-4 rounded-sm bg-primary px-8 py-6 text-center text-white md:flex-row md:text-left">
        <h2 className="hidden text-2xl md:block">{text}</h2>
        <h2 className="text-xl md:hidden">{text}</h2>
        <a href="/contact" className="rounded-sm bg-secondary px-8 py-3 font-bold text-white transition hover:bg-white hover:text-primary">
          CONTACT US
        </a>
      </div>
    </section>
  );
}
