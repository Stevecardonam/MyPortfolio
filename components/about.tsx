"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Rocket,
  Plug,
  MonitorSmartphone,
  Cloud,
  Search,
  LockIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Prisma",
    "TypeORM",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Adobe workfront",
    "Adobe Fusion"
  ];

  const services = [
    {
      icon: <Code className="h-6 w-6 text-[#527965]" />,
      title: "Full Stack Web Development",
      description:
        "Building complete web applications using modern technologies like React, Node.js, Express, and PostgreSQL.",
    },
    {
      icon: <Plug className="h-6 w-6 text-[#527965]" />,
      title: "RESTful API Design & Integration",
      description:
        "Designing and consuming scalable and secure APIs to connect frontend and backend seamlessly.",
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-[#527965]" />,
      title: "Responsive Frontend Development",
      description:
        "Crafting fast, accessible, and mobile-first interfaces with React, Tailwind CSS, and modern UI practices.",
    },
    {
      icon: <Database className="h-6 w-6 text-[#527965]" />,
      title: "Backend & Database Architecture",
      description:
        "Developing robust backend logic and managing relational and NoSQL databases with PostgreSQL and MongoDB.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#527965]" />,
      title: "Deployment & DevOps",
      description:
        "Deploying apps with Vercel, Render, or Railway, using CI/CD pipelines and containerization tools like Docker.",
    },
    {
      icon: <Search className="h-6 w-6 text-[#527965]" />,
      title: "SEO & Web Performance Optimization",
      description:
        "Enhancing visibility and performance with SEO best practices, Core Web Vitals, and code optimization.",
    },
    {
      icon: <LockIcon className="h-6 w-6 text-[#527965]" />,
      title: "Authentication & Web Security",
      description:
        "Implementing secure authentication and protecting applications from common web vulnerabilities.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-[#527965]" />,
      title: "Work Management Consulting",
      description:
        "Streamlining operations, configuring and integrating Adobe tools, and building custom solutions aligned with business goals.",
    },
  ];
  

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-8 text-4xl font-semibold tracking-tight text-[#1d2923] md:text-5xl">
              About Me
            </h2>
            <div className="glass-dark mx-auto max-w-4xl rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a Full Stack Developer and Technology Consultant passionate about building digital solutions, optimizing business processes, and leveraging technology to solve real-world challenges. 
                <br /><br />
                My development experience focuses on designing and building scalable web applications, RESTful APIs, and backend architectures using JavaScript, TypeScript, Node.js, NestJS, React, Next.js, and PostgreSQL. I enjoy working across the entire development lifecycle, from database modeling and backend development to intuitive frontend interfaces, integrations, and deployment. 
                <br /><br />
                Alongside software development, I work in technology consulting, helping organizations optimize their operations by analyzing business requirements, integrating technological solutions, configuring enterprise platforms, and designing workflow automation processes using tools such as Adobe Workfront, Fusion, and other business technology solutions. My focus is on translating complex operational needs into efficient, scalable, and technology-driven solutions.
              </p>
            </div>
          </motion.div>

          {/* Services grid */}
          <div className="mb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="glass-dark relative h-full overflow-hidden rounded-xl border-gray-200 transition-colors duration-200">
                  <CardContent className="relative z-10 p-7 text-center">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3ef]">
                      {service.icon}
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="mb-8 text-3xl font-semibold tracking-tight text-[#1d2923] md:text-4xl">
              Technologies
            </h3>

            <div className="glass-dark relative overflow-hidden rounded-2xl p-8">
              <div className="relative z-10 flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="rounded-full border-gray-200 bg-[#f7f9f7] px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-[#afc2b4] hover:text-[#315947]"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
