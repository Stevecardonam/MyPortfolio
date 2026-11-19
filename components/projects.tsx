"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Nivo Pos",
      description: "Nivo is a web-based point-of-sale (POS) application developed as Henry's final bootcamp project. Its goal is to facilitate comprehensive sales, product, inventory, and invoicing management for small and medium-sized businesses.",
      image: "/Nivo app.png",
      technologies: ["Nest.js", "TypeScript", "Next.js", "Node.js", "Stripe", "PostgreSQL"],
      liveUrl: "https://nivoapp.vercel.app/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
    },
    {
      title: "Atawall",
      description:  "Atawall is an AI-powered marketplace designed to transform the way people buy and sell online. Instead of creating product listings and browsing through endless catalogs, users simply describe what they want to sell or purchase, while the platform’s intelligent matching system automatically connects buyers and sellers.",
      image: "/atawall.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "Prisma", "Next.js", "React", "React Native", "Tailwind", "PostgreSQL"],
      liveUrl: "https://atawall.onrender.com/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
    },
    {
      title: "Terapsy Core",
      description: "A secure and intuitive web application designed specifically for psychologists and mental health professionals in the healthcare sector. The platform allows clinicians to efficiently manage patient records, appointments, patients and therapy session histories in a centralized system.",
      image: "/Terapsy website.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "Prisma", "Next.js", "React", "Tailwind", "PostgreSQL"],
      liveUrl: "https://terapsycore.com/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
    },
    {
      title: "Fabriconnect",
      description: "FabriConnect is a digital platform designed to connect clothing brands and textile manufacturers within a single ecosystem. The application streamlines collaboration between businesses and production workshops by providing professional profiles, supplier discovery tools, and direct communication channels.",
      image: "/fabriconnect2.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "Prisma", "Next.js", "React", "Tailwind", "PostgreSQL"],
      liveUrl: "https://www.fabriconnect.com.ar/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
    },
    {
      title: "Terapsy Clinic",
      description: "Terapsy Clinic is a digital mental health platform that connects patients with licensed psychologists through an accessible and user-friendly experience. The website allows users to explore therapist profiles, learn about different therapeutic approaches, and book online appointments, making psychological care more accessible from anywhere.",
      image: "/TerapsyClinic.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "Prisma", "Next.js", "React", "Tailwind", "PostgreSQL"],
      liveUrl: "https://www.terapsyclinic.com/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
    },
  ]

  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-8 text-4xl font-semibold tracking-tight text-[#1d2923] md:text-5xl">
              Selected Projects
            </h2>
            <div className="glass-dark mx-auto max-w-4xl rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                Explore my latest innovations where cutting-edge technology meets creative problem-solving. Each project
                represents a journey into the future of digital experiences.
              </p>
            </div>
          </motion.div>

         

          {/* Other Projects */}
          
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
            {otherProjects.map((project, index) => (
              <CarouselItem key={project.title} className="flex sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group flex w-full"
                >
                  <Card className="glass-dark h-full w-full overflow-hidden rounded-xl border-gray-200 transition-colors duration-200">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2ef]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-lg font-semibold text-white">
                        {project.title}
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:bg-[#eef3ef] hover:text-[#315947]"
                            asChild
                          >
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <span className="sr-only">View {project.title} on GitHub</span>
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:bg-[#eef3ef] hover:text-[#315947]"
                            asChild
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <span className="sr-only">Visit {project.title}</span>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-gray-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="rounded-full border-gray-200 bg-[#f7f9f7] text-xs text-gray-300 transition-colors hover:border-[#afc2b4]"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="rounded-full border-gray-200 bg-[#f7f9f7] text-xs text-gray-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Previous projects"
              className="left-2 top-32 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/80 bg-white/95 text-[#315947] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white md:left-3"
            />
            <CarouselNext
              aria-label="Next projects"
              className="right-2 top-32 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/80 bg-white/95 text-[#315947] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white md:right-3"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
