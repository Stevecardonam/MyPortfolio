"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-100 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 100,
              y: mousePosition.y + (Math.random() - 0.5) * 100,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center pt-28">
          {/* Name with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-teal-200 to-emerald-300 bg-clip-text text-transparent neon-text">
                Steven Cardona
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                Steven Cardona
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <div className="glass-dark rounded-2xl p-6 mb-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <h2 className="text-2xl md:text-4xl font-bold text-white relative z-10">
                <motion.span
                  animate={{
                    color: ["#14b8a6", "#10b981", "#0d9488", "#14b8a6"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  Full Stack Developer
                </motion.span>
                <span className="text-gray-400"> & </span>
                <motion.span
                  animate={{
                    color: ["#14b8a6", "#10b981", "#0d9488", "#14b8a6"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2,
                  }}
                >
                  Tech Innovator
                </motion.span>
              </h2>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting the future through code. Specialized in cutting-edge
              technologies, AI integration, and creating digital experiences
              that push boundaries.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="glass border-purple-100/50 text-purple-100 hover:bg-purple-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group bg-transparent"
              asChild
            >
              <Link href="#projects">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore My Work
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass border-cyan-100/50 text-cyan-100 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group bg-transparent"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Let's Connect
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass border-purple-100/50 text-purple-100 hover:bg-purple-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group bg-transparent"
            >
              <a href="/CV%20Steven%20Cardona%20-%20FSD%20Es.pdf" download>
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex justify-center space-x-8 mb-12"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Stevecardonam",
                color: "hover:text-gray-400",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/steven-cardona-162014183",
                color: "hover:text-blue-400",
              },
              {
                icon: Mail,
                href: "mailto:steve.cardm@gmail.com",
                color: "hover:text-cyan-400",
              },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  className={`text-gray-400 ${color} transition-all duration-300 p-3 glass rounded-full hover:shadow-lg`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-0">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Corner tech elements */}
      <div className="absolute top-8 left-8">
        <motion.div
          className="w-16 h-16 border-2 border-cyan-400/30 rounded-lg relative"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="absolute inset-2 border border-purple-100/50 rounded-md" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8">
        <motion.div
          className="w-12 h-12 border-2 border-pink-100/30 rounded-full relative"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="absolute inset-1 border border-cyan-400/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
