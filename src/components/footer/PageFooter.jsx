import React from 'react'

/* ---------- Theme tokens ---------- */
const DARK = '#04130E'

const GITHUB_URL = 'https://github.com/Code-sHere'
const LINKEDIN_URL = 'https://www.linkedin.com/in/vansh-5b02a2396/'

/* ---------- Icons ---------- */
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
const PageFooter = () => (
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

export default PageFooter