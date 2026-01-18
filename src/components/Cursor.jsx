import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringRefPos = useRef({ x: 0, y: 0 }); // Current interpolated position
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // 1. Mouse Move Handler - updates target position instantly
    const onMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Update dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    // 2. Animation Loop - lerps ring position towards target
    const animate = () => {
      // Lerp factor (0.1 = slow/smooth, 0.2 = faster)
      const ease = 0.15;

      const targetX = cursorRef.current.x;
      const targetY = cursorRef.current.y;

      // Calculate next position
      ringRefPos.current.x += (targetX - ringRefPos.current.x) * ease;
      ringRefPos.current.y += (targetY - ringRefPos.current.y) * ease;

      // Apply to ring
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringRefPos.current.x}px, ${ringRefPos.current.y}px) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // 3. Hover Handlers
    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);

    // Initial setup
    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []); // Run once on mount due to specific DOM targeting strategy

  // Re-attach listeners when DOM changes (optional, but good for SPAs)
  // For simplicity keeping it simple; a real app might use a MutationObserver.

  return (
    <div className={hovering ? "cursor-hover" : ""}>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </div>
  );
};

export default Cursor;