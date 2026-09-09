import { useEffect, useRef, useState } from "react";

const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);

  // ── Early exit on touch/coarse-pointer devices ──
  // We initialise to true and set to false only if the media query says coarse.
  // This prevents the "starts as null" flash.
  const [visible, setVisible] = useState(() => isFinePointer());

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");

    // Update state whenever the media query changes (e.g. connecting a mouse)
    const handleChange = (e) => setVisible(e.matches);
    mq.addEventListener("change", handleChange);

    // If not a fine pointer, bail out early
    if (!mq.matches) {
      setVisible(false);
      return () => mq.removeEventListener("change", handleChange);
    }

    setVisible(true);

    // ── Mouse tracking ──
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // ── Smooth ring follow via rAF ──
    const animate = () => {
      const ease = 0.12;
      ring.current.x += (mouse.current.x - ring.current.x) * ease;
      ring.current.y += (mouse.current.y - ring.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    // ── Hover detection on interactive elements ──
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    const targets = document.querySelectorAll("a, button, input, textarea, [role='button']");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      mq.removeEventListener("change", handleChange);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={hovering ? "cursor-hover" : ""}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
};

export default Cursor;