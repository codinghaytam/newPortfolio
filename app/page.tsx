"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowUpRight, Code, Database, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { IconType } from "react-icons"
import { FaAws, FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import {
  SiBootstrap,
  SiExpress,
  SiFastapi,
  SiKeycloak,
  SiMysql,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiTauri,
  SiTensorflow,
} from "react-icons/si"
import { DiDocker, DiRedis } from "react-icons/di"
import React from "react"
import SkillsMarquee from "./components/skills-marquee"
import ContactForm from "./components/contact-form"
import Squares from "./components/Squares"
import { PixelMark, PixelStairs, PixelStripe, SectionHeading } from "./components/pixel"

const LINKEDIN = "https://www.linkedin.com/in/mohamed-haytam-soukrati-702286276"
const GITHUB = "https://github.com/codinghaytam"
const EMAIL = "mohamed.haytam.soukrati@gmail.com"

type Tech = { icon: IconType; name: string; color?: string }
type Project = {
  title: string
  description: string
  image: string
  alt: string
  href: string
  tech: Tech[]
  /** Show the whole image (e.g. a logo) instead of cropping it */
  contain?: boolean
}

const SOFTWARE: Project[] = [
  {
    title: "EMR — Electronic Medical Record",
    description:
      "Developed a cross-platform application for sharing patient information between the periodontology and dentofacial orthopedics departments of the Ibn Rochd Dental Consultation and Treatment Center.",
    image: "/orthotrace.jpg",
    contain: true,
    alt: "Screenshot of the EMR desktop app for the Ibn Rochd dental center",
    href: "https://github.com/codinghaytam/medical-registry-desktop-app",
    tech: [
      { icon: SiExpress, name: "Express" },
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: SiKeycloak, name: "Keycloak" },
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiTauri, name: "Tauri", color: "#FFC131" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
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

const DATA: Project[] = [
  {
    title: "Smart Contract Vulnerability Detection",
    description: "Designing a machine learning model to detect vulnerabilities in Ethereum smart contracts.",
    image: "/smart-contract-analysis.png",
    alt: "Smart contract static analysis illustration",
    href: "https://github.com/codinghaytam/AI-smart-contract-analysis",
    tech: [
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
      { icon: SiPandas, name: "Pandas", color: "#8B7CF6" },
    ],
  },
  {
    title: "Fraud Detection on the Ethereum Blockchain",
    description: "A fraud detection tool that analyzes Ethereum account addresses for fraudulent patterns.",
    image: "/ethergard.png",
    alt: "Screenshot of the EtherGuard Ethereum fraud detection tool",
    href: "https://github.com/codinghaytam/ethereum_fraud_detection_app",
    tech: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: DiRedis, name: "Redis", color: "#DC382D" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiScikitlearn, name: "scikit-learn", color: "#F7931E" },
      { icon: FaAws, name: "AWS", color: "#FF9900" },
      { icon: DiDocker, name: "Docker", color: "#2496ED" },
    ],
  },
]

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid grid-cols-1 border border-border bg-card md:grid-cols-2">
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-border md:aspect-auto md:min-h-[320px] md:border-b-0 md:border-r ${project.contain ? "bg-white" : ""}`}
      >
        <Image
          src={project.image}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={project.alt}
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${project.contain ? "object-contain p-10" : "object-cover object-top"}`}
        />
      </div>
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>
            <span className="text-brand-soft">{String(index + 1).padStart(2, "0")}</span> / Project
          </span>
          <PixelMark />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map(({ icon: Icon, name, color }) => (
            <li
              key={name}
              className="group/chip inline-flex items-center gap-2 border border-border px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-brand-3 hover:text-foreground"
            >
              <Icon
                aria-hidden
                className="h-4 w-4 transition-colors group-hover/chip:text-[var(--c,hsl(var(--foreground)))]"
                style={color ? ({ "--c": color } as React.CSSProperties) : undefined}
              />
              {name}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Button variant="outline" asChild className="group/btn font-mono text-xs uppercase tracking-widest">
            <Link href={project.href} target="_blank" rel="noopener noreferrer">
              View project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
      <PixelStripe stepped={false} className="col-span-full [&>div]:h-1 [&>div]:md:h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <PixelMark className="scale-125" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">M. Haytam Soukrati</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm" className="font-mono text-xs uppercase tracking-widest">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="hsl(258 20% 60% / 0.14)" hoverFillColor="hsl(263 70% 50% / 0.18)" />
          </div>
          <div className="container grid items-end gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:py-36">
            <div className="space-y-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-brand-soft">●</span> Software Engineering Student — Portfolio
              </p>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-6xl xl:text-8xl">
                Building digital solutions{" "}
                <span className="bg-gradient-to-r from-brand-1 via-brand-3 to-brand-6 bg-clip-text text-transparent">
                  through code.
                </span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Software Engineering Student specializing in full-stack development and data science.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button asChild size="lg" className="group font-mono text-xs uppercase tracking-widest">
                  <Link href="#projects">
                    View my projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="font-mono text-xs uppercase tracking-widest">
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </div>
            </div>
            <PixelStairs className="hidden w-full max-w-md justify-self-end lg:grid" />
          </div>
          <PixelStripe />
        </section>

        {/* About */}
        <section id="about" className="container py-20 md:py-32">
          <SectionHeading index="01" label="About" title="Who I am" />
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
            <div className="relative">
              <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full bg-gradient-to-br from-brand-1 via-brand-3 to-brand-6" />
              <Image
                src="/myimage.jpg"
                width={320}
                height={420}
                alt="Portrait of Mohamed Haytam Soukrati"
                className="relative w-full border border-border object-cover"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground md:text-xl/relaxed">
              <p>
                I’m <span className="text-foreground">Mohamed Haytam Soukrati</span>, a software engineer with a strong
                passion for game development and a commitment to building efficient, scalable, and user-friendly
                software.
              </p>
              <p>
                Driven by a love for problem-solving and creativity, I thrive in collaborative environments and
                continually seek opportunities to learn, innovate, and create impactful solutions. I’m especially
                passionate about developing engaging and immersive game experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-muted/40">
          <div className="container py-20 md:py-32">
            <SectionHeading
              index="02"
              label="Skills"
              title="Technical expertise"
              intro="I've developed a diverse skill set across various technologies, with a focus on full-stack development and data science."
            />
            <SkillsMarquee
              className="mt-12"
              items={[
                { icon: "java", label: "Java", color: "#007396" },
                { icon: "spring", label: "Spring Boot", color: "#6DB33F" },
                { icon: "react", label: "React", color: "#61DAFB" },
                { icon: "nextjs", label: "Next.js", color: "#ffffff" },
                { icon: "node", label: "Node.js", color: "#339933" },
                { icon: "express", label: "Express" },
                { icon: "typescript", label: "TypeScript", color: "#3178C6" },
                { icon: "python", label: "Python", color: "#3776AB" },
                { icon: "tensorflow", label: "TensorFlow", color: "#FF6F00" },
                { icon: "postgres", label: "PostgreSQL", color: "#336791" },
                { icon: "mongo", label: "MongoDB", color: "#47A248" },
                { icon: "docker", label: "Docker", color: "#2496ED" },
                { icon: "aws", label: "AWS", color: "#FF9900" },
              ]}
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-20 md:py-32">
          <SectionHeading
            index="03"
            label="Projects"
            title="Featured work"
            intro="A selection of my projects in software development and data science."
          />
          <Tabs defaultValue="software" className="mt-12">
            <TabsList className="grid h-auto w-full grid-cols-2 border border-border bg-transparent p-0">
              <TabsTrigger
                value="software"
                className="py-3 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Code className="mr-2 h-4 w-4" />
                Software engineering
              </TabsTrigger>
              <TabsTrigger
                value="data"
                className="py-3 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Database className="mr-2 h-4 w-4" />
                Data science
              </TabsTrigger>
            </TabsList>
            <TabsContent value="software" className="mt-8 space-y-8">
              {SOFTWARE.map((p, i) => (
                <ProjectCard key={p.href} project={p} index={i} />
              ))}
            </TabsContent>
            <TabsContent value="data" className="mt-8 space-y-8">
              {DATA.map((p, i) => (
                <ProjectCard key={p.href} project={p} index={i + SOFTWARE.length} />
              ))}
            </TabsContent>
          </Tabs>
        </section>

        {/* Education */}
        <section id="education" className="bg-muted/40">
          <div className="container py-20 md:py-32">
            <SectionHeading
              index="04"
              label="Education"
              title="Academic background"
              intro="My educational journey in software engineering and computer science."
            />
            <div className="mt-12 grid grid-cols-1 border border-border bg-card md:grid-cols-[auto_1fr]">
              <div className="hidden w-3 md:block">
                <PixelStripe stepped={false} className="flex h-full [&>div]:h-full [&>div]:flex-1 [&>div]:md:h-full" />
              </div>
              <div className="space-y-6 p-6 md:p-10">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    University of Technology · 2020 — Present
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing a degree in Software Engineering with a focus on software development and data
                  science.
                </p>
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Relevant coursework
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Machine Learning",
                      "Database Systems",
                      "Computer Graphics",
                      "Software Engineering",
                    ].map((c) => (
                      <li key={c} className="border border-border px-3 py-1.5 text-sm">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-20 md:py-32">
          <SectionHeading
            index="05"
            label="Contact"
            title="Get in touch"
            intro="I'm always open to new opportunities and collaborations. Feel free to reach out!"
          />
          <div className="mt-12 grid grid-cols-1 border border-border md:grid-cols-2">
            <div className="flex flex-col justify-between gap-10 border-b border-border p-6 md:border-b-0 md:border-r md:p-10">
              <ul className="divide-y divide-border border-y border-border">
                {[
                  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: Linkedin, label: "LinkedIn", value: "Mohamed Haytam Soukrati", href: LINKEDIN },
                  { icon: Github, label: "GitHub", value: "github.com/codinghaytam", href: GITHUB },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 py-4"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand-soft" />
                      <span className="w-20 font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                      <span className="min-w-0 flex-1 truncate">{value}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
              <PixelStairs className="hidden w-48 md:grid" />
            </div>
            <div className="p-6 md:p-10">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">Send me a message</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full">
        <PixelStripe reverse />
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohamed Haytam Soukrati
          </p>
          <div className="flex items-center gap-5">
            <Link href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
