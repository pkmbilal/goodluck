"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  "/assets/images/scarp-hero-1.webp",
  "/assets/images/scrap-hero-2.webp",
  "/assets/images/scrap-hero-3.webp",
];

function CheckIcon() {
  return (
    <svg className="h-6 w-6 fill-secondary" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
}

function HeroContent({ whatsappHref }) {
  return (
    <div className="absolute left-0 top-0 z-20 px-8 py-10 sm:left-12 sm:top-10 sm:px-10">
      <p className="text-xl font-bold text-primary">GLS PROCESSING</p>
      <h1 className="mb-8 mt-1 text-4xl font-bold leading-tight text-white sm:text-6xl">
        GLOBAL METAL <br />
        RECYCLERS
      </h1>
      {["Best prices paid for all scrap metal", "Prompt payments", "Fast efficient service"].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <CheckIcon />
          <p className="text-xl text-white">{item}</p>
        </div>
      ))}
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="mt-10 rounded-sm border-2 border-solid border-white px-4 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
        >
          CONTACT US
        </a>
        <a
          href={whatsappHref}
          className="mt-10 rounded-sm bg-secondary px-4 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
        >
          GET A QUOTE
        </a>
      </div>
    </div>
  );
}

export default function HeroSlider({ whatsappHref }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section>
      <div className="h-[520px] w-full sm:h-web">
        <div className="relative h-full w-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <Image
              key={slide}
              src={slide}
              alt={`hero image ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute right-0 top-0 z-10 h-full w-full bg-black opacity-40" />
          <HeroContent whatsappHref={whatsappHref} />

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 text-5xl font-light text-primary transition hover:text-secondary sm:block"
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 text-5xl font-light text-primary transition hover:text-secondary sm:block"
            aria-label="Next slide"
          >
            &gt;
          </button>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-5 w-5 rounded-full transition ${
                  index === activeSlide ? "bg-primary" : "bg-white/70 hover:bg-secondary"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
