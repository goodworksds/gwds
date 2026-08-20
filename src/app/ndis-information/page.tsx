import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { ndisFaqs, ndisSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "NDIS Information",
  description:
    "The NDIS, explained without the jargon. Eligibility, access requests, plan meetings and frequently asked questions.",
};

export default function NdisInformationPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="NDIS Information"
            title="The NDIS, explained without the jargon"
            description="Whether you're applying for the first time or preparing for a review, here's what you need to know."
            light
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading title="Getting started in four steps" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ndisSteps.map((step) => (
              <div key={step.number}>
                <span className="font-serif text-3xl font-semibold text-gradient-sunrise">
                  {step.number}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-10">
            <FaqAccordion items={ndisFaqs} />
          </div>
          <div className="mt-10">
            <Button href="/contact">Ask us a question</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
