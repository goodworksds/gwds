import type { Metadata } from "next";
import { Users } from "lucide-react";
import AboutSectionLayout from "@/components/AboutSectionLayout";
import { teamGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "The people behind your support at Good Works Disability Services — leadership, support coordinators, support workers and clinical staff.",
};

export default function MeetOurTeamPage() {
  return (
    <AboutSectionLayout currentSlug="meet-our-team">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Meet Our Team
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        A small, tight-knit team of coordinators, support workers and
        clinicians — not a call centre. Individual team profiles are coming
        soon.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {teamGroups.map((group) => (
          <div
            key={group.title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-base font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AboutSectionLayout>
  );
}
