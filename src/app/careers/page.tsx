import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { careerOpenings, careerPerks, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Become a Life Changer. Current openings and why support work is a career, not a stopgap, at Good Works Disability Services.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-deep py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Become a Life Changer"
            description="We're always looking for warm, reliable people who want support work to be a career, not a stopgap."
            light
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Current openings" />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {careerOpenings.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.location} · {role.type}
                  </p>
                </div>
                <Button
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    `Application: ${role.title}`
                  )}`}
                  variant="outline"
                  className="self-start sm:self-auto"
                >
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <Container>
          <SectionHeading title="Why work here" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {careerPerks.map((perk) => (
              <div key={perk} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/85">
                  {perk}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Résumé submission")}`}>
              Send your résumé
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
