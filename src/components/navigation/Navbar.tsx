import Link from "next/link";
import type { NavLink } from "@/constants/portfolio";

const pageTransition = ["page"];

export function Navbar({
  ariaLabel = "Primary navigation",
  links,
  mark = "VK / 2026",
  status,
}: Readonly<{
  ariaLabel?: string;
  links: readonly NavLink[];
  mark?: string;
  status?: string;
}>) {
  return (
    <nav className="nav" aria-label={ariaLabel}>
      <Link className="mark magnetic" href="/" transitionTypes={pageTransition} aria-label={`${mark}, Vinayak Kumar home`}>
        {mark}
      </Link>
      <ul>
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            {link.external ? (
              <a
                className="magnetic"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link className="magnetic" href={link.href} transitionTypes={pageTransition}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
        {status ? <li className="live">{status}</li> : null}
      </ul>
    </nav>
  );
}
