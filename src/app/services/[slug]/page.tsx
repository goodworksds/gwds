import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-deep py-20 sm:py-24">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sun/99">
            Service
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-white/85">
            {service.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {service.description}
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              What&rsquo;s included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-sunrise text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href={`/contact?service=${service.slug}`}>
                Enquire about {service.title}
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-secondary/60 p-7">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Other services
            </h3>
            <ul className="mt-4 space-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-medium text-foreground/80 hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
