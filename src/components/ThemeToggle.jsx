import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    dark
      ? root.classList.add("dark")
      : root.classList.remove("dark")
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 text-sm rounded-lg border
                 bg-white text-gray-800 border-gray-300
                 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700
                 transition"
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeToggle