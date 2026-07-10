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
    title: "Containerization & Orchestration",
    description:
      "Packaging applications into secure, lightweight containers and orchestrating them with Kubernetes to ensure seamless scaling, high availability, and consistent environments from development to production.",
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
    items: ["AWS", "Azure", "GCP", "VPC & networking", "IAM & security", "Databricks"],
  },
  {
    category: "DevOps & Automation",
    items: ["Terraform", "Ansible", "CI/CD", "Jenkins", "Python", "Golang"],
  },
  {
    category: "Containers & OS",
    items: ["Kubernetes", "Docker", "Linux", "RHEL", "Bash Scripting", "Hardening"],
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Dynatrace"],
  },
]

export const stats: Stat[] = [
  { label: "Years in IT", value: 4, suffix: "+" },
  { label: "Enterprise Projects Contributed To", value: 6, suffix: "" },
  { label: "Production clusters managed", value: 7, suffix: "+" },
  { label: "Certifications", value: 1, suffix: "" },
]

export const experience: ExperienceItem[] = [
  {
    period: "Mar 2026 — Present",
    role: "IT Consultant (Cloud / DevOps Engineer)",
    company: "Itility",
    companyUrl: "https://itility.nl/",
    description:
      "Designing and automating AWS and Azure cloud infrastructure, focusing on smooth data integrations and robust enterprise development environments.",
    achievements: [
      "Built automated cloud infrastructure pipelines using Terraform",
      "Integrated key cloud services natively with modern data platforms like Databricks and Azure Data Factory (ADF)",
      "Maintained containerized workloads and Linux-based cloud VMs for development workflows",
    ],
    tags: ["AWS", "Azure", "Terraform", "Databricks", "ADF"],
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
    title: "Root Module Factory for Azure Delivery",
    client: "Sopra Steria",
    description:
      "Developed a baseline root Terraform module aimed at standardizing and accelerating Azure tenant platform rollouts while minimizing typical manual implementation flaws.",
    outcomes: [
      "Significantly accelerated time-to-delivery for new baseline Azure platform setups",
      "Mitigated a vast majority of manual environment configuration errors via strict code definitions",
      "Enforced uniform corporate standardizations across networking and identity governance layers",
    ],
    tags: ["Azure", "Terraform", "Azure DevOps", "Platform Engineering"],
  },
  {
    title: "Production-Grade Kubernetes Homelab",
    client: "Personal Project",
    description:
      "Engineered a fully self-hosted Kubernetes automation platform to perfectly replicate enterprise GitOps operational environments and test architecture implementations.",
    outcomes: [
      "Orchestrated complete virtual node sizing and execution baseline leveraging Proxmox hypervisors",
      "Programmed complete, declarative lifecycle configurations via combined Terraform and Ansible setups",
      "Synchronized containerized workload life deployment cycles using GitLab CI/CD and ArgoCD",
    ],
    tags: ["Kubernetes", "Proxmox", "ArgoCD", "GitLab CI/CD", "Ansible"],
  },
  // {
  //   title: "Cloud migration to AWS",
  //   client: "",
  //   description:
  //     "<description comes here>",
  //   outcomes: [
  //     "<outcome 1 comes here>",
  //     "<outcome 2 comes here>",
  //     "<outcome 3 comes here>",
  //   ],
  //   tags: ["tag1", "tag2", "tag3"],
  // },
]
