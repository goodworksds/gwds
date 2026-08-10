import type { Metadata } from "next";
import AboutSectionLayout from "@/components/AboutSectionLayout";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Respect and recognition, determination, knowledge, community and professionalism — in every shift, every day.",
};

export default function VisionPage() {
  return (
    <AboutSectionLayout currentSlug="vision">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Vision
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Respect and recognition, determination, knowledge, community and
        professionalism — in every shift, every day.
      </p>
    </AboutSectionLayout>
  );
}
