import React from 'react'
import Navbar from '../layout/Navbar'
import portfolio from '@/data/content'
import PageFooter from '../footer/PageFooter'
import{ ArrowLeft, ArrowRight } from 'lucide-react'
import WaveDivider from "@/components/ui/WaveDivider";
import Reveal from "@/components/ui/Reveal";

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

const Label = ({ children }) => (
    <span className="mb-3 block font-mono text-[11px] uppercase tracking-widest text-[#3EE6A8]">
        {children}
    </span>
)

const ListCard = ({ id, title, items }) => (
    <div id={id} className="rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-5">
        <Label>{title}</Label>
        <ul className="flex flex-col gap-3 text-sm leading-6 text-[#98B3A8]">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
)

const CaseStudy = ({ id, number, project, architecture, note, bg }) => {
    const tabs = [
        { label: 'Overview', href: `#${id}` },
        { label: 'Architecture', href: `#${id}-architecture` },
        { label: 'Challenges', href: `#${id}-challenges` },
        { label: 'Lessons', href: `#${id}-lessons` },
    ]

    return (
        <section id={id} className={`${sectionBase} ${bg}`}>
            <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-[12px] text-[#3EE6A8]">{number}</span>
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {project.title}, in depth.
                </h2>
            </div>

            {/* tabs */}
            <div className="mb-8 flex flex-wrap gap-2">
                {tabs.map((tab, i) => (
                    <a
                        key={tab.label}
                        href={tab.href}
                        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${i === 0
                                ? 'border-[#3EE6A8] bg-[#3EE6A8] text-black'
                                : 'border-[#27493C] text-[#C3DBD0] hover:border-[#3EE6A8] hover:text-[#3EE6A8]'
                            }`}
                    >
                        {tab.label}
                    </a>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* left: purpose + architecture */}
                <div className="flex flex-col gap-8">
                    <div>
                        <Label>Purpose</Label>
                        <p className="text-sm leading-7 text-[#C3DBD0]">{project.longDescription}</p>
                    </div>

                    <div id={`${id}-architecture`}>
                        <Label>Architecture</Label>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {architecture.map((item, index) => (
                                <div
                                    key={item.layer}
                                    className={`flex flex-col gap-2 rounded-xl border bg-[#0F211B] p-4 ${index === 1 ? 'border-[#3EE6A8]' : 'border-[#1D3A30]'
                                        }`}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#3EE6A8]">
                                        {item.layer}
                                    </span>
                                    <span className="text-sm font-semibold text-white">{item.tech}</span>
                                </div>
                            ))}
                        </div>
                        {note && <p className="mt-3 font-mono text-xs text-[#98B3A8]">{note}</p>}
                    </div>
                </div>

                {/* right: features */}
                <div>
                    <Label>Features</Label>
                    <ul>
                        {project.features.map((feature) => (
                            <li
                                key={feature}
                                className="border-b border-[#1D3A30] py-3 text-sm font-semibold text-white"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* bottom three cards */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <ListCard title="What I built" items={project.points} />
                <ListCard id={`${id}-challenges`} title="Challenges" items={project.challenges} />
                <ListCard id={`${id}-lessons`} title="Lessons learned" items={project.learnings} />
            </div>
        </section>
    )
}

const Project = () => {
    const projectImages = {
        "twitter-clone": "/images/twitter.png",
        "servd-ai": "/images/servd.png",
    }

    const twitter = portfolio.projects.find((p) => p.id === 'twitter-clone')
    const servd = portfolio.projects.find((p) => p.id === 'servd-ai')

    const twitterArchitecture = [
        { layer: 'Client', tech: 'React · Next.js' },
        { layer: 'API', tech: 'Node.js · Express' },
        { layer: 'Database', tech: 'MongoDB Atlas' },
    ]

    const servdArchitecture = [
        { layer: 'Frontend', tech: servd.architecture.frontend },
        { layer: 'Auth', tech: servd.architecture.authentication },
        { layer: 'Content', tech: servd.architecture.contentManagement },
    ]

    return (
        <>
            <Navbar />
            <section className={`${sectionBase} bg-[#04130E]`}>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Case studies.
                </h1>
                <p className="mb-10 mt-3 font-mono text-sm tracking-tight text-[#6a9082] sm:text-balance">
                    Real projects, with what worked, what was hard and what I learned.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {portfolio.projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-4 rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-5"
                        >
                            <img
                                src={projectImages[project.id]}
                                alt={`${project.title} screenshot`}
                                className="h-48 w-full rounded-xl border border-[#1D3A30] object-cover sm:h-56"
                            />

                            <span className="font-mono text-sm text-[#3EE6A8]">
                                PROJECT {String.fromCharCode(65 + index)}
                            </span>
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <p className="text-sm text-[#98B3A8]">{project.description}</p>

                            <div className="flex flex-wrap items-center gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="w-fit rounded-full border border-[#27493C] px-3 py-1 font-mono text-xs text-[#C3DBD0] transition-colors hover:bg-[#3EE6A8] hover:text-black"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-wrap gap-3 pt-2">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-4 py-2 font-semibold text-black transition-colors hover:bg-transparent hover:text-[#3EE6A8]"
                                >
                                    Live demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit rounded-full border border-[#3EE6A8]/40 px-4 py-2 font-semibold text-[#3EE6A8] transition-colors hover:bg-[#3EE6A8] hover:text-black"
                                >
                                    Source code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <WaveDivider from="#04130E" to="#0A1A14" href="#twitter-clone" label="Twitter Clone" />
            
            <CaseStudy
                id="twitter-clone"
                number="01"
                project={twitter}
                architecture={twitterArchitecture}
                note="Side services: Firebase · Brevo · Twilio · Cloudinary · Razorpay · i18next"
                bg="bg-[#0A1A14]"
            /><Reveal />

            <WaveDivider from="#0A1A14" to="#04130E" href="#servd-ai" label="SERVD AI" />

            <CaseStudy
                id="servd-ai"
                number="02"
                project={servd}
                architecture={servdArchitecture}
                note={`Language: ${servd.architecture.language}`}
                bg="bg-[#04130E]"
            />

            <WaveDivider from="#04130E" to="#0A1A14" href="#twitter-clone" label="End" />
            <section id="end" className={`${sectionBase} bg-[#0A1A14]`}>
                <Reveal/>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                    Keep exploring. <span className="text-[#3EE6A8]">See you in the repo.</span>
                </h2>

                <div className="mt-6 flex flex-wrap gap-4">
                    <a
                        href="/github"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-4 py-2 font-medium text-black transition-colors hover:bg-transparent hover:text-[#3EE6A8]"
                    >
                        Next:GitHub  <ArrowRight size={16} />
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

export default Project;