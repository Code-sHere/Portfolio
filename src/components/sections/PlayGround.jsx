import { portfolio } from '@/data/content';
import { ArrowRight, ArrowDown } from 'lucide-react';
import React from 'react'

const PlayGround = () => {
    return (
        <section
            id="playground" className="relative bg-[#04130E] overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex items-center gap-4 sm:mb-10">
                    <span className="shrink-0 font-mono text-[12px] text-[#3EE6A8]">
                        04
                    </span>

                    <h2 className="text-2xl font-extrabold leading-[-0.55em] tracking-tight sm:text-3xl lg:text-4xl">
                        {portfolio.playground.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
                    <div className="flex flex-col min-w-0 gap-5 border border-[#3EE6A8]/20 py-6 rounded-2xl">
                        <section className="border-b border-[#3EE6A8]/20">
                            <span className="text-sm font-mono text-[#71877f] mx-5">{portfolio.playground.prompt}</span>
                        </section>
                        <section className="border-b border-[#3EE6A8]/20">
                            <p className="text-m font-mono text-[#03b574] mx-5 mb-2">Welcome. Type help or tap a command to get started.</p>

                            {portfolio.playground.projectslists.map((item, index) => (
                                <p className="text-sm font-mono text-[#e7ecea] mx-5" key={index}>{item}</p>
                            )
                            )}

                        </section>

                        <section className="flex flex-wrap gap-2 px-5">
                            {portfolio.playground.commands.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="w-fit rounded-2xl border border-[#3EE6A8]/15 bg-[#071811] px-3 py-1.5 text-sm font-mono text-[#3EE6A8] transition-colors duration-200 hover:border-[#3EE6A8] hover:text-[#eaeaea]"
                                >
                                    {item}
                                </button>
                            ))}
                        </section>
                    </div>


                    <div className="flex min-w-0 flex-col gap-2 rounded-2xl border border-[#3EE6A8]/20 bg-[#0B1A15] p-4 sm:p-5">
                        <span className="mb-1 font-mono text-[10px] tracking-widest text-[#3EE6A8]">
                            STACK EXPLORER
                        </span>

                        {portfolio.playground.stackExplorer.map((item, index) => (
                            <div
                                key={index}
                                className={`flex min-w-0 items-center justify-start gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors duration-200 ${index === 0
                                    ? "border-[#3EE6A8] bg-[#3EE6A8] font-medium text-[#04130E]"
                                    : "border-[#3EE6A8]/20 text-[#D7EDE5] hover:border-[#3EE6A8]/60"
                                    }`}
                            >
                                <span>{item.label}</span>
                                <ArrowRight size={14} className="shrink-0" />
                                <span className="text-right">{item.value}</span>
                            </div>
                        ))}
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
                        05 · GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PlayGround;