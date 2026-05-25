import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Leaf, MapPin, Sparkles, TrendingUp } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import PhilippinesMap from "@/components/site/PhilippinesMap";
import StatCounter from "@/components/site/StatCounter";
import { commodities } from "@/lib/commodities";
import heroImg from "@/assets/hero-rice-terraces.jpg";
import farmerImg from "@/assets/farmer-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AgriCom PH — Discover Philippine Agricultural Commodities" },
      { name: "description", content: "From rice terraces to cacao groves: explore the Philippines' top agricultural commodities, regions, and market insights." },
    ],
  }),
});

function Index() {
  const featured = commodities.slice(0, 6);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Aerial view of Philippine rice terraces at golden hour"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 lg:px-8 pt-24 pb-32 lg:pt-36 lg:pb-44">
          <div className="max-w-3xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 backdrop-blur-sm text-xs font-medium animate-fade-in">
              <Sparkles className="size-3.5" />
              Proudly Filipino agriculture, beautifully presented
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] animate-fade-up">
              Discover the Philippines' Top
              <span className="block text-[oklch(0.86_0.14_88)]">Agricultural Commodities</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-2xl">
              From the legendary rice terraces of the Cordilleras to the cacao groves of
              Davao—explore the crops, regions, and people that feed a nation and supply the world.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/commodities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[oklch(0.86_0.14_88)] text-[oklch(0.22_0.04_80)] font-semibold shadow-card hover:-translate-y-0.5 transition-transform"
              >
                Explore Commodities <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
              >
                <TrendingUp className="size-4" /> View Market Trends
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 -mt-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-8 rounded-3xl bg-card border border-border shadow-card">
          {[
            { v: 8.9, suf: "%", label: "Agriculture share of GDP", dec: 1 },
            { v: 17, suf: "", label: "Farming regions nationwide" },
            { v: 12, suf: "M", label: "Filipinos employed by farming" },
            { v: 6.8, suf: "B", pre: "$", label: "Agri-export value (USD)", dec: 1 },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-4">
              <div className="font-display text-4xl lg:text-5xl text-primary font-semibold">
                <StatCounter value={s.v} suffix={s.suf} prefix={s.pre} decimals={s.dec ?? 0} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">A nation grown by land & sea</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">
              Agriculture is the soul of the Philippine economy.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Spanning 7,641 islands and 30 million hectares of fertile land, Philippine
              agriculture supports millions of families and produces some of the world's
              finest tropical commodities. AgriCom PH gathers it all into one beautiful,
              data-rich portal.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Leaf, t: "12 flagship crops", d: "Curated profiles for every major commodity." },
                { icon: MapPin, t: "Region-by-region", d: "See who grows what across the archipelago." },
                { icon: BarChart3, t: "Live market view", d: "Prices, exports, and forecast trends." },
                { icon: Sparkles, t: "Farmer stories", d: "Real voices from cooperatives nationwide." },
              ].map((f) => (
                <div key={t(f.t)} className="p-4 rounded-2xl border border-border bg-card">
                  <f.icon className="size-5 text-primary" />
                  <div className="mt-3 font-semibold">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <img
                src={farmerImg}
                alt="Filipino farmer smiling in a rice field at sunrise"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs p-5 rounded-2xl bg-card border border-border shadow-card">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Farmer Spotlight</div>
              <div className="mt-1 font-display text-lg">"Our land has fed generations."</div>
              <div className="mt-1 text-xs text-muted-foreground">— Mang Tonyo, Nueva Ecija</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COMMODITIES */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-28">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Featured Commodities</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">The crops that define us</h2>
          </div>
          <Link to="/commodities" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all 12 commodities <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to="/commodities/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={`Philippine ${c.name}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                {c.exportRank && (
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[var(--color-gold)] text-[var(--color-gold-foreground)]">
                    Export #{c.exportRank}
                  </span>
                )}
                {c.organic && (
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary text-primary-foreground">
                    Organic
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <span className="text-xs text-muted-foreground italic">{c.filipino}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.short}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  {c.regions.slice(0, 2).join(" · ")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-32">
        <PhilippinesMap />
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-28">
        <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl">Ready to dig deeper into Philippine agriculture?</h2>
            <p className="mt-4 text-primary-foreground/85 text-lg">
              Browse the full commodities catalog, see live market trends, and meet the
              cooperatives shaping our food future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/commodities" className="px-6 py-3 rounded-full bg-[oklch(0.86_0.14_88)] text-[oklch(0.22_0.04_80)] font-semibold hover:-translate-y-0.5 transition-transform">
                Explore Commodities
              </Link>
              <Link to="/insights" className="px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition-colors">
                Market Insights
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-[oklch(0.86_0.14_88)]/20 blur-3xl" />
        </div>
      </section>
    </SiteLayout>
  );
}

function t(s: string) { return s; }
