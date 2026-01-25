"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { PartnersSection } from "@/components/partners-section";
import { motion } from "framer-motion";

/* ------------------ MAIN CATEGORIES ------------------ */
const categories = [
  { id: "all", name: "All Products" },
  { id: "pressure", name: "Pressure Instruments" },
  { id: "safety", name: "Safety Instruments" },
  { id: "valve", name: "Valve Postioners" },
];

/* ------------------ SUB CATEGORIES ------------------ */
const subCategoriesMap: Record<string, { id: string; name: string }[]> = {
  pressure: [
    { id: "all", name: "All Pressure Instruments" },
    { id: "gauge", name: "Pressure Gauge" },
    { id: "transmitter", name: "Pressure Transmitters" },
  ],
  safety: [
    { id: "all", name: "All Safety Products" },
    { id: "r-disc", name: "Rupture Disc" },
    { id: "srv", name: "SRV" },
    { id: "arrestor", name: "Flame Arrestor" },
    { id: "vents", name: "Explosion Vents" },
  ],
  valve: [
    { id: "all", name: "All Valve Products" },
    { id: "siemens", name: "Siemens" },
    { id: "accessories", name: "Accessories" },
    { id: "sepv", name: "Smart Electro Pneumatic Valve Positioner" },
  ],
};

/* ------------------ PRODUCT DETAILS TYPE ------------------ */
interface ProductDetail {
  name: string;
  category: string;
  subCategory: string;
  image: string;
  description?: string;
  introduction?: string;

  technicalSpecs?: Record<string, string>;
  benefits?: string[];
  applications?: string[];
}

