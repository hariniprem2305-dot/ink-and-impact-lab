import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/journey", label: "Journey" },
  { to: "/services", label: "Services & Contact" },
];

export function SiteNav() {
  return (
    <header className="border-b border-foreground/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:py-6">
        <Link to="/" className="eyebrow">
          Harini&nbsp;P — Portfolio
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-foreground/60 transition-colors hover:text-foreground [&.active]:text-foreground"
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden text-right md:block">
          <span className="eyebrow text-foreground/60">Vol. 01 · 2026</span>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/15">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h3 className="font-display text-2xl">HARINI P</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Author · Content Writer · Technical Writer · Script Writer · AI Content Writer · Content Creator
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
            <nav className="flex gap-6">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </nav>
            <span className="eyebrow text-foreground/50">© 2026 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
