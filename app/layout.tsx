import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"

import { GlobalBackground } from "@/components/global-background"
import { Toaster } from "sonner"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kemplast Process Solutions | Process & Instrumentation Excellence Since 1986",
  description:
    "Kemplast Process Solutions is your trusted partner in process instrumentation, packing, insulation, and valve products. Serving process industries in South India since 1986.",
  generator: "v0.app",
  icons: {
    icon: "/kemplast-favicon.png",
    shortcut: "/kemplast-favicon.png",
    apple: "/kemplast-favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>

          <GlobalBackground />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
