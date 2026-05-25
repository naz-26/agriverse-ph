import rice from "@/assets/commodity-rice.jpg";
import coconut from "@/assets/commodity-coconut.jpg";
import banana from "@/assets/commodity-banana.jpg";
import pineapple from "@/assets/commodity-pineapple.jpg";
import mango from "@/assets/commodity-mango.jpg";

export type Commodity = {
  slug: string;
  name: string;
  filipino?: string;
  image: string;
  regions: string[];
  exportRank: number | null;
  type: "grain" | "fruit" | "industrial" | "beverage" | "fiber" | "root";
  organic: boolean;
  pricePhp: number; // PHP per kg estimate
  short: string;
  overview: string;
  seasons: string[];
  exportMarkets: string[];
  nutrition: string;
  production: { year: number; tons: number }[];
  farming: string;
  sustainability: string;
};

const placeholder = rice;

export const commodities: Commodity[] = [
  {
    slug: "rice",
    name: "Rice",
    filipino: "Bigas / Palay",
    image: rice,
    regions: ["Central Luzon", "Cagayan Valley", "Western Visayas"],
    exportRank: null,
    type: "grain",
    organic: true,
    pricePhp: 52,
    short: "The heart of every Filipino meal and the country's largest crop by volume.",
    overview:
      "Rice is the staple food of more than 100 million Filipinos. The Philippines is among the world's top rice producers, with Central Luzon known as the 'Rice Granary of the Philippines.'",
    seasons: ["Wet season (May–Oct)", "Dry season (Nov–Apr)"],
    exportMarkets: ["Domestic-focused", "Limited specialty exports"],
    nutrition: "Excellent source of carbohydrates and B vitamins. Heirloom varieties offer higher fiber and minerals.",
    production: [
      { year: 2020, tons: 19_295_000 },
      { year: 2021, tons: 19_960_000 },
      { year: 2022, tons: 19_750_000 },
      { year: 2023, tons: 20_060_000 },
      { year: 2024, tons: 19_300_000 },
    ],
    farming: "Lowland irrigated, rainfed lowland, and upland systems. Heirloom terraces in the Cordilleras are a UNESCO heritage site.",
    sustainability: "Adoption of climate-resilient varieties, alternate wetting and drying (AWD), and System of Rice Intensification (SRI).",
  },
  {
    slug: "coconut",
    name: "Coconut",
    filipino: "Niyog",
    image: coconut,
    regions: ["Davao Region", "Zamboanga Peninsula", "Bicol", "Eastern Visayas"],
    exportRank: 2,
    type: "industrial",
    organic: true,
    pricePhp: 28,
    short: "The 'Tree of Life'—source of oil, milk, water, coir, and copra exports.",
    overview:
      "The Philippines is the world's second-largest coconut producer. Over 3.5 million farmers depend on coconut for their livelihood.",
    seasons: ["Year-round"],
    exportMarkets: ["United States", "Netherlands", "China", "Germany"],
    nutrition: "Rich in medium-chain triglycerides, electrolytes, and healthy fats.",
    production: [
      { year: 2020, tons: 14_490_000 },
      { year: 2021, tons: 14_700_000 },
      { year: 2022, tons: 14_900_000 },
      { year: 2023, tons: 15_320_000 },
      { year: 2024, tons: 15_100_000 },
    ],
    farming: "Smallholder-dominated; intercropping with cacao and coffee is increasingly adopted.",
    sustainability: "Replanting hybrid varieties and integrating coconut-based agroforestry systems.",
  },
  {
    slug: "banana",
    name: "Banana",
    filipino: "Saging",
    image: banana,
    regions: ["Davao Region", "Northern Mindanao", "SOCCSKSARGEN"],
    exportRank: 1,
    type: "fruit",
    organic: false,
    pricePhp: 45,
    short: "The Philippines' top fruit export, shipped fresh worldwide.",
    overview:
      "Cavendish bananas account for most exports, while saba and lakatan dominate domestic markets.",
    seasons: ["Year-round"],
    exportMarkets: ["Japan", "China", "South Korea", "Middle East"],
    nutrition: "High in potassium, vitamin B6, and dietary fiber.",
    production: [
      { year: 2020, tons: 9_100_000 },
      { year: 2021, tons: 8_900_000 },
      { year: 2022, tons: 9_200_000 },
      { year: 2023, tons: 9_350_000 },
      { year: 2024, tons: 9_280_000 },
    ],
    farming: "Large plantations in Mindanao plus smallholder farms producing local varieties.",
    sustainability: "Disease-resistant cultivars combatting Fusarium wilt; reduced chemical inputs.",
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    filipino: "Pinya",
    image: pineapple,
    regions: ["Northern Mindanao", "SOCCSKSARGEN"],
    exportRank: 3,
    type: "fruit",
    organic: false,
    pricePhp: 38,
    short: "World-leading exporter of fresh and canned pineapple.",
    overview:
      "The Philippines is the world's #2 producer of pineapple after Costa Rica, with vast plantations in Bukidnon.",
    seasons: ["Year-round, peak Mar–Jun"],
    exportMarkets: ["Japan", "South Korea", "United States", "China"],
    nutrition: "Rich in vitamin C, manganese, and the enzyme bromelain.",
    production: [
      { year: 2020, tons: 2_700_000 },
      { year: 2021, tons: 2_810_000 },
      { year: 2022, tons: 2_920_000 },
      { year: 2023, tons: 2_980_000 },
      { year: 2024, tons: 3_010_000 },
    ],
    farming: "Plantation-scale with integrated processing for juice and canned products.",
    sustainability: "Water-efficient drip irrigation and IPM programs reducing pesticide load.",
  },
  {
    slug: "mango",
    name: "Mango",
    filipino: "Mangga",
    image: mango,
    regions: ["Ilocos", "Pangasinan", "Cebu", "Guimaras"],
    exportRank: 6,
    type: "fruit",
    organic: true,
    pricePhp: 120,
    short: "The Philippine 'carabao' mango—celebrated as the sweetest in the world.",
    overview:
      "Guimaras mangoes hold a protected geographical indication and command premium prices globally.",
    seasons: ["March – June"],
    exportMarkets: ["Hong Kong", "Japan", "United States", "South Korea"],
    nutrition: "Excellent source of vitamins A & C, antioxidants, and natural sugars.",
    production: [
      { year: 2020, tons: 770_000 },
      { year: 2021, tons: 740_000 },
      { year: 2022, tons: 760_000 },
      { year: 2023, tons: 790_000 },
      { year: 2024, tons: 805_000 },
    ],
    farming: "Smallholder orchards with induced flowering using potassium nitrate.",
    sustainability: "Bagging techniques to reduce pesticide use and improve fruit quality.",
  },
  {
    slug: "corn",
    name: "Corn",
    filipino: "Mais",
    image: placeholder,
    regions: ["Cagayan Valley", "Northern Mindanao", "SOCCSKSARGEN"],
    exportRank: null,
    type: "grain",
    organic: false,
    pricePhp: 24,
    short: "The country's second staple, feeding both people and livestock.",
    overview:
      "Yellow corn fuels the livestock industry while white corn remains a staple food in the Visayas and Mindanao.",
    seasons: ["Wet & dry season"],
    exportMarkets: ["Domestic-focused"],
    nutrition: "Carbohydrates, fiber, magnesium, and antioxidants.",
    production: [
      { year: 2020, tons: 8_120_000 },
      { year: 2021, tons: 8_260_000 },
      { year: 2022, tons: 8_300_000 },
      { year: 2023, tons: 8_400_000 },
      { year: 2024, tons: 8_500_000 },
    ],
    farming: "Hybrid seed adoption and contract growing schemes with feed millers.",
    sustainability: "Conservation tillage and crop rotation with legumes.",
  },
  {
    slug: "sugarcane",
    name: "Sugarcane",
    filipino: "Tubo",
    image: placeholder,
    regions: ["Negros Occidental", "Bukidnon", "Batangas"],
    exportRank: 8,
    type: "industrial",
    organic: false,
    pricePhp: 3,
    short: "Backbone of Negros island's economy and bioethanol industry.",
    overview:
      "Negros produces over half of Philippine sugar. The sector also fuels bioethanol blending mandates.",
    seasons: ["Milling Oct–May"],
    exportMarkets: ["United States quota", "Domestic refining"],
    nutrition: "Source of sucrose; molasses contains iron and calcium.",
    production: [
      { year: 2020, tons: 24_500_000 },
      { year: 2021, tons: 23_900_000 },
      { year: 2022, tons: 18_800_000 },
      { year: 2023, tons: 22_100_000 },
      { year: 2024, tons: 23_200_000 },
    ],
    farming: "Large haciendas and block-farm cooperatives of smallholders.",
    sustainability: "Bagasse cogeneration powers mills and feeds the grid.",
  },
  {
    slug: "coffee",
    name: "Coffee",
    filipino: "Kape",
    image: placeholder,
    regions: ["Cordillera", "Bukidnon", "Sulu", "Cavite (Amadeo)"],
    exportRank: null,
    type: "beverage",
    organic: true,
    pricePhp: 320,
    short: "Four varieties grown—Arabica, Robusta, Excelsa, and rare Liberica (Barako).",
    overview:
      "Once a global top-5 producer in the 19th century, Philippine specialty coffee is staging a quality-led revival.",
    seasons: ["Harvest Oct–Mar"],
    exportMarkets: ["Specialty buyers in US, Japan, EU"],
    nutrition: "Antioxidants, caffeine, and chlorogenic acids.",
    production: [
      { year: 2020, tons: 60_700 },
      { year: 2021, tons: 60_300 },
      { year: 2022, tons: 60_100 },
      { year: 2023, tons: 62_500 },
      { year: 2024, tons: 64_000 },
    ],
    farming: "Smallholder shade-grown plots, often intercropped with banana and cacao.",
    sustainability: "Forest-friendly agroforestry and Rainforest Alliance certification.",
  },
  {
    slug: "cacao",
    name: "Cacao",
    filipino: "Kakaw",
    image: placeholder,
    regions: ["Davao Region"],
    exportRank: null,
    type: "beverage",
    organic: true,
    pricePhp: 220,
    short: "Davao's bean-to-bar boom is putting Philippine cacao on the world map.",
    overview:
      "Davao produces 80% of the country's cacao. The Philippines aims to become a top-5 Asian exporter.",
    seasons: ["Year-round, peaks Apr–Jul & Oct–Dec"],
    exportMarkets: ["Japan", "Malaysia", "Singapore", "Europe (fine flavor)"],
    nutrition: "Flavanols, magnesium, and iron.",
    production: [
      { year: 2020, tons: 8_200 },
      { year: 2021, tons: 9_100 },
      { year: 2022, tons: 9_800 },
      { year: 2023, tons: 10_500 },
      { year: 2024, tons: 11_200 },
    ],
    farming: "Smallholder agroforestry plots; fine-flavor varieties under Heirloom Cacao Preservation program.",
    sustainability: "Shade-grown systems support biodiversity and carbon sequestration.",
  },
  {
    slug: "rubber",
    name: "Rubber",
    filipino: "Goma",
    image: placeholder,
    regions: ["Zamboanga", "North Cotabato", "Basilan"],
    exportRank: 10,
    type: "industrial",
    organic: false,
    pricePhp: 60,
    short: "Natural latex supplying tire and industrial manufacturers across Asia.",
    overview:
      "Mindanao rubber estates and smallholder farms supply both domestic and export markets.",
    seasons: ["Tapping year-round"],
    exportMarkets: ["China", "Malaysia", "Vietnam"],
    nutrition: "—",
    production: [
      { year: 2020, tons: 422_000 },
      { year: 2021, tons: 430_000 },
      { year: 2022, tons: 425_000 },
      { year: 2023, tons: 440_000 },
      { year: 2024, tons: 448_000 },
    ],
    farming: "Smallholder tapping with cooperative processing into ribbed smoked sheets (RSS).",
    sustainability: "Rubber-based agroforestry stabilizing upland soils.",
  },
  {
    slug: "abaca",
    name: "Abaca",
    filipino: "Abaka",
    image: placeholder,
    regions: ["Bicol", "Eastern Visayas", "Davao Oriental"],
    exportRank: 5,
    type: "fiber",
    organic: true,
    pricePhp: 95,
    short: "Manila hemp—world's strongest natural fiber, prized for specialty paper.",
    overview:
      "The Philippines supplies ~85% of the world's abaca, used in tea bags, currency paper, and composites.",
    seasons: ["Stripping year-round"],
    exportMarkets: ["United Kingdom", "Japan", "Germany", "United States"],
    nutrition: "—",
    production: [
      { year: 2020, tons: 70_000 },
      { year: 2021, tons: 67_000 },
      { year: 2022, tons: 65_000 },
      { year: 2023, tons: 68_000 },
      { year: 2024, tons: 71_000 },
    ],
    farming: "Smallholder upland farms; hand stripping remains common.",
    sustainability: "Native crop integrated with reforestation in typhoon-prone areas.",
  },
  {
    slug: "cassava",
    name: "Cassava",
    filipino: "Kamoteng kahoy",
    image: placeholder,
    regions: ["Bukidnon", "Zamboanga Peninsula", "SOCCSKSARGEN"],
    exportRank: null,
    type: "root",
    organic: true,
    pricePhp: 18,
    short: "Climate-resilient root crop for food, feed, and bioethanol.",
    overview:
      "Contract farming with San Miguel and Universal Robina drives smallholder demand for cassava.",
    seasons: ["Harvest 8–12 months from planting"],
    exportMarkets: ["Domestic feed & ethanol"],
    nutrition: "Carbohydrates, vitamin C, and resistant starch.",
    production: [
      { year: 2020, tons: 2_590_000 },
      { year: 2021, tons: 2_640_000 },
      { year: 2022, tons: 2_700_000 },
      { year: 2023, tons: 2_780_000 },
      { year: 2024, tons: 2_820_000 },
    ],
    farming: "Drought-tolerant; thrives in marginal soils with low input requirements.",
    sustainability: "Carbon-efficient calorie producer; root residues feed livestock.",
  },
];

export const getCommodity = (slug: string) =>
  commodities.find((c) => c.slug === slug);
