"use client"

import { useEffect } from "react"
import { Header } from "./header"
import { logos, siteConfig } from "@/lib/site"
import { setStoredTheme } from "@/lib/theme"
import { useTheme } from "@/lib/use-theme"

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  useEffect(() => {
    const iconHref = theme === "dark" ? logos.faviconDark : logos.faviconLight
    let link = document.querySelector<HTMLLinkElement>("link[data-theme-icon]")

    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      link.type = "image/svg+xml"
      link.setAttribute("data-theme-icon", "true")
      document.head.appendChild(link)
    }

    link.href = iconHref
  }, [theme])

  const toggleTheme = () => setStoredTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto max-w-5xl px-4 pt-28 md:pt-32">{children}</main>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-5xl px-4 py-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
          <p className="font-mono text-xs text-muted-foreground text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <div className="flex justify-center order-1 sm:order-2">
            <img
              src={theme === "dark" ? logos.onDarkBg : logos.onLightBg}
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-4 order-3">
            {[
              { label: "GitHub", href: siteConfig.links.github },
              { label: "Twitter", href: siteConfig.links.twitter },
              { label: "LinkedIn", href: siteConfig.links.linkedin },
              { label: "Blog", href: siteConfig.links.blog },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
