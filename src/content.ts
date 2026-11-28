// Everything on the site comes from Venkata Gopi Perumalla's CV and GitHub repos.
// Edit this file to update the site; components read from it.

export const profile = {
  name: "Venkata Gopi Perumalla",
  short: "Venkata Gopi",
  initials: "VG",
  title: "DevOps & Site Reliability Engineer",
  focus: "AWS & Kubernetes",
  years: "6+",
  location: "Dublin, Ireland",
  workRight: "Stamp 1G — full right to work in Ireland",
  tagline: "I build the road from git push to production — and make it safe to drive fast.",
  summary:
    "Site Reliability and DevOps Engineer with 6+ years of professional experience across cloud, DevOps, SRE and application support. Specialised in running production Amazon EKS and Kubernetes platforms, Terraform infrastructure as code and CI/CD with Jenkins, GitHub Actions, Docker and Helm, backed by hands-on observability (Datadog, Prometheus, Grafana), on-call incident management and root cause analysis, with automation in Python and Bash. Applies SLI/SLO/SLA-based reliability practices, and recent AWS builds show end-to-end SRE work: GitOps with Argo CD, security-gated pipelines, automated rollback, and tested database failover and restore. AWS Certified Solutions Architect – Associate; MBA in Project Management, Dublin Business School.",
  email: "gopiperumalla14@gmail.com",
  linkedin: "https://www.linkedin.com/in/venkata-gopi-perumalla/",
  github: "https://github.com/venkatagopi-perumalla",
  cv: "Venkata_Gopi_Perumalla_CV.pdf",
  credly: "https://www.credly.com/badges/49b3e2f9-a1b0-4903-965f-dfbfedaf1c39/public_url",
};

export const greetings = [
  "Hi! I'm Venkata Gopi.",
  "I build pipelines that ship safely.",
  "Kubernetes on AWS is my home turf.",
  "Click me — I'll wave back.",
];

export const focusAreas = [
  {
    k: "Platform",
    title: "Containers on AWS",
    body: "Operating Amazon EKS clusters end to end: version upgrades, node patching, Helm releases, RBAC and network policies, and running services on ECS Fargate.",
  },
  {
    k: "Delivery",
    title: "CI/CD & GitOps",
    body: "Jenkins and GitHub Actions pipelines that test, scan and package — then Argo CD syncs the cluster, or an approval-gated deploy takes it to production.",
  },
  {
    k: "Foundations",
    title: "Infrastructure as Code",
    body: "Reusable Terraform modules with remote state for VPCs, subnets, security groups, EKS and Auto Scaling.",
  },
  {
    k: "Reliability",
    title: "Observability & Incidents",
    body: "Datadog, Prometheus, Grafana, Loki and CloudWatch, SLO burn-rate alerts, on-call, and calm root-cause analysis.",
  },
];

export type Element = { sym: string; name: string; note: string };
export type Group = { id: string; label: string; hue: string; items: Element[] };

