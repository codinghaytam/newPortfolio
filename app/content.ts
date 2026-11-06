/**
 * All portfolio content in one place. Update this file to change what the site says;
 * page.tsx only handles layout.
 */
import type { IconType } from "react-icons"
import { FaAws, FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import {
  SiAngular,
  SiBootstrap,
  SiDjango,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiHuggingface,
  SiJavascript,
  SiJenkins,
  SiKeycloak,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiSpring,
  SiTauri,
  SiTerraform,
} from "react-icons/si"
import { DiRedis } from "react-icons/di"

export const PROFILE = {
  name: "Mohamed Haytam Soukrati",
  shortName: "M. Haytam Soukrati",
  role: "Knowledge Graph Engineer",
  company: "SevenBlue",
  email: "mohamed.haytam.soukrati@gmail.com",
  github: "https://github.com/codinghaytam",
  githubLabel: "github.com/codinghaytam",
  linkedin: "https://www.linkedin.com/in/mohamed-haytam-soukrati-702286276",
  photo: "/profile.jpg",
}

export type Tech = { icon?: IconType; name: string; color?: string }

// ---------------------------------------------------------------- Experience

export type Job = {
  role: string
  org: string
  place?: string
  period: string
  current?: boolean
  points: string[]
  tech: Tech[]
}

export const EXPERIENCE: Job[] = [
  {
    role: "Knowledge Graph Engineer",
    org: "SevenBlue",
    period: "2026 — Present",
    current: true,
    points: ["Research & development on knowledge graphs and Semantic Web technologies."],
    tech: [{ name: "RDF" }, { name: "SPARQL" }, { name: "JSON-LD" }],
  },
  {
    role: "Research Engineer Intern",
    org: "SINERGIES Laboratory, UTBM",
    place: "Belfort, France",
    period: "Feb 2026 — Jun 2026",
    points: [
      "Developed a general-anesthesia decision-support application using reinforcement learning models.",
      "Structured and processed complex medical data from the VitalDB database.",
    ],
    tech: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiAngular, name: "Angular", color: "#DD0031" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { icon: SiDjango, name: "Django", color: "#44B78B" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
    ],
  },
  {
    role: "AI Intern",
    org: "ShellBoxes",
    place: "Marrakech, Morocco",
    period: "Jul 2025 — Sep 2025",
    points: [
      "Designed transformation and integration pipelines over heterogeneous data to detect fraudulent transactions, deployed on AWS EC2.",
    ],
    tech: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
      { icon: FaPython, name: "Python", color: "#3776AB" },
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Office National des Aéroports (ONDA)",
    place: "Casablanca, Morocco",
    period: "Jul 2024 — Aug 2024",
    points: ["Developed a web application for anomaly management, deployed on an internal server."],
    tech: [
      { icon: SiDjango, name: "Django", color: "#44B78B" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
]

// ---------------------------------------------------------------- Skills

export type SkillGroup = { title: string; note?: string; items: Tech[] }

export const SKILLS: SkillGroup[] = [
  {
    title: "Knowledge Graphs",
    items: [
      { name: "RDF" },
      { name: "SPARQL" },
      { name: "JSON-LD" },
      { name: "Ontologies" },
      { name: "FAIR principles" },
    ],
  },
  {
    title: "AI / ML / RL",
    items: [
      { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
      { name: "Predictive modelling" },
      { name: "Reinforcement learning" },
    ],
  },
  {
    title: "Data & Pipelines",
    items: [
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: SiPandas, name: "Pandas", color: "#8B7CF6" },
      { icon: SiElasticsearch, name: "Elasticsearch", color: "#00BFB3" },
      { name: "Transformation pipelines" },
    ],
  },
  {
    title: "Health Data Standards",
    items: [{ name: "FHIR" }, { name: "HL7" }, { name: "Interoperability" }],
  },
  {
    title: "Deployment",
    items: [
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
      { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
      { icon: SiJenkins, name: "Jenkins", color: "#D24939" },
      { icon: SiTerraform, name: "Terraform", color: "#844FBA" },
      { icon: FaAws, name: "AWS", color: "#FF9900" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Backend & Software",
    items: [
      { icon: SiDjango, name: "Django", color: "#44B78B" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiSpring, name: "Spring", color: "#6DB33F" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiAngular, name: "Angular", color: "#DD0031" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    ],
  },
]

// ---------------------------------------------------------------- Projects

export type Project = {
  title: string
  description: string
  points?: string[]
  image?: string
  alt?: string
  href?: string
  tech: Tech[]
  /** Show the whole image (e.g. a logo) instead of cropping it */
  contain?: boolean
}

export const AI_PROJECTS: Project[] = [
  {
    title: "AI Smart Contract Analysis",
    description: "A deep-learning static analyzer that detects vulnerabilities in Ethereum smart contracts.",
    points: ["Interpretable predictions", "Out-of-distribution robustness evaluation"],
    image: "/smart-contract-analysis.png",
    alt: "Smart contract static analysis illustration",
    href: "https://github.com/codinghaytam/AI-smart-contract-analysis",
    tech: [
      { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { icon: SiPandas, name: "Pandas", color: "#8B7CF6" },
      { icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
    ],
  },
  {
    title: "Football Movement Detection & Correction",
    description: "A mobile app that detects football movements in real time and gives corrective feedback.",
    points: ["Real-time gesture-detection pipeline", "Temporal sequence modelling and motor-correction policies"],
    tech: [
      { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: SiDjango, name: "Django", color: "#44B78B" },
      { icon: FaReact, name: "React Native", color: "#61DAFB" },
      { icon: SiSpring, name: "Spring", color: "#6DB33F" },
    ],
  },
  {
    title: "Fraud Detection on the Ethereum Blockchain",
    description: "A fraud detection tool that analyzes Ethereum account addresses for fraudulent patterns.",
    image: "/ethergard.png",
    alt: "Screenshot of the EtherGuard Ethereum fraud detection tool",
    href: "https://github.com/codinghaytam/ethereum_fraud_detection_app",
    tech: [
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: DiRedis, name: "Redis", color: "#DC382D" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: FaAws, name: "AWS EC2", color: "#FF9900" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
    ],
  },
]

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: "Electronic Medical Record — Health Interoperability",
    description:
      "A patient-record sharing system for the Ibn Rochd Dental Consultation and Treatment Center (Casablanca), connecting its periodontology and dentofacial orthopedics departments.",
    points: ["Strict implementation of the HL7/FHIR health-data standards for system interoperability"],
    image: "/orthotrace.jpg",
    alt: "OrthoTrace logo, the EMR desktop app for the Ibn Rochd dental center",
    href: "https://github.com/codinghaytam/medical-registry-desktop-app",
    contain: true,
    tech: [
      { icon: SiTauri, name: "Tauri", color: "#FFC131" },
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express" },
      { icon: SiKeycloak, name: "Keycloak" },
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
      { name: "HL7 / FHIR" },
    ],
  },
  {
    title: "CRM — Customer Relationship Management",
    description:
      "A desktop application for managing customer relationships, tracking interactions, and analyzing sales data.",
    image: "/java-crm.jpg",
    alt: "Screenshot of the Java CRM desktop app",
    href: "https://github.com/codinghaytam/java-CRM",
    tech: [
      { icon: FaJava, name: "Java", color: "#007396" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    ],
  },
]

// ---------------------------------------------------------------- Education & more

export const EDUCATION = {
  degree: "State Engineering Degree in Computer Engineering",
  school: "École Nationale des Sciences Appliquées (ENSA), Marrakech",
  period: "2021 — 2026",
  note: "Graduated June 2026",
}

export const CERTIFICATIONS = [
  { name: "AWS Cloud Technical Essentials", issuer: "Coursera" },
  { name: "Docker Essentials", issuer: "Cognitive Class" },
]

export const ACTIVITIES = [
  "Design team lead, CSEC club (ENSA Marrakech)",
  "Organizing committee member, 1st edition of “Game of Code” (ENSA Marrakech)",
]

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "Fluent" },
]
