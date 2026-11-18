"use client";

import { motion } from "framer-motion";

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#527965]"
          >
            <span className="h-px w-7 bg-[#9aafa0]" />
            Full Stack Developer
            <span className="h-px w-7 bg-[#9aafa0]" />
          </motion.p>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="mb-4 text-5xl font-semibold tracking-tight text-[#1d2923] md:text-7xl">
              Steven Cardona
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-lg font-medium text-gray-300 md:text-xl">
              Full Stack Developer & Work Management Consultant
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              Crafting the future through code. Specialized in cutting-edge technologies, AI integration, and creating digital business solutions that push boundaries.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
