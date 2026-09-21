"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/cn";
import { ArrowRight, Phone } from "./ui/icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Case Studies" },
  { id: "skills", label: "Tech Stack" },
  { id: "about", label: "About" },
  { id: "process", label: "Delivery" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 dark:border-slate-800 dark:bg-[#090d16]/90 backdrop-blur-2xl shadow-sm dark:shadow-xl dark:shadow-black/40 py-3.5 px-6 md:px-12"
          : "border-b border-transparent bg-transparent py-4 px-6 md:px-12"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-md shadow-blue-500/20">
            <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-white dark:bg-[#090d16] text-sm font-bold font-syne text-blue-600 dark:text-blue-400 transition group-hover:bg-transparent group-hover:text-white">
              HS
            </span>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne font-bold text-base tracking-tight text-slate-900 dark:text-white">
                Harsh Shah
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-live-pulse" title="Available for projects" />
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-light">
              Mobile, AI, Web &amp; eCommerce Architect
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons + Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <a
            href="https://wa.me/919313838165"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Book 30-Min Call</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#090d16]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col space-y-3.5">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md"
              >
                Book 30-Min Call
              </a>
              <a
                href="https://wa.me/919313838165"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
