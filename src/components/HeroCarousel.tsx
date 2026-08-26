"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/hero-1.jpg",
    alt: "Children and support workers laughing together while blowing bubbles at an outdoor picnic in the park",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "A support worker in scrubs fist-bumping a girl in a wheelchair in a hallway, with her father alongside",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "A support worker standing behind a smiling young man in his wheelchair in a bright indoor hallway",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "A young man painting on an easel outdoors while a support worker joins in beside him",
  },
  {
    src: "/images/hero-5.jpg",
    alt: "A young man and a woman in a wheelchair laughing together while playing pickleball on an outdoor court",
  },
  {
    src: "/images/hero-6.jpg",
    alt: "A man and a support worker preparing a meal together, chopping vegetables in a kitchen",
  },
  {
    src: "/images/hero-7.jpg",
    alt: "A support worker helping an older woman walk with a frame while a young girl walks alongside them",
  },
  {
    src: "/images/hero-8.jpg",
    alt: "A support worker kneeling to talk with a young man seated in his wheelchair",
  },
  {
    src: "/images/community-participation.jpg",
    alt: "Supporting people to participate in social, recreational, cultural and community activities",
  },
];

const AUTO_ADVANCE_MS = 3000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  function goTo(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <div className="relative mx-auto aspect-[16/12] w-full max-w-xl overflow-hidden rounded-3xl shadow-lift">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          unoptimized
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-sunrise text-white shadow-soft transition-all hover:brightness-105"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-sunrise text-white shadow-soft transition-all hover:brightness-105"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 cursor-pointer rounded-full transition-all",
              i === index
                ? "w-6 bg-gradient-sunrise"
                : "w-2 bg-white/50 hover:bg-white/75",
            )}
          />
        ))}
      </div>
    </div>
  );
}