export const skillGroups: Group[] = [
  {
    id: "cloud", label: "AWS Cloud", hue: "var(--g-cloud)",
    items: [
      { sym: "Ek", name: "Amazon EKS", note: "Ran production EKS clusters at Cognizant; built one on Spot nodes for the GitOps platform." },
      { sym: "Ec", name: "EC2 & Auto Scaling", note: "Terraform modules for Auto Scaling groups; Lambda-driven EC2 start/stop to cut idle compute." },
      { sym: "Ia", name: "IAM", note: "Least-privilege roles and policies for clusters, pipelines and pods (EKS Pod Identity)." },
      { sym: "Vp", name: "VPC & Networking", note: "Multi-AZ VPCs with private subnets, NAT or VPC endpoints, security groups, load balancers, Route 53." },
      { sym: "La", name: "Lambda & SNS", note: "Event-driven automation, from S3 triggers to scheduled cost-saving jobs." },
      { sym: "Cw", name: "CloudWatch", note: "Alarms emailed through SNS and a service dashboard; used alongside Prometheus." },
      { sym: "Fg", name: "ECS Fargate", note: "Ran a FastAPI service with autoscaling and a circuit breaker that rolled back a bad release by itself." },
      { sym: "Rd", name: "RDS PostgreSQL", note: "Encrypted, private database; turned on Multi-AZ to measure a failover under load, plus a point-in-time restore." },
      { sym: "Wf", name: "AWS WAF", note: "Rate limit that blocked 3,000 of 3,000 requests in a burst." },
      { sym: "Km", name: "KMS", note: "Customer-managed key with yearly rotation for the database." },
      { sym: "Ct", name: "CloudTrail & Config", note: "Audit trail of every production change; 5 of 5 Config rules compliant." },
    ],
  },
  {
    id: "k8s", label: "Containers", hue: "var(--g-k8s)",
    items: [
      { sym: "Dk", name: "Docker", note: "Multi-stage builds, non-root users, read-only filesystems, health checks." },
      { sym: "K8", name: "Kubernetes", note: "Upgrades, node patching, HPA, health probes, RBAC and network policies on live workloads." },
      { sym: "Hm", name: "Helm", note: "Packaged applications as Helm charts to keep releases consistent across environments." },
      { sym: "Kc", name: "kubectl & YAML", note: "Day-to-day cluster operations and manifest authoring." },
    ],
  },
  {
    id: "iac", label: "Infrastructure as Code", hue: "var(--g-iac)",
    items: [
      { sym: "Tf", name: "Terraform", note: "Reusable modules with S3 remote state and locking; tore down 70 resources in one command." },
      { sym: "Cf", name: "CloudFormation", note: "Provisioned IAM roles, S3 policies and RDS snapshots as code." },
      { sym: "An", name: "Ansible", note: "Server configuration with playbooks at Cognizant." },
    ],
  },
  {
    id: "cicd", label: "CI/CD & GitOps", hue: "var(--g-cicd)",
    items: [
      { sym: "Jk", name: "Jenkins", note: "Declarative and scripted pipelines in Groovy; scaled with distributed build agents." },
      { sym: "Ga", name: "GitHub Actions", note: "Test, scan and push pipelines with matrix builds, and production deploys gated behind a named approver." },
      { sym: "Ar", name: "Argo CD", note: "Auto-sync, prune and self-heal; rollbacks as git revert." },
      { sym: "Sq", name: "SonarQube", note: "Quality gates in Maven pipelines before images are built." },
      { sym: "Jf", name: "JFrog Artifactory", note: "Versioned build artefacts for Tomcat and WebSphere deployments." },
      { sym: "Gt", name: "Git", note: "Branching, merging and tagging strategy agreed with dev teams." },
    ],
  },
  {
    id: "obs", label: "Observability & Security", hue: "var(--g-obs)",
    items: [
      { sym: "Pr", name: "Prometheus", note: "Alerting rules and a 99.5% SLO with multi-window burn-rate alerts." },
      { sym: "Gf", name: "Grafana", note: "Dashboards for request rate, error ratio, p95 latency and restarts." },
      { sym: "Lk", name: "Loki", note: "Log queries that traced an incident to a single endpoint." },
      { sym: "Tv", name: "Trivy", note: "Scans images, dependencies and Terraform; blocked a release over 3 HIGH CVEs and a base image with a HIGH zlib CVE." },
      { sym: "Gl", name: "Gitleaks", note: "Secret scanning on every push." },
      { sym: "Dd", name: "Datadog", note: "Alerts and investigation of pod failures, node issues and resource use on production EKS." },
      { sym: "Sp", name: "Splunk", note: "Searched application and infrastructure logs to troubleshoot failed deployments." },
      { sym: "Wz", name: "Wiz", note: "Found cloud misconfigurations on production AWS." },
    ],
  },
  {
    id: "code", label: "Scripting & Systems", hue: "var(--g-code)",
    items: [
      { sym: "Py", name: "Python", note: "Scripted repetitive platform tasks; FastAPI and Flask services for demo apps." },
      { sym: "Sh", name: "Bash", note: "Replaced manual Linux server tasks with scripts." },
      { sym: "Lx", name: "Linux", note: "Ubuntu servers, Nginx, Apache Tomcat and IBM WebSphere." },
      { sym: "Ji", name: "Jira & Agile", note: "Sprint work, deployment tracking and incident follow-ups." },
    ],
  },
];

