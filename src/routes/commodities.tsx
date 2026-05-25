import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { commodities } from "@/lib/commodities";

export const Route = createFileRoute("/commodities")({
  component: CommoditiesPage,
  head: () => ({
    meta: [
      { title: "Commodities Catalog — AgriCom PH" },
      { name: "description", content: "Browse the Philippines' top 12 agricultural commodities. Filter by region, type, export status, and more." },
    ],
  }),
});

const allRegions = Array.from(new Set(commodities.flatMap((c) => c.regions))).sort();
const types = ["grain", "fruit", "industrial", "beverage", "fiber", "root"] as const;

function CommoditiesPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [exportOnly, setExportOnly] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(350);

  const filtered = useMemo(() => {
    return commodities.filter((c) => {
      if (q && !`${c.name} ${c.filipino ?? ""} ${c.short}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (region && !c.regions.includes(region)) return false;
      if (type && c.type !== type) return false;
      if (exportOnly && !c.exportRank) return false;
      if (organicOnly && !c.organic) return false;
      if (c.pricePhp > maxPrice) return false;
      return true;
    });
  }, [q, region, type, exportOnly, organicOnly, maxPrice]);

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Commodities Catalog</div>
          <h1 className="mt-2 font-display text-5xl lg:text-6xl">The Philippine harvest</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Twelve flagship crops, each shaped by climate, culture, and craftsmanship. Filter
            by region, crop type, organic certification, or export tier.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar filters */}
          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <div className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="size-4 text-primary" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              <div className="relative mb-4">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search commodities…"
                  className="w-full pl-9 pr-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <FilterBlock label="Region">
                <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm">
                  <option value="">All regions</option>
                  {allRegions.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </FilterBlock>

              <FilterBlock label="Crop type">
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm capitalize">
                  <option value="">All types</option>
                  {types.map((t) => <option key={t} value={t} className="capitalize">{t}</option>)}
                </select>
              </FilterBlock>

              <FilterBlock label={`Max price: ₱${maxPrice}/kg`}>
                <input type="range" min={5} max={400} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[var(--color-primary)]" />
              </FilterBlock>

              <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
                <input type="checkbox" checked={exportOnly} onChange={(e) => setExportOnly(e.target.checked)} className="accent-[var(--color-primary)]" />
                Export commodities only
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={organicOnly} onChange={(e) => setOrganicOnly(e.target.checked)} className="accent-[var(--color-primary)]" />
                Organic certified
              </label>

              <button
                onClick={() => { setQ(""); setRegion(""); setType(""); setExportOnly(false); setOrganicOnly(false); setMaxPrice(350); }}
                className="mt-5 w-full px-3 py-2 rounded-md text-sm border border-border hover:bg-accent transition"
              >
                Reset filters
              </button>
            </div>
          </aside>

          {/* Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtered.length}</span> of {commodities.length} commodities
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-dashed border-border bg-card">
                <p className="text-muted-foreground">No commodities match your filters. Try resetting them.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((c) => (
                  <article key={c.slug} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-card transition hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={c.image}
                        alt={`Philippine ${c.name}`}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
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
                    </div>
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display text-2xl">{c.name}</h3>
                        <span className="text-sm font-semibold text-primary">₱{c.pricePhp}/kg</span>
                      </div>
                      <p className="text-xs text-muted-foreground italic">{c.filipino}</p>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{c.short}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="size-3.5 text-primary" />
                        {c.regions.slice(0, 2).join(" · ")}
                      </div>
                      <Link
                        to="/commodities/$slug"
                        params={{ slug: c.slug }}
                        className="mt-5 inline-flex w-full justify-center items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FilterBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      {children}
    </div>
  );
}
