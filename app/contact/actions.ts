"use server"

import {
  sendContactEmail,
  validateContactForm,
  type ContactFormState,
} from "@/lib/contact"

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  }

  const validationError = validateContactForm(data)
  if (validationError) {
    return { success: false, error: validationError }
  }

  if (data.company) {
    return { success: true, error: null }
  }

  try {
    await sendContactEmail(data)
    return { success: true, error: null }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong. Please try again.",
    }
  }
}
