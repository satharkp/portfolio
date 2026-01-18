import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Abdul Sathar KP
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b dark:border-gray-800 animate-fade-in-up">
          <div className="px-6 py-8 space-y-6 flex flex-col items-center">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;