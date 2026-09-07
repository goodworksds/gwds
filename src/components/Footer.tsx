import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { navLinks, services, siteConfig } from "@/lib/site-data";

const footerServiceSlugs = [
  "community-participation",
  "household-tasks",
  "high-intensity-daily-personal-activities",
  "travel-transport",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerServices = footerServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service) => service !== undefined);

  return (
    <footer className="bg-gradient-deep text-deep-foreground">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 py-14">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs text-base leading-relaxed text-white/70">
            {siteConfig.footerTagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sun/99">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-sun hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-white/80 hover:text-sun hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sun/99">
            <Link href="/services" className="hover:underline">
              Our Services
            </Link>
          </h3>
          <ul className="mt-4 space-y-2.5 text-base">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-white/80 hover:text-sun hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sun/99">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-base text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              {siteConfig.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              Mon–Fri 9:00am – 5:00pm
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61592779771385"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Good Works Disability Services on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-sun hover:text-sun"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/goodworksds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Good Works Disability Services on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-sun hover:text-sun"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-white/50">
          <p>
            © {year} {siteConfig.name}. Registered NDIS Provider.
          </p>
        </Container>
      </div>
    </footer>
  );
}
