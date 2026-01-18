import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Abdul Sathar KP
            </p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-500">
              MERN Stack Developer · Ex-Digital Marketer
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:satharkp292@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/satharkp"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-sathar-k-p-132424228"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer