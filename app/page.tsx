import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Github, Linkedin, Mail, User, Briefcase, GraduationCap, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { FaJava, FaReact, FaDocker, FaPython, FaNodeJs, FaAws, FaJs } from "react-icons/fa"
import { SiSpringboot, SiPostgresql, SiTensorflow, SiTypescript, SiNextdotjs, SiMongodb, SiR, SiD3Dotjs, SiKubernetes, SiMysql } from "react-icons/si"
import React from 'react'
import { motion } from "motion/react"


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
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
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
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 ">
        
        <section  className="w-full h-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
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
              <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who I Am</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I’m Mohamed Haytam Soukrati, a software engineer with a strong passion for game development and a commitment to building efficient, scalable, and user-friendly software.
                Driven by a love for problem-solving and creativity, I thrive in collaborative environments and continually seek opportunities to learn, innovate, and create impactful solutions. I’m especially passionate about developing engaging and immersive game experiences.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="About me"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Problem Solver</h3>
                        <p className="text-muted-foreground">
                          I enjoy tackling complex challenges and finding elegant solutions through code.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Creative Thinker</h3>
                        <p className="text-muted-foreground">
                          I bring creativity to my technical work, especially when designing game mechanics and
                          visualizing data.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Continuous Learner</h3>
                        <p className="text-muted-foreground">
                          Technology evolves rapidly, and I'm committed to staying at the forefront through continuous
                          learning.
                        </p>
                      </div>
                    </li>
                  </ul>
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
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Code className="h-6 w-6" />
                  <div className="grid gap-1">
                    <CardTitle>Software Engineering</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaJava className="h-9 w-9" style={{ color: '#007396' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiSpringboot className="h-9 w-9" style={{ color: '#6DB33F' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiKubernetes className="h-9 w-9" style={{ color: '#326CE5' }} />
                    </Badge>

                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaDocker className="h-9 w-9" style={{ color: '#2496ED' }} />
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Database className="h-6 w-6" />
                  <div className="grid gap-1">
                    <CardTitle>Data Science</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaPython className="h-9 w-9" style={{ color: '#3776AB' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiR className="h-9 w-9" style={{ color: '#276DC3' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiTensorflow className="h-9 w-9" style={{ color: '#FF6F00' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiMysql className="h-9 w-9" style={{ color: '#4479A1' }} />
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Code className="h-6 w-6" />
                  <div className="grid gap-1">
                    <CardTitle>Web Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaJs className="h-9 w-9" style={{ color: '#F7DF1E' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaReact className="h-9 w-9" style={{ color: '#61DAFB' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaNodeJs className="h-9 w-9" style={{ color: '#339933' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiTypescript className="h-9 w-9" style={{ color: '#3178C6' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <SiNextdotjs className="h-9 w-9" style={{ color: '#000000' }} />
                    </Badge>
                    <Badge className="bg-transparent border-none hover:bg-transparent">
                      <FaAws className="h-9 w-9" style={{ color: '#FF9900' }} />
                    </Badge>
                  </div>
                </CardContent>
              </Card>
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
                    <CardTitle>E-Commerce Platform</CardTitle>
                    <CardDescription>A scalable microservices-based e-commerce solution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="E-Commerce Platform"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Developed a full-stack e-commerce platform using microservices architecture. Implemented
                          features like real-time inventory management, payment processing, and order tracking.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiSpringboot className="h-9 w-9" style={{ color: '#6DB33F' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaReact className="h-9 w-9" style={{ color: '#61DAFB' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiPostgresql className="h-9 w-9" style={{ color: '#336791' }} />
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
                      <Link href="#">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cloud-Native Task Manager</CardTitle>
                    <CardDescription>A collaborative project management application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Task Manager Application"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Built a cloud-native task management system with real-time collaboration features, automated
                          workflows, and analytics dashboard.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaNodeJs className="h-9 w-9" style={{ color: '#339933' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaReact className="h-9 w-9" style={{ color: '#61DAFB' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiMongodb className="h-9 w-9" style={{ color: '#47A248' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaAws className="h-9 w-9" style={{ color: '#FF9900' }} />
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="#">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="data" className="mt-6 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Urban Mobility Analysis</CardTitle>
                    <CardDescription>Predictive modeling for urban transportation patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Urban Mobility Analysis"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Analyzed urban transportation data to predict traffic patterns and optimize public transit
                          routes. Used Python, TensorFlow, and data visualization tools.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <FaPython className="h-9 w-9" style={{ color: '#3776AB' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiTensorflow className="h-9 w-9" style={{ color: '#FF6F00' }} />
                          </Badge>
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiD3Dotjs className="h-9 w-9" style={{ color: '#F9A03C' }} />
                          </Badge>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="#">View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Health Metrics Dashboard</CardTitle>
                    <CardDescription>Interactive visualization of health and fitness data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        width={500}
                        height={300}
                        alt="Health Metrics Dashboard"
                        className="rounded-lg object-cover w-full"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Developed an interactive dashboard for visualizing health and fitness metrics. Built with R,
                          Shiny, and D3.js for data visualization.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiR className="h-9 w-9" style={{ color: '#276DC3' }} />
                          </Badge>

                          <Badge className="bg-transparent border-none hover:bg-transparent">
                            <SiD3Dotjs className="h-9 w-9" style={{ color: '#F9A03C' }} />
                          </Badge>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="#">View Project</Link>
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
                    science. Maintaining a GPA of 3.8/4.0.
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
              <div className="mx-auto grid w-full max-w-3xl gap-8 py-12 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-9 w-9 text-muted-foreground" />
                      <p>alex.taylor@example.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-9 w-9 text-muted-foreground" />
                      <Link href="https://linkedin.com" className="hover:underline">
                        linkedin.com/in/alextaylor
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-9 w-9 text-muted-foreground" />
                      <Link href="https://github.com" className="hover:underline">
                        github.com/alextaylor
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
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
            &copy; {new Date().getFullYear()} Alex Taylor. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-9 w-9" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-9 w-9" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:alex.taylor@example.com">
              <Mail className="h-9 w-9" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

