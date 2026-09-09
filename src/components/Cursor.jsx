import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringRefPos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with a fine mouse pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      const ease = 0.15;
      const targetX = cursorRef.current.x;
      const targetY = cursorRef.current.y;

      ringRefPos.current.x += (targetX - ringRefPos.current.x) * ease;
      ringRefPos.current.y += (targetY - ringRefPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringRefPos.current.x}px, ${ringRefPos.current.y}px) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <div className={hovering ? "cursor-hover" : ""}>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </div>
  );
};

export default Cursor;