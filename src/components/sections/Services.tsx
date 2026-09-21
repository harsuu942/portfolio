import { ArrowRight, Bot, Cpu, Database, Globe, ShoppingBag, Smartphone, TrendingUp, Workflow, Zap } from "@/components/ui/icons";

interface ServiceBlock {
  num: string;
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  desc: string;
  tagsLabel: string;
  tags: string[];
}

const serviceBlocks: ServiceBlock[] = [
  {
    num: "01",
    badge: "Enterprise AI",
    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
    icon: "🤖",
    title: "Agentic AI & Model Context Protocol (MCP)",
    desc: "Autonomous multi-agent orchestration, tool-calling agents with AWS Bedrock AgentCore, and natural-language BI queries grounded in enterprise data catalogs via MCP.",
    tagsLabel: "Offerings",
    tags: [
      "Model Context Protocol",
      "AWS Bedrock AgentCore",
      "Amazon DataZone",
      "Autonomous Tool Calling",
      "NL to SQL/BI Queries",
      "Reason Codes & Guardrails",
    ],
  },
  {
    num: "02",
    badge: "High-Scale Mobile",
    badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60",
    icon: "📱",
    title: "Mobile App Engineering (Flutter / iOS / Android)",
    desc: "Cross-platform mobile applications with clean architecture, offline-first data sync, real-time push notifications, payment processing, and embedded AI voice features.",
    tagsLabel: "Mobile Stack",
    tags: [
      "Flutter & Dart",
      "Android Native (Kotlin/Java)",
      "iOS Swift",
      "Firebase / AWS Backends",
      "Stripe In-App Purchases",
      "Agora Audio/Video",
      "App Store & Play Store CI/CD",
    ],
  },
  {
    num: "03",
    badge: "Modern Web & SaaS",
    badgeColor: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60",
    icon: "🌐",
    title: "Web Platforms, SaaS & Cloud Dashboards",
    desc: "Fast, responsive web applications and enterprise portals built with Next.js, React, and robust API layers. Designed for sub-second load times and intuitive user journeys.",
    tagsLabel: "Web Solutions",
    tags: [
      "Next.js (App Router)",
      "React.js & TypeScript",
      "SaaS Admin Dashboards",
      "Role-Based Access Control",
      "Interactive Analytics UI",
      "REST & GraphQL Microservices",
      "Real-Time WebSockets",
    ],
  },
  {
    num: "04",
    badge: "High-Converting D2C",
    badgeColor: "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/60",
    icon: "🛍️",
    title: "eCommerce Platforms & Shopify Solutions",
    desc: "Turn clicks into buyers. Custom Shopify Plus storefronts, headless eCommerce architectures, bespoke Shopify Apps, payment gateway integrations, and speed optimization.",
    tagsLabel: "eCommerce Stack",
    tags: [
      "Shopify Store Development",
      "Shopify Plus & Liquid",
      "Custom Shopify Apps",
      "Headless Commerce (Next.js)",
      "Checkout & Cart Optimization",
      "Payment Gateways (Stripe/PayPal)",
      "Catalog & Store Migration",
    ],
  },
  {
    num: "05",
    badge: "High Precision",
    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
    icon: "🔍",
    title: "Production RAG & Vector Search Architectures",
    desc: "High-precision semantic retrieval over complex regulatory PDFs, medical documents, and enterprise data with ColBERT late-interaction re-ranking and Milvus binary quantization.",
    tagsLabel: "RAG Stack",
    tags: [
      "ColBERT Re-Ranking",
      "Milvus Vector DB",
      "Binary Quantization",
      "RAG Fusion",
      "RAGAS Benchmark Eval",
      "Zero-Hallucination Retrieval",
    ],
  },
  {
    num: "06",
    badge: "Cost-Optimized",
    badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60",
    icon: "🧠",
    title: "Custom LLM Fine-Tuning & vLLM Serving",
    desc: "Domain adaptation of open-source models (LLaMA 3, Vicuna, Flan-T5) on your private data. Replace costly third-party API calls with high-throughput private GPU serving.",
    tagsLabel: "Model Serving",
    tags: [
      "LLaMA 3 / Mistral Tuning",
      "Custom Tokenizer Augmentation",
      "vLLM & FastChat Serving",
      "STT/TTS Voice AI Pipelines",
      "Conversational Evaluators",
      "GPU Resource Optimization",
    ],
  },
  {
    num: "07",
    badge: "Data-Driven ROI",
    badgeColor: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60",
    icon: "📈",
    title: "Predictive Analytics & Ad-Intelligence ML",
    desc: "Machine learning systems predicting per-ad performance (Attention, Outcome, Alpha scoring across 6 networks) and customer churn pipelines achieving 92% accuracy.",
    tagsLabel: "ML Capabilities",
    tags: [
      "3-Score Ad Performance ML",
      "Customer Churn Prediction (92%)",
      "Tender Win-Rate Forecasting",
      "SVD Text Embeddings",
      "Pricing Strategies (+18% Margin)",
      "XGBoost & Random Forest",
    ],
  },
  {
    num: "08",
    badge: "Enterprise Scale",
    badgeColor: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    icon: "⚙️",
    title: "Enterprise MLOps & Big Data Pipelines",
    desc: "Reliable ETL and model operations powered by 100+ production Airflow DAGs, AWS SageMaker endpoints, and automated conversation quality evaluators.",
    tagsLabel: "Data Infra",
    tags: [
      "Apache Airflow (100+ DAGs)",
      "AWS SageMaker Real-Time",
      "Docker & ECS Microservices",
      "Glue Crawlers & Athena",
      "Automated CI/CD Workflows",
      "Real-Time Data Discrepancy Checks",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Adaptive card container */}
        <div className="rounded-[32px] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-8 md:p-14 text-slate-900 dark:text-white shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
          {/* Subtle background glow accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl" />

          {/* Section Header */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-live-pulse" />
              Full-Lifecycle Engineering Services
            </div>

            <h2 className="mt-3 font-syne text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Solutions We Architect &amp; Ship
            </h2>

            <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              From enterprise Agentic AI systems and high-precision RAG to production mobile apps, SaaS web portals, and custom eCommerce storefronts.
            </p>
          </div>

          {/* Animated Card Grid */}
          <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2">
            {serviceBlocks.map((block) => (
              <div
                key={block.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500 text-xs font-bold font-syne text-white shadow-md">
                        {block.num}
                      </span>
                      <span className="text-2xl">{block.icon}</span>
                    </div>

                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${block.badgeColor}`}>
                      {block.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-syne text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {block.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {block.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {block.tagsLabel}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition group-hover:border-blue-400/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="relative z-10 mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-slate-50 dark:from-slate-950/80 dark:to-slate-900/80 p-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white font-syne">
                <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Need an end-to-end Web, Mobile, or AI Solution?</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                We manage the entire lifecycle: UI/UX design, cloud architecture, model training/fine-tuning, and App Store / production web rollout.
              </p>
            </div>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105 flex-shrink-0"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
