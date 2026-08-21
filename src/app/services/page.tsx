import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Love in Action. Truth in Everything We Do — At Good Works Disability Services (GWDS), we provide person-centred support designed around the individual needs, goals, choices and aspirations of the people we support. Our services focus on dignity, independence, confidence and meaningful participation, helping each person live a fulfilling and valued life.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our Services"
            title="Love in Action. Truth in Everything We Do"
            description={
              <>
                At{" "}
                <strong className="font-extrabold">
                  Good Works Disability Services (GWDS)
                </strong>
                , we provide person-centred support designed around the
                individual needs, goals, choices and aspirations of the people
                we support.
                <br />
                <br />
                Our services focus on{" "}
                <strong className="font-extrabold">
                  dignity, independence, confidence and meaningful participation
                </strong>
                , helping each person live a fulfilling and valued life.
              </>
            }
            light
          />
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/placeholder-hero.svg"
              alt="Placeholder image"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
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

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container className="w-full">
          <div>
            <SectionHeading title="Support That Starts With You" />
            <div className="py-8">
              <div className="py-2">
                At GWDS, we understand that{" "}
                <strong className="font-extrabold">
                  every person is different
                </strong>
                . That's why our support is built around the individual—not
                simply around a service.{" "}
              </div>
              <div className="py-2">
                We listen to what matters to you, recognise your strengths and
                work alongside you to achieve your goals with{" "}
                <strong className="font-extrabold">
                  choice, dignity, confidence and independence
                </strong>
                .
              </div>
              <div className="py-2 font-extrabold">
                Love in Action. Truth in Everything We Do.
              </div>
              <div className="py-2 font-extrabold">
                Good Works Disability Services — supporting people to live a
                fulfilling and valued life.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
