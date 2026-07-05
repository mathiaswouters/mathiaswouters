"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Globe, Package, TrendingUp } from "lucide-react"
import { products, type Product, type ProductTag } from "@/content/products"
import { siteConfig } from "@/lib/site"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

const tagStyles: Record<ProductTag, string> = {
  SaaS: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Open Source": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Tool: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20",
  API: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
}

const statusStyles: Record<Product["status"], string> = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400",
  Beta: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Building: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Archived: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
}

const statusDot: Record<Product["status"], string> = {
  Live: "bg-green-500",
  Beta: "bg-amber-500",
  Building: "bg-blue-500",
  Archived: "bg-zinc-400",
}

const tagIcons: Record<ProductTag, React.ElementType> = {
  SaaS: Globe,
  "Open Source": Package,
  Tool: Package,
  API: TrendingUp,
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isExternal = product.url !== "#"

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
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-muted border border-border flex items-center justify-center font-mono font-bold text-base text-foreground shrink-0">
              {product.icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base leading-tight">{product.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{product.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded-md ${statusStyles[product.status]}`}
            >
              <span className={`size-1.5 rounded-full ${statusDot[product.status]}`} />
              {product.status}
            </span>

            {isExternal && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-7 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all"
                aria-label={`Visit ${product.name}`}
              >
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.longDescription}</p>

        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => {
            const Icon = tagIcons[tag] ?? Package
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

        {product.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-0.5">
                <p className="font-mono text-sm font-semibold text-foreground">{metric.value}</p>
                <p className="text-[10px] text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-dashed border-border bg-card/50 p-12 md:p-16 text-center"
    >
      <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-muted border border-border font-mono text-xl text-muted-foreground mb-6">
        ◌
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">Nothing public yet</h3>
      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
        I&apos;m building products in private for now. When something launches, it&apos;ll show up here.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background font-medium text-sm hover:bg-muted transition-all"
      >
        Get notified
        <ArrowUpRight className="size-4" />
      </a>
    </motion.div>
  )
}

export function ProductsView() {
  const liveCount = products.filter((p) => p.status === "Live").length

  return (
    <div className="space-y-16 pb-24">
      <section className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Products</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight mb-4">
            Things I&apos;m building
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            SaaS apps, tools, and side projects I own and ship — separate from client consulting work.
          </p>

          {products.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{liveCount}</span> live
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-zinc-400" />
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{products.length}</span> total
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <section>
        {products.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
