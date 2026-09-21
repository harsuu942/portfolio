import Section from "@/components/ui/Section";
import { CheckCircle2, Github, Linkedin, Lock, Mail, Phone, ShieldCheck, Zap } from "@/components/ui/icons";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Architect &amp; Squad"
      title="Engineering Production AI, Mobile &amp; Web Systems"
      description="A product-minded engineering squad bridging cutting-edge AI research with battle-tested mobile, web, and eCommerce execution."
    >
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 md:p-10 shadow-xl backdrop-blur-xl">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600" />

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-live-pulse" />
              Full-Lifecycle Delivery
            </div>

            <h3 className="mt-4 font-syne text-2xl font-bold text-slate-900 dark:text-white md:text-3xl leading-snug">
              We help ambitious startups and enterprises turn complex requirements into market-leading digital products.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-light">
              I&rsquo;m <b className="font-semibold text-slate-900 dark:text-white">Harsh Shah</b> — an AI Solutions Architect and Full-Stack Engineering Lead. Alongside my specialized machine learning and full-stack engineering team, we design, build, and deploy production software without the fluff or junior outsourcing.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-light">
              Whether you are architecting an autonomous multi-agent tool-calling system via the <b className="text-slate-900 dark:text-white font-medium">Model Context Protocol (MCP)</b>, deploying a zero-hallucination <b className="text-slate-900 dark:text-white font-medium">ColBERT RAG</b> pipeline over enterprise PDFs, scaling a high-concurrency <b className="text-slate-900 dark:text-white font-medium">Flutter/Android mobile app</b>, or launching a high-converting <b className="text-slate-900 dark:text-white font-medium">Shopify Plus / Next.js web platform</b>, we deliver in rapid 2–4 week sprints.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
              >
                Book Technical Feasibility Call →
              </a>
              <a
                href="https://wa.me/919313838165"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/80 px-5 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200 transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp Direct
              </a>
            </div>

            {/* Direct contact row */}
            <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-3">
                <a className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium" href="mailto:harsh942.mi@gmail.com">
                  harsh942.mi@gmail.com
                </a>
                <span>•</span>
                <a className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium" href="tel:+919313838165">
                  +91 93138 38165
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  className="hover:text-slate-900 dark:hover:text-white transition font-medium"
                  href="https://github.com/harsuu942"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  className="hover:text-slate-900 dark:hover:text-white transition font-medium"
                  href="https://www.linkedin.com/in/harsh-shah-16001b99"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pillars & Enterprise Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-7 shadow-xl backdrop-blur-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-syne">
              Core Deliverables
            </div>

            <ul className="mt-4 space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
              <DeliverableRow
                icon="🤖"
                title="Agentic AI & MCP Systems"
                sub="AWS Bedrock AgentCore, Tool-Calling, Natural Language BI"
              />
              <DeliverableRow
                icon="📱"
                title="Cross-Platform Mobile Apps"
                sub="Flutter, Android (Kotlin/Java), iOS Swift, Clean Architecture"
              />
              <DeliverableRow
                icon="🌐"
                title="SaaS Web Platforms & Dashboards"
                sub="Next.js App Router, TypeScript, Real-Time Analytics & APIs"
              />
              <DeliverableRow
                icon="🛍️"
                title="Shopify Plus & eCommerce"
                sub="Custom Storefronts, Headless Commerce, Custom Shopify Apps"
              />
              <DeliverableRow
                icon="🔍"
                title="Production RAG & Vector DBs"
                sub="ColBERT Late-Interaction, Milvus Binary Quantization, RAGAS"
              />
              <DeliverableRow
                icon="⚙️"
                title="Enterprise MLOps & Pipelines"
                sub="100+ Apache Airflow DAGs, AWS SageMaker Real-Time Serving"
              />
            </ul>
          </div>

          {/* Enterprise Guarantees Card */}
          <div className="rounded-3xl border border-blue-200/80 dark:border-slate-800 bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900/90 dark:to-slate-950 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white font-syne">
              <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Enterprise Standards &amp; Client Protection</span>
            </div>

            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span><b className="text-slate-900 dark:text-white">100% IP &amp; Weights Ownership:</b> All code and models belong to you.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span><b className="text-slate-900 dark:text-white">Strict Mutual NDA:</b> Zero data leakage to public third-party models.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span><b className="text-slate-900 dark:text-white">Rapid 2–4 Week Sprints:</b> Working prototypes evaluated on real data.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DeliverableRow({
  icon,
  title,
  sub,
}: {
  icon: string;
  title: string;
  sub: string;
}) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 p-3 transition hover:border-blue-500/30">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/80 text-sm">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-slate-900 dark:text-white font-syne text-xs">{title}</div>
        <div className="text-slate-500 dark:text-slate-400 font-light text-[11px] mt-0.5">{sub}</div>
      </div>
    </li>
  );
}
