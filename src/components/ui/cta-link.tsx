import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
}: CtaLinkProps) {
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
