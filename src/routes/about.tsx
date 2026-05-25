import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — AgriCom PH" },
      { name: "description", content: "Our mission to celebrate and uplift Philippine agriculture through data, storytelling, and community." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto max-w-4xl px-4 lg:px-8 pt-20 pb-12">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">About AgriCom PH</div>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl">A love letter to Philippine agriculture.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          AgriCom PH gathers everything you need to understand and appreciate the Philippines'
          farming sector—commodity profiles, regional insights, market data, and the human stories
          behind every harvest.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-12 grid lg:grid-cols-2 gap-10">
        <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
          <div className="text-xs uppercase tracking-widest opacity-80 font-semibold">Mission</div>
          <h2 className="mt-3 font-display text-3xl">Make agricultural knowledge accessible, beautiful, and useful.</h2>
          <p className="mt-4 opacity-90">
            We translate complex farming data into clear, story-driven experiences for buyers,
            investors, students, and the farmers themselves.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Vision</div>
          <h2 className="mt-3 font-display text-3xl">A Philippines where every farmer thrives and every commodity is celebrated.</h2>
          <p className="mt-4 text-muted-foreground">
            From the Cordillera terraces to the cacao groves of Davao—we believe Filipino
            agriculture deserves world-class storytelling.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <h2 className="font-display text-3xl mb-8">The team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: "Andrea Cruz", r: "Founder & Editor" },
            { n: "Miguel Reyes", r: "Data & Insights" },
            { n: "Karla Santos", r: "Field Stories" },
            { n: "Joaquin de la Rosa", r: "Design" },
          ].map((p) => (
            <div key={p.n} className="p-5 rounded-2xl border border-border bg-card text-center">
              <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-primary to-[var(--color-gold)]" />
              <div className="mt-4 font-display text-lg">{p.n}</div>
              <div className="text-xs text-muted-foreground">{p.r}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <h2 className="font-display text-3xl mb-6">Our partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Department of Agriculture", "PhilRice", "PCA", "DTI Export"].map((p) => (
            <div key={p} className="h-24 rounded-2xl border border-border bg-secondary/30 grid place-items-center text-sm font-medium text-muted-foreground text-center px-4">
              {p}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
