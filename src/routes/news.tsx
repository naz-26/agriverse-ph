import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Articles — AgriCom PH" },
      { name: "description", content: "Latest news on Philippine agriculture, farming innovations, government programs, and climate updates." },
    ],
  }),
});

const articles = [
  { cat: "Innovation", date: "May 18, 2026", title: "AI-powered weather alerts now reach 1.2M Filipino farmers", excerpt: "DA partners with local tech startups to roll out hyperlocal forecasts via SMS." },
  { cat: "Policy", date: "May 12, 2026", title: "New Rice Industry Roadmap targets 95% self-sufficiency by 2028", excerpt: "Government unveils ₱30B investment in irrigation, mechanization, and seed R&D." },
  { cat: "Sustainability", date: "May 4, 2026", title: "Davao cacao farms earn Rainforest Alliance certification", excerpt: "Over 4,000 hectares now certified under sustainable agroforestry standards." },
  { cat: "Markets", date: "Apr 28, 2026", title: "Philippine mango exports to South Korea surge 22%", excerpt: "Guimaras carabao mangoes lead the rebound after a strong harvest season." },
  { cat: "Climate", date: "Apr 19, 2026", title: "El Niño contingency plan deploys drought-resilient seeds nationwide", excerpt: "PhilRice distributes 8,000 metric tons of climate-ready rice varieties." },
  { cat: "Community", date: "Apr 9, 2026", title: "Negros sugar workers gain block farm shares in landmark deal", excerpt: "10,000 farmworker families now hold equity in modernized milling operations." },
];

function NewsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">News & Articles</div>
          <h1 className="mt-2 font-display text-5xl lg:text-6xl">Stories from the field</h1>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="group p-6 rounded-2xl border border-border bg-card hover:shadow-card transition hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">{a.cat}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="size-3" /> {a.date}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl group-hover:text-primary transition">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
              <div className="mt-5 text-sm font-medium text-primary">Read article →</div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
