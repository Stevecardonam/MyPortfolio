"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-4 py-6 sm:px-6 lg:px-8">
        <p className="col-start-2 max-w-[13rem] text-center text-sm text-gray-400 sm:max-w-none">
          © 2025 Steven Cardona All rights reserved
        </p>
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          aria-label="Scroll to top"
          className="col-start-3 justify-self-end rounded-full border-gray-200 bg-white text-gray-500 hover:bg-[#eef3ef] hover:text-[#315947]"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  )
}
