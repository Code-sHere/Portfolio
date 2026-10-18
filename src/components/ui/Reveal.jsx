
"use client";

import { motion, useReducedMotion } from "motion/react";

const directions = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 0.7,
  once = true,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.15,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
