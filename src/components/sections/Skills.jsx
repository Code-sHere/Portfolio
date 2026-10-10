import portfolio from '@/data/content'
import React from 'react'
import { ArrowDown } from 'lucide-react'

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden border-y border-[#3EE6A8]/20 bg-[#04130E] px-5 py-16 text-[#D7EDE5] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                    <span className="shrink-0 font-mono text-[12px] text-[#3EE6A8]">
                        02
                    </span>
                    <h2 className="text-2xl font-extrabold leading-[-0.55em] tracking-tight sm:text-3xl lg:text-4xl text-[#D7EDE5] transition-colors duration-200 hover:text-[#3EE6A8] ">
                        The stack, layer by layer
                    </h2>
                </div>
                <div className="space-y-2">
                    {portfolio.skills.map((skill) => (
                        <div key={skill.title}
                            className="grid grid-cols-1 gap-3 rounded-2xl bg-[#0c271e] p-4 sm:grid-cols-2 sm:gap-5 sm:p-6 lg:grid-cols-3 border-[#3EE6A8]/20 border"
                        >
                            <span className="text-xs font-mono text-[#27e39e]">{skill.title}</span>

                            <div className="flex flex-wrap items-center gap-1.5">
                                {skill.items.map((item) => (
                                    <span key={item} className="rounded-full font-mono border border-[#3EE6A8]/15 bg-[#071811] px-2 py-1 text-[9px] leading-none text-[#3EE6A8]transition-colors duration-200 hover:border-[#3EE6A8] hover:text-[#0f573c]">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-full bg-[#04130E]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <a
                        href="#skills"
                        className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[#3EE6A8]/20 bg-[#071811] px-3 py-1 font-mono text-[9px] text-[#3EE6A8] transition-colors hover:border-[#3EE6A8]"
                    >
                        <ArrowDown className="h-3 w-3" />
                        03 · Projects
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Skills
