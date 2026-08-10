import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  Home,
  ClipboardList,
  Building2,
  Layers,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  "daily-living": HeartHandshake,
  "community-participation": Users,
  "household-tasks": Home,
  "support-coordination": ClipboardList,
  sil: Building2,
  "nursing-complex-care": Stethoscope,
  "more-services": Layers,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.slug] ?? HeartHandshake;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunrise text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {service.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
