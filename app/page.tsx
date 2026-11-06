"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowUpRight, BrainCircuit, Code, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import SkillGroups from "./components/skill-groups"
import ContactForm from "./components/contact-form"
import Squares from "./components/Squares"
import { TechTag } from "./components/tech-tag"
import { PixelMark, PixelStairs, PixelStripe, SectionHeading } from "./components/pixel"
import {
  ACTIVITIES,
  AI_PROJECTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROFILE,
  SKILLS,
  SOFTWARE_PROJECTS,
  type Job,
  type Project,
} from "./content"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

const MONO_LABEL = "font-mono text-xs uppercase tracking-widest text-muted-foreground"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid grid-cols-1 border border-border bg-card md:grid-cols-2">
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-border md:aspect-auto md:min-h-[320px] md:border-b-0 md:border-r ${project.contain ? "bg-white" : ""}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={project.alt ?? project.title}
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${project.contain ? "object-contain p-10" : "object-cover object-top"}`}
          />
        ) : (
          // No screenshot yet: a pixel composition in the brand palette
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/40 p-10">
            <PixelStairs className="w-full max-w-[280px]" />
          </div>
        )}
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
        {project.points && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-3" />
                {p}
              </li>
            ))}
          </ul>
        )}
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t.name} tech={t} />
          ))}
        </ul>
        {project.href && (
          <div className="mt-auto pt-2">
            <Button variant="outline" asChild className="group/btn font-mono text-xs uppercase tracking-widest">
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                View project
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
      <PixelStripe
        stepped={false}
        className="col-span-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [&>div]:h-1 [&>div]:md:h-1"
      />
    </article>
  )
}

function JobRow({ job }: { job: Job }) {
  return (
    <li className="group relative grid gap-4 border-t border-border py-8 md:grid-cols-[260px_1fr] md:gap-10">
      <div className="space-y-2">
        <p className={MONO_LABEL}>{job.period}</p>
        {job.place && <p className="text-sm text-muted-foreground">{job.place}</p>}
        {job.current && (
          <span className="inline-flex items-center gap-2 border border-brand-3 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-soft">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse bg-brand-soft" />
            Current role
          </span>
        )}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {job.role}
          <span className="text-muted-foreground"> · </span>
          <span className={job.current ? "bg-gradient-to-r from-brand-1 via-brand-3 to-brand-6 bg-clip-text text-transparent" : ""}>
            {job.org}
          </span>
        </h3>
        {job.points.length > 0 && (
          <ul className="space-y-2 text-muted-foreground">
            {job.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-3" />
                {p}
              </li>
            ))}
          </ul>
        )}
        {job.tech.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {job.tech.map((t) => (
              <TechTag key={t.name} tech={t} />
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <PixelMark className="scale-125" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">{PROFILE.shortName}</span>
          </Link>
          <nav className="hidden gap-7 lg:flex">
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
            <Link href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
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
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="hsl(258 20% 60% / 0.14)"
              hoverFillColor="hsl(263 70% 50% / 0.18)"
            />
          </div>
          <div className="container grid items-end gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:py-36">
            <div className="space-y-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-brand-soft">●</span> {PROFILE.role} @ {PROFILE.company}
              </p>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-6xl xl:text-8xl">
                Turning complex data into{" "}
                <span className="bg-gradient-to-r from-brand-1 via-brand-3 to-brand-6 bg-clip-text text-transparent">
                  intelligent systems.
                </span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                {PROFILE.role} at <span className="text-foreground">{PROFILE.company}</span>. Computer engineer working on
                knowledge graphs, data pipelines, machine learning and health-data interoperability.
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
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
            <div className="relative mr-3 mb-3">
              <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full bg-gradient-to-br from-brand-1 via-brand-3 to-brand-6" />
              <Image
                src={PROFILE.photo}
                width={900}
                height={1200}
                sizes="(min-width: 768px) 340px, 100vw"
                priority
                alt={`Portrait of ${PROFILE.name}`}
                className="relative w-full border border-border object-cover"
              />
            </div>
            <div className="space-y-10">
              <div className="space-y-6 text-lg text-muted-foreground md:text-xl/relaxed">
                <p>
                  I’m <span className="text-foreground">{PROFILE.name}</span>, a Knowledge Graph Engineer in R&amp;D at{" "}
                  <span className="text-foreground">{PROFILE.company}</span>, where I work on knowledge graphs and Semantic
                  Web technologies. I hold a State Engineering Degree in Computer Engineering from ENSA Marrakech (2026).
                </p>
                <p>
                  My background spans data pipelines, machine learning and health-data interoperability (HL7/FHIR).
                  What ties it together is giving structure and meaning to complex, heterogeneous data.
                </p>
              </div>
              <dl className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-3">
                {[
                  { k: "Current role", v: `${PROFILE.role}, ${PROFILE.company}` },
                  { k: "Education", v: "ENSA Marrakech, 2026" },
                  { k: "Languages", v: LANGUAGES.map((l) => l.name).join(" · ") },
                ].map(({ k, v }) => (
                  <div key={k} className="space-y-2 border-b border-r border-border p-5">
                    <dt className={MONO_LABEL}>{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-muted/40">
          <div className="container py-20 md:py-32">
            <SectionHeading
              index="02"
              label="Experience"
              title="Where I’ve worked"
              intro="From research labs to industry: knowledge graphs, machine learning, data pipelines and software for healthcare, finance and aviation."
            />
            <ol className="mt-12 border-b border-border">
              {EXPERIENCE.map((job) => (
                <JobRow key={`${job.org}-${job.period}`} job={job} />
              ))}
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container py-20 md:py-32">
          <SectionHeading
            index="03"
            label="Skills"
            title="Technical expertise"
            intro="Knowledge graphs, data pipelines, AI and health-data standards, backed by solid deployment and software engineering practice."
          />
          <div className="mt-12">
            <SkillGroups groups={SKILLS} />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-muted/40">
          <div className="container py-20 md:py-32">
            <SectionHeading
              index="04"
              label="Projects"
              title="Featured work"
              intro="A selection of academic and personal projects in AI, data and software engineering."
            />
            <Tabs defaultValue="ai" className="mt-12">
              <TabsList className="grid h-auto w-full grid-cols-2 border border-border bg-transparent p-0">
                <TabsTrigger
                  value="ai"
                  className="py-3 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  AI &amp; data
                </TabsTrigger>
                <TabsTrigger
                  value="software"
                  className="py-3 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Software engineering
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ai" className="mt-8 space-y-8">
                {AI_PROJECTS.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </TabsContent>
              <TabsContent value="software" className="mt-8 space-y-8">
                {SOFTWARE_PROJECTS.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i + AI_PROJECTS.length} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="container py-20 md:py-32">
          <SectionHeading index="05" label="Education" title="Academic background" />
          <div className="mt-12 grid grid-cols-1 border border-border bg-card md:grid-cols-[auto_1fr]">
            <div className="hidden w-3 md:block">
              <PixelStripe stepped={false} className="flex h-full [&>div]:h-full [&>div]:flex-1 [&>div]:md:h-full" />
            </div>
            <div className="space-y-6 p-6 md:p-10">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{EDUCATION.degree}</h3>
                <p className={MONO_LABEL}>{EDUCATION.period}</p>
              </div>
              <p className="text-muted-foreground">
                {EDUCATION.school} · <span className="text-foreground">{EDUCATION.note}</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 border-x border-b border-border md:grid-cols-3">
            <div className="space-y-4 border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              <h4 className={MONO_LABEL}>Certifications</h4>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name}>
                    <p>{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              <h4 className={MONO_LABEL}>Activities</h4>
              <ul className="space-y-3">
                {ACTIVITIES.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-3" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 p-6 md:p-8">
              <h4 className={MONO_LABEL}>Languages</h4>
              <ul className="space-y-3">
                {LANGUAGES.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                    <span>{l.name}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-muted/40">
          <div className="container py-20 md:py-32">
            <SectionHeading
              index="06"
              label="Contact"
              title="Get in touch"
              intro="I'm always open to new opportunities and collaborations. Feel free to reach out!"
            />
            <div className="mt-12 grid grid-cols-1 border border-border bg-background md:grid-cols-2">
              <div className="flex flex-col justify-between gap-10 border-b border-border p-6 md:border-b-0 md:border-r md:p-10">
                <ul className="divide-y divide-border border-y border-border">
                  {[
                    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                    { icon: Linkedin, label: "LinkedIn", value: PROFILE.name, href: PROFILE.linkedin },
                    { icon: Github, label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.github },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-4"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand-soft" />
                        <span className={`w-20 ${MONO_LABEL}`}>{label}</span>
                        <span className="min-w-0 flex-1 truncate">{value}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <PixelStairs className="hidden w-48 md:grid" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className={`mb-6 ${MONO_LABEL}`}>Send me a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full">
        <PixelStripe reverse />
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className={MONO_LABEL}>
            &copy; {new Date().getFullYear()} {PROFILE.name}
          </p>
          <div className="flex items-center gap-5">
            <Link href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={`mailto:${PROFILE.email}`} className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
