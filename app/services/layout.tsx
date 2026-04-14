import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Calibration & Automation Services India | Kemplast",
  description:
    "Kemplast Process Solutions offers NABL-accredited precision calibration services and end-to-end industrial automation projects across India. PLC/DCS programming, SCADA, Industrial IoT, pressure, temperature, flow & level calibration. Serving Hyderabad, Mumbai, Bangalore, Chennai & pan-India.",
  keywords: [
    "industrial calibration services India",
    "NABL calibration services Hyderabad",
    "pressure calibration services India",
    "temperature calibration services India",
    "flow calibration services India",
    "instrument calibration company India",
    "industrial automation company India",
    "PLC programming services India",
    "SCADA system integrator India",
    "DCS automation India",
    "industrial IoT solutions India",
    "process automation Hyderabad",
    "automation projects Hyderabad",
    "calibration services Secunderabad",
    "Kemplast services",
  ],
  alternates: { canonical: "https://kemplast.in/services" },
  openGraph: {
    title: "Industrial Calibration & Automation Services | Kemplast India",
    description: "NABL-accredited calibration and full-stack automation services from Kemplast Process Solutions — pan-India delivery from Hyderabad.",
    url: "https://kemplast.in/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
