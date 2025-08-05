"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Zap, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="glass-dark border-t border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-3xl font-black bg-gradient-to-r text-white bg-clip-text text-transparent">
                    Steven Cardona
                  </h3>
                </div>

                <div className="flex space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Stevecardonam",
                      color: "hover:text-gray-300",
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
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={href}
                        className={`text-gray-500 ${color} transition-all duration-300 p-3 glass rounded-xl hover:shadow-lg`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {["Home", "About", "Projects", "Contact"].map(
                    (item, index) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Web Development",
                    "RESTful API Design",
                    "Responsive Frontend",
                    "Backend & Database Architecture",
                  ].map((service, index) => (
                    <motion.li
                      key={service}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-gray-400 block">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-gray-400 flex items-center mb-4 md:mb-0">
                Made with{" "}
                <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
                and cutting-edge tech © 2025 Steven Cardona
              </p>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="glass border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full group bg-transparent"
              >
                <ArrowUp className="h-4 w-4 group-hover:animate-bounce" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
