import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NABL Calibration Services India | Pressure, Temperature, Flow, Level | Kemplast",
  description:
    "Kemplast provides NABL-accredited precision calibration services across India for pressure gauges, transmitters, temperature sensors, RTDs, thermocouples, flow meters & level instruments. Traceable standards. On-site & in-lab calibration available in Hyderabad, Bangalore, Mumbai, Chennai & pan-India.",
  keywords: [
    "NABL calibration services India",
    "instrument calibration services India",
    "pressure gauge calibration India",
    "pressure transmitter calibration India",
    "temperature calibration services India",
    "RTD calibration India",
    "thermocouple calibration India",
    "flow meter calibration India",
    "level instrument calibration India",
    "on-site calibration services India",
    "calibration lab Hyderabad",
    "NABL accredited calibration Hyderabad",
    "industrial instrument calibration Secunderabad",
    "calibration certificate India",
    "Kemplast calibration",
  ],
  alternates: { canonical: "https://kemplast.in/services/calibration" },
  openGraph: {
    title: "NABL Calibration Services India | Kemplast",
    description: "NABL-accredited calibration for pressure, temperature, flow and level instruments. On-site and lab calibration across India by Kemplast.",
    url: "https://kemplast.in/services/calibration",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://kemplast.in/services" },
    { "@type": "ListItem", position: 3, name: "Calibration Services", item: "https://kemplast.in/services/calibration" },
  ],
}

export default function CalibrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
