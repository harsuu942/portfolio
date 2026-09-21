"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { ArrowRight, Bot, Cpu, Database, Globe, ShoppingBag, Smartphone, TrendingUp } from "@/components/ui/icons";

interface ProjectItem {
  id: string;
  category: "ai" | "mobile" | "web" | "ecommerce";
  categoryLabel: string;
  badgeBg: string;
  icon: string;
  title: string;
  desc: string;
  metrics?: string;
  tags: string[];
}

const allProjects: ProjectItem[] = [
  // AI Projects (Blue)
  {
    id: "agentic-bi",
    category: "ai",
    categoryLabel: "Agentic AI · MCP",
    badgeBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    icon: "🤖",
    title: "Enterprise Agentic BI Platform",
    desc: "Architected a semantic retrieval and agentic BI platform on AWS Bedrock AgentCore and Amazon DataZone, allowing enterprise teams to run natural-language business queries grounded in verified data catalogs via Model Context Protocol (MCP).",
    metrics: "Instant NL to SQL queries",
    tags: ["Model Context Protocol", "AWS Bedrock", "DataZone", "Python", "FastAPI"],
  },
  {
    id: "regulatory-rag",
    category: "ai",
    categoryLabel: "Advanced RAG · ColBERT",
    badgeBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    icon: "🔍",
    title: "Multi-Jurisdiction Regulatory RAG System",
    desc: "High-precision RAG pipeline extracting state-, municipality-, and year-wise architectural norms and safety standards from multi-jurisdiction building-regulation PDFs. Integrated RAG fusion, binary quantization in Milvus, and ColBERT late-interaction re-ranking.",
    metrics: "10x Vector Memory Efficiency",
    tags: ["ColBERT", "Milvus", "RAGAS", "RAG Fusion", "Python"],
  },
  {
    id: "voice-recruiter",
    category: "ai",
    categoryLabel: "LLM Fine-Tuning",
    badgeBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    icon: "🧠",
    title: "Voice AI Candidate Screening Copilot",
    desc: "Domain-adapted Vicuna/Flan-T5 model for conversational interviews. Features dynamic question generation, salary extraction, and one-line automated summarization, reducing interview call duration and review cost by 80%.",
    metrics: "80% Call Cost Reduction",
    tags: ["Vicuna / LLaMA", "Flan-T5", "vLLM", "Speech AI", "Flutter"],
  },
  {
    id: "ad-intelligence",
    category: "ai",
    categoryLabel: "Machine Learning · AdTech",
    badgeBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    icon: "📈",
    title: "Ad-Intelligence Performance Scoring Engine",
    desc: "3-Score ML system (Attention, Outcome, Alpha) predicting per-ad performance using peer-relative labeling (CTR, CVR, ROAS benchmarked across same-platform cohorts) across 6 advertising networks with confidence bands.",
    metrics: "6 Ad Networks Benchmarked",
    tags: ["Python", "SVD Embeddings", "XGBoost", "AWS SageMaker"],
  },

  // Mobile Projects (Indigo)
  {
    id: "gymfans",
    category: "mobile",
    categoryLabel: "Flutter · Social & Video",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60",
    icon: "🏋️",
    title: "Gymfans / GymCommunity",
    desc: "Production fitness social platform connecting certified instructors and students. Features live workout streaming via Agora SDK, short video reels feed, in-app payments, and real-time chat via WebSockets.",
    metrics: "15k+ Users on App Store & Play Store",
    tags: ["Flutter", "Agora SDK", "WebSockets", "Stripe Payments"],
  },
  {
    id: "explore-pay",
    category: "mobile",
    categoryLabel: "Flutter · FinTech",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60",
    icon: "💳",
    title: "Explore Pay",
    desc: "QR-based contactless payment application for merchants and consumers. Features biometric app lock after 30s inactivity, encrypted local transaction database, and real-time payment webhook verification.",
    metrics: "Secure Biometric Financial Flow",
    tags: ["Flutter", "Firebase", "Biometrics", "QR Payments"],
  },
  {
    id: "checkhub",
    category: "mobile",
    categoryLabel: "Flutter · Enterprise",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60",
    icon: "🔧",
    title: "Checkhub Field Ticket Management",
    desc: "Offline-first field ticket and maintenance tracking app for industrial mechanical teams. Features SQLite migrations, OAuth authentication, geolocation task assignment, and Quickblox audio/video calling.",
    metrics: "100% Offline-First Synchronization",
    tags: ["Flutter", "SQLite", "Quickblox", "Geolocation"],
  },
  {
    id: "cursinn",
    category: "mobile",
    categoryLabel: "Android Native · Health",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60",
    icon: "❤️",
    title: "CurSinn MyHealth (STS)",
    desc: "Healthcare monitoring app syncing with Beurer BLE medical devices for blood pressure, ECG, and pulse oximetry. Implemented in MVVM architecture with cipher-encrypted local database and emergency clinician alerts.",
    metrics: "BLE Device Data Synchronization",
    tags: ["Android Kotlin", "MVVM", "BLE", "SQLCipher"],
  },

  // Web Platforms & SaaS (Sky)
  {
    id: "saas-dashboard",
    category: "web",
    categoryLabel: "Web Platform · SaaS",
    badgeBg: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60",
    icon: "🌐",
    title: "Axiom Enterprise Cloud Analytics Portal",
    desc: "Responsive web management dashboard built with Next.js and TypeScript. Features granular role-based permissions, real-time KPI data visualizations, automated report exporting, and webhook integrations.",
    metrics: "Sub-second Page Load & SSR",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    id: "sports-booking-web",
    category: "web",
    categoryLabel: "Web Application · Sports",
    badgeBg: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60",
    icon: "🏸",
    title: "Court Booking & League Management Platform",
    desc: "Full-stack sports venue booking portal with automated calendar scheduling, player matching algorithms, split-bill payment checkout, and admin facility manager portals.",
    metrics: "Multi-Venue Live Scheduling",
    tags: ["Next.js", "Laravel API", "PostgreSQL", "Stripe Connect"],
  },
  {
    id: "liivra-realestate",
    category: "web",
    categoryLabel: "Web Portal · Real Estate",
    badgeBg: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60",
    icon: "🏠",
    title: "Liivra Real Estate & Property Portal",
    desc: "High-performance property discovery portal with interactive map filtering, virtual property tour embeds, scheduled viewing calendar, and agent CRM lead routing.",
    metrics: "Interactive Geo-Search & Filters",
    tags: ["React", "Firebase", "Cloud Functions", "Google Maps API"],
  },

  // eCommerce Platforms (Violet)
  {
    id: "shopify-plus-store",
    category: "ecommerce",
    categoryLabel: "eCommerce · Shopify Plus",
    badgeBg: "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60",
    icon: "🛍️",
    title: "D2C Luxury Lifestyle & Apparel Storefront",
    desc: "High-converting custom Shopify Plus storefront designed for international retail. Features dynamic currency conversion, bespoke product configurator, 1-click upsells, and sub-second page performance.",
    metrics: "98/100 Mobile Lighthouse Score",
    tags: ["Shopify Plus", "Liquid", "Tailwind CSS", "Custom Apps", "Klarna"],
  },
  {
    id: "b2b-wholesale-portal",
    category: "ecommerce",
    categoryLabel: "eCommerce · Headless B2B",
    badgeBg: "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60",
    icon: "📦",
    title: "Headless B2B Wholesale Ordering Platform",
    desc: "Bespoke wholesale eCommerce portal with tier-based volume pricing, automated net-30 invoicing, ERP inventory synchronization, and custom checkout flows built using Next.js on top of Shopify APIs.",
    metrics: "Tiered Volume Pricing & ERP Sync",
    tags: ["Headless Shopify", "Next.js", "GraphQL", "Stripe B2B"],
  },
  {
    id: "magical-recharge",
    category: "ecommerce",
    categoryLabel: "eCommerce · Utility & Wallet",
    badgeBg: "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60",
    icon: "📡",
    title: "MagicalRecharge Commission & Payment Gateway",
    desc: "Utility top-up and eCommerce subscription platform with automated referral commission payouts, Cashfree payment gateway integration, and Branch.io deep-link tracking.",
    metrics: "100k+ Transactions Processed",
    tags: ["Flutter & Web", "Cashfree", "Branch.io", "Payment Gateway"],
  },
];

