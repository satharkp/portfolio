import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-gray-950/85 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            AS
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-gray-900 dark:text-white tracking-tight text-sm sm:text-base leading-none truncate">
              Abdul Sathar <span className="text-blue-600 dark:text-blue-400">KP</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase mt-1 truncate">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 items-center">
          <div className="flex items-center gap-1 bg-gray-100/60 dark:bg-gray-900/60 p-1.5 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 mr-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-xs font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-all shadow-xs hover:shadow-sm"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden fixed top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl animate-fade-in-up shadow-xl">
          <div className="px-5 py-6 space-y-2.5 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;