
"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

const DARK = "#04130E";
const MINT = "#3EE6A8";

export default function WaveDivider({
  from = "#0B1A15",
  to = DARK,
  href = "#projects",
  label = "Explore my work",
  number = "01",
}) {
  const reduce = useReducedMotion();
  const gradientId = `wave-${useId().replace(/:/g, "")}`;

  return (
    <div
      className="relative isolate h-28 w-full overflow-hidden sm:h-32"
      style={{ backgroundColor: from }}
    >
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${MINT}12, transparent 65%)`,
        }}
      />

      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor={MINT} stopOpacity="0.08" />
            <stop offset="45%" stopColor={MINT} stopOpacity="0.75" />
            <stop offset="70%" stopColor="#D7EDE5" stopOpacity="0.3" />
            <stop offset="100%" stopColor={MINT} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Deep background contour */}
        <path
          d="M0 42 C220 100 400 12 680 48 S1120 102 1440 32 L1440 128 L0 128 Z"
          fill={to}
          opacity="0.45"
        />

        {/* Main organic wave */}
        <path
          d="M0 60 C220 104 430 30 690 58 S1110 100 1440 48 L1440 128 L0 128 Z"
          fill={to}
        />

        {/* Fine upper contour */}
        <path
          d="M0 42 C220 100 400 12 680 48 S1120 102 1440 32"
          fill="none"
          stroke={MINT}
          strokeOpacity="0.14"
          strokeWidth="1"
        />

        {/* Main luminous contour */}
        <motion.path
          d="M0 60 C220 104 430 30 690 58 S1110 100 1440 48"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          animate={
            reduce
              ? { opacity: 0.65 }
              : { opacity: [0.35, 0.9, 0.35] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />

        {/* Decorative technical details */}
        <path
          d="M80 112 H180 M1260 112 H1360"
          stroke={MINT}
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </svg>

      {/* Floating section indicator */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.a
          href={href}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={reduce ? undefined : { y: -3 }}
          className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-[#3EE6A8]/20 px-5 py-3 text-[#D7EDE5] shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[#3EE6A8]/50 hover:shadow-[0_8px_35px_rgba(62,230,168,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EE6A8]"
          style={{
            backgroundColor: "rgba(4,19,14,0.92)",
          }}
        >
          {/* Animated highlight */}
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#3EE6A8]/[0.07] to-transparent"
            animate={
              reduce ? undefined : { x: ["-120%", "260%"] }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }
            }
          />

          <span className="relative font-mono text-[10px] tracking-widest text-[#3EE6A8]/70">
            {number}
          </span>

          <span className="relative h-6 w-px bg-[#3EE6A8]/20" />

          <span className="relative text-xs font-medium tracking-wide sm:text-sm">
            {label}
          </span>

          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[#3EE6A8]/25 text-[#3EE6A8] transition-all duration-300 group-hover:border-[#3EE6A8] group-hover:bg-[#3EE6A8] group-hover:text-[#04130E]">
            <motion.span
              aria-hidden="true"
              animate={reduce ? undefined : { x: [0, 2, 0] }}
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              →
            </motion.span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
