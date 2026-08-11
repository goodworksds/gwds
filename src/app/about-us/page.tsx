import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AboutSectionCard from "@/components/AboutSectionCard";
import { Button } from "@/components/Button";
import { aboutSections, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Love in Action. Truth in Everything We Do",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-deep py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="Love in Action. Truth in Everything We Do."
            description="We combine the professionalism of a large provider with the warmth and flexibility of a small, tight-knit team."
            light
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Get to know us"
            title="Everything you'd want to know about Good Works"
            description="From how we started to who's on the team — explore each part of our story below."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutSections.map((section) => (
              <AboutSectionCard key={section.slug} section={section} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
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
