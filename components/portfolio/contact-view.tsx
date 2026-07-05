"use client"

import { useActionState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, Link2, Mail } from "lucide-react"
import { submitContactForm } from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"
import type { ContactFormState } from "@/lib/contact"

const initialState: ContactFormState = {
  success: false,
  error: null,
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: siteConfig.links.linkedin,
    icon: Link2,
  },
  {
    label: "GitHub",
    value: "@mathiaswouters",
    href: siteConfig.links.github,
    icon: Link2,
  },
  {
    label: "Twitter",
    value: "@mathiaswouters",
    href: siteConfig.links.twitter,
    icon: Link2,
  },
] as const

function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  if (state.success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card p-8 md:p-10 text-center"
      >
        <div className="inline-flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 mb-5">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      custom={1}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      action={formAction}
      className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={pending}
            className={inputClassName}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={pending}
            className={inputClassName}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          disabled={pending}
          className={inputClassName}
          placeholder="What would you like to discuss?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={pending}
          className={`${inputClassName} resize-y min-h-32`}
          placeholder="Tell me about your project, timeline, or questions..."
        />
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.error && (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Send message"}
      </Button>
    </motion.form>
  )
}

export function ContactView() {
  return (
    <div className="space-y-16 pb-24">
      <section className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight mb-4">
            Get in touch
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Have a project in mind or want to discuss cloud, DevOps, or Linux consulting? Send a
            message and I&apos;ll get back to you.
          </p>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <ContactForm />

        <motion.aside
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Other ways to reach me</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Prefer email or social? You can also reach out directly through any of these channels.
            </p>

            <div className="space-y-3">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-foreground/20 hover:bg-muted"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">{value}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-border bg-card/50 p-6">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">
              Response time
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I typically reply within one business day. For urgent matters, email works best.
            </p>
          </div>
        </motion.aside>
      </section>
    </div>
  )
}
