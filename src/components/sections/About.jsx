
import React from "react";
import { portfolio } from "@/data/content";
import { ArrowDown } from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-y border-[#3EE6A8]/20 bg-[#0B1A15] px-5 py-16 text-[#D7EDE5] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-8 flex items-center gap-4 sm:mb-10">
                    <span className="shrink-0 font-mono text-[12px] text-[#3EE6A8]">
                        01
                    </span>

                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                        {portfolio.about.heading}
                    </h2>
                </div>

                {/* Main layout */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
                    {/* Left column: About content */}
                    <div className="flex min-w-0 flex-col gap-5 md:pr-8 lg:pr-12">
                        <p className="text-md leading-7 text-[#98B3A8] ">
                            {portfolio.about.description}
                        </p>

                        <p className="text-md leading-7 text-[#98B3A8] ">
                            {portfolio.about.secondParagraph}
                        </p>
                    </div>

                    {/* Right column: Working style and education */}
                    <div className="flex min-w-0 flex-col gap-8 border-[#98B3A8]/20 md:border-l md:pl-8 lg:pl-12">
                        {/* Working style */}
                        <div>
                            <div className="mb-5 font-mono text-md font-stretch-50% uppercase tracking-[0.25em] text-[#3EE6A8]">
                                How I work
                            </div>

                            <div className="flex flex-col">
                                {portfolio.about.workingStyle.map((item, index) => (
                                    <article
                                        key={item.title}
                                        className={`py-4 first:pt-0 ${index !== portfolio.about.workingStyle.length - 1
                                                ? "border-b border-[#98B3A8]/15"
                                                : ""
                                            }`}
                                    >
                                        <h3 className="mb-2 text-lg font-mono text-[#3EE6A8]">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-[#98B3A8]">
                                            {item.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career goal */}
                <div className="mt-12 border-t border-dashed border-[#98B3A8]/20 pt-7 sm:mt-16 sm:pt-8">
                    <div className="rounded-xl border border-[#3EE6A8]/25 bg-[#0A1D15] p-5 sm:p-7">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3EE6A8]">
                            Goal
                        </span>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-[#E5F0EB] sm:text-2xl">
                            {portfolio.about.goal.heading}
                        </h3>

                        <p className="mt-3 max-w-3xl text-sm leading-7 tracking-wide text-[#98B3A8] ">
                            {portfolio.about.goal.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-full bg-[#04130E]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <a
                        href="#skills"
                        className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[#3EE6A8]/20 bg-[#071811] px-3 py-1 font-mono text-[9px] text-[#3EE6A8] transition-colors hover:border-[#3EE6A8]"
                    >
                        <ArrowDown className="h-3 w-3" />
                        02 · Skills
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
