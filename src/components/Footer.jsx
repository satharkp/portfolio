import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200/60 dark:border-gray-900 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0">
            AS
          </div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm tracking-tight">
              Abdul Sathar KP
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
              MERN Stack & Frontend Engineer
            </p>
          </div>
        </div>

        {/* Navigation Quicklinks */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs font-medium text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center justify-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Abdul Sathar KP
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-2xs hover:shadow-xs shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;