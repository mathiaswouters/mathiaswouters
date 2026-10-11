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
  availability: "Let's connect and build something cool together", // Example: Available for select projects
  headline: ["Cloud", "DevOps", "Linux"],
  subheadline: "Cloud Engineer & IT consultant based in Belgium",
  bio: "I help teams design, build, and operate reliable cloud infrastructure — from migrations and platform engineering to CI/CD pipelines and Linux systems.",
  tags: ["AWS", "Terraform", "Linux", "CI/CD", "Kubernetes"],
}

export const services: Service[] = [
  {
    title: "Cloud architecture & migrations",
    description:
      "Design and migrate workloads to AWS and Azure, including hybrid setups where on-premises systems and the cloud need to work together.",
  },
  {
    title: "Platform engineering",
    description:
      "Build the shared tooling, pipelines and automation that engineering teams rely on every day.",
  },
  {
    title: "CI/CD & automation",
    description:
      "Pipeline design, GitOps workflows, and infrastructure-as-code with Terraform, Ansible, and modern CI tools.",
  },
  {
    title: "Linux & systems administration",
    description:
      "Configuration management, hardening and day-to-day operations for Linux environments, from a handful of servers to hundreds.",
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Packaging applications into lightweight containers and running them on Kubernetes, with consistent environments from development to production.",
  },
  {
    title: "Observability & reliability",
    description:
      "Monitoring, logging, alerting, and incident readiness — so you know what's happening before users do.",
  },
]

export const skills: SkillGroup[] = [
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure", "VPC & networking", "IAM & security", "Databricks"],
  },
  {
    category: "DevOps & Automation",
    items: ["Terraform", "Ansible", "CI/CD", "Jenkins", "Azure DevOps", "GitLab CI/CD", "GitHub Actions", "Python", "Golang"],
  },
  {
    category: "Containers & OS",
    items: ["Kubernetes", "Docker", "Linux", "RHEL", "Bash Scripting", "Podman", "Proxmox", "Hardening"],
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Dynatrace"],
  },
]

// export const stats: Stat[] = [
//   { label: "Years in IT", value: 4, suffix: "+" },
//   { label: "Enterprise Projects Contributed To", value: 6, suffix: "" },
//   { label: "Production clusters managed", value: 7, suffix: "+" },
//   { label: "Certifications", value: 1, suffix: "" },
// ]

export const stats: Stat[] = [
  { label: "Linux VMs automated", value: 600, suffix: "+" },
  { label: "Engineering applications moved to automated packaging", value: 60, suffix: "+" },
  { label: "Enterprise clients", value: 3, suffix: "" },
]

export const experience: ExperienceItem[] = [
  {
    period: "Mar 2026 — Present",
    role: "IT Consultant - Cloud Engineer",
    company: "Itility",
    companyUrl: "https://itility.nl/",
    description:
      "Designing and automating AWS and Azure cloud infrastructure, focusing on smooth data integrations and robust enterprise development environments.",
    achievements: [
      "Built automated cloud infrastructure pipelines using Terraform",
      "Integrated key cloud services natively with modern data platforms like Databricks and Azure Data Factory (ADF)",
      "Maintained containerized workloads and Linux-based cloud VMs for development workflows",
    ],
    tags: ["AWS", "Azure", "Terraform", "Jenkins", "Azure DevOps", "Databricks"],
  },
  {
    period: "Mar 2025 — Feb 2026",
    role: "Consultant Linux System Engineer",
    company: "Tergos (Client: PSA Antwerp)",
    companyUrl: "https://tergos.com/be-en/",
    description:
      "Managed and automated core Linux server infrastructure at PSA Antwerp, introducing modern CI/CD capabilities to maximize environment consistency.",
    achievements: [
      "Deployed and automated Linux infrastructure using Ansible, Bash, and Python",
      "Designed and maintained GitLab CI/CD pipelines for critical system and application deployments",
      "Supported and optimized containerized container workloads utilizing Docker and Kubernetes",
    ],
    tags: ["Linux", "Ansible", "GitLab CI/CD", "Docker", "Kubernetes"],
  },
  {
    period: "Sept 2024 — Dec 2024",
    role: "Cloud & Automation Intern",
    company: "Sopra Steria",
    companyUrl: "https://www.soprasteria.be/",
    description:
      "Joined the Cloud & Automation team to research and implement reusable framework patterns for rapid enterprise infrastructure delivery.",
    achievements: [
      "Automated complete Azure platform landing zone deployments with Terraform and Azure DevOps",
      "Gained deep operational experience with Azure networking, core identity patterns, and cloud governance",
    ],
    tags: ["Azure", "Terraform", "Azure DevOps"],
  },
  {
    period: "Graduated Jan 2025",
    role: "Professional Bachelor in Cloud & Cyber Security",
    company: "Thomas More (Geel)",
    companyUrl: "https://thomasmore.be/en",
    description:
      "Acquired a highly technical, hands-on, project-driven academic baseline focusing heavily on real-world IT architectures, security baselines, and DevOps principles.",
    achievements: [
      "Studied structural Linux performance optimization and environment security hardening",
      "Built foundational knowledge in vulnerability analysis, network defense, and access validation",
    ],
    tags: ["Cloud Security", "Linux", "Networking", "Systems Engineering"],
  },
]

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
    url: "https://learn.microsoft.com/en-us/users/mathiaswouters/credentials/558a70ec69e8712?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: "EDA Application Packaging & Distribution",
    client: "Semiconductor company",
    description:
      "Engineers relied on around 60 EDA applications that were installed by hand, one version at a time. I automated their lifecycle with Jenkins and designed how packages are stored and distributed across on-premises and AWS sites.",
    outcomes: [
      "Replaced a fully manual installation process for ~60 applications",
      "Proposed central artefact storage in Amazon S3, regardless of where an application is built",
      "Checked the lifecycle and distribution model with engineers and stakeholders before building it",
    ],
    tags: ["Jenkins", "AWS", "Linux", "Hybrid Cloud"],
  },
  {
    title: "Azure Landing Zone Root Module",
    client: "Sopra Steria",
    description:
      "A reusable, JSON-driven Terraform root module that deploys a standard Azure landing zone for customers.",
    outcomes: [
      "Cut deployment time for a new landing zone from 1 day to around 1-2 hours",
      "Fewer manual configuration errors, because every setup comes from the same code",
      "Consistent networking and identity setup across customer environments",
    ],
    tags: ["Azure", "Terraform", "Azure DevOps", "Platform Engineering"],
  },
  {
    title: "Kubernetes Homelab",
    client: "Personal Project",
    description:
      "A self-hosted Kubernetes platform on Proxmox where I try out GitOps and platform tooling the way it's used in enterprise environments.",
    outcomes: [
      "VMs provisioned with Terraform and configured with Ansible",
      "Workloads deployed through GitLab CI/CD and ArgoCD",
      "Monitoring with Prometheus, Grafana and Loki, currently being moved onto the Kubernetes cluster",
    ],
    tags: ["Kubernetes", "Proxmox", "Terraform", "ArgoCD", "GitLab CI/CD", "Ansible"],
  }
]
