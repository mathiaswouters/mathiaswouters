import type { Metadata } from "next"
import { PortfolioShell } from "@/components/portfolio/portfolio-shell"
import { ContactView } from "@/components/portfolio/contact-view"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact — Mathias Wouters",
  description: "Get in touch about cloud, DevOps, and Linux consulting engagements.",
  openGraph: {
    title: "Contact — Mathias Wouters",
    description: "Get in touch about cloud, DevOps, and Linux consulting engagements.",
    url: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <PortfolioShell>
      <ContactView />
    </PortfolioShell>
  )
}
