"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Nivo Pos",
      description: "Nivo is a web-based point-of-sale (POS) application developed as Henry's final bootcamp project. Its goal is to facilitate comprehensive sales, product, inventory, and invoicing management for small and medium-sized businesses.",
      image: "/Nivo app.png?height=400&width=600",
      technologies: ["Nest.js", "TypeScript", "Next.js", "Node.js", "Stripe", "PostgreSQL"],
      liveUrl: "https://nivoapp.vercel.app/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
      stats: { stars: 156, views: "6.2k" },
    },
    {
      title: "Catepsia",
      description:  "Designed and developed Catepsia's website from scratch, a mental health center focused on accessible care. I created a responsive, SEO-optimized site using semantic HTML, modern CSS, and interactive JavaScript. Improved navigation, performance, and usability, while collaborating remotely with the team to deliver effective solutions that enhanced their online presence and credibility.",
      image: "/catepsia website.png?height=400&width=600",
      technologies: ["HTML", "CSS", "Tailwind", "Javascript"],
      liveUrl: "https://www.catepsiapsicologos.com/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
      stats: { stars: 298, views: "15.3k" },
    },
    {
      title: "Terapsy Core",
      description: "A secure and intuitive web application designed specifically for psychologists and mental health professionals in the healthcare sector. The platform allows clinicians to efficiently manage patient records, appointments, patients and therapy session histories in a centralized system.",
      image: "/Terapsy website.png?height=400&width=600",
      technologies: ["Nest.js", "Node.js", "TypeScript", "Prisma", "Next.js", "React", "Tailwind", "PostgreSQL"],
      liveUrl: "https://terapsy-core.vercel.app/",
      githubUrl: "https://github.com/Stevecardonam",
      featured: false,
      stats: { stars: 445, views: "22.1k" },
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore my latest innovations where cutting-edge technology meets creative problem-solving. Each project
                represents a journey into the future of digital experiences.
              </p>
            </div>
          </motion.div>

         

          {/* Other Projects */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-dark border-gray-700/50 overflow-hidden hover:border-purple-400/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Mini stats */}
                    <div className="absolute top-3 right-3 flex space-x-1">
                      <div className="glass rounded-full px-2 py-1 flex items-center space-x-1 text-xs text-white">
                        <Star className="h-2 w-2 text-yellow-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-between text-white">
                      {project.title}
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-cyan-400"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-purple-400"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="glass border-gray-600/50 text-gray-300 text-xs hover:border-cyan-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="glass border-gray-600/50 text-gray-300 text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