export const experience = [
  {
    role: "Application Support Assistant",
    org: "Lenehan's",
    place: "Dublin, Ireland",
    when: "Apr 2025 — Present",
    lead: "Keep a 16,000-product online shop working, and catch problems before customers do.",
    points: [
      "Support the Magento 2 e-commerce website (16,000+ products, next-day nationwide delivery), investigating customer-reported issues with checkout, payments, orders and product availability.",
      "Diagnose catalogue, pricing and stock-sync issues between the Capel Street shop, the Arklow fulfilment centre and the website, keeping online stock accurate and preventing overselling.",
      "Track recurring incidents through to resolution and identify root causes, escalating platform faults to the hosting and development provider with clear evidence and steps to reproduce.",
      "Test the website after updates and configuration changes, checking checkout, search, delivery options and order emails before issues reach customers.",
      "Keep incident records and troubleshooting notes; provide first-line POS, printer and in-store IT support.",
    ],
    tags: ["Magento 2", "Incident management", "Root cause analysis", "Release testing"],
  },
  {
    role: "Senior DevOps Engineer – Site Reliability",
    org: "Cognizant Technology Solutions",
    place: "Hyderabad, India",
    when: "Jun 2023 — Aug 2024",
    lead: "Kept production Amazon EKS healthy, secure and up to date.",
    points: [
      "Managed production Amazon EKS lifecycle operations, including Kubernetes version upgrades and worker node patching, to minimise disruption to business-critical workloads.",
      "Managed Kubernetes workloads using Deployments, Services, ConfigMaps, Secrets, Ingress, Horizontal Pod Autoscaler (HPA) and liveness and readiness probes, packaged and released through Helm.",
      "Configured alerts and investigated pod failures, node issues and resource utilisation using Datadog, Prometheus, Grafana and CloudWatch.",
      "Participated in on-call support and incident management, performing root cause analysis and supporting corrective actions, and tracked reliability against SLOs, contributing to improved MTTD and MTTR.",
      "Maintained Terraform-managed AWS and EKS infrastructure, supporting workload scaling and releases.",
      "Enforced access control and network isolation with Kubernetes RBAC, network policies, IAM roles and TLS, and used Wiz to find cloud misconfigurations.",
      "Automated server configuration with Ansible and routine platform tasks with Python.",
    ],
    tags: ["EKS", "Helm", "Datadog", "Prometheus", "Terraform", "Wiz"],
  },
  {
    role: "Senior Software Engineer",
    org: "Sevya IT Pvt Ltd",
    place: "Hyderabad, India",
    when: "Sep 2022 — Jun 2023",
    lead: "Built the pipelines and Terraform that took code to Kubernetes on AWS.",
    points: [
      "Developed Jenkins declarative and scripted pipelines in Groovy integrating Maven, SonarQube, Docker and Kubernetes deployments on AWS; administered Linux build agents, plugins and credentials.",
      "Created reusable Terraform modules with remote state for EKS, VPCs, public and private subnets, NAT Gateway, Route 53, security groups and Auto Scaling groups.",
      "Supported Kubernetes application deployments, container troubleshooting, workload health checks and rollback procedures.",
      "Analysed application and infrastructure logs in Splunk to troubleshoot deployment failures and operational incidents.",
      "Automated IAM roles, S3 bucket policies and RDS snapshots with CloudFormation, and maintained Git branching and tagging for controlled releases.",
    ],
    tags: ["Jenkins", "Terraform", "SonarQube", "Splunk", "CloudFormation"],
  },
  {
    role: "Software Engineer",
    org: "Capgemini",
    place: "Hyderabad, India",
    when: "Mar 2020 — Sep 2022",
    lead: "Ran releases for enterprise clients and automated the toil away.",
    points: [
      "Built Jenkins CI/CD pipelines integrating Git, Maven and JFrog Artifactory for deployments to Apache Tomcat and IBM WebSphere, and configured distributed Linux build agents for parallel builds.",
      "Maintained AWS infrastructure using Terraform and Helm, supporting repeatable Kubernetes deployments, infrastructure changes and release troubleshooting.",
      "Automated EC2 start/stop operations with AWS Lambda and SNS to reduce idle compute, and wrote Bash scripts for Linux administration.",
      "Supported production releases and major-incident troubleshooting in Agile teams; tracked work in Jira.",
    ],
    tags: ["Jenkins", "Artifactory", "Terraform", "Lambda", "Bash"],
  },
];

