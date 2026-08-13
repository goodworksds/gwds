import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { services, testimonials, whyUs } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-deep">
        <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Support that rises with you,{" "}
              <span className="text-gradient-sunrise">every day</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Good Works Disability Services delivers warm, practical disability
              support across Melbourne — from everyday living and community
              connection to supported independent living and complex nursing
              care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/services" variant="outline-light">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/home-1.jpeg"
              alt="A support worker sharing a warm moment with a participant"
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Services built around your NDIS plan"
            description="Choose one support or build a full package — our team coordinates it so nothing falls between the gaps."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why us"
              title="The professionalism of a big provider, the warmth of a small team"
            />
            <div className="mt-8">
              <Button href="/about-us" className="text-ring">
                About Good Works
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            align="center"
            title="What families tell us"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-sunrise py-16">
        <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Ready to talk about your supports?
            </h2>
            <p className="mt-2 text-white/90">
              Free, no-obligation chat with a Melbourne-based coordinator.
            </p>
          </div>
          <Button
            href="/contact"
            variant="dark"
            className="border-black bg-black text-secondary hover:bg-white/90"
          >
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}
