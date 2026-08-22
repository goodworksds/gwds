"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-8 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-gradient-sunrise text-white shadow-lift transition-all duration-200 hover:brightness-105",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
