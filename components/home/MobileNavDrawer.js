"use client";

import { useEffect, useId, useState } from "react";
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

export default function MobileNavDrawer({ navItems, phoneHref, phoneNumber, whatsappHref }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRenderDrawer, setShouldRenderDrawer] = useState(false);
  const drawerTitleId = useId();

  function openDrawer() {
    setShouldRenderDrawer(true);
    window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRenderDrawer(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShouldRenderDrawer(false);
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
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
        className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-[#f9f5ee] transition duration-500 ease-luxury hover:bg-[#6d5b2f] active:scale-95"
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
            className={`fixed inset-0 z-[9998] bg-zinc-950/45 backdrop-blur-sm transition-opacity duration-500 ease-luxury ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <aside
            id="mobile-navigation-drawer"
            className={`fixed bottom-0 right-0 top-0 z-[9999] flex w-[min(88vw,24rem)] flex-col overflow-hidden border-l border-[#6d5b2f]/18 bg-[#f5f0e7] p-5 text-zinc-950 shadow-[0_32px_100px_-46px_rgba(23,21,19,0.9)] transition-transform duration-500 ease-luxury ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="pointer-events-none absolute inset-0 bg-[#f5f0e7]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(216,197,139,0.28),transparent_18rem)]" />

            <div className="relative flex items-center justify-between gap-4 border-b border-[#6d5b2f]/14 pb-5">
              <div>
                <p id={drawerTitleId} className="text-sm font-bold uppercase tracking-[0.22em] text-[#6d5b2f]">
                  Menu
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-zinc-950">Good Luck Scrap</p>
              </div>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#6d5b2f]/18 bg-white/55 text-zinc-950 transition duration-500 ease-luxury hover:bg-white active:scale-95"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="relative mt-7 grid gap-2" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-[1.15rem] border border-[#6d5b2f]/12 bg-[#ede5d9] px-5 py-4 text-lg font-semibold tracking-[-0.01em] text-zinc-950 transition duration-500 ease-luxury hover:bg-[#d8c58b]/42"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="relative mt-auto grid gap-3 border-t border-[#6d5b2f]/14 pt-5">
              <a href={whatsappHref} className="luxury-button luxury-button-primary justify-center" onClick={() => setIsOpen(false)}>
                <span>Request quote</span>
              </a>
              <a href={phoneHref} className="luxury-button luxury-button-secondary justify-center" onClick={() => setIsOpen(false)}>
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
