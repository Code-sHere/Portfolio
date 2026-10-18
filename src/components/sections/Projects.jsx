import React from "react";
import Image from "next/image";
import { portfolio } from "@/data/content";
import { ArrowDown } from "lucide-react";

const Projects = () => {

    const projectImages = {
        "twitter-clone": "/images/twitter.png",
        "servd-ai": "/images/servd.png",
    }

    return (
        <section
            id="project"
            className="relative overflow-hidden border-y border-[#3EE6A8]/20 bg-[#0B1A15] px-5 py-16 text-[#D7EDE5] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-12 flex items-center gap-4 sm:mb-16">
                    <span className="shrink-0 font-mono text-xs text-[#3EE6A8]">
                        03
                    </span>

                    <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Case Studies
                    </h2>
                </div>

                {/* One project per row */}
                <div className="flex flex-col gap-20 lg:gap-28">
                    {portfolio.projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Left: Project Details */}
                            <div className={`flex min-w-0 flex-col items-start gap-5 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                                }`}>
                                <span className="font-mono text-xs tracking-widest text-[#3EE6A8]">
                                    PROJECT {String.fromCharCode(65 + index)}
                                </span>

                                <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    {project.title}
                                </h3>

                                <p className="text-sm font-medium text-[#3EE6A8]">
                                    {project.category}
                                </p>

                                <p className="max-w-xl text-balance leading-8 text-[#D7EDE5]/75">
                                    {project.longDescription}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-[#3EE6A8]/20 bg-[#3EE6A8]/5 px-3 py-1.5 text-xs text-[#D7EDE5]"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="mt-2 flex flex-wrap gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-3xl bg-[#3EE6A8] px-4 py-3 font-semibold text-[#0B1A15] transition hover:bg-white"
                                    >
                                        Live Demo ↗
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-3xl border border-[#3EE6A8]/30 px-5 py-3 font-semibold text-white transition hover:border-[#3EE6A8] hover:text-[#3EE6A8]"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>

                            {/* Right: Project Image */}

                            <div
                                className={`relative min-w-0 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                    }`}
                            >
                                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#3EE6A8]/20 bg-[#10271F] transition-all duration-500 hover:border-[#3EE6A8]/50 hover:shadow-[0_0_30px_rgba(62,230,168,0.08)]">
                                    <Image
                                        src={projectImages[project.id]}
                                        alt={`${project.title} project preview`}
                                        fill
                                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 550px"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                    {/* Subtle bottom gradient */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04130E]/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Mint corner accent */}
                                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#3EE6A8] transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>

                        </article>
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
                        04 · Skills
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;