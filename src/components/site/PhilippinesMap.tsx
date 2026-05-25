import { useState } from "react";

type Region = {
  id: string;
  name: string;
  cx: number;
  cy: number;
  crops: string[];
};

const regions: Region[] = [
  { id: "ilocos", name: "Ilocos & Cordillera", cx: 145, cy: 95, crops: ["Rice", "Mango", "Coffee"] },
  { id: "cagayan", name: "Cagayan Valley", cx: 195, cy: 110, crops: ["Rice", "Corn"] },
  { id: "central-luzon", name: "Central Luzon", cx: 165, cy: 165, crops: ["Rice", "Sugarcane"] },
  { id: "bicol", name: "Bicol Region", cx: 230, cy: 230, crops: ["Coconut", "Abaca"] },
  { id: "visayas", name: "Western Visayas", cx: 175, cy: 295, crops: ["Sugarcane", "Mango"] },
  { id: "eastern-visayas", name: "Eastern Visayas", cx: 250, cy: 305, crops: ["Coconut", "Abaca"] },
  { id: "northern-min", name: "Northern Mindanao", cx: 215, cy: 380, crops: ["Pineapple", "Banana"] },
  { id: "davao", name: "Davao Region", cx: 280, cy: 430, crops: ["Banana", "Cacao", "Coconut"] },
  { id: "zamboanga", name: "Zamboanga", cx: 165, cy: 415, crops: ["Rubber", "Coconut"] },
  { id: "soccsksargen", name: "SOCCSKSARGEN", cx: 235, cy: 460, crops: ["Pineapple", "Corn", "Rubber"] },
];

export default function PhilippinesMap() {
  const [active, setActive] = useState<Region | null>(regions[6]);

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-center">
      <div className="lg:col-span-3 relative">
        <svg viewBox="0 0 420 560" className="w-full h-auto" role="img" aria-label="Map of Philippine agricultural regions">
          <defs>
            <linearGradient id="seaGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.92 0.04 200)" />
              <stop offset="100%" stopColor="oklch(0.85 0.05 210)" />
            </linearGradient>
            <linearGradient id="landGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.13 140)" />
              <stop offset="100%" stopColor="oklch(0.42 0.1 145)" />
            </linearGradient>
          </defs>
          <rect width="420" height="560" fill="url(#seaGrad)" opacity="0.35" rx="20" />

          {/* Stylized PH archipelago shapes */}
          <g fill="url(#landGrad)" stroke="oklch(0.32 0.08 145)" strokeWidth="1">
            {/* Luzon */}
            <path d="M150 50 q30 -10 40 20 q15 25 20 60 q10 30 -5 50 q-5 30 -25 55 q-25 25 -45 15 q-25 -5 -30 -35 q-10 -40 5 -75 q5 -45 40 -90 z" />
            {/* Luzon south tail */}
            <path d="M180 200 q30 15 50 50 q20 35 0 50 q-25 10 -50 -10 q-25 -20 -25 -45 q5 -30 25 -45 z" />
            {/* Mindoro */}
            <path d="M120 280 q15 -5 25 10 q5 20 -10 30 q-20 5 -25 -15 q-5 -20 10 -25 z" />
            {/* Panay/Negros */}
            <path d="M155 290 q25 -5 35 20 q10 25 -5 45 q-20 20 -40 5 q-15 -20 -10 -45 q5 -20 20 -25 z" />
            {/* Cebu */}
            <path d="M210 305 q12 0 15 25 q0 30 -15 40 q-15 -5 -15 -30 q0 -30 15 -35 z" />
            {/* Leyte/Samar */}
            <path d="M245 280 q20 5 25 35 q5 30 -10 50 q-20 5 -30 -20 q-10 -30 0 -55 q5 -15 15 -10 z" />
            {/* Palawan */}
            <path d="M60 320 q10 -10 25 5 q15 25 35 60 q15 30 -5 35 q-25 0 -45 -30 q-25 -30 -30 -55 q0 -15 20 -15 z" />
            {/* Mindanao */}
            <path d="M170 380 q40 -15 90 -5 q50 5 75 35 q15 30 0 60 q-20 35 -65 50 q-50 15 -90 0 q-40 -10 -55 -45 q-15 -45 5 -75 q15 -20 40 -20 z" />
          </g>

          {regions.map((r) => (
            <g key={r.id} onClick={() => setActive(r)} onMouseEnter={() => setActive(r)} style={{ cursor: "pointer" }}>
              <circle
                cx={r.cx}
                cy={r.cy}
                r={active?.id === r.id ? 12 : 7}
                fill="var(--color-gold)"
                stroke="var(--color-primary)"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              <circle
                cx={r.cx}
                cy={r.cy}
                r={active?.id === r.id ? 22 : 12}
                fill="var(--color-gold)"
                opacity="0.25"
                className="transition-all duration-300"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">Interactive Map</div>
        <h3 className="font-display text-3xl">17 farming regions, one bountiful nation</h3>
        <p className="text-muted-foreground">
          Hover the highlighted dots to see what each region is famous for. From the rice
          terraces of the Cordillera to the cacao groves of Davao, every island contributes
          to the Philippine harvest.
        </p>
        {active && (
          <div className="p-5 rounded-2xl border border-border bg-card shadow-soft animate-fade-in">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Region</div>
            <div className="font-display text-2xl mb-3">{active.name}</div>
            <div className="flex flex-wrap gap-2">
              {active.crops.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
