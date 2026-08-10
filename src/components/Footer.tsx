import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { navLinks, services, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-deep text-deep-foreground">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.footerTagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sun/99">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
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
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sun/99">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
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
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sun/99">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="hover:text-sun hover:underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-sun hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/50">
          <p>
            © {year} {siteConfig.name}. Template website. NDIS Provider.
          </p>
        </Container>
      </div>
    </footer>
  );
}
