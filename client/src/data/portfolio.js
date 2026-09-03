export const profile = {
  name: "Anil Tadvi",
  role: "Offensive Security Researcher",
  email: "contact@aniltadvi.com",
  location: "India",
  github: "https://github.com/aniltadvi20",
  linkedin: "https://www.linkedin.com/in/anil-tadvi-238b592a7",
  x: "https://x.com/AnilTadviSec",
  tryHackMe: "https://tryhackme.com/p/stackraid",
};

export const projects = [
  {
    number: "01",
    title: "Security Research Hub",
    type: "Research platform",
    description:
      "A central workspace for practical web-security research, combining testing methodologies, recon notes, payload references, interactive utilities, and controlled practice labs.",
    outcome:
      "Turns a scattered research workflow into one searchable, repeatable system.",
    stack: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
    repository: "https://github.com/aniltadvi20/security-research-hub",
    accent: "#73e2a7",
  },
  {
    number: "02",
    title: "Vulnerability Intelligence Dashboard",
    type: "Full-stack security console",
    description:
      "A React and Express dashboard for managing targets, tracking discovery status, reviewing assets, and understanding vulnerability risk across a security-testing workflow.",
    outcome:
      "Explores how security data moves from collection to prioritization and review.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    repository:
      "https://github.com/aniltadvi20/vulnerability-intelligence-dashboard",
    accent: "#82aaff",
  },
  {
    number: "03",
    title: "Bug Bounty Command Generator",
    type: "Browser utility",
    description:
      "A focused interface that generates ready-to-use reconnaissance commands for common security tools from a supplied target domain.",
    outcome:
      "Reduces repetitive command preparation while keeping authorization reminders visible.",
    stack: ["HTML", "CSS", "JavaScript"],
    repository:
      "https://github.com/aniltadvi20/bug-bounty-command-generator",
    live: "https://hacktivist.app",
    accent: "#f5c76b",
  },
  {
    number: "04",
    title: "Recon Automation Pipeline",
    type: "Python CLI",
    description:
      "A Python workflow that orchestrates subdomain discovery, HTTP probing, deduplication, and Nuclei scanning for explicitly authorized targets.",
    outcome:
      "Produces organized target files and a concise summary from a repeatable recon pipeline.",
    stack: ["Python", "Subfinder", "httpx", "Nuclei"],
    repository: "https://github.com/aniltadvi20/bug-bounty-recon",
    accent: "#d3a6ff",
  },
];

export const credentials = [
  {
    title: "Certified Cybersecurity Educator Professional",
    issuer: "Red Team Leaders",
    date: "2025",
    type: "Certification",
    verification:
      "https://courses.redteamleaders.com/exam-completion/2c70d277a29cc072",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google · Coursera",
    date: "2025",
    type: "Certificate",
    verification:
      "https://coursera.org/share/a9182085a884e6daf4fccd1c10c138cb",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte Australia · Forage",
    date: "Jun 2025",
    type: "Job simulation",
  },
  {
    title: "Offensive Pentesting",
    issuer: "TryHackMe",
    date: "Dec 2024",
    type: "Learning path",
    verification: "https://tryhackme.com/p/stackraid",
  },
];

export const skillGroups = [
  {
    label: "Testing",
    items: [
      "Web application security",
      "API security",
      "Authentication testing",
      "Authorization testing",
      "Business logic",
      "Responsible disclosure",
    ],
  },
  {
    label: "Workflow",
    items: [
      "Burp Suite",
      "Nmap",
      "Postman",
      "Nuclei",
      "ffuf",
      "Wireshark",
    ],
  },
  {
    label: "Recon",
    items: [
      "Subfinder",
      "Amass",
      "httpx",
      "Naabu",
      "Katana",
      "OSINT",
    ],
  },
  {
    label: "Build",
    items: ["JavaScript", "React", "Node.js", "Python", "Bash", "Git"],
  },
];
