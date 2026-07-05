"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"

type Tab = "about" | "ventures"

interface HeaderProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function Header({ activeTab, setActiveTab, theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between rounded-xl border border-border bg-background/75 backdrop-blur-md px-4 py-2.5 shadow-sm"
        >
          {/* Logo */}
          <button
            onClick={() => setActiveTab("about")}
            className="font-mono text-sm font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors"
          >
            MW
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {(["about", "ventures"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: activeTab === tab ? "var(--foreground)" : "var(--muted-foreground)",
                }}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-lg bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative capitalize">
                  {tab === "about" ? "About & Experience" : "Ventures"}
                </span>
              </button>
            ))}

            <a
              href="https://blog.mathiaswouters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              Blog
              <ArrowUpRight className="size-3.5" />
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@mathiaswouters.com"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-80 active:scale-95 transition-all"
            >
              Get in touch
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center size-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-95"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="size-3.5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="size-3.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex md:hidden items-center justify-center size-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {menuOpen ? <X className="size-3.5" /> : <Menu className="size-3.5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="mt-2 rounded-xl border border-border bg-background/90 backdrop-blur-md p-2 flex flex-col gap-1 shadow-sm"
            >
              {(["about", "ventures"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setMenuOpen(false) }}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted"
                  style={{ color: activeTab === tab ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  {tab === "about" ? "About & Experience" : "Ventures"}
                </button>
              ))}
              <a
                href="https://blog.mathiaswouters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Blog <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="mailto:hello@mathiaswouters.com"
                className="mx-1 mt-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
