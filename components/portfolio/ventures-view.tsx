"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Users, TrendingUp, Globe, Smartphone, Package } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

type VentureTag = "SaaS" | "Open Source" | "Mobile" | "API" | "Tool"

interface Venture {
  name: string
  slug: string
  description: string
  longDescription: string
  tags: VentureTag[]
  metrics: { label: string; value: string }[]
  url: string
  status: "Live" | "Beta" | "Building" | "Archived"
  icon: string
}

const ventures: Venture[] = [
  {
    name: "FlowBoard",
    slug: "flowboard",
    description: "Project management for indie developers",
    longDescription:
      "A lightweight, keyboard-first project management tool designed for solo developers and small teams. Combines kanban, time tracking, and client invoicing into one seamless workflow.",
    tags: ["SaaS", "Tool"],
    metrics: [
      { label: "Monthly active users", value: "4.2k" },
      { label: "MRR", value: "€3.8k" },
    ],
    url: "https://flowboard.dev",
    status: "Live",
    icon: "F",
  },
  {
    name: "Stackr",
    slug: "stackr",
    description: "Tech stack discovery & comparison platform",
    longDescription:
      "An open-source platform that aggregates real-world tech stack data from 10,000+ companies. Engineers use Stackr to make informed decisions on their next project's architecture.",
    tags: ["Open Source", "SaaS"],
    metrics: [
      { label: "Companies indexed", value: "12k+" },
      { label: "GitHub stars", value: "2.1k" },
    ],
    url: "https://stackr.dev",
    status: "Live",
    icon: "S",
  },
  {
    name: "Nudge",
    slug: "nudge",
    description: "Habit tracking with social accountability",
    longDescription:
      "A mobile-first habit tracker that leverages social accountability to help users stay consistent. Friends can nudge each other when habits are missed.",
    tags: ["Mobile"],
    metrics: [
      { label: "Downloads", value: "6.1k" },
      { label: "Daily active users", value: "1.8k" },
    ],
    url: "https://nudgeapp.io",
    status: "Beta",
    icon: "N",
  },
  {
    name: "PulseAPI",
    slug: "pulseapi",
    description: "Uptime monitoring & alerting as a service",
    longDescription:
      "A developer-focused uptime monitoring service with sub-minute check intervals, smart alerting, and a beautiful status page builder. Used by 200+ indie hackers.",
    tags: ["API", "SaaS"],
    metrics: [
      { label: "Endpoints monitored", value: "8.4k" },
      { label: "Uptime", value: "99.99%" },
    ],
    url: "https://pulseapi.io",
    status: "Live",
    icon: "P",
  },
  {
    name: "Opentype",
    slug: "opentype",
    description: "Open-source rich text editor component",
    longDescription:
      "A batteries-included rich text editor built on ProseMirror and React. Drop-in replacement for Tiptap with more opinionated defaults and a cleaner API surface.",
    tags: ["Open Source", "Tool"],
    metrics: [
      { label: "Weekly npm downloads", value: "3.2k" },
      { label: "GitHub stars", value: "890" },
    ],
    url: "https://github.com/mwouters/opentype",
    status: "Live",
    icon: "O",
  },
  {
    name: "Stealth",
    slug: "stealth",
    description: "Next-generation SaaS platform",
    longDescription:
      "Currently in stealth mode. Building a developer-focused productivity platform that rethinks how distributed teams collaborate on code and product.",
    tags: ["SaaS"],
    metrics: [
      { label: "Beta waitlist", value: "500+" },
      { label: "Target launch", value: "Q3 2025" },
    ],
    url: "#",
    status: "Building",
    icon: "✦",
  },
]

const tagStyles: Record<VentureTag, string> = {
  SaaS: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Open Source": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Mobile: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  API: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Tool: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20",
}

const statusStyles: Record<Venture["status"], string> = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400",
  Beta: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Building: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Archived: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
}

const statusDot: Record<Venture["status"], string> = {
  Live: "bg-green-500",
  Beta: "bg-amber-500",
  Building: "bg-blue-500",
  Archived: "bg-zinc-400",
}

const tagIcons: Record<VentureTag, React.ElementType> = {
  SaaS: Globe,
  "Open Source": Package,
  Mobile: Smartphone,
  API: TrendingUp,
  Tool: Package,
}

function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const isExternal = venture.url !== "#"

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-300"
    >
      <div className="p-5 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="size-10 rounded-xl bg-muted border border-border flex items-center justify-center font-mono font-bold text-base text-foreground shrink-0">
              {venture.icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base leading-tight">{venture.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{venture.description}</p>
            </div>
          </div>

          {/* Status + External link */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded-md ${statusStyles[venture.status]}`}
            >
              <span className={`size-1.5 rounded-full ${statusDot[venture.status]}`} />
              {venture.status}
            </span>

            {isExternal && (
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-7 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all"
                aria-label={`Visit ${venture.name}`}
              >
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{venture.longDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {venture.tags.map((tag) => {
            const Icon = tagIcons[tag]
            return (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-1 rounded-md border ${tagStyles[tag]}`}
              >
                <Icon className="size-2.5" />
                {tag}
              </span>
            )
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border">
          {venture.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5">
              <p className="font-mono text-sm font-semibold text-foreground">{metric.value}</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Users className="size-2.5" />
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function VenturesView() {
  const liveCount = ventures.filter((v) => v.status === "Live").length
  const totalUsers = "12.4k+"

  return (
    <div className="space-y-16 pb-24">
      {/* Header */}
      <section className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Ventures</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight mb-4">
            Products I&apos;ve built
            <br />
            <span className="text-muted-foreground">& shipped.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            A selection of SaaS products, open-source tools, and mobile apps I&apos;ve designed and
            developed — from zero to launch.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-green-500" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{liveCount}</span> live products
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-500" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{totalUsers}</span> combined users
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-zinc-400" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{ventures.length}</span> total ventures
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ventures.map((venture, i) => (
            <VentureCard key={venture.slug} venture={venture} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-xl border border-border bg-card p-8 md:p-12 text-center"
      >
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Collaborate</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
          Have an idea worth building?
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I occasionally take on select consulting or co-founding opportunities for the right project.
        </p>
        <a
          href="mailto:hello@mathiaswouters.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-80 active:scale-95 transition-all"
        >
          Let&apos;s talk
          <ArrowUpRight className="size-4" />
        </a>
      </motion.section>
    </div>
  )
}
