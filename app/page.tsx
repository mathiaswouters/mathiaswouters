import type { Metadata } from "next"
import { PortfolioShell } from "@/components/portfolio/portfolio-shell"
import { AboutView } from "@/components/portfolio/about-view"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
}

export default function Page() {
  return (
    <PortfolioShell>
      <AboutView />
    </PortfolioShell>
  )
}
