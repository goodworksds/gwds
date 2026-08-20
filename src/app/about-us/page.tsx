import type { Metadata } from "next";
import { HeartHandshake, Users } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import { ourValues, services, teamGroups, whyUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Love in Action. Truth in Everything We Do",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="Love in Action. Truth in Everything We Do."
            description="We combine the professionalism of a large provider with the warmth and flexibility of a small, tight-knit team."
            light
          />
        </Container>
      </section>

      <section id="our-story" className="scroll-mt-32 py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Our story
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Good Works Disability Services was founded by support workers who
              wanted to do things differently — smaller caseloads, better
              matching, and coordinators who answer the phone. Today we support
              participants across metropolitan Melbourne with services that
              span everyday living through to complex clinical care.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container className="grid gap-8 sm:grid-cols-2">
          <div id="mission" className="scroll-mt-32 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To provide the highest quality support and services that empower people living with a disability to lead a fulfilling and valued.
            </p>
          </div>
          <div id="vision" className="scroll-mt-32 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To lead with love in action and truth, creating a caring community where respect,
              integrity, confidentiality, growth, safety, harmony, and passion inspire every life we touch.
            </p>
          </div>
        </Container>
      </section>

      <section id="our-values" className="scroll-mt-32 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="The five words that shape every shift"
            description="Our vision isn't just a line on a page — it's five values our team is trained and supported to live out daily."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ourValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <HeartHandshake className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="meet-our-team" className="scroll-mt-32 bg-secondary/60 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Meet Our Team"
            title="The people behind your support"
            description="A small, tight-knit team of coordinators, support workers and clinicians — not a call centre. Individual team profiles are coming soon."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {teamGroups.map((group) => (
              <div
                key={group.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="why-choose-us" className="scroll-mt-32 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The professionalism of a big provider, the warmth of a small team"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What we support"
            title="The core supports our team delivers day in, day out."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Button
              href="/services"
              className="border-black bg-black hover:bg-white/90 text-ring"
            >
              See all services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
