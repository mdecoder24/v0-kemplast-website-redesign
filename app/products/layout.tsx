import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Instruments & Products | Pressure, Temperature, Flow, Valves, PLC | Kemplast India",
  description:
    "Browse Kemplast's complete catalogue of industrial instruments and products: pressure transmitters, pressure gauges, temperature sensors, RTDs, flow meters, level instruments, Siemens PLCs, industrial valves, gland packings, PTFE products & thermal insulation. Authorized dealer for Siemens, WIKA, RKS, Spitmaan & more. Pan-India supply.",
  keywords: [
    // Product searches
    "pressure transmitter India",
    "pressure gauge dealer India",
    "WIKA pressure gauge India",
    "Siemens SITRANS P transmitter India",
    "temperature sensor India",
    "RTD temperature sensor India",
    "thermocouple supplier India",
    "bimetallic thermometer India",
    "flow meter India",
    "electromagnetic flow meter India",
    "vortex flow meter India",
    "level transmitter India",
    "ultrasonic level sensor India",
    "radar level transmitter India",
    "Siemens PLC India",
    "Siemens S7 1200 India",
    "Siemens S7 1500 India",
    "Siemens HMI India",
    "industrial valves India",
    "gate valve India",
    "ball valve India",
    "globe valve India",
    "gland packing India",
    "PTFE packing India",
    "graphite packing India",
    "thermal insulation India",
    "ceramic fiber blanket India",
    "mineral wool India",
    "valve positioner India",
    "differential pressure gauge India",
    // Local
    "industrial instruments dealer Hyderabad",
    "process instruments Secunderabad",
    "buy industrial instruments India",
    "Kemplast products",
  ],
  alternates: { canonical: "https://kemplast.in/products" },
  openGraph: {
    title: "Industrial Instruments & Products Catalogue | Kemplast India",
    description: "Complete catalogue of pressure, temperature, flow, level instruments, Siemens PLCs, valves, packings & insulation from India's authorized dealer — Kemplast.",
    url: "https://kemplast.in/products",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://kemplast.in/products" },
  ],
}

const productCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kemplast Industrial Instruments & Products",
  description: "Complete catalogue of industrial instruments and process equipment available from Kemplast Process Solutions, India's authorized dealer.",
  url: "https://kemplast.in/products",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pressure Transmitters", url: "https://kemplast.in/products?category=pressure" },
    { "@type": "ListItem", position: 2, name: "Pressure Gauges", url: "https://kemplast.in/products?category=gauge" },
    { "@type": "ListItem", position: 3, name: "Temperature Gauges", url: "https://kemplast.in/products?category=temp-gauge" },
    { "@type": "ListItem", position: 4, name: "Temperature Instruments", url: "https://kemplast.in/products?category=temperature" },
    { "@type": "ListItem", position: 5, name: "Flow Instruments", url: "https://kemplast.in/products?category=flow" },
    { "@type": "ListItem", position: 6, name: "Level Instruments", url: "https://kemplast.in/products?category=level" },
    { "@type": "ListItem", position: 7, name: "Siemens PLC Components", url: "https://kemplast.in/products?category=plc" },
    { "@type": "ListItem", position: 8, name: "Valve Positioners", url: "https://kemplast.in/products?category=valve" },
    { "@type": "ListItem", position: 9, name: "Packing Products", url: "https://kemplast.in/products?category=packing" },
    { "@type": "ListItem", position: 10, name: "Insulation Products", url: "https://kemplast.in/products?category=insulation" },
  ],
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }} />
      {children}
    </>
  )
}
