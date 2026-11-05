// Everything on the site comes from Venkata Gopi Perumalla's CV and GitHub repos.
// Edit this file to update the site; components read from it.

export const profile = {
  name: "Venkata Gopi Perumalla",
  short: "Venkata Gopi",
  initials: "VG",
  title: "DevOps Engineer",
  focus: "AWS Cloud & Kubernetes",
  years: "4+",
  location: "Dublin, Ireland",
  workRight: "Stamp 1G — full right to work in Ireland",
  tagline: "I build the road from git push to production — and make it safe to drive fast.",
  summary:
    "DevOps engineer with 4+ years designing, automating and running cloud infrastructure on AWS. I build and operate Amazon EKS platforms and CI/CD pipelines, provision environments as code with Terraform, and keep production healthy with Prometheus and Grafana.",
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
    title: "Kubernetes on AWS",
    body: "Operating Amazon EKS clusters end to end: version upgrades, node patching, Helm releases, RBAC and network policies.",
  },
  {
    k: "Delivery",
    title: "CI/CD & GitOps",
    body: "Jenkins and GitHub Actions pipelines that test, scan and package — then Argo CD makes the cluster match Git.",
  },
  {
    k: "Foundations",
    title: "Infrastructure as Code",
    body: "Reusable Terraform modules with remote state for VPCs, subnets, security groups, EKS and Auto Scaling.",
  },
  {
    k: "Reliability",
    title: "Observability & Incidents",
    body: "Prometheus, Grafana, Loki and CloudWatch dashboards, SLO burn-rate alerts, and calm root-cause analysis.",
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
      { sym: "Vp", name: "VPC & Networking", note: "Multi-AZ VPCs with private subnets, NAT, security groups, load balancers, Direct Connect." },
      { sym: "La", name: "Lambda & SNS", note: "Event-driven automation, from S3 triggers to scheduled cost-saving jobs." },
      { sym: "Cw", name: "CloudWatch", note: "Metrics and alarms alongside Prometheus for platform health." },
    ],
  },
  {
    id: "k8s", label: "Containers", hue: "var(--g-k8s)",
    items: [
      { sym: "Dk", name: "Docker", note: "Multi-stage builds, non-root users, read-only filesystems, health checks." },
      { sym: "K8", name: "Kubernetes", note: "Upgrades, node patching, RBAC, network policies, troubleshooting live workloads." },
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
      { sym: "Jk", name: "Jenkins", note: "Pipeline and Multibranch jobs in Groovy; scaled with distributed build agents." },
      { sym: "Ga", name: "GitHub Actions", note: "Test, scan and push pipelines with matrix builds and OIDC-ready auth." },
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
      { sym: "Tv", name: "Trivy", note: "Image scanning that blocked a release over 3 HIGH CVEs." },
      { sym: "Gl", name: "Gitleaks", note: "Secret scanning on every push." },
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
    role: "Senior DevOps Engineer",
    org: "Cognizant Technology Solutions",
    place: "Hyderabad, India",
    when: "Jun 2023 — Aug 2024",
    lead: "Kept production Amazon EKS healthy, secure and up to date.",
    points: [
      "Operated production Amazon EKS clusters, carrying out Kubernetes version upgrades and node patching with minimal disruption to running services.",
      "Secured cluster and cloud access with Kubernetes RBAC, network policies, IAM roles and TLS.",
      "Packaged applications as Helm charts and managed their releases to EKS, keeping deployments consistent across environments.",
      "Monitored platform health with Prometheus, Grafana and Amazon CloudWatch, built alerting rules and dashboards, and led troubleshooting and root-cause analysis for production incidents.",
      "Managed server configuration with Ansible playbooks and scripted repetitive platform tasks in Python.",
    ],
    tags: ["EKS", "Helm", "RBAC", "Prometheus", "Ansible"],
  },
  {
    role: "Senior Software Engineer — DevOps",
    org: "Sevya IT Pvt Ltd",
    place: "Hyderabad, India",
    when: "Sep 2022 — Jun 2023",
    lead: "Built the pipelines and Terraform that took code to Kubernetes on AWS.",
    points: [
      "Built Jenkins Pipeline and Multibranch jobs as code in Groovy that compiled with Maven, ran SonarQube quality gates, built Docker images and deployed them to Kubernetes on AWS.",
      "Administered Jenkins on Linux, managing plugins, credentials and security for development teams.",
      "Wrote reusable Terraform modules with remote state for EKS clusters, VPCs, subnets, security groups and Auto Scaling groups, cutting manual effort for environment builds.",
      "Provisioned IAM roles, S3 policies and RDS snapshots with AWS CloudFormation, and integrated S3 and IAM with EKS clusters.",
      "Agreed Git branching, merging and tagging strategy with development teams and resolved merge conflicts to keep releases moving.",
    ],
    tags: ["Jenkins", "Terraform", "SonarQube", "CloudFormation"],
  },
  {
    role: "Software Engineer",
    org: "Capgemini",
    place: "Hyderabad, India",
    when: "Mar 2020 — Sep 2022",
    lead: "Ran releases for enterprise clients and automated the toil away.",
    points: [
      "Deployed applications to Apache Tomcat and IBM WebSphere through Jenkins, publishing versioned build artefacts to JFrog Artifactory.",
      "Scaled Jenkins with distributed build agents so multiple development teams could run builds in parallel.",
      "Automated EC2 start/stop scheduling with AWS Lambda and SNS to cut idle compute, and replaced manual Linux server tasks with Bash scripts.",
      "Supported production releases, diagnosing failed builds from Jenkins logs and joining major-incident bridge calls to restore service.",
      "Worked in Agile sprints, tracking deployments and operational tasks in Jira.",
    ],
    tags: ["Jenkins", "Artifactory", "Lambda", "Bash"],
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
    "Built a GitHub Actions pipeline with unit tests, Gitleaks and Trivy. Trivy blocked a release over 3 HIGH CVEs — fixed by upgrading the dependencies rather than weakening the scan.",
    "Deployed three microservices with Helm and Argo CD (auto-sync, prune and self-heal), with database secrets pulled from AWS Secrets Manager through External Secrets and EKS Pod Identity.",
    "Set a 99.5% SLO with a multi-window burn-rate alert. After a deliberate bad config change caused about 25% errors, traced it with Grafana, Loki and Argo CD history, rolled back with git revert in about 2 minutes and wrote the RCA.",
    "Ran the platform under load (6,200+ orders processed), kept the cost to a few dollars with Spot nodes and a single NAT gateway, and tore down all 70 resources with Terraform the same day.",
  ],
  shots: [
    { src: "architecture.webp", w: 1344, h: 914, alt: "Architecture: developer push to GitHub, Actions CI with tests, Gitleaks, SonarQube and Trivy, images to ECR, Argo CD syncing a Helm chart into EKS, External Secrets from Secrets Manager, and Prometheus, Grafana and Loki monitoring.", caption: "Architecture" },
    { src: "ci.webp", w: 1332, h: 426, alt: "GitHub Actions run with secret scan, unit tests, image build and scan for three services, and the tag update job all green.", caption: "CI pipeline" },
    { src: "argocd.webp", w: 972, h: 542, alt: "Argo CD application tree showing the shop app synced and healthy.", caption: "Argo CD" },
    { src: "incident.webp", w: 1400, h: 372, alt: "Grafana panels showing 5xx errors and the error ratio climbing to about 25 percent, then recovering after the revert.", caption: "Incident & recovery" },
  ],
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
  { value: 4, suffix: "+", label: "years in DevOps & cloud", sub: "Capgemini → Sevya IT → Cognizant" },
  { value: 6200, suffix: "+", label: "orders processed under load", sub: "on the EKS GitOps platform" },
  { value: 2, prefix: "~", suffix: " min", label: "from git revert to recovery", sub: "during a 25%-error incident" },
  { value: 99.5, suffix: "%", decimals: 1, label: "SLO with burn-rate alerting", sub: "multi-window, per the SRE workbook" },
  { value: 3, label: "HIGH CVEs blocked by Trivy", sub: "fixed, not suppressed" },
  { value: 70, label: "AWS resources torn down", sub: "in one terraform destroy" },
];

export const certification = {
  name: "AWS Certified Solutions Architect — Associate",
  issuer: "Amazon Web Services",
  url: "https://www.credly.com/badges/49b3e2f9-a1b0-4903-965f-dfbfedaf1c39/public_url",
};

export const education = [
  { degree: "MBA in Project Management", level: "NFQ Level 9", school: "DBS Business School", place: "Dublin, Ireland", when: "2024 — 2025" },
  { degree: "Bachelor of Engineering, Civil Engineering", school: "Jawaharlal Nehru Technological University", place: "Kakinada, India", when: "2020" },
];

// LinkedIn Learning course certificates — shown as a smaller "Continuous learning" list.
export const courses: { name: string; provider: string; year?: string; url?: string }[] = [
  { name: "Site Reliability Engineering Essential Training", provider: "LinkedIn Learning", year: "Nov 2026" },
  { name: "Kubernetes Essential Training: Application Development", provider: "LinkedIn Learning", year: "Oct 2026" },
];
