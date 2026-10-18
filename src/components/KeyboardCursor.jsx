"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const characters = ["</>", "{ }", "0", "1", ";", "=>", "()", "[]"];

export default function KeyboardCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let lastSpawn = 0;
    let counter = 0;

    const handleMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setPosition({ x, y });
      setVisible(true);

      const now = performance.now();

      // Limit character creation for smooth performance
      if (now - lastSpawn < 65) return;
      lastSpawn = now;

      const id = counter++;

      setTrails((previous) =>
        [...previous, {
          id,
          x: x + (Math.random() * 24 - 12),
          y: y + (Math.random() * 24 - 12),
          character: characters[Math.floor(Math.random() * characters.length)],
        }].slice(-18)
      );

      window.setTimeout(() => {
        setTrails((previous) => previous.filter((item) => item.id !== id));
      }, 850);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <>
      {/* Falling programming characters */}
      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        <AnimatePresence>
          {trails.map((item) => (
            <motion.span
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0.6,
                y: item.y,
                x: item.x,
                rotate: -12,
              }}
              animate={{
                opacity: [0, 0.9, 0.65, 0],
                scale: [0.6, 1, 0.9],
                y: item.y + 48,
                x: item.x + 10,
                rotate: 12,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="absolute font-mono text-xs font-bold text-[#3EE6A8] drop-shadow-[0_0_8px_rgba(62,230,168,0.35)]"
            >
              {item.character}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden md:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-md border border-[#3EE6A8]/80 bg-[#04130E]/80 shadow-[0_0_14px_rgba(62,230,168,0.18)]">
          <span className="font-mono text-[9px] font-bold text-[#3EE6A8]">
            {"</>"}
          </span>
        </div>
      </motion.div>
    </>
  );
}