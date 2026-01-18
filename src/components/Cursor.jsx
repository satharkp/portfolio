import { useEffect } from "react"

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor")
    const ring = document.querySelector(".cursor-ring")
    const root = document.documentElement
    const body = document.body

    if (!cursor || !ring) return

    // --- Move cursor ---
    const move = (e) => {
      cursor.style.top = `${e.clientY}px`
      cursor.style.left = `${e.clientX}px`
      ring.style.top = `${e.clientY}px`
      ring.style.left = `${e.clientX}px`
    }

    // --- Hover states ---
    const hoverOn = () => {
      cursor.classList.add("cursor-hover")
      ring.classList.add("cursor-ring-hover")
    }

    const hoverOff = () => {
      cursor.classList.remove("cursor-hover")
      ring.classList.remove("cursor-ring-hover")
    }

    // --- Dark mode sync (important) ---
    const syncDarkMode = () => {
      if (root.classList.contains("dark")) {
        body.classList.add("dark-section")
      } else {
        body.classList.remove("dark-section")
      }
    }

    // Initial sync
    syncDarkMode()

    // Observe dark mode changes
    const observer = new MutationObserver(syncDarkMode)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })

    window.addEventListener("mousemove", move)

    const hoverTargets = document.querySelectorAll("a, button, img")

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", hoverOn)
      el.addEventListener("mouseleave", hoverOff)

      // Magnetic effect
      const magnet = (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
      }

      const reset = () => {
        el.style.transform = "translate(0,0)"
      }

      el.addEventListener("mousemove", magnet)
      el.addEventListener("mouseleave", reset)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
    </>
  )
}

export default Cursor