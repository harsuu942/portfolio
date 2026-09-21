import { ArrowRight, Bot, Cpu, Database, Globe, Phone, ShoppingBag, Smartphone, Sparkles } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Client Pitch & Value Proposition */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for New Projects &amp; Consulting</span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="mt-5 font-syne text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Turn Complex AI, Mobile &amp; Web Ideas Into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-400 dark:via-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
                High-Converting Products
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg font-light">
              Led by <b className="font-semibold text-slate-900 dark:text-white">Harsh Shah</b> (8+ years experience) alongside a specialized engineering squad. From <b className="font-semibold text-slate-900 dark:text-white">autonomous MCP AI agents</b> and <b className="font-semibold text-slate-900 dark:text-white">ColBERT RAG</b> to <b className="font-semibold text-slate-900 dark:text-white">Flutter mobile apps</b> and <b className="font-semibold text-slate-900 dark:text-white">Shopify Plus storefronts</b> — delivered in rapid 2–4 week sprints with 100% IP ownership.
            </p>

            {/* 4 Core Pillars Pills with Icons */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 text-slate-800 dark:text-slate-200 shadow-sm transition hover:border-blue-500/50">
                <Smartphone className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> Mobile (Flutter / Android)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 text-slate-800 dark:text-slate-200 shadow-sm transition hover:border-blue-500/50">
                <Bot className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> Agentic AI &amp; MCP
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 text-slate-800 dark:text-slate-200 shadow-sm transition hover:border-blue-500/50">
                <Globe className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" /> SaaS Web Platforms
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-3 py-1.5 text-slate-800 dark:text-slate-200 shadow-sm transition hover:border-blue-500/50">
                <ShoppingBag className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" /> Shopify Plus &amp; D2C
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                <span>Book Free 30-Min Architecture Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919313838165"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Value Guarantee Notice */}
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span> 30-min feasibility assessment &amp; token budget estimate • Zero sales pitch
            </div>

            {/* Proof Metrics Strip */}
            <div className="mt-9 grid grid-cols-2 gap-3.5 border-t border-slate-200 dark:border-slate-800/80 pt-6 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-3.5 shadow-sm">
                <div className="font-syne text-2xl font-extrabold text-slate-900 dark:text-white">8+ Yrs</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Engineering Lead</div>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-3.5 shadow-sm">
                <div className="font-syne text-2xl font-extrabold text-slate-900 dark:text-white">15+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Shipped Products</div>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-3.5 shadow-sm">
                <div className="font-syne text-2xl font-extrabold text-blue-600 dark:text-blue-400">92%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">ML Model Accuracy</div>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-3.5 shadow-sm">
                <div className="font-syne text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">80%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Cost Cut via vLLM</div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center py-4">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-sky-500/20 blur-xl pointer-events-none" />

              {/* Portrait Card Container */}
              <div className="relative z-10 overflow-hidden rounded-[26px] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-2 shadow-xl shadow-slate-200/50 dark:shadow-2xl backdrop-blur-2xl">
                {/* Profile Image */}
                <div className="relative h-[420px] sm:h-[460px] w-full overflow-hidden rounded-[20px] bg-slate-100 dark:bg-slate-950">
                  <img
                    src="/harsh_profile.jpg"
                    alt="Harsh Shah – Lead Mobile, AI, Web & eCommerce Solutions Architect"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Top-Left Floating Badge (Agentic AI & Web) */}
                <div className="absolute top-4 left-4 z-20 animate-float flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 px-3.5 py-1.5 shadow-lg backdrop-blur-xl">
                  <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs">
                    ⚡
                  </span>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white font-syne leading-none">
                      Agentic AI &amp; Web
                    </div>
                    <div className="text-[9px] text-blue-600 dark:text-blue-400 font-mono mt-0.5">MCP • Bedrock</div>
                  </div>
                </div>

                {/* Bottom Card Identity Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-3.5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-syne font-bold text-sm text-slate-900 dark:text-white">
                        Harsh Shah
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 font-light">
                        Lead Solutions Architect
                      </div>
                    </div>
                    <span className="rounded-full border border-emerald-300 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-live-pulse" />
                      Available Now
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                    <span>📍 Remote-Friendly Worldwide</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Avg Sprint: 2–3 Wks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