type CategoryFilter = "all" | "ai" | "mobile" | "web" | "ecommerce";

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work &amp; Case Studies"
      title="Featured Platforms &amp; Client Deliverables"
      description="Explore production systems spanning Agentic AI &amp; RAG pipelines, scalable mobile apps, modern SaaS web platforms, and custom eCommerce storefronts."
    >
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {[
          { id: "all", label: "All Projects" },
          { id: "ai", label: "🤖 Agentic AI & RAG" },
          { id: "mobile", label: "📱 Mobile Apps" },
          { id: "web", label: "🌐 Web & SaaS" },
          { id: "ecommerce", label: "🛍️ eCommerce & Shopify" },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as CategoryFilter)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Animated Card Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-7 shadow-sm dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-950/20"
          >
            <div>
              {/* Header: Icon & Category Label */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-lg shadow-inner">
                    {p.icon}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${p.badgeBg}`}>
                    {p.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-syne text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {p.title}
              </h3>

              {/* Metric Pill if present */}
              {p.metrics && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{p.metrics}</span>
                </div>
              )}

              {/* Description */}
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition group-hover:border-blue-400/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* High-Converting Bottom Banner */}
      <div className="mt-14 rounded-3xl border border-blue-200/80 dark:border-slate-800 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 dark:from-slate-900/90 dark:to-slate-950 p-8 text-center shadow-lg dark:shadow-2xl backdrop-blur-xl md:p-10">
        <h3 className="font-syne text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          Have a High-Stakes AI, Mobile, Web, or eCommerce Project?
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed md:text-sm font-light">
          Let&rsquo;s connect on a free 30-minute technical discovery call. We&rsquo;ll review your data readiness, recommend architectures, and outline a delivery roadmap.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-7 py-3.5 text-xs font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5"
          >
            <span>Book Free 30-Min Architecture Call</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://wa.me/919313838165"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3.5 text-xs font-semibold text-slate-800 dark:text-white transition hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm"
          >
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
