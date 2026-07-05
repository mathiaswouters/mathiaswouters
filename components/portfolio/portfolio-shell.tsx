"use client"

import { useEffect, useState } from "react"
import { Header } from "./header"
import { logos, siteConfig } from "@/lib/site"

type Theme = "light" | "dark"

const THEME_STORAGE_KEY = "theme"

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      return
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

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

  const toggleTheme = () =>
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark"
      localStorage.setItem(THEME_STORAGE_KEY, next)
      return next
    })

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto max-w-5xl px-4 pt-28 md:pt-32">{children}</main>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-4">
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
