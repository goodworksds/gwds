import type { Metadata } from "next";
import { FileText, ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { externalLinks, resourceDocuments } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, forms and useful links for participants, families and coordinators — plus helpful NDIS external links.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-deep py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Guides, forms and useful links"
            description="Everything participants, families and coordinators commonly need, in one place."
            light
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading title="Documents & forms" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceDocuments.map((doc) => (
              <div
                key={doc.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                  <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-primary">
                    PDF
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-12 sm:py-16">
        <Container className="max-w-2xl">
          <SectionHeading title="Helpful external links" />
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-foreground hover:text-primary"
                >
                  {link.title}
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
