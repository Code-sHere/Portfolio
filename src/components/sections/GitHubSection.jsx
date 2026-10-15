"use client";
 
import React, { useEffect, useMemo, useState } from "react";
 
const GITHUB_USERNAME = "Code-sHere";
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
 
const LEVEL_COLORS = ["#142B22", "#155D43", "#1E9B6B", "#3EE6A8", "#A0FFD9"];
const WEEKS = 53;
 
function formatDate(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
 
/* Turn a flat list of days into a 7-row grid (columns = weeks, Sunday first). */
function buildCells(days) {
    if (!days.length) return Array.from({ length: WEEKS * 7 }, () => null);
    const lead = new Date(days[0].date + "T00:00:00").getDay();
    const cells = [...Array.from({ length: lead }, () => null), ...days];
    return cells;
}
 
export default function GitHubSection() {
    const [repositories, setRepositories] = useState([]);
    const [reposLoading, setReposLoading] = useState(true);
    const [days, setDays] = useState([]);
    const [calendarState, setCalendarState] = useState("loading"); // loading | ready | error
 
    /* Contribution calendar */
    useEffect(() => {
        let cancelled = false;
        async function fetchCalendar() {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
                );
                if (!res.ok) throw new Error("Calendar request failed");
                const data = await res.json();
                if (!Array.isArray(data.contributions)) throw new Error("Bad calendar data");
                if (!cancelled) {
                    setDays(data.contributions);
                    setCalendarState("ready");
                }
            } catch (err) {
                console.error("GitHub calendar error:", err);
                if (!cancelled) setCalendarState("error");
            }
        }
        fetchCalendar();
        return () => {
            cancelled = true;
        };
    }, []);
 
    /* Pinned repositories (+ last-updated date from the GitHub API when available) */
    useEffect(() => {
        let cancelled = false;
        async function fetchPinnedRepos() {
            try {
                const res = await fetch(`https://pinned.berrysauce.dev/get/${GITHUB_USERNAME}`);
                if (!res.ok) throw new Error("Failed to fetch pinned repositories");
                const pinned = (await res.json()).slice(0, 6);
 
                const enriched = await Promise.all(
                    pinned.map(async (repo) => {
                        try {
                            const r = await fetch(
                                `https://api.github.com/repos/${repo.author}/${repo.name}`
                            );
                            if (!r.ok) return repo;
                            const info = await r.json();
                            return { ...repo, updated: info.pushed_at || info.updated_at };
                        } catch {
                            return repo;
                        }
                    })
                );
 
                if (!cancelled) setRepositories(enriched);
            } catch (err) {
                console.error("GitHub pinned repos error:", err);
            } finally {
                if (!cancelled) setReposLoading(false);
            }
        }
        fetchPinnedRepos();
        return () => {
            cancelled = true;
        };
    }, []);
 
    const cells = useMemo(() => buildCells(days), [days]);
    const total = useMemo(() => days.reduce((sum, d) => sum + (d.count || 0), 0), [days]);
 
    return (
        <section
            id="github"
            className="relative overflow-hidden bg-[#0B1A15] px-5 pb-24 pt-16 text-[#D7EDE5] sm:px-8 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-8 flex items-center gap-4 sm:mb-10">
                    <span className="font-mono text-xs text-[#3EE6A8]">05</span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Live from Code-sHere.
                    </h2>
                </div>
 
                {/* Contribution calendar */}
                <div className="mb-4 rounded-2xl border border-[#3EE6A8]/10 bg-[#0E211A] p-4 sm:p-5">
                    <p className="mb-4 font-mono text-[11px] text-[#A3B8AF]">
                        {calendarState === "ready" ? (
                            <>
                                {total.toLocaleString()} contributions in the last year · from GitHub
                            </>
                        ) : calendarState === "error" ? (
                            <>
                                Couldn&apos;t load activity ·{" "}
                                <a
                                    href={PROFILE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#3EE6A8] underline-offset-2 hover:underline"
                                >
                                    view it on GitHub
                                </a>
                            </>
                        ) : (
                            <>Loading contribution calendar…</>
                        )}
                    </p>
 
                    <div className="overflow-x-auto rounded-lg">
                        <div
                            role="img"
                            aria-label={`${GITHUB_USERNAME}'s GitHub contribution calendar`}
                            className={`grid min-w-[640px] gap-[3px] rounded-lg bg-[#0B1A15] p-2 ${
                                calendarState === "loading" ? "animate-pulse" : ""
                            }`}
                            style={{
                                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                                gridAutoFlow: "column",
                                gridAutoColumns: "minmax(0, 1fr)",
                            }}
                        >
                            {calendarState === "ready"
                                ? cells.map((day, i) => (
                                      <span
                                          key={day ? day.date : `pad-${i}`}
                                          title={
                                              day
                                                  ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`
                                                  : undefined
                                          }
                                          className="aspect-square rounded-[2px]"
                                          style={{
                                              backgroundColor: day
                                                  ? LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]
                                                  : "transparent",
                                          }}
                                      />
                                  ))
                                : Array.from({ length: WEEKS * 7 }, (_, i) => (
                                      <span
                                          key={i}
                                          className="aspect-square rounded-[2px] bg-[#142B22]"
                                      />
                                  ))}
                        </div>
                    </div>
                </div>
 
                {/* Pinned repositories */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {reposLoading ? (
                        [1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="animate-pulse rounded-xl border border-[#3EE6A8]/10 bg-[#0E211A] p-5"
                            >
                                <div className="mb-4 h-4 w-2/3 rounded bg-[#3EE6A8]/10" />
                                <div className="mb-5 h-3 w-full rounded bg-[#3EE6A8]/10" />
                                <div className="h-3 w-1/2 rounded bg-[#3EE6A8]/10" />
                            </div>
                        ))
                    ) : repositories.length > 0 ? (
                        repositories.map((repo) => {
                            const updated = formatDate(repo.updated);
                            return (
                                <a
                                    key={`${repo.author}/${repo.name}`}
                                    href={`https://github.com/${repo.author}/${repo.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group min-w-0 rounded-xl border border-[#3EE6A8]/10 bg-[#0E211A] p-5 transition-colors duration-200 hover:border-[#3EE6A8]/40 focus-visible:border-[#3EE6A8] focus-visible:outline-none"
                                >
                                    <h3 className="truncate text-base font-bold text-white transition-colors group-hover:text-[#3EE6A8]">
                                        {repo.name}
                                    </h3>
 
                                    <p className="mb-5 mt-3 line-clamp-2 min-h-10 text-sm leading-5 text-[#A3B8AF]">
                                        {repo.description || "No description available."}
                                    </p>
 
                                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-[#D7EDE5]/85">
                                        {repo.language && (
                                            <>
                                                <span className="flex items-center gap-1.5">
                                                    <span
                                                        aria-hidden="true"
                                                        className="h-2 w-2 rounded-full bg-[#3EE6A8]"
                                                    />
                                                    {repo.language}
                                                </span>
                                                <span aria-hidden="true" className="text-[#71877F]">·</span>
                                            </>
                                        )}
                                        <span>★ {repo.stars ?? 0}</span>
                                        {updated && (
                                            <>
                                                <span aria-hidden="true" className="text-[#71877F]">·</span>
                                                <span>updated {updated}</span>
                                            </>
                                        )}
                                    </p>
                                </a>
                            );
                        })
                    ) : (
                        <div className="rounded-xl border border-[#3EE6A8]/10 bg-[#0E211A] p-5 text-sm text-[#A3B8AF] sm:col-span-2 lg:col-span-3">
                            Couldn&apos;t load repositories. Visit my GitHub profile to see my projects.
                        </div>
                    )}
                </div>
 
                {/* Profile link */}
                <a
                    href={PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#3EE6A8]/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#3EE6A8] hover:text-[#3EE6A8]"
                >
                    View full GitHub profile →
                </a>
            </div>
 
            {/* Bottom wave + contact link */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1440 50"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                >
                    <path
                        d="M0 18 C180 42 310 0 490 8 S790 25 960 12 S1240 0 1440 15 L1440 50 L0 50 Z"
                        fill="#04130E"
                    />
                </svg>
 
                <div className="absolute inset-x-0 bottom-1.5 flex justify-center">
                    <a
                        href="#contact"
                        className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-[#3EE6A8]/30 bg-[#071811] px-3 py-1 font-mono text-[10px] text-[#3EE6A8] transition-colors hover:border-[#3EE6A8]"
                    >
                        ↓ 06 · Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
