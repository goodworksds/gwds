import type { Metadata } from "next";
import Image from "next/image";
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
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="About Us"
            title="Love in Action. Truth in Everything We Do."
            description={
              <>
                At{" "}
                <strong className="font-extrabold">
                  Good Works Disability Services (GWDS)
                </strong>
                , we are passionate about supporting people with diverse needs
                and making a meaningful difference in their lives.
                <br />
                <br />
                We believe every person is uniquely created with purpose,
                strengths and potential. Our focus is not on what a person
                cannot do, but on recognising their abilities, supporting their
                aspirations and empowering them to live a fulfilling and valued
                life.
              </>
            }
            light
          />
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/why-us.jpg"
              alt="Love in Action. Truth in Everything We Do"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section id="who-we-are" className="scroll-mt-32 py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl text-primary uppercase font-bold">
              Who We Are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              GWDS is committed to providing person-centred, compassionate and
              professional support that respects the individuality, choices and
              dignity of every person.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              While people receiving disability support are commonly referred to
              as participants or clients, we prefer the term “differently
              abled.” We believe this reflects our conviction that disability
              does not define a person. Every individual has unique abilities,
              gifts and potential, and deserves to be treated with dignity,
              respect and understanding.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="mission"
        className="bg-secondary/60 scroll-mt-32 py-12 sm:py-16"
      >
        <Container className="grid gap-8 sm:grid-cols-2">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl text-primary uppercase font-bold">
              Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To provide the highest quality support and services that empower
              people living with a disability to lead a fulfilling and valued.
            </p>
          </div>
        </Container>
      </section>

      <section id="vision" className="scroll-mt-32 py-12 sm:py-16">
        <Container className="grid gap-8 sm:grid-cols-2">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl text-primary uppercase font-bold">
              Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To lead with love in action and truth, creating a caring community
              where respect, integrity, confidentiality, growth, safety,
              harmony, and passion inspire every life we touch.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="our-philosophy"
        className="bg-secondary/60 scroll-mt-32 py-12 sm:py-16"
      >
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl text-primary uppercase font-bold">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-bold">
              Our philosophy is built around our guiding principle:
            </p>
            <p className="mt-4 text-lg leading-relaxed text-primary font-extrabold">
              “LOVE IN ACTION & TRUTH”
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              For us, this means putting compassion into practice, building
              relationships based on honesty and trust, and genuinely caring
              about the people we support.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We take the time to listen, understand individual needs and work
              alongside each person to help them achieve their goals and enjoy
              greater independence and participation in their community.
            </p>
          </div>
        </Container>
      </section>

      <section id="our-commitment" className="scroll-mt-32 py-12 sm:py-16">
        <Container className="grid gap-8 sm:grid-cols-2">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl text-primary uppercase font-bold">
              Our Commitment
            </h3>
            <div className="mt-4 text-lg leading-relaxed text-muted-foreground font-bold">
              We are committed to providing support that is:
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Respectful</h4>
              We value the dignity, individuality, choices and rights of every
              person.
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Honest & Trustworthy</h4>
              We build strong relationships through openness, integrity and
              genuine communication.
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Safe & Confidential</h4>
              We respect privacy and confidentiality while creating a safe,
              inclusive and harmonious environment.
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Person-Centred</h4>
              We tailor our support around each individual's needs, preferences,
              goals and aspirations.
            </div>

            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Empowering</h4>
              We encourage independence, confidence, choice and control.
            </div>

            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Compassionate</h4>
              We provide support with kindness, patience, understanding and
              genuine care.
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Focused on Growth</h4>
              We are committed to continuous development and improvement in the
              way we deliver our services.
            </div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">
              <h4 className="text-primary font-bold">Walking Alongside You</h4>
              At GWDS, we believe disability support is more than simply
              providing a service. It is about people, relationships and making
              a difference.
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We are here to listen, support, encourage and walk alongside the
              people we serve—helping them pursue their goals, discover their
              strengths and live life with greater choice, confidence and
              purpose.
            </p>
            <p className="mt-3 text-base leading-relaxed text-primary font-extrabold">
              Good Works Disability Services — Love in Action & Truth.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
