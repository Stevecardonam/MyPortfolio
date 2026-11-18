"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

interface LoaderProps {
  children: React.ReactNode
}

const stars = Array.from({ length: 48 }, (_, index) => ({
  x: (index * 47 + 11) % 100,
  y: (index * 73 + 17) % 100,
  size: index % 9 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: (index % 11) * 0.17,
  duration: 1.8 + (index % 6) * 0.5,
}))

export function Loader({ children }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsLoading(false),
      prefersReducedMotion ? 0 : 450,
    )

    return () => window.clearTimeout(timeout)
  }, [prefersReducedMotion])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#02040a] text-white"
            role="status"
            aria-label="Loading portfolio"
          >
            <div className="space-nebula absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-0" aria-hidden="true">
              {stars.map((star, index) => (
                <span
                  key={index}
                  className="space-star absolute rounded-full"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    animationDelay: `${star.delay}s`,
                    animationDuration: `${star.duration}s`,
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                Portfolio
              </p>
              <p className="text-lg font-medium tracking-wide text-slate-100">
                Steven Cardona
              </p>
              <motion.div
                className="mx-auto mt-5 h-px w-10 bg-sky-200"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="sr-only">Loading portfolio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  )
}
