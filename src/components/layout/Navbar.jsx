"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { name: "Home", href: "/"},
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "GitHub", href: "/github" },
    { name: "Contact", href: "/#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  const circlePath =
    "M13 28 C10 13 29 7 57 9 C84 6 109 13 108 27 C108 41 82 47 54 44 C27 45 10 39 13 28 Z";

  const secondPath =
    "M16 25 C17 12 36 10 60 11 C88 10 105 17 104 28 C101 39 80 43 55 42";

  // Reusable hand-drawn circle
  const CircleEffect = ({ selected = false }) => (
    <svg
      viewBox="0 0 120 54"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[calc(100%+24px)] -translate-x-1/2 overflow-visible"
    >
      <motion.path
        d={circlePath}
        fill="none"
        stroke="#3EE6A8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        initial={false}
        animate={{
          pathLength: selected ? 1 : 0,
          opacity: selected ? 1 : 0,
        }}
        transition={{
          pathLength: {
            duration: 0.55,
            ease: "easeInOut",
          },
          opacity: { duration: 0.2 },
        }}
      />

      <motion.path
        d={secondPath}
        fill="none"
        stroke="#3EE6A8"
        strokeWidth="0.8"
        strokeOpacity="0.65"
        strokeLinecap="round"
        pathLength={1}
        initial={false}
        animate={{
          pathLength: selected ? 1 : 0,
          opacity: selected ? 0.65 : 0,
        }}
        transition={{
          pathLength: {
            duration: 0.7,
            delay: 0.1,
            ease: "easeInOut",
          },
          opacity: { duration: 0.2 },
        }}
      />
    </svg>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#3EE6A8]/20 bg-[#04130E]/90 shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-xl font-extrabold tracking-tight text-[#3EE6A8] sm:text-2xl"
        >
          VANSH <span className="text-white">JAAT.</span>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              className="relative inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-[#98B3A8] transition-colors duration-200 hover:text-[#3EE6A8]"
            >
              <span className="relative z-10">{link.name}</span>

              <svg
                viewBox="0 0 120 54"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-2 -inset-y-0.5 h-[calc(100%+4px)] w-[calc(100%+16px)] overflow-visible"
              >
                <motion.path
                  d="M12 28 C9 14 28 7 58 9 C88 6 111 15 108 28 C107 41 82 47 53 44 C25 45 9 39 12 28 Z"
                  fill="none"
                  stroke="#3EE6A8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  variants={{
                    rest: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 1 },
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.65,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.15 },
                  }}
                />

                <motion.path
                  d="M16 25 C18 13 38 10 62 11 C87 10 104 17 103 28 C100 39 78 43 54 42"
                  fill="none"
                  stroke="#3EE6A8"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  variants={{
                    rest: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 0.55 },
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.75,
                      delay: 0.12,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.2 },
                  }}
                />
              </svg>
            </motion.a>
          ))}
        </div>


        {/* Desktop Resume */}
        <div className="hidden md:flex">
          <a
            href="/Vansh_Resume.pdf"
            download="Vansh_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-[#3EE6A8]/40 px-4 py-2.5 text-sm font-semibold text-[#3EE6A8] transition-all duration-200 hover:border-[#3EE6A8] hover:bg-[#3EE6A8] hover:text-[#04130E]"
          >
            Resume
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12m-5-5 5 5 5-5" />
              <path d="M5 17v4h14v-4" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center justify-center rounded-xl border border-[#3EE6A8]/20 p-2.5 text-[#3EE6A8] transition-colors hover:bg-[#3EE6A8]/10 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#3EE6A8]/20 bg-[#04130E]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen
          ? "max-h-[420px] opacity-100"
          : "pointer-events-none max-h-0 border-t-transparent opacity-0"
          }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-5 pb-5 pt-3 sm:px-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="relative flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-[#98B3A8] transition-colors duration-200 hover:text-[#3EE6A8]"
            >
              <span className="relative z-10">{link.name}</span>

              <svg
                viewBox="0 0 120 54"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[44px] w-36 -translate-x-1/2 -translate-y-1/2 overflow-visible"
              >
                <motion.path
                  d="M12 28 C9 14 28 7 58 9 C88 6 111 15 108 28 C107 41 82 47 53 44 C25 45 9 39 12 28 Z"
                  fill="none"
                  stroke="#3EE6A8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    rest: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 1 },
                  }}
                  transition={{
                    pathLength: { duration: 0.65, ease: "easeInOut" },
                    opacity: { duration: 0.2 },
                  }}
                />

                <motion.path
                  d="M16 25 C18 13 38 10 62 11 C87 10 104 17 103 28 C100 39 78 43 54 42"
                  fill="none"
                  stroke="#3EE6A8"
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  variants={{
                    rest: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 0.6 },
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.75,
                      delay: 0.12,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.2 },
                  }}
                />
              </svg>
            </motion.a>
          ))}

          {/* Mobile Resume */}
          <a
            href="/Vansh_Resume.pdf"
            download="Vansh_Resume.pdf"
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3 inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#3EE6A8] px-4 py-3 text-sm font-bold text-[#04130E] transition-colors duration-200 hover:bg-white"
          >
            Download Resume
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
