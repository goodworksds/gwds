import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import AboutSectionLayout from "@/components/AboutSectionLayout";
import { ourValues } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "The five words that shape every shift at Good Works Disability Services: Respect & Recognition, Determination, Knowledge, Community and Professionalism.",
};

export default function OurValuesPage() {
  return (
    <AboutSectionLayout currentSlug="our-values">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Our Values
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Our vision isn&rsquo;t just a line on a page — it&rsquo;s five values
        our team is trained and supported to live out daily.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {ourValues.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <HeartHandshake className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </AboutSectionLayout>
  );
}
