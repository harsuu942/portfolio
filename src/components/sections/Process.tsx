import Section from "@/components/ui/Section";
import { CheckCircle2 } from "@/components/ui/icons";

const steps = [
  {
    step: "01",
    title: "Discovery & AI Feasibility Assessment",
    timeline: "Week 1",
    desc: "We audit your data assets, define concrete evaluation metrics (accuracy, latency, token budgets), and validate feasibility before writing code to prevent wasted spend.",
    deliverable: "Architecture Spec & Feasibility Document",
  },
  {
    step: "02",
    title: "System Architecture & Schema Design",
    timeline: "Weeks 1–2",
    desc: "Design the complete pipeline: Model Context Protocol (MCP) server schemas, vector database topologies, mobile UI component systems, and AWS cloud infra.",
    deliverable: "API Contracts, MCP Schemas & UI Wireframes",
  },
  {
    step: "03",
    title: "Rapid Prototype & Benchmark Sprint",
    timeline: "Weeks 2–4",
    desc: "Deliver a working end-to-end prototype. We benchmark RAG accuracy with RAGAS, run fine-tuning trials, and provide an interactive test UI for your team.",
    deliverable: "Working Sandbox & Benchmark Reports",
  },
  {
    step: "04",
    title: "Production Hardening & Enterprise MLOps",
    timeline: "Weeks 4–6",
    desc: "Implement guardrails, fallback routing, Airflow ETL DAGs, AWS SageMaker / vLLM endpoints, and strict privacy controls with automated unit & regression tests.",
    deliverable: "CI/CD Pipelines, Guardrails & Production Infra",
  },
  {
    step: "05",
    title: "Deployment, Observability & Scaling",
    timeline: "Ongoing",
    desc: "Production release on AWS / Mobile App Stores with real-time drift monitoring, latency alerts, and SLA guarantees for ongoing maintenance.",
    deliverable: "Production Deployment & Monitoring Dashboards",
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="Delivery Framework"
      title="How We Deliver: From Concept to Production"
      description="A structured, predictable 5-step engineering process designed to eliminate risks, minimize token costs, and guarantee tangible results."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-7 shadow-sm dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-blue-950/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-syne text-2xl font-black text-blue-600 dark:text-blue-400">
                  {s.step}
                </span>
                <span className="rounded-full border border-slate-200/80 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {s.timeline}
                </span>
              </div>

              <h3 className="mt-4 font-syne text-base font-bold text-slate-900 dark:text-white">
                {s.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                {s.desc}
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 dark:border-slate-800 pt-3">
              <div className="flex items-center gap-1.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Deliverable: {s.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
