import { contact, getPhoneHref, getWhatsappHref, navItems } from "./homeData";
import MobileNavDrawer from "./MobileNavDrawer";

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12.04 4.2a7.77 7.77 0 0 0-6.7 11.72l-.88 3.24 3.32-.87a7.76 7.76 0 0 0 4.25 1.25h.01a7.77 7.77 0 0 0 0-15.54Zm4.57 11.13c-.2.56-1.17 1.05-1.62 1.12-.42.06-.95.08-1.53-.1-.35-.11-.8-.26-1.38-.51-2.43-1.05-4.02-3.5-4.14-3.66-.12-.16-.99-1.31-.99-2.5s.63-1.78.85-2.03c.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42.2.48.68 1.67.74 1.8.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.26.32-.37.43-.12.12-.25.25-.1.49.14.24.63 1.04 1.36 1.68.94.84 1.72 1.1 1.97 1.22.24.12.39.1.53-.06.14-.16.61-.71.77-.95.16-.24.32-.2.55-.12.22.08 1.42.67 1.66.79.24.12.41.18.47.28.06.1.06.58-.14 1.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const whatsappHref = getWhatsappHref();

  return (
    <header className="fixed inset-x-0 top-0 z-[80] px-4 pt-4 md:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-[#f5f0e7]/86 px-4 py-3 shadow-[0_24px_80px_-58px_rgba(24,24,27,0.72)] backdrop-blur-xl md:px-5">
        <a href="#" className="group inline-flex items-center gap-3" aria-label="Good Luck Scrap home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-xs font-bold text-[#f5f0e7] transition duration-500 ease-luxury group-hover:bg-[#6d5b2f]">
            GLS
          </span>
          <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-900 sm:block">Good Luck Scrap</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-white/45 p-1 text-sm font-semibold text-zinc-600 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="rounded-full px-4 py-2 transition duration-500 ease-luxury hover:bg-zinc-950 hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={getPhoneHref()} className="hidden text-sm font-bold text-zinc-900 transition duration-500 ease-luxury hover:text-[#6d5b2f] md:block">
            {contact.phoneNumber}
          </a>
          <a href={whatsappHref} className="nav-quote !hidden md:!inline-flex">
            <WhatsappIcon />
            <span>Get a quote</span>
          </a>
          <MobileNavDrawer navItems={navItems} phoneHref={getPhoneHref()} phoneNumber={contact.phoneNumber} whatsappHref={whatsappHref} />
        </div>
      </div>
    </header>
  );
}
