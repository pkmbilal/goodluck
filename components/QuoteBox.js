"use client";

import { useState } from "react";

export default function QuoteBox({ whatsappHref }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section>
      <div className="relative">
        <div className="mx-auto my-6 w-[92%] rounded-md border-2 border-gray-300 bg-white p-6 text-center shadow-lg sm:w-[640px] sm:p-10">
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="absolute right-[8%] top-5 h-10 w-10 cursor-pointer text-secondary transition hover:text-primary sm:right-[calc(50%-300px)]"
            aria-label="Close quote box"
          >
            <svg viewBox="0 0 384 512" className="h-10 w-10 fill-current" aria-hidden="true">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold text-primary">GET A QUOTE</h2>
          <p className="mb-4 text-lg">Enter your information below, we will be in touch soon.</p>
          <form autoComplete="off">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input className="h-10 w-full rounded-md border-2 px-2 text-xl" name="first_name" placeholder="First name" />
                <input className="h-10 w-full rounded-md border-2 px-2 text-xl" name="last_name" placeholder="Last name" />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input className="h-10 w-full rounded-md border-2 px-2 text-xl" name="email" placeholder="Your email" type="email" />
                <input className="h-10 w-full rounded-md border-2 px-2 text-xl" name="mobile" placeholder="Your mobile" type="tel" />
              </div>
              <textarea className="w-full rounded-md border-2 px-2 pt-2 text-xl" name="message" placeholder="Your message" />
              <a
                href={whatsappHref}
                className="rounded-md border-2 border-secondary bg-secondary p-3 text-xl font-semibold text-white transition hover:bg-white hover:text-secondary"
              >
                SUBMIT
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
