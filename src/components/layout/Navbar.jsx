
"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#3EE6A8]/20 bg-[#04130E]/80 shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-extrabold tracking-tight text-[#3EE6A8] sm:text-2xl"
        >
          VANSH <span className="text-white">JAAT.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-medium text-[#98B3A8] transition-colors duration-200 hover:text-[#3EE6A8] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3EE6A8] hover:border-b-[#3EE6A8] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume */}
        <div className="hidden md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
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
          onClick={() => setMenuOpen((prev) => !prev)}
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
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#3EE6A8]/20 bg-[#04130E]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 border-t-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mx-auto flex items-center max-w-7xl flex-col gap-1 px-5 pb-5 pt-3 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#98B3A8] transition-colors duration-200 hover:bg-[#3EE6A8]/10 hover:text-[#3EE6A8]"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#3EE6A8] px-4 py-3 text-sm font-bold text-[#04130E] transition-colors duration-200 hover:bg-white w-fit"
          >
            Download Resume
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
      </div>
    </nav>
  );
};

export default Navbar;
