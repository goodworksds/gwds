import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-light" | "ghost" | "dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-sunrise text-white shadow-soft hover:shadow-lift hover:brightness-105",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-secondary",
  "outline-light":
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
  dark: "border border-white/30 bg-black text-white hover:bg-white/10 hover:text-black",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type,
  ...props
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  [key: string]: unknown;
}) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
