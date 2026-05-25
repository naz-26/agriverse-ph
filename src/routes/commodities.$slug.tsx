import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Globe2, Leaf, MapPin, TrendingUp } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { commodities, getCommodity, type Commodity } from "@/lib/commodities";

export const Route = createFileRoute("/commodities/$slug")({
  loader: ({ params }): Commodity => {
    const c = getCommodity(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Commodity"} — AgriCom PH` },
      { name: "description", content: loaderData?.short ?? "" },
      { property: "og:title", content: `${loaderData?.name} — Philippine Agriculture` },
      { property: "og:image", content: loaderData?.image },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl">Commodity not found</h1>
        <Link to="/commodities" className="mt-6 inline-block text-primary">Back to catalog</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="container mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button onClick={reset} className="mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: DetailPage,
});

function DetailPage() {
  const c = Route.useLoaderData() as Commodity;
  const related = commodities.filter((x) => x.slug !== c.slug && x.type === c.type).slice(0, 3);

  const maxTons = Math.max(...c.production.map((p) => p.tons));

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] lg:aspect-[21/7] overflow-hidden">
          <img src={c.image} alt={c.name} width={1920} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 -mt-32 lg:-mt-44 relative">
          <Link to="/commodities" className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="size-4" /> Back to catalog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {c.exportRank && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[var(--color-gold)] text-[var(--color-gold-foreground)]">
                Export #{c.exportRank}
              </span>
            )}
            {c.organic && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary text-primary-foreground">
                Organic
              </span>
            )}
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-card border border-border capitalize">
              {c.type}
            </span>
          </div>
          <h1 className="font-display text-6xl lg:text-7xl text-foreground">{c.name}</h1>
          {c.filipino && <p className="mt-2 text-xl text-muted-foreground italic">{c.filipino}</p>}
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{c.overview}</p>
        </div>
      </section>

      {/* Quick facts grid */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Fact icon={MapPin} label="Main regions" value={c.regions.join(", ")} />
          <Fact icon={Calendar} label="Season" value={c.seasons.join(", ")} />
          <Fact icon={Globe2} label="Export markets" value={c.exportMarkets.join(", ")} />
          <Fact icon={TrendingUp} label="Avg. price" value={`₱${c.pricePhp} per kg`} />
        </div>
      </section>

      {/* Detail sections */}
      <section className="container mx-auto max-w-7xl px-4 lg:px-8 mt-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <DetailBlock title="Nutritional value" body={c.nutrition} />
          <DetailBlock title="Farming methods" body={c.farming} />
          <DetailBlock title="Sustainability practices" body={c.sustainability} icon={Leaf} />

          {/* Production chart */}
          <div>
            <h2 className="font-display text-3xl mb-6">Production over time</h2>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-end gap-3 h-56">
                {c.production.map((p) => (
                  <div key={p.year} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs font-semibold text-muted-foreground">
                      {(p.tons / 1_000_000).toFixed(2)}M
                    </div>
                    <div
                      className="w-full rounded-t-lg transition-all hover:opacity-80"
                      style={{
                        height: `${(p.tons / maxTons) * 100}%`,
                        background: "var(--gradient-gold)",
                      }}
                    />
                    <div className="text-xs text-muted-foreground">{p.year}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Production volume in metric tons.</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="font-display text-xl mb-3">Farmer spotlight</h3>
            <p className="text-sm text-muted-foreground italic">
              "Growing {c.name.toLowerCase()} has been our family's tradition for three
              generations. Every harvest carries our story."
            </p>
            <p className="mt-3 text-xs text-muted-foreground">— Cooperative member, {c.regions[0]}</p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="font-display text-xl mb-4">Related commodities</h3>
            <ul className="space-y-3">
              {related.length === 0 && <li className="text-sm text-muted-foreground">More coming soon.</li>}
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/commodities/$slug" params={{ slug: r.slug }} className="flex items-center gap-3 group">
                    <img src={r.image} alt={r.name} className="size-12 rounded-md object-cover" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.short.slice(0, 40)}…</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Fact({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-card">
      <Icon className="size-4 text-primary" />
      <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}

function DetailBlock({ title, body, icon: Icon }: { title: string; body: string; icon?: React.ElementType }) {
  return (
    <div>
      <h2 className="font-display text-3xl mb-3 flex items-center gap-2">
        {Icon && <Icon className="size-6 text-primary" />}
        {title}
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">{body}</p>
    </div>
  );
}
