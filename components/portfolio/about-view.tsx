"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import {
  hero,
  services,
  skills,
  stats,
  experience,
  certifications,
  caseStudies,
  type ExperienceItem,
} from "@/content/profile"
import { fadeUp } from "@/lib/motion"

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const steps = 40
          const increment = to / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= to) {
              setCount(to)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function ExperienceItem({ item, index }: { item: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative"
    >
      <div className="flex gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="mt-1.5 size-2 rounded-full bg-border group-hover:bg-foreground transition-colors shrink-0" />
          <div className="mt-2 w-px flex-1 bg-border min-h-[4rem]" />
        </div>

        <div className="pb-8 flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-wide mb-1">{item.period}</p>
              <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.company}
                  <ExternalLink className="size-3" />
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{item.company}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground mb-3">{item.description}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? (
              <>
                Hide details <ChevronUp className="size-3" />
              </>
            ) : (
              <>
                View highlights <ChevronDown className="size-3" />
              </>
            )}
          </button>

          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 space-y-1.5"
            >
              {item.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 size-1 rounded-full bg-foreground shrink-0" />
                  {a}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function AboutView() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 mb-8">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-green-500" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">{hero.availability}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.05] mb-6">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
            <br />
            <span className="text-muted-foreground">{hero.headline[2]}</span>
          </h1>

          <div className="space-y-2 mb-8">
            <p className="text-lg text-muted-foreground font-medium">{hero.subheadline}</p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{hero.bio}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-lg border border-border bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card p-6 flex flex-col gap-1"
            >
              <p className="text-3xl font-bold text-foreground font-mono tabular-nums">
                {stat.prefix}
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">What I help with</p>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Skills</p>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-all duration-200 hover:shadow-sm group"
              >
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-medium text-foreground flex items-center gap-2">
                      <span className="size-1 rounded-full bg-muted-foreground/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Experience</p>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div>
            {experience.map((item, i) => (
              <ExperienceItem key={item.role + item.period} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Certifications</p>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1"
                >
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                    >
                      {cert.name}
                      <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Case studies */}
      {caseStudies.length > 0 && (
        <section>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Selected work</p>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-4">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{study.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{study.client}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                  <ul className="space-y-1.5">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 size-1 rounded-full bg-foreground shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-xl border border-border bg-card p-8 md:p-12 text-center"
      >
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Work together</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
          Need help with Cloud, DevOps, or Linux?
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I take on a limited number of consulting engagements. Reach out to discuss your project.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-80 active:scale-95 transition-all"
        >
          Get in touch
        </a>
      </motion.section>
    </div>
  )
}
