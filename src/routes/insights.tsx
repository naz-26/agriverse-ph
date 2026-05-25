import { createFileRoute } from "@tanstack/react-router";
import { TrendingDown, TrendingUp } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { commodities } from "@/lib/commodities";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
  head: () => ({
    meta: [
      { title: "Market Insights — AgriCom PH" },
      { name: "description", content: "Live commodity price trends, export statistics, and demand forecasts for Philippine agriculture." },
    ],
  }),
});

const priceTrends = commodities.slice(0, 6).map((c) => ({
  name: c.name,
  price: c.pricePhp,
  change: (Math.random() - 0.4) * 12,
  series: Array.from({ length: 12 }, () => Math.random() * 0.6 + 0.4),
}));

function InsightsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Market Insights</div>
          <h1 className="mt-2 font-display text-5xl lg:text-6xl">A pulse on Philippine agri-markets</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Track commodity prices, demand forecasts, and export performance across all 17 regions.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-12 space-y-12">
        {/* Top KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total agri-export value", val: "$6.8B", sub: "+4.2% YoY", up: true },
            { label: "Top export crop", val: "Banana", sub: "$1.9B shipped" },
            { label: "Rice self-sufficiency", val: "81%", sub: "Target 95% by 2028" },
            { label: "Active cooperatives", val: "5,420", sub: "+312 this year", up: true },
          ].map((k) => (
            <div key={k.label} className="p-6 rounded-2xl border border-border bg-card">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{k.label}</div>
              <div className="mt-2 font-display text-3xl">{k.val}</div>
              <div className={`mt-1 text-xs ${k.up ? "text-primary" : "text-muted-foreground"}`}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Price trends */}
        <div>
          <h2 className="font-display text-3xl mb-6">Commodity price trends</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceTrends.map((p) => {
              const up = p.change >= 0;
              return (
                <div key={p.name} className="p-5 rounded-2xl border border-border bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">{p.name}</div>
                      <div className="font-display text-2xl mt-1">₱{p.price.toFixed(2)}/kg</div>
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${up ? "text-primary" : "text-destructive"}`}>
                      {up ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                      {p.change.toFixed(1)}%
                    </div>
                  </div>
                  <svg viewBox="0 0 120 40" className="mt-4 w-full h-12">
                    <polyline
                      fill="none"
                      stroke={up ? "var(--color-primary)" : "var(--color-destructive)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={p.series.map((v, i) => `${i * (120 / 11)},${40 - v * 38}`).join(" ")}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Export ranking */}
        <div>
          <h2 className="font-display text-3xl mb-6">Top export commodities</h2>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-5 py-3">Rank</th>
                  <th className="text-left px-5 py-3">Commodity</th>
                  <th className="text-left px-5 py-3">Lead region</th>
                  <th className="text-left px-5 py-3">Top market</th>
                </tr>
              </thead>
              <tbody>
                {commodities
                  .filter((c) => c.exportRank)
                  .sort((a, b) => (a.exportRank ?? 99) - (b.exportRank ?? 99))
                  .map((c) => (
                    <tr key={c.slug} className="border-t border-border hover:bg-accent/40 transition">
                      <td className="px-5 py-4 font-display text-lg text-primary">#{c.exportRank}</td>
                      <td className="px-5 py-4 font-medium">{c.name}</td>
                      <td className="px-5 py-4 text-muted-foreground">{c.regions[0]}</td>
                      <td className="px-5 py-4 text-muted-foreground">{c.exportMarkets[0]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
