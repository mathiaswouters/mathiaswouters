import { siteConfig } from "@/lib/site"

export type ContactFormState = {
  success: boolean
  error: string | null
}

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  company?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.name.trim() || data.name.trim().length < 2) {
    return "Please enter your name."
  }

  if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
    return "Please enter a valid email address."
  }

  if (!data.subject.trim() || data.subject.trim().length < 3) {
    return "Please enter a subject."
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    return "Please enter a message of at least 10 characters."
  }

  return null
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error("Contact form is not configured yet. Please email directly.")
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [siteConfig.email],
      reply_to: data.email.trim(),
      subject: `[Contact] ${data.subject.trim()}`,
      text: [
        `Name: ${data.name.trim()}`,
        `Email: ${data.email.trim()}`,
        "",
        data.message.trim(),
      ].join("\n"),
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to send message. Please try again or email directly.")
  }
}
