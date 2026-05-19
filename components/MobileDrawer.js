"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileDrawer({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="sm:hidden" onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
        <svg className="h-7 w-7 fill-white" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} aria-label="Close navigation menu" />
          <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-80 flex-col bg-primary px-6 py-6 text-white shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="text-3xl font-bold transition hover:text-secondary" onClick={() => setIsOpen(false)}>
                GLS
              </Link>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
                <svg className="h-8 w-8 fill-white" viewBox="0 0 384 512" aria-hidden="true">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col divide-y divide-white/15 text-lg font-semibold">
                {navItems.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="block py-4 transition hover:text-secondary" onClick={() => setIsOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
