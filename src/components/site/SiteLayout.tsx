import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sprout, Moon, Sun } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/commodities", label: "Commodities" },
  { to: "/insights", label: "Market Insights" },
  { to: "/farmers", label: "Farmers" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("agricom-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const nd = !d;
      document.documentElement.classList.toggle("dark", nd);
      localStorage.setItem("agricom-theme", nd ? "dark" : "light");
      return nd;
    });
  };
  return { dark, toggle };
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft transition-transform group-hover:rotate-6">
              <Sprout className="size-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              AgriCom <span className="text-primary">PH</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-accent transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-primary bg-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="size-9 grid place-items-center rounded-md hover:bg-accent transition-colors"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              to="/commodities"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-soft"
            >
              Explore
            </Link>
            <button
              className="lg:hidden size-9 grid place-items-center rounded-md hover:bg-accent"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                  activeProps={{ className: "px-3 py-2 rounded-md text-sm font-medium text-primary bg-accent" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-secondary/40 mt-20">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                <Sprout className="size-5" />
              </span>
              <span className="font-display text-xl font-semibold">AgriCom PH</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Celebrating the breadth and brilliance of Philippine agriculture—one commodity at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/commodities" className="hover:text-foreground">Commodities</Link></li>
              <li><Link to="/insights" className="hover:text-foreground">Market Insights</Link></li>
              <li><Link to="/farmers" className="hover:text-foreground">Farmers & Co-ops</Link></li>
              <li><Link to="/news" className="hover:text-foreground">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Stay in the loop</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-3 py-2 rounded-md bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} AgriCom PH. Proudly Filipino.</p>
            <p>Made with care for farmers, buyers, and the next generation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
