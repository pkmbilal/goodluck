"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 7h14M5 12h14M5 17h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="m7 7 10 10M17 7 7 17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function MobileNavDrawer({ activeHref, navItems, phoneHref, phoneNumber, whatsappHref }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderDrawer, setShouldRenderDrawer] = useState(false);
  const drawerTitleId = useId();
  const closeTimerRef = useRef(null);
  const isMounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  function openDrawer() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setShouldRenderDrawer(true);

    window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }

  function closeDrawer() {
    setIsOpen(false);

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setShouldRenderDrawer(false);
      closeTimerRef.current = null;
    }, 500);
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeDrawer();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full bg-ink text-[#f9f5ee] transition duration-500 ease-luxury hover:bg-ink-hover active:scale-95"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isOpen}
        onClick={openDrawer}
      >
        <MenuIcon />
      </button>

      {isMounted && shouldRenderDrawer
        ? createPortal(
        <>
          <div
            className={`fixed inset-0 z-[9998] bg-ink/45 backdrop-blur-sm transition-opacity duration-500 ease-luxury ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onClick={closeDrawer}
          />

          <aside
            id="mobile-navigation-drawer"
            className={`fixed bottom-0 right-0 top-0 z-[9999] flex w-[min(88vw,24rem)] flex-col overflow-hidden border-l border-accent-strong/18 bg-[#f5f0e7] p-5 text-zinc-950 shadow-[0_32px_100px_-46px_rgba(14,92,63,0.9)] transition-transform duration-500 ease-luxury ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="pointer-events-none absolute inset-0 bg-[#f5f0e7]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(198,241,53,0.28),transparent_18rem)]" />

            <div className="relative flex items-center justify-between gap-4 border-b border-accent-strong/14 pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 overflow-hidden rounded-full bg-ink">
                  <Image src="/Logo.svg" alt="" width={44} height={44} className="h-full w-full object-cover" />
                </span>
                <div>
                <p id={drawerTitleId} className="text-sm font-bold uppercase tracking-[0.22em] text-accent-deep">
                  Menu
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-zinc-950">GoodLuck Scrap</p>
                </div>
              </div>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-accent-strong/18 bg-white/55 text-zinc-950 transition duration-500 ease-luxury hover:bg-white active:scale-95"
                aria-label="Close navigation menu"
                onClick={closeDrawer}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="relative mt-7 grid gap-2" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  aria-current={href === activeHref ? "page" : undefined}
                  className={`rounded-[1.15rem] border border-accent-strong/12 px-5 py-4 text-lg font-semibold tracking-[-0.01em] text-zinc-950 transition duration-500 ease-luxury ${
                    href === activeHref ? "bg-ink text-white" : "bg-[#ede5d9] hover:bg-accent/42"
                  }`}
                  onClick={closeDrawer}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="relative mt-auto grid gap-3 border-t border-accent-strong/14 pt-5">
              <a href={whatsappHref} className="luxury-button luxury-button-primary justify-center" onClick={closeDrawer}>
                <span>Request quote</span>
              </a>
              <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center" onClick={closeDrawer}>
                <span>{phoneNumber}</span>
              </a>
            </div>
          </aside>
        </>,
        document.body,
      )
        : null}
    </div>
  );
}
