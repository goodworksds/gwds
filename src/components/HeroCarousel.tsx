"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/home-1.jpeg",
    alt: "A support worker sharing a warm moment with a participant",
  },
  {
    src: "/images/home-2.jpeg",
    alt: "A support worker assisting a participant in a wheelchair",
  },
  {
    src: "/images/istockphoto-1321871936-612x612.jpg",
    alt: "A support worker helping a participant walk, with her granddaughter alongside",
  },
  {
    src: "/images/istockphoto-948785952-612x612.jpg",
    alt: "A support worker helping a participant with her jacket outdoors",
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
