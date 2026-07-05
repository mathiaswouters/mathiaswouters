export interface Service {
  title: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  companyUrl?: string
  description: string
  achievements: string[]
  tags: string[]
}

export interface Certification {
  name: string
  issuer: string
  year: string
  url?: string
}

export interface CaseStudy {
  title: string
  client: string
  description: string
  outcomes: string[]
  tags: string[]
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export const hero = {
  availability: "Available for select projects",
  headline: ["Cloud.", "DevOps.", "Linux."],
  subheadline: "IT consultant based in Belgium",
  bio: "I help teams design, build, and operate reliable cloud infrastructure — from migrations and platform engineering to CI/CD pipelines and Linux systems.",
  tags: ["AWS", "Kubernetes", "Terraform", "Linux", "CI/CD"],
}

export const services: Service[] = [
  {
    title: "Cloud architecture & migrations",
    description:
      "Design and migrate workloads to AWS, Azure, or GCP with a focus on reliability, cost, and operability.",
  },
  {
    title: "Platform engineering",
    description:
      "Build internal developer platforms, golden paths, and self-service tooling that reduce friction for engineering teams.",
  },
  {
    title: "CI/CD & automation",
    description:
      "Pipeline design, GitOps workflows, and infrastructure-as-code with Terraform, Ansible, and modern CI tools.",
  },
  {
    title: "Linux & systems administration",
    description:
      "Hardening, performance tuning, and day-two operations for Linux-based production environments.",
  },
  {
    title: "Observability & reliability",
    description:
      "Monitoring, logging, alerting, and incident readiness — so you know what's happening before users do.",
  },
]

export const skills: SkillGroup[] = [
  {
    category: "Cloud",
    items: ["AWS", "Azure", "GCP", "VPC & networking", "IAM & security"],
  },
  {
    category: "DevOps",
    items: ["Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "ArgoCD"],
  },
  {
    category: "Linux",
    items: ["Debian/Ubuntu", "RHEL", "systemd", "nginx", "Hardening", "Shell scripting"],
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Datadog"],
  },
]

export const stats: Stat[] = [
  { label: "Years in IT", value: 8, suffix: "+" },
  { label: "Cloud migrations led", value: 12, suffix: "+" },
  { label: "Production clusters managed", value: 20, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
]

export const experience: ExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Independent IT Consultant",
    company: "Self-employed",
    description:
      "Advising SMEs and scale-ups on cloud strategy, DevOps practices, and Linux infrastructure. Engagements range from greenfield platform builds to rescue missions on legacy systems.",
    achievements: [
      "Led multi-account AWS landing zone for a fintech client",
      "Reduced deployment time from hours to minutes via GitOps",
      "Designed observability stack adopted across 3 engineering teams",
    ],
    tags: ["Consulting", "AWS", "Kubernetes"],
  },
  {
    period: "2019 — 2022",
    role: "DevOps Engineer",
    company: "Enterprise client",
    description:
      "Built and operated CI/CD pipelines and container platforms for a distributed engineering organisation.",
    achievements: [
      "Migrated 40+ services to Kubernetes",
      "Introduced Terraform for all infrastructure provisioning",
      "Cut mean time to recovery by 60% through improved alerting",
    ],
    tags: ["Kubernetes", "Terraform", "CI/CD"],
  },
  {
    period: "2016 — 2019",
    role: "Systems Administrator",
    company: "Managed services provider",
    description:
      "Managed Linux servers, networking, and monitoring for business-critical workloads across multiple clients.",
    achievements: [
      "Maintained 99.9% uptime SLA across managed fleet",
      "Automated patching and provisioning with Ansible",
      "Onboarded 8 new clients to standardized Linux baseline",
    ],
    tags: ["Linux", "Ansible", "Monitoring"],
  },
]

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2022",
    url: "https://www.cncf.io/certification/cka/",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    year: "2022",
    url: "https://www.hashicorp.com/certifications",
  },
  {
    name: "Linux Professional Institute LPIC-1",
    issuer: "LPI",
    year: "2018",
    url: "https://www.lpi.org/",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: "AWS landing zone for a growing fintech",
    client: "Confidential — Fintech",
    description:
      "Designed and implemented a multi-account AWS organisation with centralized logging, IAM, and networking for a team scaling from 10 to 50 engineers.",
    outcomes: [
      "Production-ready landing zone in 6 weeks",
      "SOC 2 audit requirements met from day one",
      "Self-service environment provisioning for developers",
    ],
    tags: ["AWS", "Terraform", "Security"],
  },
  {
    title: "Kubernetes platform for a SaaS startup",
    client: "Confidential — SaaS",
    description:
      "Built a managed Kubernetes platform with GitOps-based deployments, observability, and autoscaling for a product team shipping daily.",
    outcomes: [
      "Zero-downtime deployments within 2 sprints",
      "Full observability stack (metrics, logs, traces)",
      "Infrastructure fully defined in code",
    ],
    tags: ["Kubernetes", "GitOps", "Observability"],
  },
]
