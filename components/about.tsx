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
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "CI/CD",
    "AWS",
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Full Stack Web Development",
      description:
        "Building complete web applications using modern technologies like React, Node.js, Express, and PostgreSQL.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Plug className="h-8 w-8 text-white" />,
      title: "RESTful API Design & Integration",
      description:
        "Designing and consuming scalable and secure APIs to connect frontend and backend seamlessly.",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      title: "Responsive Frontend Development",
      description:
        "Crafting fast, accessible, and mobile-first interfaces with React, Tailwind CSS, and modern UI practices.",
      gradient: "from-teal-400 to-sky-500",
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Backend & Database Architecture",
      description:
        "Developing robust backend logic and managing relational and NoSQL databases with PostgreSQL and MongoDB.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "Deployment & DevOps",
      description:
        "Deploying apps with Vercel, Render, or Railway, using CI/CD pipelines and containerization tools like Docker.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "SEO & Web Performance Optimization",
      description:
        "Enhancing visibility and performance with SEO best practices, Core Web Vitals, and code optimization.",
      gradient: "from-green-400 to-cyan-500",
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Authentication & Web Security",
      description:
        "Implementing secure authentication and protecting applications from common web vulnerabilities.",
      gradient: "from-rose-400 to-red-500",
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-12">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a Full Stack Developer with 1 year of hands-on experience
                building web applications from end to end. Trained at Henry's
                intensive bootcamp, I specialize in crafting modern digital
                solutions using technologies like React, Node.js, Express, and
                PostgreSQL. I’m passionate about turning ideas into scalable,
                user-focused products that deliver real value.
              </p>
            </div>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-dark border-gray-700/50 h-full relative overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className={`mb-6 flex justify-center text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
            <h3 className="text-5xl font-bold mb-12">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Tech Arsenal
              </span>
            </h3>

            <div className="glass-dark rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glass border-gray-600/50 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 px-4 py-2 text-sm font-medium"
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
