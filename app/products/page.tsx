import type { Metadata } from "next"
import { PortfolioShell } from "@/components/portfolio/portfolio-shell"
import { ProductsView } from "@/components/portfolio/products-view"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Products — Mathias Wouters",
  description: "SaaS apps, tools, and side projects built by Mathias Wouters.",
  openGraph: {
    title: "Products — Mathias Wouters",
    description: "SaaS apps, tools, and side projects built by Mathias Wouters.",
    url: `${siteConfig.url}/products`,
  },
}

export default function ProductsPage() {
  return (
    <PortfolioShell>
      <ProductsView />
    </PortfolioShell>
  )
}
