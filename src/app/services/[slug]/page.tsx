import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import { services, type ServiceDetailBlock } from "@/lib/site-data";
import { renderRichText, stripRichText } from "@/lib/richText";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

function renderDetailBlock(block: ServiceDetailBlock, index: number) {
  if (block.type === "paragraph") {
    return (
      <p
        key={index}
        className="mt-5 text-lg leading-relaxed text-muted-foreground first:mt-0"
      >
        {renderRichText(block.text)}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h3
        key={index}
        className="mt-8 font-serif text-xl font-semibold text-foreground first:mt-0"
      >
        {renderRichText(block.text)}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="mt-5 space-y-4 first:mt-0">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-sunrise text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-lg leading-relaxed text-muted-foreground">
              {renderRichText(item)}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={index}
      className="mt-5 text-lg font-semibold text-primary first:mt-0"
    >
      {renderRichText(block.text)}
    </p>
  );
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
    description: stripRichText(service.description),
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

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sun/99">
              Service
            </span>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              {renderRichText(service.description)}
            </p>
          </div>
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={service.heroImage ?? "/images/placeholder-hero.svg"}
              alt={service.heroImage ? service.title : "Placeholder image"}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {service.detailBody ? (
              service.detailBody.map((block, index) =>
                renderDetailBlock(block, index),
              )
            ) : (
              <>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  What&rsquo;s included
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-sunrise text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-lg leading-relaxed text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-10">
              <Button href={`/contact?service=${service.slug}`}>
                Enquire about {service.title}
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-secondary/60 p-7 lg:sticky lg:top-28 lg:self-start">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Other services
            </h3>
            <ul className="mt-4 space-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-base font-medium text-foreground/80 hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl shadow-lift">
              <Image
                src={"/images/placeholder-hero.svg"}
                alt={service.heroImage ? service.title : "Placeholder image"}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
