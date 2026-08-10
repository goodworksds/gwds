"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Button } from "@/components/Button";
import { aboutSections, navLinks, services, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type DropdownItem = { label: string; href: string };

const dropdownItemsByHref: Record<string, DropdownItem[]> = {
  "/about-us": [
    ...aboutSections.map((section) => ({
      label: section.title,
      href: `/about-us/${section.slug}`,
    })),
    { label: "View all about us", href: "/about-us" },
  ],
  "/services": [
    ...services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
    { label: "View all services", href: "/services" },
  ],
};

function DesktopNavDropdown({
  label,
  href,
  items,
  isActive,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  href: string;
  items: DropdownItem[];
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <span
        className={cn(
          "flex items-center gap-1 text-sm font-medium text-foreground/80",
          isActive && "text-primary text-selected",
        )}
      >
        <Link href={href} className="transition-colors hover:text-primary">
          {label}
        </Link>
        <button
          type="button"
          aria-label={
            isOpen ? `Collapse ${label} menu` : `Expand ${label} menu`
          }
          aria-expanded={isOpen}
          onClick={onOpen}
          onFocus={onOpen}
          className="flex h-5 w-5 items-center justify-center text-foreground/80 transition-colors hover:text-primary"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-150",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </span>

      {isOpen && (
        <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isViewAll = item.label.startsWith("View all");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block px-5 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary",
                    isLast &&
                      isViewAll &&
                      "border-t border-border font-semibold text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({
  label,
  href,
  items,
  isActive,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  href: string;
  items: DropdownItem[];
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary",
          isActive && "bg-secondary text-primary text-selected",
        )}
      >
        <Link href={href} onClick={onNavigate} className="flex-1">
          {label}
        </Link>
        <button
          type="button"
          aria-label={isOpen ? `Collapse ${label}` : `Expand ${label}`}
          onClick={onToggle}
          className={cn(
            "flex h-8 w-8 items-center justify-center",
            isActive && "bg-secondary text-primary text-selected",
          )}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-150",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>
      {isOpen && (
        <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2 text-sm text-foreground/75 hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="bg-deep text-deep-foreground">
        <Container className="flex items-center justify-between py-2 text-xs sm:text-sm">
          <span className="truncate">{siteConfig.tagline}</span>
          <a
            href={siteConfig.phoneHref}
            className="flex shrink-0 items-center gap-1.5 font-semibold"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="flex items-center justify-between py-`">
          <Logo variant="light" />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const items = dropdownItemsByHref[link.href];
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              if (items) {
                return (
                  <DesktopNavDropdown
                    key={link.href}
                    label={link.label}
                    href={link.href}
                    items={items}
                    isActive={isActive}
                    isOpen={openDropdown === link.href}
                    onOpen={() => setOpenDropdown(link.href)}
                    onClose={() => setOpenDropdown(null)}
                  />
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                    pathname === link.href && "text-primary text-selected",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="px-5 py-2.5">
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-deep lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </div>

      {open && (
        <div className="border-b border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-1">
            {navLinks.map((link) => {
              const items = dropdownItemsByHref[link.href];
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              if (items) {
                return (
                  <MobileNavDropdown
                    key={link.href}
                    label={link.label}
                    href={link.href}
                    items={items}
                    isActive={isActive}
                    isOpen={openMobileDropdown === link.href}
                    onToggle={() =>
                      setOpenMobileDropdown((v) =>
                        v === link.href ? null : link.href,
                      )
                    }
                    onNavigate={() => setOpen(false)}
                  />
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary",
                    pathname === link.href &&
                      "bg-secondary text-primary text-selected",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href="/contact"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