/* ------------------ PRODUCT DETAILS MAP ------------------ */
const productDetailsMap: Record<string, ProductDetail> = {
  "Pencil Type Pressure Transmitter": {
    name: "Pencil Type Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/pencil.jpeg",
    introduction:
      "A Pencil Type Pressure Transmitter is a narrow-diameter pressure sensor designed for environments where space is limited and precise pressure measurement is needed. The term 'pencil type' refers to its slim, elongated cylindrical shape.",
    benefits: [
      "High measuring accuracy",
      "Compact design",
      "High overload withstand capability",
      "Rugged stainless-steel enclosure",
      "For aggressive and non-aggressive media",
      "For measuring the pressure of liquids, gases and vapors",
    ],
    technicalSpecs: {
      "Measuring principle":
        "Piezoresistive measuring cell (stainless steel diaphragm)",
      "Power supply": "24V DC",
      Output:
        "4 to 20 mA output current, a DC 0 to 10 V output voltage or an IO-Link output signal",
      "Measuring range": "100 mbar to 1000 bar",
      "Process connection": "NPT, BSP & Metric thread connections",
      "Area of classification": "with or without Ex ia",
      Nonlinearity: "≤ 0,25 %",
      "Long-term stability": "≤ 0,25% / 12 Months",
    },
    applications: [
      "Mechanical engineering",
      "Shipbuilding",
      "Power engineering",
      "Chemical industry",
      "Water supply",
    ],
  },
  "Gauge Pressure Transmitter": {
    name: "Gauge Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/gauge-pressure.png",
    introduction:
      "The Siemens SITRANS P320 is the first pressure transmitter on the market to feature remote safety handling. The instruments' remote safety handling via SIMATIC PDM saves time during SIL commissioning: rather than manually attending to each individual device across a facility.",
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 700 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection":
        "NPT, BSP, Metric thread & with Flange connections (various sizes)",
      "Wetted parts":
        "Diaphragm- SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
  },
  "Absolute Pressure Transmitter": {
    name: "Absolute Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/absolute-pressure.png",
    introduction:
      "The SITRANS P320 absolute pressure transmitter measures absolute pressure of corrosive and non-corrosive gases, vapors and liquids with infinitely adjustable measuring span. For SITRANS P320/P420 with HART: 8.3 mbar a to 160 bar a (0.12 to 2 321 psi a)",
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 700 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection":
        "NPT, BSP, Metric thread & with Flange connections (various sizes)",
      "Wetted parts":
        "Diaphragm: SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
  },
  "Differential Pressure Transmitter": {
    name: "Differential Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/differential.jpeg",
    introduction: "",
    description: "",
    benefits: [
      "SIL-certified with NAMUR NE107 diagnostics for high safety",
      "Fast response time with low conformity and temperature errors",
      "Excellent long-term stability and high reliability in harsh environments",
      "Corrosion-resistant materials suitable for aggressive media",
      "Easy parameterization via HART/local buttons and simple maintenance",
      "Wide adjustable measurement span for diverse applications",
    ],
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 160 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection": '¼" NPT & with flange connections (various sizes)',
      "Wetted parts":
        "Diaphragm: SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
    applications: [
      "Filtration Plants",
      "Hydraulic & Lubrication Systems",
      "Waste Water",
      "Boiler Drum Level",
      "Cooling Tower",
      "Power Plants industries",
    ],
  },
  "Pressure Gauge": {
    name: "Pressure Gauge",
    category: "pressure",
    subCategory: "gauge",
    image: "/industrial-pressure-gauge.jpg",
    introduction:
      "Pressure gauges are used to measure pressures in hydraulic systems and it is made in accordance to EN 837-1 European standards. Measuring pressure on equipment is essential for monitoring and providing the smooth functioning and operating safety of the plant. Pressure gauges are a group of devices that measure and display fluid pressure levels enclosed vessels or systems in the process. Pressure is measurement of the amount of force applied over a specific unit area.",
  },
  "Differential Pressure Gauge": {
    name: "Differential Pressure Gauge",
    category: "pressure",
    subCategory: "gauge",
    image: "/differential-gauge.jpg",
    introduction:
      "A Differential Pressure Gauge is used to measure the difference in pressure between two points. It is commonly used in applications where monitoring this difference is critical to ensure proper operation, such as in filters, pumps, and flow systems.",
    technicalSpecs: {
      "Dial sizes": "100 mm / 150 mm / 200 mm",
      "Pressure ranges": "0–400 mmWC to 6000 mmWC / 0–1 kg/cm² up to 25 kg/cm²",
      "Max static pressure": "25 bar up to 60 bar",
      "Diaphragm material": "SS316 / Spring Steel",
      "Mounting type": "Bottom or Back Mounted",
    },
    applications: [
      "Pharmaceutical",
      "Chemical",
      "Petrochemical",
      "Oil & Gas",
      "Refinery",
      "Paper & Pulp",
      "Sugar",
      "Breweries",
      "Food & Beverages",
      "Cement Industries",
    ],
  },
  "Safety Relief Valve": {
    name: "Safety Relief Valve",
    category: "safety",
    subCategory: "srv",
    image: "/srv.png",
    introduction:
      "The Safety Relief valves are spring-loaded closed bonnet and designed as per API standards. We machine the valves from solid bar to have better material compatibility. The Safety valves are designed in soft seat as well as metal to metal seat. The valves are pressure tested with Nitrogen. The valves provide highly effective solution for various industrial applications in Refineries, Chemicals, Pharmaceutical, Fertilizers, Storage tanks systems etc.",
    benefits: [
      'Size: From 1/2" to 4"',
      "End Connection: Flanged/Threaded/TC End",
      "Spring loaded, closed bonnet safety relief valve",
      "MOC: SS 316, 304, CS, PTFE coating & other on request",
      "Design compliance as per ASME & API",
      "Manufactured from bar stock and casting",
      "Applications: Steam, Air, Vapour, Liquid, Oil, Hydrogen Gas & many more",
    ],
  },
  "Inline Flame Arrestor": {
    name: "Inline Flame Arrestor",
    category: "safety",
    subCategory: "arrestor",
    image: "/arrestor.png",
    introduction:
      "Protect your operations with our In-Line Flame Arrestor, designed for maximum safety and reliability. This advanced device effectively stops flames from traveling through pipelines while allowing normal gas flow. With ATEX certification and a durable design, our flame arrestors seamlessly integrate into your existing systems. Plus, we offer customized options to meet your specific needs, ensuring peace of mind in handling flammable materials.",
    benefits: [
      "Reliable Flame Suppression",
      "Seamless Integration",
      "Robust Design & Comprehensive Testing",
      "Perfect finish & Easy Cleaning",
    ],
  },
  "End of Line Flame Arrestor": {
    name: "End of Line Flame Arrestor",
    category: "safety",
    subCategory: "arrestor",
    image: "/endofline.png",
    introduction:
      "Our End of Line Flame Arrestors provide critical protection by preventing flame propagation in pipelines. Designed for reliable performance, these devices allow safe gas flow while effectively stopping flames at the end of your system. With durable construction and ATEX certification, our flame Arrestor are built to enhance safety in hazardous environments.",
    benefits: [
      "Optimized Flow Dynamics",
      "Low Lifecycle Cost",
      "Robust Design & Comprehensive Testing",
      "Sturdiness & Low maintenance",
    ],
  },
  "Explosion Vents": {
    name: "Explosion Vents",
    category: "safety",
    subCategory: "vents",
    image: "/vents.png",
    introduction:
      "An explosion vent, also called a rupture panel, is a pressure relief device designed to protect buildings or equipment by releasing an explosion through the non-fragmenting vent thus eliminating any catastrophic overpressure. In addition to their safety functionality, they are popular because they are cost-effective, easy to install and require no maintenance.",
    benefits: [
      "Shape: Circular as well rectangular sizes",
      "MOC: SS 304, SS 316 & other on request",
      "Compliance with EN and NFPA",
      "Non Fragmenting design",
      "Maintenance Free",
      "Application specific designs available on request",
    ],
  },
  "Rupture Disc": {
    name: "Rupture Disc",
    category: "safety",
    subCategory: "r-disc",
    image: "/r-disc.png",
    introduction:
      "A rupture disc is a multi-layer pressure relief device designed to burst at a specific pressure to protect systems from overpressure conditions. Constructed with layers of different materials, the RD offers enhanced durability, precise burst control, and versatility for various industrial applications.",
    technicalSpecs: {
      Sizes: "1'' to 24''",
      "Burst Pressure": "0.4 barg to 25 barg",
      "Operating Temperature": "upto 260 Deg.C",
      Tolerance: "+/- 2 psig or +/- 5 %",
      "OP/BP Ratio": "≤ 80 %",
      "MOC of RD": "SS 304, SS 316, HASTELLOY & other on request",
      "MOC of Holder": "SS304, SS316, CS and other on request",
      "End Connection": "Suitable to fit in standard ANSI Flanges with Holder",
    },
    benefits: [
      "Multi-Layer Design: Combines multiple materials to ensure strength, precision, and adaptability",
      "Accurate Burst Performance: Designed to activate at precise pressure thresholds for optimal protection",
      "Non-Fragmenting Design: Tailored designs for specific applications",
      "Wide Material Compatibility: Suitable for use with gases, liquids, and corrosive media",
      "Customizable Configurations: Available in various sizes, pressure ratings, and materials to meet unique application requirements",
    ],
  },
  "Siemens Positioner": {
    name: "Siemens Positioner",
    category: "valve",
    subCategory: "siemens",
    image: "/siemens.webp",
    introduction:
      "The Siemens SIPART PS2 is currently the most widely used positioner for linear and part-turn actuators in a wide range of process industries. This is not without reason. The proven all-rounder offers comprehensive functionality and diagnostics capability, controls a wide range of valves both safely and dependably and also fulfils a multitude of specific requirements optimally. For reliable control of final control elements in chemical or oil and gas sectors, or for precise control of valves in the pharmaceutical or food industry: SIPART PS2 provides the right solution for every valve. Another point in favour of the PS2 positioner is the low consumption of compressed air. SIPART PS2 minimizes it as well as the CO₂ emission which is caused by the compressors. This means our positioner offers savings of up to 90 percent compared to conventional devices.",
    technicalSpecs: {
      Version: "2 Wire (4-20mA) without HART",
      "For Actuating": "Single Acting",
      Enclosure: "Polycarbonate",
      "Explosion Protection": "None",
      "Connection Thread Electrical": "M20x1.5mm²",
      "Connection Thread Pneumatic": "G¼",
      "Limit Monitoring": "None",
      Options: "None",
      "Mounted Pressure Gauge": "None",
    },
  },
  Accessories: {
    name: "Accessories",
    category: "valve",
    subCategory: "accessories",
    image: "/access.webp",
    introduction:
      "This bracket kit is for mounting a SMC 8100 Rotary Type Pneumatic Positioner to a F79U Actuator. This kit does not include a feedback arm (Purchase Separately). Please feel free to discuss with us about your product requirement. Instrowest can help you with product Supply, Installation and Calibration.\n\nIf out of stock, Typical Lead Time: 1 Week",
  },
  "Smart Electro Pneumatic Valve Positioner": {
    name: "Smart Electro Pneumatic Valve Positioner",
    category: "valve",
    subCategory: "sepv",
    image: "/sepv.png",
    introduction:
      "A positioner is an electro pneumatic device that controls and regulates the flow of a medium in control valves at various types of the process industries. Valve positioner provides a signal to the valve actuator until the valve stem reaches a position of opening or closing. A smart positioner is an advanced type of valve positioner used to precisely control valve position in response to a control signal — but with built-in intelligence, diagnostics, and digital communication capabilities.",
    technicalSpecs: {
      Input: "2-wire",
      "Output/Communication": "4–20 mA, HART, PROFIBUS PA, FOUNDATION Fieldbus",
      "Enclosure materials": "Polycarbonate, Stainless Steel, Aluminum",
      Threads: "NPT & Metric",
      Versions: "Standard / Fail-safe / Fail-in-Place / Fail-to-Open",
      Options: "Gauges, Feedback Cards, Mounting Accessories",
      Approvals: "CE, FM, CSA, UL, ATEX, IECEx",
    },
    benefits: [
      "Easy installation & automatic commissioning",
      "Simple local or remote configuration (SIMATIC PDM)",
      "High control performance with low air consumption",
      "Multiple fail-safe modes (Fail Safe, Fail-in-Place, Fail-to-Open)",
      "Supports linear, part-turn, and cylinder actuators",
      "Extensive diagnostics for performance & maintenance",
      "Operable with natural gas, CO₂, nitrogen, or noble gases",
    ],
    applications: [
      "Valve manufacturing",
      "Chemical & petrochemical plants",
      "Oil & gas",
      "Water & wastewater",
      "Power generation",
      "Paper, pharma, food & beverage industries",
    ],
  },
};

