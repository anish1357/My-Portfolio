export const person = {
  name: "Aniswar Gupta",
  role: "Senior Software Engineer",
  location: "Bengaluru, India",
  email: "aniswargupta@gmail.com",
  resume:
    "https://drive.google.com/file/d/1_smaM3Hdj_4aXKH95bN-4SVjZ0mb5txQ/view?usp=drivesdk",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aniswar-gupta" },
    { label: "GitHub", href: "https://github.com/anish1357" },
    { label: "LeetCode", href: "https://leetcode.com/u/anish_123g/" },
  ],
};

export type Role = {
  org: string;
  title: string;
  when: string;
  points: string[];
};

export const experience: Role[] = [
  {
    org: "Wells Fargo",
    title: "Senior Software Engineer, Home Lending",
    when: "Oct 2026 – Present",
    points: [
      "Build event-driven services in Java, Spring Boot and Kafka for the Home Lending platform.",
      "Ship production agentic AI: multi-agent workflows on Google ADK that hand off to human reviewers.",
    ],
  },
  {
    org: "Wells Fargo",
    title: "Software Engineer, Home Lending",
    when: "Jun 2025 – Sep 2026",
    points: [
      "Built and ran event-driven microservices in Java, Spring Boot and Kafka.",
      "Received the division's Spotlight Award and a Trailblazer Award nomination.",
    ],
  },
  {
    org: "Deutsche Bank",
    title: "Software Engineer",
    when: "Jul 2023 – Jun 2025",
    points: [
      "Automated data retrieval workflows, cutting access time by 90%.",
      "Built tooling for secure monitoring and performance tuning across services.",
      "Designed dashboards and integrated microservices on compliance-heavy projects.",
    ],
  },
  {
    org: "Jadavpur University",
    title: "B.Tech, Information Technology",
    when: "2023",
    points: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Node.js", "Python"],
  },
  {
    group: "Data and messaging",
    items: ["Apache Kafka", "MongoDB", "MySQL", "Oracle DB", "Neo4j"],
  },
  {
    group: "Agentic AI",
    items: ["Google ADK", "LangChain", "RAG", "MCP servers", "Prompt evals"],
  },
  {
    group: "Delivery",
    items: ["Docker", "Kubernetes", "Jenkins", "GCP", "Oracle Cloud", "n8n"],
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Knowledge Graph Generation",
    summary:
      "An LLM agent that clones a codebase, extracts entity relationships from the source and builds a queryable knowledge graph. Ships with a Jira MCP server and a generator that turns tickets into BDD feature files.",
    stack: ["Python", "LLMs", "MCP", "Neo4j"],
    repo: "https://github.com/anish1357/Knowledge-Graph-Generation",
  },
  {
    name: "Bonds Management System",
    summary:
      "Tracks and manages 1,000+ maturing bonds in one place, so teams stop duplicating follow-up work.",
    stack: [],
    repo: "https://github.com/anish1357/Bonds-Management-System",
  },
  {
    name: "Blog REST API",
    summary:
      "A REST API for a blogging platform with create, read, update and delete for posts.",
    stack: [],
    repo: "https://github.com/anish1357/blog-RestAPI",
  },
  {
    name: "E-commerce site",
    summary:
      "A full-stack store with sign-in, product management and checkout.",
    stack: [],
    repo: "https://github.com/anish1357/e-commsite",
  },
  {
    name: "Safe Protest",
    summary:
      "A hackathon web app that helps people organise and join peaceful protests.",
    stack: [],
    repo: "https://github.com/Hack-n-Chill/AlphaQMAM",
  },
];
