import type { Metadata } from "next";
import AboutSectionLayout from "@/components/AboutSectionLayout";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "To lead with love in action and truth, creating a caring community where respect, integrity, confidentiality, growth, safety, harmony, and passion inspire every life we touch.",
};

export default function VisionPage() {
  return (
    <AboutSectionLayout currentSlug="vision">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Vision
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        To lead with love in action and truth, creating a caring community where respect, 
        integrity, confidentiality, growth, safety, harmony, and passion inspire every life we touch.
      </p>
    </AboutSectionLayout>
  );
}
