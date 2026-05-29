import { contact, getPhoneHref, getWhatsappHref, navItems } from "./homeData";

export default function SiteHeader() {
  const whatsappHref = getWhatsappHref();

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:pt-6">
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
          <a href={whatsappHref} className="nav-quote">
            Quote
            <span className="nav-quote-dot" />
          </a>
        </div>
      </div>
    </header>
  );
}
