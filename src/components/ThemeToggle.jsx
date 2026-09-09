import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-xl border border-gray-200 dark:border-gray-800
                 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                 text-gray-700 dark:text-gray-300
                 hover:border-blue-500/50 dark:hover:border-blue-400/50
                 hover:text-blue-600 dark:hover:text-blue-400
                 shadow-2xs hover:shadow-xs
                 transition-all duration-300 group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {dark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;