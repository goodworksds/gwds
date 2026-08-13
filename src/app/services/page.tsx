import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flexible NDIS supports, coordinated as one team — daily living, community participation, household tasks, support coordination, SIL, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Flexible NDIS supports, coordinated as one team"
            description="Every service below can be delivered on its own or combined into a package that matches your plan, your routine and your goals."
            light
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
