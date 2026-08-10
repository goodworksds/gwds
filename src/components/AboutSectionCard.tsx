import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Target,
  Eye,
  HeartHandshake,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { AboutSection } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  "our-story": BookOpen,
  mission: Target,
  vision: Eye,
  "our-values": HeartHandshake,
  "meet-our-team": Users,
  "why-choose-us": ShieldCheck,
};

export default function AboutSectionCard({ section }: { section: AboutSection }) {
  const Icon = icons[section.slug] ?? HeartHandshake;

  return (
    <Link
      href={`/about-us/${section.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunrise text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
        {section.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {section.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
