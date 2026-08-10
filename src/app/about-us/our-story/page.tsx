import type { Metadata } from "next";
import AboutSectionLayout from "@/components/AboutSectionLayout";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Good Works Disability Services came to be — founded by support workers who wanted to do things differently.",
};

export default function OurStoryPage() {
  return (
    <AboutSectionLayout currentSlug="our-story">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Our story
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Good Works Disability Services was founded by support workers who
        wanted to do things differently — smaller caseloads, better matching,
        and coordinators who answer the phone. Today we support participants
        across metropolitan Melbourne with services that span everyday living
        through to complex clinical care.
      </p>
    </AboutSectionLayout>
  );
}
