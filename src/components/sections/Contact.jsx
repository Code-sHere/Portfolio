
"use client";

import React, { useState } from "react";
import { portfolio } from "@/data/content";

const fieldClass =
  "w-full rounded-xl border border-[#3EE6A8]/15 bg-[#071410] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#71877F] focus:border-[#3EE6A8]/60";

const labelClass = "mb-1.5 block text-xs text-[#A3B8AF]";

const Contact = () => {
  const { title, email, github, linkedin } = portfolio.contact;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const update = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/xeaedrnb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            _replyto: form.email,
            _subject:
              form.subject.trim() ||
              `Portfolio message from ${form.name}`,
            message: form.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const githubHref = github
    ? github.startsWith("http")
      ? github
      : `https://${github}`
    : "";

  const linkedinLabel = linkedin
    ? linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
    : "";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#04130E] px-5 pb-28 pt-16 text-[#D7EDE5] sm:px-8 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Left: heading and links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-[#3EE6A8]">
              06 /
            </span>

            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <a
              href={`mailto:${email}`}
              className="w-fit break-all text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
            >
              {email}
            </a>

            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit break-all text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
              >
                GitHub ↗
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit break-all text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
              >
                {linkedinLabel} ↗
              </a>
            )}

            <p className="mt-5 max-w-md text-sm leading-7 text-[#A3B8AF]">
              Have a project in mind, a question, or an opportunity?
              Send me a message and I&apos;ll get back to you.
            </p>
          </div>

          {/* Right: contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#3EE6A8]/10 bg-[#0E211A] p-5 sm:p-6"
          >
            <div className="mb-4">
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                value={form.name}
                onChange={update}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={254}
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact-subject" className={labelClass}>
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                maxLength={150}
                value={form.subject}
                onChange={update}
                placeholder="What is this about?"
                className={fieldClass}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                value={form.message}
                onChange={update}
                placeholder="Tell me about your idea..."
                className={`${fieldClass} resize-y`}
              />
            </div>

            {/* Submission feedback */}
            {status === "success" && (
              <p
                role="status"
                className="mb-4 rounded-lg border border-[#3EE6A8]/20 bg-[#3EE6A8]/5 p-3 text-sm text-[#3EE6A8]"
              >
                Message sent successfully! Thank you for reaching out.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="mb-4 rounded-lg border border-red-400/20 bg-red-400/5 p-3 text-sm text-red-300"
              >
                Unable to send your message. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[#3EE6A8] px-5 py-3 text-sm font-bold text-[#04130E] transition-colors hover:bg-[#6CF0BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A0FFD9] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <p className="mt-3 text-center text-xs text-[#71877F]">
              Your message will be sent directly to my inbox.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom wave and end marker */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0 18 C180 42 310 0 490 8 S790 25 960 12 S1240 0 1440 15 L1440 50 L0 50 Z"
            fill="#071811"
          />
        </svg>

        <div className="absolute inset-x-0 bottom-1.5 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3EE6A8]/30 bg-[#04130E] px-3 py-1 font-mono text-[10px] text-[#3EE6A8]">
            ↓ The end
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
