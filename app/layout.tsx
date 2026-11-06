import type React from "react"
import "@/app/globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Mohamed Haytam Soukrati — Knowledge Graph Engineer",
  description:
    "Portfolio of Mohamed Haytam Soukrati, Knowledge Graph Engineer at SevenBlue, working on knowledge graphs, data pipelines, machine learning and health-data interoperability (HL7/FHIR).",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
import './globals.css'