import Link from "next/link";
import Container from "@/components/Container";
import { aboutSections } from "@/lib/site-data";

export default function AboutSectionLayout({
  currentSlug,
  children,
}: {
  currentSlug: string;
  children: React.ReactNode;
}) {
  const section = aboutSections.find((s) => s.slug === currentSlug);
  const otherSections = aboutSections.filter((s) => s.slug !== currentSlug);

  return (
    <>
      <section className="bg-gradient-deep py-20 sm:py-24">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sun/99">
            About Us Test
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            {section?.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-white/85">
            {section?.tagline}
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">{children}</div>

          <aside className="rounded-2xl border border-border bg-secondary/60 p-7">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Other About Us pages
            </h3>
            <ul className="mt-4 space-y-3">
              {otherSections.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/about-us/${s.slug}`}
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
