import React from 'react'
import Navbar from '../layout/Navbar'
import { portfolio } from '@/data/content'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/* ---------- Theme tokens (change colours here only) ---------- */
const DARK = '#04130E'   // sections 1, 3, 5 + footer
const LIGHT = '#0A1A14'  // sections 2, 4
const ACCENT = '#3EE6A8'

const GITHUB_URL = 'https://github.com/Code-sHere'
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-linkedin-id' // <- put your real LinkedIn URL

/* ---------- Reusable wave divider ----------
   from = background of the section ABOVE
   to   = background of the section BELOW  */
const WaveDivider = ({ from, to, href, label }) => (
  <div className="relative h-14 w-full overflow-hidden sm:h-16" style={{ backgroundColor: from }}>
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 34 C 160 8, 320 8, 520 22 S 900 44, 1100 26 S 1360 12, 1440 24 L1440 64 L0 64 Z"
        fill={to}
      />
    </svg>

    <a
      href={href}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#3EE6A8]/40 px-3 py-1 font-mono text-[10px] text-[#3EE6A8] transition-colors hover:bg-[#3EE6A8] hover:text-black"
      style={{ backgroundColor: DARK }}
    >
      ↓ {label}
    </a>
  </div>
)


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


const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)

/* ---------- Footer ---------- */
const Footer = () => (
  <footer
    className="border-t border-[#3EE6A8]/10 px-5 py-8 sm:px-8 lg:px-10"
    style={{ backgroundColor: DARK }}
  >
    <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
      {/* logo + name */}
      <a href="/" className="flex items-center gap-3" aria-label="Vansh Jaat – Home">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#3EE6A8]/30 bg-[#3EE6A8]/10 font-mono text-sm font-bold text-[#3EE6A8]">
          VJ
        </span>
        <span className="font-extrabold tracking-tight text-white">Vansh Jaat</span>
      </a>

      {/* copyright */}
      <p className="order-last font-mono text-xs text-[#6a9082] sm:order-none">
        © 2026 Vansh Jaat. All rights reserved.
      </p>

      {/* socials */}
      <div className="flex items-center gap-3">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3EE6A8]/20 text-[#9bbaaf] transition-colors hover:border-[#3EE6A8] hover:bg-[#3EE6A8] hover:text-black"
        >
          <GithubIcon />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3EE6A8]/20 text-[#9bbaaf] transition-colors hover:border-[#3EE6A8] hover:bg-[#3EE6A8] hover:text-black"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  </footer>
)

const sectionBase =
  'relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24'

const About = () => {
  return (
    <>
      <Navbar />

      {/* ---------- Story ---------- */}
      <section id="about" className={`${sectionBase} bg-[#04130E]`}>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mt-5">
          Story so far.
        </h1>
        <p className="mb-10 mt-3 font-mono text-sm tracking-tight text-[#6a9082] sm:text-balance">
          A fresher full-stack developer who learns by building complete products.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-5 md:order-1">
            <p className="font-mono text-balance leading-7 text-[#e5efeb]">
              {portfolio.about.description}
            </p>
            <p className="font-mono text-balance leading-7 text-[#c1dfd3]">
              {portfolio.about.secondParagraph}
            </p>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit rounded-full bg-[#3EE6A8] px-4 py-2 text-balance font-semibold text-black transition-colors hover:bg-[#3EE6A8]/70"
            >
              See my projects
            </a>
          </div>

          <div className="flex flex-col gap-5 md:order-2">
            <div className="flex w-full justify-center">
              <img
                src="/images/pic.png"
                alt="Profile"
                className="h-48 w-48 rotate-270 rounded-full object-cover object-center sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from={DARK} to={LIGHT} href="#work" label="How I work" />

      {/* ---------- How I work ---------- */}
      <section id="work" className={`${sectionBase} bg-[#0A1A14]`}>
        <SectionHeading number="01">How I work</SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {portfolio.about.workingStyle.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#3EE6A8]/10 bg-[#3EE6A8]/5 p-5"
            >
              <span className="mb-3 block font-mono text-sm text-[#3EE6A8]">{item.title}</span>
              <p className="font-medium text-[#9bbaaf]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider from={LIGHT} to={DARK} href="#journey" label="Journey" />

      {/* ---------- Journey ---------- */}
      <section id="journey" className={`${sectionBase} bg-[#04130E]`}>
        <SectionHeading number="02">Journey</SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-6 rounded-xl border-l-2 border-[#3EE6A8]/20 py-2">
            {portfolio.journey.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 px-5">
                <span className="w-fit border-b-2 border-[#3EE6A8]/20 text-xs font-semibold text-[#3EE6A8]">
                  {item.status}
                </span>
                <span className="font-mono text-sm text-[#3EE6A8]">{item.title}</span>
                <p className="font-medium text-[#9bbaaf]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from={DARK} to={LIGHT} href="#goals" label="Goals" />

      {/* ---------- Goals ---------- */}
      <section id="goals" className={`${sectionBase} bg-[#0A1A14]`}>
        <SectionHeading number="03">Where I am heading.</SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-4 rounded-3xl border border-[#3EE6A8]/10 bg-[#3EE6A8]/5 px-5 py-6 md:pr-8">
            <span className="w-fit border-b-2 border-[#3EE6A8]/20 text-sm font-semibold text-[#3EE6A8]">
              CURRENT GOAL
            </span>
            <h3 className="font-mono text-balance text-white">{portfolio.goals.current.title}</h3>
            <p className="font-medium text-[#9bbaaf]">{portfolio.goals.current.description}</p>
          </div>

          <div className="flex min-w-0 flex-col gap-4 rounded-3xl border border-[#3EE6A8]/10 bg-[#3EE6A8]/5 px-5 py-6 md:pr-8">
            <span className="w-fit border-b-2 border-[#3EE6A8]/20 text-sm font-semibold text-[#3EE6A8]">
              LONG TERM
            </span>
            <h3 className="font-mono text-balance text-white">{portfolio.goals.longTerm.title}</h3>
            <p className="font-medium text-[#9bbaaf]">{portfolio.goals.longTerm.description}</p>
          </div>
        </div>
      </section>

      <WaveDivider from={LIGHT} to={DARK} href="#end" label="The End" />

      {/* ---------- The End ---------- */}
      <section id="end" className={`${sectionBase} bg-[#04130E]`}>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
          Keep exploring. <span className="text-[#3EE6A8]">See you in the repo.</span>
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/skills"
            className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8] bg-[#3EE6A8] px-4 py-2 font-medium text-black transition-colors hover:bg-transparent hover:text-[#3EE6A8]"
          >
            Next: Skills <ArrowRight size={16} />
          </a>
          <a
            href="/"
            className="inline-flex w-fit items-center gap-1 rounded-full border border-[#3EE6A8]/30 px-4 py-2 font-medium text-white transition-colors hover:border-[#3EE6A8] hover:text-[#3EE6A8]"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About