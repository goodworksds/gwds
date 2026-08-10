import type { Metadata } from "next";
import AboutSectionLayout from "@/components/AboutSectionLayout";
import { whyUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "The professionalism of a big provider, the warmth of a small team — why families choose Good Works Disability Services.",
};

export default function WhyChooseUsPage() {
  return (
    <AboutSectionLayout currentSlug="why-choose-us">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Why Choose Us
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        The professionalism of a big provider, the warmth of a small team.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </AboutSectionLayout>
  );
}
