"use client";

import React, { useState } from "react";
import { portfolio } from "@/data/content";

const fieldClass =
    "w-full rounded-xl border border-[#3EE6A8]/15 bg-[#071410] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#71877F] focus:border-[#3EE6A8]/60";

const labelClass = "mb-1.5 block text-xs text-[#A3B8AF]";

const Contact = () => {
    const { title, email, github, linkedin } = portfolio.contact;
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    // No backend needed: opens the visitor's mail app with the message filled in.
    // Swap this for a fetch() to your own API / Formspree / EmailJS if you prefer.
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = form.subject || `Message from ${form.name}`;
        const body = `${form.message}\n\n— ${form.name} (${form.email})`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    const githubHref = github?.startsWith("http") ? github : `https://${github}`;

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#04130E] px-5 pb-28 pt-16 text-[#D7EDE5] sm:px-8 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
                    {/* Left: heading + links */}
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-[#3EE6A8]">06</span>

                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {title}
                        </h2>

                        <a
                            href={`mailto:${email}`}
                            className="w-fit text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
                        >
                            {email}
                        </a>
                        <a
                            href={githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
                        >
                            {github}
                        </a>
                        {linkedin && (
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit text-sm text-[#A3B8AF] transition-colors hover:text-[#3EE6A8]"
                            >
                                {linkedin.replace(/^https?:\/\/(www\.)?/, "")}
                            </a>
                        )}
                    </div>

                    {/* Right: form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-[#3EE6A8]/10 bg-[#0E211A] p-5 sm:p-6"
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className={labelClass}>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                value={form.name}
                                onChange={update}
                                className={fieldClass}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className={labelClass}>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={form.email}
                                onChange={update}
                                className={fieldClass}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className={labelClass}>Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={update}
                                className={fieldClass}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className={labelClass}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={form.message}
                                onChange={update}
                                className={`${fieldClass} resize-y`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#3EE6A8] px-5 py-3 text-sm font-bold text-[#04130E] transition-colors hover:bg-[#6CF0BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A0FFD9]"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom wave + "The end" pill */}
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