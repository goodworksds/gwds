import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_ASPECT = 502 / 604;

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label="Good Works Disability Services home"
      className="flex items-center"
    >
      <span
        className={cn(
          "flex items-center rounded-xl",
          variant === "dark" && "bg-white px-2.5 py-1.5",
        )}
      >
        <Image
          src="/logo.png"
          alt="Good Works Disability Services"
          width={Math.round(96 * LOGO_ASPECT)}
          height={96}
          className="h-12 w-auto sm:h-30"
          priority
        />
      </span>
    </Link>
  );
}
