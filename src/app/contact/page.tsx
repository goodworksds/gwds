import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us a little about the supports you're after and we'll be in touch within one business day.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  // { icon: MapPin, label: "Office", value: siteConfig.address },
  { icon: Clock, label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let's start the conversation"
            description="Tell us a little about the supports you're after and we'll be in touch within one business day."
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
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-6">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-0.5 block text-base font-medium text-foreground hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-base font-medium text-foreground">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
