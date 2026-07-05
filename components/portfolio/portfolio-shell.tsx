"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Header } from "./header"
import { AboutView } from "./about-view"
import { VenturesView } from "./ventures-view"

type Tab = "about" | "ventures"
type Theme = "light" | "dark"

export function PortfolioShell() {
  const [activeTab, setActiveTab] = useState<Tab>("about")
  const [theme, setTheme] = useState<Theme>("light")

  // Respect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  // Apply dark class to html element
  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="mx-auto max-w-5xl px-4 pt-28 md:pt-32">
        <AnimatePresence mode="wait">
          {activeTab === "about" ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <AboutView />
            </motion.div>
          ) : (
            <motion.div
              key="ventures"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <VenturesView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mathias Wouters
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "GitHub", href: "https://github.com/mathiaswouters" },
              { label: "Twitter", href: "https://twitter.com/mathiaswouters" },
              { label: "LinkedIn", href: "https://linkedin.com/in/mathiaswouters" },
              { label: "Blog", href: "https://blog.mathiaswouters.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
