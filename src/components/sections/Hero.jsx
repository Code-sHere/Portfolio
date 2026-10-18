import React from 'react'
import { portfolio } from '@/data/content'
import { Dot, ArrowUpRight, ArrowDown } from 'lucide-react';
const Hero = () => {
    return (
        <>
            <section id="home" className="relative bg-[#04130E] overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
                    <div className="flex min-w-0 flex-col items-start">
                        <div className="mb-5 inline-flex items-center gap-1 rounded-full border border-[#98B3A8]/20 bg-[#0A1D16]/70 px-2.5 py-1">
                            <Dot className="h-4 w-4 text-[#3EE6A8]" />
                            <span className="text-xs font-medium text-[#98B3A8]">
                                {portfolio.hero.badge}
                            </span>
                        </div>
                        <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-[#E5F0EB] sm:text-6xl lg:text-7xl">{portfolio.hero.heading}</h1>
                        <span className="mt-1 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-[#3EE6A8] sm:text-6xl lg:text-7xl">{portfolio.hero.heading2}</span>


                        <p className="mt-6 max-w-xl font-sans leading-7 text-[#D7EDE5] sm:text-lg sm:leading-8">{portfolio.hero.description}</p>

                        <p className="mt-4 font-mono text-xs leading-6 text-[#3EE6A8] sm:text-sm">
                            Full Stack Developer / MERN / Product Builder
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-5 py-3 text-sm font-semibold text-[#04130E] transition duration-200 hover:bg-transparent hover:text-[#3EE6A8]"
                            >
                                Explore Projects
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border border-[#98B3A8]/30 px-5 py-3 text-sm font-semibold text-[#E5F0EB] transition duration-200 hover:border-[#3EE6A8] hover:bg-[#3EE6A8]/10 hover:text-[#3EE6A8]"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-3 lg:max-w-none lg:items-start">
                        {portfolio.hero.stack.map((item, index) => {
                            const styles = [
                                "lg:ml-0 lg:w-[88%] border-[#98B3A8]/70 bg-[#10221B]",
                                "lg:ml-[11%] lg:w-[89%] border-[#3EE6A8]/60 bg-[#091A13]",
                                "lg:ml-0 lg:w-[94%] border-[#19372A] bg-[#0C2018]",
                            ];

                            return (
                                <div
                                    key={item.category}
                                    className={`w-full rounded-xl border px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#3EE6A8]/80 hover:shadow-lg hover:shadow-[#3EE6A8]/5 sm:px-6 sm:py-5 ${styles[index % styles.length]}`}
                                >
                                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3EE6A8] sm:text-xs">
                                        {item.category}
                                    </span>

                                    <div className="mt-1.5 flex flex-wrap gap-x-1.5 gap-y-1">
                                        {item.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-sm font-semibold tracking-tight text-[#E5F0EB] sm:text-balanced"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Technology tags */}
                                    {item.tags && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[#98B3A8]/15 px-2.5 py-1 text-[10px] text-[#98B3A8]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-full bg-[#04130E]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <a
                            href="#skills"
                            className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[#3EE6A8]/20 bg-[#071811] px-3 py-1 font-mono text-[9px] text-[#3EE6A8] transition-colors hover:border-[#3EE6A8]"
                        >
                            <ArrowDown className="h-3 w-3" />
                            01 · About
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
