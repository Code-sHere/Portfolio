'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Navbar from '../layout/Navbar'
import PageFooter from '../footer/PageFooter'
import WaveDivider from '../ui/WaveDivider'
import Reveal from '../ui/Reveal'

const DARK = '#04130E'
const LIGHT = '#0A1A14'


const GITHUB_USER = 'Code-sHere'
const GITHUB_URL = `https://github.com/${GITHUB_USER}`

// Calendar colours: level 0 (none) to 4 (most)
const LEVELS = ['#183328', '#1F5A41', '#2A8E65', '#33C28C', '#3EE6A8']



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

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

const Github = () => {
    const [repos, setRepos] = useState([])
    const [repoStatus, setRepoStatus] = useState('loading') // loading | ready | error
    const [days, setDays] = useState([])
    const [calStatus, setCalStatus] = useState('loading')
    const [filter, setFilter] = useState('All')

    // Repositories (public GitHub API, no token needed)
    useEffect(() => {
        const controller = new AbortController()

        async function loadRepos() {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
                    { signal: controller.signal }
                )
                if (!res.ok) throw new Error(`GitHub responded ${res.status}`)
                setRepos(await res.json())
                setRepoStatus('ready')
            } catch (err) {
                if (err.name !== 'AbortError') setRepoStatus('error')
            }
        }

        loadRepos()
        return () => controller.abort()
    }, [])

    // Contribution calendar (third-party service that reads your public profile)
    useEffect(() => {
        const controller = new AbortController()

        async function loadCalendar() {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
                    { signal: controller.signal }
                )
                if (!res.ok) throw new Error(`Calendar responded ${res.status}`)
                const data = await res.json()
                setDays(data.contributions ?? [])
                setCalStatus('ready')
            } catch (err) {
                if (err.name !== 'AbortError') setCalStatus('error')
            }
        }

        loadCalendar()
        return () => controller.abort()
    }, [])

    const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))]
    const visibleRepos =
        filter === 'All' ? repos : repos.filter((r) => r.language === filter)

    const total = days.reduce((sum, d) => sum + d.count, 0)
    const offset = days.length
        ? new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
        : 0

    return (
        <>
            <Navbar />

            {/* ---------- Header + profile + calendar ---------- */}
            <section id="github" className={`${sectionBase} bg-[#04130E]`}>
                <div className="mb-4 font-mono text-xs text-[#6a9082]">
                    <Link href="/" className="hover:text-[#3EE6A8]">Home</Link> / GitHub
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Live from {GITHUB_USER}.
                </h1>
                <p className="mb-10 mt-3 font-mono text-sm tracking-tight text-[#6a9082] sm:text-balance">
                    Public repositories and activity pulled straight from GitHub.
                </p>

                {/* profile */}
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#3EE6A8] text-xl font-extrabold text-black">
                        CS
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="text-xl font-extrabold text-white">{GITHUB_USER}</div>
                        <div className="break-words font-mono text-xs text-[#98B3A8]">
                            github.com/{GITHUB_USER} · data loads live from the GitHub API
                        </div>
                    </div>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3EE6A8] hover:text-black"
                    >
                        Open GitHub profile <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* contribution calendar */}
                <div className="rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-5">
                    <p className="mb-3 font-mono text-xs text-[#98B3A8]">
                        {calStatus === 'ready'
                            ? `Contribution calendar · ${total} contributions in the last year`
                            : 'Contribution calendar · loads from GitHub, falls back to profile link'}
                    </p>

                    {calStatus === 'loading' && (
                        <p className="font-mono text-xs text-[#98B3A8]">Loading calendar…</p>
                    )}

                    {calStatus === 'error' && (
                        <p className="text-sm text-[#98B3A8]">
                            The calendar could not be loaded right now.{' '}
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3EE6A8] underline-offset-4 hover:underline"
                            >
                                View it on GitHub
                            </a>
                            .
                        </p>
                    )}

                    {calStatus === 'ready' && (() => {
                        const cols = Math.ceil((offset + days.length) / 7)

                        return (
                            <>
                                <div className="overflow-x-auto pb-2 [scrollbar-color:#27493C_transparent] [scrollbar-width:thin]">
                                    <div
                                        className="grid grid-flow-col gap-[3px]"
                                        style={{
                                            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                                            gridTemplateRows: 'repeat(7, auto)',
                                            minWidth: `${cols * 13}px`,
                                        }}
                                    >
                                        {Array.from({ length: offset }).map((_, i) => (
                                            <span key={`pad-${i}`} />
                                        ))}
                                        {days.map((d) => (
                                            <span
                                                key={d.date}
                                                title={`${d.count} contributions on ${d.date}`}
                                                className="aspect-square rounded-[3px]"
                                                style={{ backgroundColor: LEVELS[d.level] ?? LEVELS[0] }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-[#98B3A8]">
                                    Less
                                    {LEVELS.map((c) => (
                                        <span
                                            key={c}
                                            className="h-2.5 w-2.5 rounded-[3px]"
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                    More
                                </div>
                            </>
                        )
                    })()}
                </div>
            </section>

            <WaveDivider from={DARK} to={LIGHT} href="#repositories" label="Repositories" />

            {/* ---------- Repositories ---------- */}
            <section id="repositories" className={`${sectionBase} bg-[#0A1A14]`}>
                <Reveal />
                <SectionHeading number="01">Repositories.</SectionHeading>

                {repoStatus === 'loading' && (
                    <p className="font-mono text-sm text-[#98B3A8]">Loading repositories…</p>
                )}

                {repoStatus === 'error' && (
                    <p className="text-sm text-[#98B3A8]">
                        Repositories could not be loaded right now (GitHub may be limiting
                        requests).{' '}
                        <a
                            href={`${GITHUB_URL}?tab=repositories`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3EE6A8] underline-offset-4 hover:underline"
                        >
                            See them on GitHub
                        </a>
                        .
                    </p>
                )}

                {repoStatus === 'ready' && (
                    <>
                        {/* language filters */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            {['All', ...languages].map((lang) => (
                                <button
                                    key={lang}
                                    type="button"
                                    aria-pressed={filter === lang}
                                    onClick={() => setFilter(lang)}
                                    className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${filter === lang
                                            ? 'border-[#3EE6A8] bg-[#3EE6A8] text-black'
                                            : 'border-[#27493C] text-[#C3DBD0] hover:border-[#3EE6A8] hover:text-[#3EE6A8]'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        {visibleRepos.length === 0 ? (
                            <p className="text-sm text-[#98B3A8]">
                                No public repositories matched this filter yet.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {visibleRepos.map((repo) => (
                                    <a
                                        key={repo.id}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col gap-3 rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-5 transition-colors hover:border-[#3EE6A8]/60"
                                    >
                                        <span className="break-words text-lg font-extrabold text-white">
                                            {repo.name}
                                        </span>
                                        <p className="text-sm leading-6 text-[#98B3A8]">
                                            {repo.description || 'No description provided.'}
                                        </p>
                                        <div className="mt-auto font-mono text-xs leading-6 text-[#C3DBD0]">
                                            ● {repo.language || 'n/a'} · ★ {repo.stargazers_count} · ⑂ {repo.forks_count}
                                            <br />
                                            updated {formatDate(repo.pushed_at ?? repo.updated_at)}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>

            <WaveDivider from={LIGHT} to={DARK} href="#fallback" label="Fallback states" />

            {/* ---------- When data is missing ---------- */}
            <section id="fallback" className={`${sectionBase} bg-[#04130E]`}>
                <Reveal />
                <SectionHeading number="02">When data is missing.</SectionHeading>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-6">
                        <span className="mb-3 block font-mono text-[11px] uppercase tracking-widest text-[#3EE6A8]">
                            If GitHub is unavailable
                        </span>
                        <p className="mb-4 text-sm leading-6 text-[#98B3A8]">
                            Live data could not be loaded right now. No numbers are shown rather than guessed ones.
                        </p>
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3EE6A8] hover:text-black"
                        >
                            View profile on GitHub <ArrowUpRight size={14} />
                        </a>
                    </div>

                    <div className="rounded-2xl border border-[#1D3A30] bg-[#0F211B] p-6">
                        <span className="mb-3 block font-mono text-[11px] uppercase tracking-widest text-[#3EE6A8]">
                            Empty state
                        </span>
                        <p className="text-sm leading-6 text-[#98B3A8]">
                            No public repositories matched this filter yet.
                        </p>
                    </div>
                </div>
            </section>

            <WaveDivider from={DARK} to={LIGHT} href="#end" label="The end" />

            {/* ---------- Keep exploring ---------- */}
            <section id="end" className={`${sectionBase} bg-[#0A1A14]`}>
                <Reveal />
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                    Keep exploring. <span className="text-[#3EE6A8]">See you in the repo.</span>
                </h2>

                <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                        href="/"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-4 py-2 font-medium text-black transition-colors hover:bg-transparent hover:text-[#3EE6A8]"
                    >
                        Next: Contact <ArrowRight size={16} />
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8]/30 px-4 py-2 font-medium text-white transition-colors hover:border-[#3EE6A8] hover:text-[#3EE6A8]"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </section>

            <PageFooter />
        </>
    )
}

export default Github