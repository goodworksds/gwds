import type { Metadata } from "next";
import AboutSectionLayout from "@/components/AboutSectionLayout";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Our mission is to provide the highest quality support and services that empower people living with a disability to lead a fulfilling and valued life.",
};

export default function MissionPage() {
  return (
    <AboutSectionLayout currentSlug="mission">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Mission
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        To provide the highest quality support and services that empower
        people living with a disability to lead a fulfilling and valued life.
      </p>
    </AboutSectionLayout>
  );
}
