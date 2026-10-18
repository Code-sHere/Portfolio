import React from 'react'
import PageFooter from '../footer/PageFooter'
import Navbar from '../layout/Navbar'
import portfolio from '@/data/content'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import WaveDivider from "@/components/ui/WaveDivider";
import Reveal from "@/components/ui/Reveal";

/* ---------- Theme tokens (change colours here only) ---------- */
const DARK = '#04130E'   // sections 1, 3, 5 + footer
const LIGHT = '#0A1A14'  // sections 2, 4

const GITHUB_URL = 'https://github.com/Code-sHere'


const SectionHeading = ({ number, children }) => (
    <div className="mb-6">
        {number && (
            <span className="mb-1 block font-mono text-[12px] text-[#3EE6A8]">{number}</span>
        )}
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {children}
        </h2>
    </div>
)

const sectionBase =
    'relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24'
const Skills = () => {
    return (
        <>
            <Navbar />
            <section className={`${sectionBase} bg-[#04130E]`}>
                <h1 className="text-white text-5xl font-extrabold leading-[-0.55em] tracking-tight sm:text-6xl lg:text-7xl">
                    The Stack, layer by layer.
                </h1>
                <span className="text-[#D7EDE5]/70 sm:text-lg font-semibold ">Everything here comes from projects I have built. No percentages, just the tools and where I used them.</span>
                <div className="mt-15">
                    <SectionHeading number="01" >How the layer connect.</SectionHeading>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {portfolio.architecture.map((item, index) => (
                        <div
                            key={item.layer}
                            className={`flex flex-col gap-2 rounded-xl border bg-[#0F211B] p-4 ${index === 0 ? 'border-[#3EE6A8]' : 'border-[#1D3A30]'
                                }`}
                        >
                            <span className="font-mono text-[11px] uppercase tracking-widest text-[#3EE6A8]">
                                {item.layer}
                            </span>
                            <span className="text-sm font-semibold text-white">
                                {Array.isArray(item.technologies)
                                    ? item.technologies.join(' · ')
                                    : item.technologies}
                            </span>
                        </div>
                    ))}
                </div>

            </section>
            <WaveDivider from={DARK} to={LIGHT} href={GITHUB_URL} label="Skills in detail" />

            <section id="detail" className={`${sectionBase} bg-[#0A1A14]`}>
                <Reveal/>
                <SectionHeading number="02">Skills with evidence.</SectionHeading>

                <div className="grid gap-4">
                    {portfolio.skills.map((group) => {
                        const evidence = group.evidence || []
                        return (
                            <div
                                key={group.title}
                                className="grid gap-4 rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-6 md:grid-cols-[200px_1fr] "
                            >
                                <span className="font-mono text-xs uppercase tracking-widest text-[#3EE6A8]">
                                    {group.title}
                                </span>

                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-[#27493C] px-3 py-1 font-mono text-xs text-[#C3DBD0]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {evidence.length > 0 && (
                                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#1D3A30] pt-4">
                                            <span className="font-mono text-xs text-[#98B3A8]">Used in:</span>
                                            {evidence.map((url) => (
                                                <a
                                                    key={url}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-xs text-[#3EE6A8] underline-offset-4 hover:underline"
                                                >
                                                    {url.split('/').pop()}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <WaveDivider from={LIGHT} to={DARK} href={GITHUB_URL} label="The End" />
            <section id="end" className={`${sectionBase} bg-[#04130E]`}>
                <Reveal/>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                    Keep exploring. <span className="text-[#3EE6A8]">See you in the repo.</span>
                </h2>

                <div className="mt-6 flex flex-wrap gap-4">
                    <a
                        href="/projects"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-4 py-2 font-medium text-black transition-colors hover:bg-transparent hover:text-[#3EE6A8]"
                    >
                        Next: Projects <ArrowRight size={16} />
                    </a>
                    <a
                        href="/"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8]/30 px-4 py-2 font-medium text-white transition-colors hover:border-[#3EE6A8] hover:text-[#3EE6A8]"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </a>
                </div>
            </section>

            <PageFooter />
        </>
    )
}

export default Skills
