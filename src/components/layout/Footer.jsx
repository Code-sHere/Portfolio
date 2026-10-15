"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer
            id="github"
            className="relative overflow-hidden border-t border-[#3EE6A8]/15 bg-[#0B1A15] px-5 py-16 text-[#D7EDE5] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >

            <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3EE6A8]/20 bg-[#3EE6A8]/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-[#3EE6A8] sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-[#3EE6A8]" />
                    OPEN TO OPPORTUNITIES
                </span>

                <h2 className="flex flex-wrap justify-center gap-x-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <span>See you</span>
                    <span className="text-[#3EE6A8]">in the repo.</span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#D7EDE5]/65 ">
                    Thanks for scrolling. Let's connect, share ideas, and
                    build something useful together.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href="https://github.com/Code-sHere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3EE6A8] px-6 py-3 text-sm font-bold text-[#0B1A15] transition-all duration-300 hover:bg-[#3EE6A8]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EE6A8]"
                    >
                        Explore my GitHub
                        <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>

                    <a
                        href="mailto:"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7EDE5]/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#D7EDE5] transition-all duration-300 hover:border-[#3EE6A8]/50 hover:bg-[#3EE6A8]/[0.06] hover:text-[#3EE6A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3EE6A8]"
                    >
                        <Mail size={18} />
                        Say hello
                    </a>
                </div>

                <div className="mt-16 flex w-full flex-col items-center justify-between gap-4 border-t border-[#D7EDE5]/10 pt-6 text-xs text-[#D7EDE5]/45 sm:flex-row sm:text-sm">
                    <p>
                        © {new Date().getFullYear()} Vansh. Built with care.
                    </p>

                    <a
                        href="https://github.com/Code-sHere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#3EE6A8]"
                    >
                        Designed & developed by Vansh ↗
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;