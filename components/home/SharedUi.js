export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="m5 12.6 4.1 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

export function Badge({ children, light = false }) {
  return <p className={light ? "badge badge-light" : "badge"}>{children}</p>;
}

export function CtaLink({ href, children, variant = "primary" }) {
  return (
    <a href={href} className={variant === "primary" ? "luxury-button luxury-button-primary" : "luxury-button luxury-button-secondary"}>
      <span>{children}</span>
      <span className="luxury-button-icon">
        <ArrowIcon />
      </span>
    </a>
  );
}

export function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <Badge light={light}>{eyebrow}</Badge>
      <h2 className={light ? "section-title text-stone-50" : "section-title text-zinc-950"}>{title}</h2>
      {text ? <p className={light ? "section-copy text-stone-300" : "section-copy text-zinc-600"}>{text}</p> : null}
    </div>
  );
}
