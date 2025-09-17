"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Github, Linkedin, Mail, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { FaJava, FaReact, FaDocker, FaPython, FaNodeJs, FaAws, FaJs } from "react-icons/fa"
import {
    SiSpringboot,
    SiPostgresql,
    SiTensorflow,
    SiTypescript,
    SiNextdotjs,
    SiR,
    SiD3Dotjs,
    SiKubernetes,
    SiMysql,
    SiExpress, SiKeycloak, SiTauri, SiBootstrap, SiPandas, SiPython, SiFastapi, SiScikitlearn, SiAmazonec2
} from "react-icons/si"
import React from 'react'
import { motion } from "motion/react"
import SkillsMarquee from "./components/skills-marquee"
import ContactForm from "./components/contact-form"
import {DiDocker, DiRedis} from "react-icons/di";

import Squares from './components/Squares';


export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between content-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-9 w-9" />
            <span className="font-bold text-sm">Mohamed Haytam Soukrati</span>
          </div>
          <nav className="hidden md:flex gap-6 content-center">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" scroll={true}>
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://github.com/codinghaytam" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mohamed-haytam-soukrati-702286276" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
          <div className="absolute inset-0 -z-10">
              <Squares
                  speed={0.5}
                  squareSize={40}
                  direction='diagonal' // up, down, left, right, diagonal
                  borderColor='#fff2'
                  hoverFillColor='#222'
              />
          </div>

        <section  className="w-full h-full py-12 md:py-24 lg:py-32 xl:py-48 bg-transparent from-background to-muted">
            <div className="container px-4 md:px-6 h-full ">
            <div className="flex flex-col items-center text-center space-y-8 content-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Building Digital Solutions Through Code
                </h1>
                <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                  Software Engineering Student specializing in full-stack development and data science
                </p>

              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild>
                  <Link href="#projects">View My Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>

            </div>
          </div>
        </section>



        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">

              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/myimage.jpg"
                    width={300}
                    height={500}
                  alt="About me"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-50"
                />
                  <div className="space-y-2">

                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who I Am</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I’m Mohamed Haytam Soukrati, a software engineer with a strong passion for game development and a commitment to building efficient, scalable, and user-friendly software.
                          Driven by a love for problem-solving and creativity, I thrive in collaborative environments and continually seek opportunities to learn, innovate, and create impactful solutions. I’m especially passionate about developing engaging and immersive game experiences.
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've developed a diverse skill set across various technologies, with a focus on game development and
                  data science.
                </p>
                  <SkillsMarquee
                      items={[
                          { icon: 'java', label: 'Java', color: '#007396' },
                          { icon: 'spring', label: 'Spring Boot', color: '#6DB33F' },
                          { icon: 'react', label: 'React', color: '#61DAFB' },
                          { icon: 'nextjs', label: 'Next.js', color: '#000000' },
                          { icon: 'node', label: 'Node.js', color: '#339933' },
                          { icon: 'express', label: 'Express' },
                          { icon: 'typescript', label: 'TypeScript', color: '#3178C6' },
                          { icon: 'python', label: 'Python', color: '#3776AB' },
                          { icon: 'tensorflow', label: 'TensorFlow', color: '#FF6F00' },
                          { icon: 'postgres', label: 'PostgreSQL', color: '#336791' },
                          { icon: 'mongo', label: 'MongoDB', color: '#47A248' },
                          { icon: 'docker', label: 'Docker', color: '#2496ED' },
                          { icon: 'aws', label: 'AWS', color: '#FF9900' }
                      ]}
                  />
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">

            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my projects in software development and data science.
                </p>
              </div>
            </div>
            <Tabs defaultValue="software" className="mt-12 max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="software">
                  <Code className="mr-2 h-4 w-4" />
                  Software Engineering
                </TabsTrigger>
                <TabsTrigger value="data">
                  <Database className="mr-2 h-4 w-4" />
                  Data Science
                </TabsTrigger>
              </TabsList>
              <TabsContent value="software" className="mt-6 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>EMR (Electronic Medical Record)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/orthotrace.jpg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="E-Commerce Platform"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Developed a cross-platform for sharing patient information between the periodontology and dentofacial orthopedics departments of the Ibn Rochd Dental Consultation and Treatment Center
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiExpress className="h-9 w-9"></SiExpress>
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <FaNodeJs className="h-9 w-9" style={{ color: '#339933' }} />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiKeycloak className="h-9 w-9"  />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaReact className="h-9 w-9" style={{ color: '#61DAFB' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiPostgresql className="h-9 w-9" style={{ color: '#336791' }} />
                          </Badge>
                            <Badge>
                                <SiTauri  className="h-9 w-9"  />
                            </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaDocker className="h-9 w-9" style={{ color: '#2496ED' }} />
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/codinghaytam/medical-registry-desktop-app">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>CRM (Customer Relationship Management) Desktop app</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/java-crm.jpg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Task Manager Application"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          A Desktop application for managing customer relationships, tracking interactions, and analyzing sales data.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                              <FaJava className="h-9 w-9" style={{ color: '#007396' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiMysql className="h-9 w-9" style={{ color: '#007396' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                              <SiBootstrap className="h-9 w-9" style={{ color: '#007396' }} />
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/codinghaytam/java-CRM">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="data" className="mt-6 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Smart contract analysis vulnerability detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/cover-static-analysis (1).png?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Urban Mobility Analysis"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                            Designing a model for vulnerability detection in ethereum smart contracts
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaPython className="h-9 w-9" style={{ color: '#3776AB' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiTensorflow className="h-9 w-9" style={{ color: '#FF6F00' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                              <SiPandas className="h-9 w-9" style={{ color: '#2a00cc' }} />
                          </Badge>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/codinghaytam/AI-smart-contract-analysis">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Fraud detection in ethereum blockcahin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="./ethergard.png?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Health Metrics Dashboard"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                            A fraud detection tool that analyses ethereum account addresses for fraudulante patterns
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiPython className="h-9 w-9" style={{ color: '#3776AB' }} />
                          </Badge>

                          <Badge className="bg-transparent border-none hover:bg-transparent">
                              <DiRedis className="h-9 w-9" style={{ color: '#DC382D' }} />
                          </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiFastapi className="h-9 w-9" style={{ color: '#009688' }} />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiPostgresql className="h-9 w-9" style={{ color: '#007396' }} />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiScikitlearn className="h-9 w-9" style={{ color: '#F7931E' }} />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <SiAmazonec2 className="h-9 w-9" style={{ color: '#007396' }} />
                            </Badge>
                            <Badge className="bg-transparent border-none hover:bg-transparent">
                                <DiDocker className="h-9 w-9" style={{ color: '#007396' }} />
                            </Badge>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/codinghaytam/ethereum_fraud_detection_app">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Background</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My educational journey in software engineering and computer science.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                  <CardDescription>University of Technology, 2020 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Currently pursuing a degree in Software Engineering with a focus on software development and data
                    science.
                  </p>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">Data Structures & Algorithms</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Database Systems</Badge>
                    <Badge variant="outline">Computer Graphics</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                  </div>
                </CardContent>


              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-5xl gap-8 py-12 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-9 w-9 text-muted-foreground" />
                      <p>mohamed.haytam.soukrati@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-9 w-9 text-muted-foreground" />
                      <Link href="https://www.linkedin.com/in/mohamed-haytam-soukrati-702286276" className="hover:underline">
                        Mohamed Haytam Soukrati
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-9 w-9 text-muted-foreground" />
                      <Link href="https://github.com/codinghaytam" className="hover:underline">
                        github.com/codinghaytam
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Mohamed Haytam Soukrati. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/codinghaytam" target="_blank" rel="noopener noreferrer">
              <Github className="h-9 w-9" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mohamed-haytam-soukrati-702286276" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-9 w-9" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:mohamed.haytam.soukrati@gmail.com">
              <Mail className="h-9 w-9" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
