import React from 'react'
import Navbar from '../layout/Navbar'
import PageFooter from '../footer/PageFooter'
import { portfolio } from '@/data/content'
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
        <Reveal />
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
        <Reveal />
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
        <Reveal />
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
        <Reveal />
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

      <PageFooter />
    </>
  )
}

export default About