export const featured = {
  name: "Microservices Platform on AWS EKS with GitOps",
  when: "Oct 2026",
  repo: "https://github.com/venkatagopi-perumalla/eks-gitops-platform",
  rca: "https://github.com/venkatagopi-perumalla/eks-gitops-platform/blob/main/docs/rca-001.md",
  thesis: "A git push is the only way code reaches the cluster.",
  tech: ["AWS EKS", "ECR", "Terraform", "GitHub Actions", "Gitleaks", "Trivy", "Docker", "Helm", "Argo CD", "External Secrets", "Secrets Manager", "Prometheus", "Grafana", "Loki"],
  points: [
    "Built a VPC across two availability zones with private subnets for the nodes, an EKS cluster on Spot nodes and ECR registries, using reusable Terraform modules with S3 remote state.",
    "Built a GitHub Actions pipeline with unit tests, Gitleaks and Trivy. Trivy blocked a release over 3 HIGH CVEs, fixed by upgrading the dependencies rather than weakening the scan.",
    "Deployed three microservices with Helm and Argo CD (auto-sync, prune and self-heal), with database secrets pulled from AWS Secrets Manager through External Secrets and EKS Pod Identity.",
    "Set a 99.5% SLO with a multi-window burn-rate alert. Introduced a controlled configuration failure causing about 25% errors, traced it with Grafana, Loki and Argo CD, rolled back with Git in about two minutes and wrote the RCA.",
    "Ran the platform under load (6,200+ orders processed), kept the cost to a few dollars with Spot nodes and a single NAT gateway, and tore down all 70 resources with Terraform the same day.",
  ],
  shots: [
    { src: "architecture.webp", w: 1344, h: 914, alt: "Architecture: developer push to GitHub, Actions CI with tests, Gitleaks, SonarQube and Trivy, images to ECR, Argo CD syncing a Helm chart into EKS, External Secrets from Secrets Manager, and Prometheus, Grafana and Loki monitoring.", caption: "Architecture" },
    { src: "ci.webp", w: 1332, h: 426, alt: "GitHub Actions run with secret scan, unit tests, image build and scan for three services, and the tag update job all green.", caption: "CI pipeline" },
    { src: "argocd.webp", w: 972, h: 542, alt: "Argo CD application tree showing the shop app synced and healthy.", caption: "Argo CD" },
    { src: "incident.webp", w: 1400, h: 372, alt: "Grafana panels showing 5xx errors and the error ratio climbing to about 25 percent, then recovering after the revert.", caption: "Incident & recovery" },
  ],
};

export const payments = {
  name: "Secure Payments API on AWS",
  when: "Nov 2026",
  repo: "https://github.com/venkatagopi-perumalla/secure-payments-platform",
  controls: "https://github.com/venkatagopi-perumalla/secure-payments-platform/blob/main/docs/controls.md",
  summary:
    "A small payments API (FastAPI and PostgreSQL) and the AWS platform around it, built the way a regulated team would run it: private networking with VPC endpoints instead of NAT, encryption with a customer-managed KMS key, scanned and immutable images, deployments that need a named approver, and failure tests I measured myself. I built it in a lab AWS account in eu-north-1. It's a portfolio project, not certified against PCI DSS or any standard.",
  tech: ["Terraform", "ECS Fargate", "RDS PostgreSQL 16", "ALB", "AWS WAF", "ACM", "KMS", "Secrets Manager", "ECR", "VPC endpoints", "CloudTrail", "AWS Config", "CloudWatch", "SNS", "GitHub Actions", "Trivy", "FastAPI"],
  points: [
    "An approved deployment took 2 minutes 3 seconds, with 0 of 300 health checks failed. A release that crashed on start-up was rolled back automatically by the ECS circuit breaker in about 4 minutes, with 0 user errors.",
    "I forced a Multi-AZ database failover under load. Payments failed for about 10 seconds (291 of 300 accepted, 8 returned 500, 1 timed out). AWS reported the failover complete in 48 seconds, so I measure from the user's side now.",
    "I restored the database to a point in time in 14.2 minutes, onto a new encrypted, private instance. A manual rollback took 3 minutes 0 seconds from approval to stable.",
    "The AWS WAF rate limit blocked 3,000 of 3,000 requests in a burst. A forced alarm emailed me in about a minute, and the recovery email followed automatically.",
    "Every pull request runs 12 tests against a real PostgreSQL plus Trivy scans. Deploys check that the image was scanned and fail if ECS rolled back. The API runs on HTTPS at my own domain with an ACM certificate (TLS 1.2/1.3 only), and plain HTTP redirects. I documented 42 controls with evidence.",
  ],
    gaps: "TLS ends at the load balancer; traffic inside the VPC to the tasks is plain HTTP. The lab account blocks IAM OIDC, so CI uses two least-privilege IAM users.",
  shot: { src: "payments-architecture.webp", w: 1400, h: 860, alt: "Architecture: GitHub pull requests run tests and Trivy scans, images go to ECR with immutable tags, an approved deploy updates ECS Fargate in private app subnets behind AWS WAF and a load balancer, with RDS PostgreSQL encrypted by KMS in private data subnets, VPC endpoints instead of NAT, and CloudTrail, AWS Config and CloudWatch alarms." },
};