/* ------------------ PRODUCTS ------------------ */
const products: ProductDetail[] = [
  // Pressure
  productDetailsMap["Pressure Gauge"],
  productDetailsMap["Differential Pressure Gauge"],
  productDetailsMap["Pencil Type Pressure Transmitter"],
  productDetailsMap["Gauge Pressure Transmitter"],
  productDetailsMap["Absolute Pressure Transmitter"],
  productDetailsMap["Differential Pressure Transmitter"],

  // Safety
  productDetailsMap["Rupture Disc"],
  productDetailsMap["Safety Relief Valve"],
  productDetailsMap["Inline Flame Arrestor"],
  productDetailsMap["End of Line Flame Arrestor"],
  productDetailsMap["Explosion Vents"],

  // Valve Positioners
  productDetailsMap["Siemens Positioner"],
  productDetailsMap["Accessories"],
  productDetailsMap["Smart Electro Pneumatic Valve Positioner"],
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSubCategory("all"); // reset sub-category
  };

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    if (product.category !== activeCategory) return false;
    if (activeSubCategory === "all") return true;
    return product.subCategory === activeSubCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase mb-4">
              OUR PRODUCTS
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Industrial Excellence
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality instrumentation,
              packing, insulation, and valve products.
            </p>
          </motion.div>

          {/* MAIN CATEGORIES */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* SUB CATEGORIES (ONLY FOR PRESSURE) */}
          {activeCategory === "pressure" &&
            subCategoriesMap[activeCategory] && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {subCategoriesMap[activeCategory].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubCategory(sub.id)}
                    className={`px-5 py-2 rounded-full text-sm transition-all ${
                      activeSubCategory === sub.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}

          {/* PRODUCT GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                category={
                  categories.find((c) => c.id === product.category)?.name ||
                  product.category
                }
                image={product.image}
                description={product.description}
                introduction={product.introduction}
                benefits={product.benefits}
                technicalSpecs={product.technicalSpecs}
                applications={product.applications}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </main>
  );
}
