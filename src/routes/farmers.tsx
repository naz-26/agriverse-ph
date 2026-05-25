import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/site/SiteLayout";
import farmer from "@/assets/farmer-portrait.jpg";

export const Route = createFileRoute("/farmers")({
  component: FarmersPage,
  head: () => ({
    meta: [
      { title: "Farmers & Cooperatives — AgriCom PH" },
      { name: "description", content: "Meet the cooperatives, farmer leaders, and sustainable initiatives shaping Philippine agriculture." },
    ],
  }),
});

const coops = [
  { name: "Sagada Heirloom Rice Co-op", region: "Cordillera", members: 320, focus: "Heritage rice varieties" },
  { name: "Davao Cacao Growers Alliance", region: "Davao Region", members: 780, focus: "Fine-flavor cacao exports" },
  { name: "Negros Sugar Workers Federation", region: "Western Visayas", members: 1240, focus: "Equitable mill agreements" },
  { name: "Bicol Abaca Producers", region: "Bicol", members: 410, focus: "Manila hemp processing" },
  { name: "Mindoro Mango Farmers", region: "MIMAROPA", members: 215, focus: "Export-grade carabao mango" },
  { name: "Bukidnon Coffee Roasters", region: "Northern Mindanao", members: 165, focus: "Specialty arabica" },
];

const stories = [
  { name: "Aling Marites", title: "From sari-sari to specialty cacao", body: "Built a women-led nursery supplying 30,000 cacao seedlings yearly across Davao." },
  { name: "Mang Ramon", title: "Reviving heirloom rice", body: "Champions the Tinawon variety in Banaue, working with chefs nationwide." },
  { name: "Ate Lina", title: "Coconut to community power", body: "Turned coco husks into a thriving handicraft brand, employing 40 neighbors." },
];

function FarmersPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="aspect-[21/8] overflow-hidden">
          <img src={farmer} alt="Filipino farmer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 -mt-32 relative">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Farmers & Cooperatives</div>
          <h1 className="mt-2 font-display text-5xl lg:text-6xl max-w-3xl">
            The hands that grow the Philippines
          </h1>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <h2 className="font-display text-3xl mb-8">Featured cooperatives</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coops.map((c) => (
            <div key={c.name} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card transition">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">{c.region}</div>
              <h3 className="mt-2 font-display text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.focus}</p>
              <div className="mt-4 text-sm">
                <span className="font-semibold">{c.members.toLocaleString()}</span>
                <span className="text-muted-foreground"> active members</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 pb-20">
        <h2 className="font-display text-3xl mb-8">Success stories</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {stories.map((s) => (
            <article key={s.name} className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-[var(--color-gold)]/10 border border-border">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Spotlight</div>
              <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
              <p className="mt-5 text-sm font-semibold">— {s.name}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
