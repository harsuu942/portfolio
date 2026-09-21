import Section from "@/components/ui/Section";

const skillCards = [
  {
    icon: "📱",
    title: "Mobile App Development",
    borderClass: "border-t-blue-600 dark:border-t-blue-500",
    tags: ["Flutter", "Android Native", "Kotlin", "Java", "Dart", "iOS Swift", "React Native", "Clean Architecture", "Offline Sync"],
  },
  {
    icon: "🤖",
    title: "Agentic AI & Machine Learning",
    borderClass: "border-t-indigo-600 dark:border-t-indigo-500",
    tags: [
      "Model Context Protocol (MCP)",
      "AWS Bedrock AgentCore",
      "ColBERT RAG Pipelines",
      "Milvus Binary Quantization",
      "LLM Fine-Tuning (LLaMA/Vicuna)",
      "vLLM & FastChat Serving",
      "RAGAS Benchmarks",
      "XGBoost & Random Forest",
    ],
  },
  {
    icon: "🌐",
    title: "Web Platforms & SaaS",
    borderClass: "border-t-sky-600 dark:border-t-sky-500",
    tags: [
      "Next.js (App Router)",
      "React.js & TypeScript",
      "Tailwind CSS",
      "SaaS Admin Dashboards",
      "Role-Based Access Control",
      "WebSockets & Real-Time APIs",
      "REST & GraphQL Microservices",
    ],
  },
  {
    icon: "🛍️",
    title: "eCommerce & Shopify Plus",
    borderClass: "border-t-violet-600 dark:border-t-violet-500",
    tags: [
      "Shopify Store Development",
      "Shopify Plus & Liquid",
      "Custom Shopify Apps",
      "Headless Commerce (Next.js)",
      "Stripe Payments & Klarna",
      "Checkout & Cart Optimization",
      "Catalog & Store Migration",
    ],
  },
  {
    icon: "⚡",
    title: "Backend & Cloud Services",
    borderClass: "border-t-blue-500 dark:border-t-blue-400",
    tags: ["Node.js", "FastAPI (Python)", "Java Spring Boot", "AWS Lambda", "Firebase Cloud Functions", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "⚙️",
    title: "MLOps & DevOps Pipelines",
    borderClass: "border-t-indigo-500 dark:border-t-indigo-400",
    tags: ["Apache Airflow (100+ DAGs)", "AWS SageMaker", "Docker Containers", "ECS / ECR", "GitHub Actions CI/CD", "Athena & Glue Crawlers"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technology Stack"
      title="Production-Grade Technologies &amp; Frameworks"
      description="A full-spectrum engineering toolkit — from cross-platform mobile apps and agentic AI systems to modern SaaS web platforms and high-converting eCommerce stores."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCards.map((c) => (
          <div
            key={c.title}
            className={`rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-7 shadow-sm dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-blue-950/20 border-t-[3px] ${c.borderClass}`}
          >
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="font-syne text-base font-bold text-slate-900 dark:text-white mb-4">
              {c.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:bg-slate-200/70 dark:hover:bg-slate-700/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
