"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { sliderImages } from "./homeData";
import { ArrowIcon } from "./SharedUi";

const AUTOPLAY_MS = 4500;

// Loop the track seamlessly: a clone of the last slide sits before the real
// slides and a clone of the first slide sits after them, so autoplay/arrows
// can always step in one direction. Once the transition into a clone
// finishes, we snap instantly (no transition) to the matching real slide.
export default function HomeImageSlider() {
  const total = sliderImages.length;
  const trackSlides = [sliderImages[total - 1], ...sliderImages, sliderImages[0]];

  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = query.matches;
    const handleChange = (event) => {
      reducedMotionRef.current = event.matches;
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotionRef.current) return undefined;
    const timer = setInterval(() => {
      setWithTransition(true);
      setIndex((current) => current + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  // After snapping without a transition, re-enable it on the next frame so
  // the following step animates again.
  useEffect(() => {
    if (withTransition) return undefined;
    const raf = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(raf);
  }, [withTransition]);

  const goPrev = useCallback(() => {
    setWithTransition(true);
    setIndex((current) => current - 1);
  }, []);

  const goNext = useCallback(() => {
    setWithTransition(true);
    setIndex((current) => current + 1);
  }, []);

  const handleTransitionEnd = () => {
    if (index === total + 1) {
      setWithTransition(false);
      setIndex(1);
    } else if (index === 0) {
      setWithTransition(false);
      setIndex(total);
    }
  };

  const realIndex = ((index - 1) % total + total) % total;
  const activeSlide = sliderImages[realIndex];

  return (
    <section className="px-4 pb-12 pt-0 md:px-8 md:pb-16">
      <div className="mx-auto max-w-7xl">
        <div
          className="group relative overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_42px_110px_-72px_rgba(23,21,19,0.88)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] md:aspect-[21/9]">
            <div
              className={`flex h-full ${withTransition ? "transition-transform duration-700 ease-luxury" : ""}`}
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {trackSlides.map((slide, slideIndex) => (
                <div key={`${slide.src}-${slideIndex}`} className="relative h-full w-full flex-shrink-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading={slideIndex === 1 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.12),transparent_28%,transparent_72%,rgba(24,24,27,0.5))]" />
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-zinc-950/45 text-white opacity-0 backdrop-blur transition duration-500 ease-luxury hover:border-[#d8c58b]/60 hover:text-[#d8c58b] focus-visible:opacity-100 group-hover:opacity-100"
          >
            <span className="rotate-180">
              <ArrowIcon />
            </span>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-zinc-950/45 text-white opacity-0 backdrop-blur transition duration-500 ease-luxury hover:border-[#d8c58b]/60 hover:text-[#d8c58b] focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ArrowIcon />
          </button>

          <p className="absolute bottom-5 right-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c58b]">
            {String(realIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          <p className="sr-only" aria-live="polite">
            {activeSlide.alt}
          </p>
        </div>
      </div>
    </section>
  );
}
