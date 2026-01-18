import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50
                    dark:bg-gray-950/80 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold lg:font-semibold text-lg tracking-tight text-gray-900 dark:text-gray-100">
          Abdul Sathar KP
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm tracking-wide text-gray-600 dark:text-gray-400 items-center">
          <a href="#about" className="hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800 px-6 py-4 space-y-4">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  )
}

export default Navbar