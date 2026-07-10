export type ProductTag = "SaaS" | "Open Source" | "Tool" | "API"

export type ProductStatus = "Live" | "Beta" | "Building" | "Archived"

export interface Product {
  name: string
  slug: string
  description: string
  longDescription: string
  tags: ProductTag[]
  metrics: { label: string; value: string }[]
  url: string
  status: ProductStatus
  icon: string
}

export const products: Product[] = []