export const moreProjects = [
  {
    name: "learning-tracker",
    blurb: "3-tier app (React 19, FastAPI, PostgreSQL) whose CI tests the backend on two Python versions, runs the full stack in Compose, smoke-tests it through Nginx and publishes images to GHCR.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
    url: "https://github.com/venkatagopi-perumalla/learning-tracker",
  },
  {
    name: "devops-todo-api",
    blurb: "Flask API, Nginx and PostgreSQL in non-root containers with health checks; integration tests against real Postgres and images tagged by run number.",
    tags: ["Flask", "Nginx", "Compose", "GHCR"],
    url: "https://github.com/venkatagopi-perumalla/devops-todo-api",
  },
  {
    name: "Aws-kubernetes-terraform",
    blurb: "VPC, security groups and an EKS cluster written as separate Terraform modules.",
    tags: ["Terraform", "VPC", "EKS"],
    url: "https://github.com/venkatagopi-perumalla/Aws-kubernetes-terraform",
  },
  {
    name: "Shell-Script",
    blurb: "One Bash script that creates an S3 bucket, IAM role and Lambda, and wires S3 uploads to Lambda and SNS.",
    tags: ["Bash", "AWS CLI", "Lambda", "SNS"],
    url: "https://github.com/venkatagopi-perumalla/Shell-Script",
  },
];

// Only figures stated in the CV or the project write-up.
export const stats = [
  { value: 6, suffix: "+", label: "years of experience", sub: "Capgemini → Sevya IT → Cognizant → Lenehan's" },
  { value: 6200, suffix: "+", label: "orders processed under load", sub: "on the EKS GitOps platform" },
  { value: 2, prefix: "~", suffix: " min", label: "from git revert to recovery", sub: "during a 25%-error incident" },
  { value: 99.5, suffix: "%", decimals: 1, label: "SLO with burn-rate alerting", sub: "multi-window, per the SRE workbook" },
  { value: 3, label: "HIGH CVEs blocked by Trivy", sub: "fixed, not suppressed" },
  { value: 0, suffix: "/300", label: "health checks failed", sub: "during an approved ECS deploy" },
];

export const certification = {
  name: "AWS Certified Solutions Architect — Associate",
  issuer: "Amazon Web Services",
  url: "https://www.credly.com/badges/49b3e2f9-a1b0-4903-965f-dfbfedaf1c39/public_url",
};

export const education = [
  { degree: "MBA in Project Management", level: "NFQ Level 9", school: "Dublin Business School", place: "Dublin, Ireland", when: "2024 — 2025" },
  { degree: "Bachelor of Engineering, Civil Engineering", school: "Jawaharlal Nehru Technological University", place: "Kakinada, India", when: "2020" },
];

// LinkedIn Learning course certificates — shown as a smaller "Continuous learning" list.
export const courses: { name: string; provider: string; year?: string; url?: string }[] = [
  { name: "Site Reliability Engineering Essential Training", provider: "LinkedIn Learning", year: "Nov 2026" },
  { name: "Kubernetes Essential Training: Application Development", provider: "LinkedIn Learning", year: "Oct 2026" },
];

// Other skills from the CV that don't have their own tile in the periodic table.
export const alsoSkills = [
  "ECR", "S3", "EBS", "EFS", "Elastic Load Balancing", "CloudFront",
  "Secrets Manager", "Route 53", "API Gateway", "EventBridge", "ACM", "DataSync", "Storage Gateway", "GitLab", "ELK Stack", "Maven", "Nginx", "Apache Tomcat", "IBM WebSphere",
  "Windows", "Confluence", "Scrum", "ITSM", "SBOM", "Disaster recovery & rollback planning",
];
