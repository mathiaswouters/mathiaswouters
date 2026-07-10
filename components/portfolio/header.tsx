"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/lib/site"

type NavItem =
  | { href: string; label: string }
  | { href: string; label: string; external: true }

const navItems: NavItem[] = [
  { href: "/", label: "About" },
  { href: "/products", label: "Products" },
  { href: siteConfig.links.blog, label: "Blog", external: true },
]

interface HeaderProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

function isExternalNavItem(item: NavItem): item is Extract<NavItem, { external: true }> {
  return "external" in item
}

function isActive(pathname: string, href: string, external?: boolean) {
  if (external) return false
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const pathname = usePathname()
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
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label={siteConfig.name}
          >
            <span className="text-base md:text-md font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const { href, label } = item
              const external = isExternalNavItem(item)
              const active = isActive(pathname, href, external)
              const className =
                "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
              const style = {
                color: active ? "var(--foreground)" : "var(--muted-foreground)",
              }

              if (external) {
                return (
                  <a key={href} href={href} className={className} style={style}>
                    {label}
                  </a>
                )
              }

              return (
                <Link key={href} href={href} className={className} style={style}>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-muted"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-80 active:scale-95 transition-all"
            >
              Get in touch
            </Link>

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

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex md:hidden items-center justify-center size-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {menuOpen ? <X className="size-3.5" /> : <Menu className="size-3.5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="mt-2 rounded-xl border border-border bg-background/90 backdrop-blur-md p-2 flex flex-col gap-1 shadow-sm"
            >
              {navItems.map((item) => {
                const { href, label } = item
                const external = isExternalNavItem(item)
                const active = isActive(pathname, href, external)
                const className =
                  "text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted"
                const style = {
                  color: active ? "var(--foreground)" : "var(--muted-foreground)",
                }

                if (external) {
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={className}
                      style={style}
                    >
                      {label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={className}
                    style={style}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="mx-1 mt-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
