import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Sparkles, TrendingUp } from "@/components/ui/icons";

const testimonials = [
  {
    quote:
      "The Model Context Protocol (MCP) integration with AWS Bedrock completely transformed how our teams query internal data. Being able to ask natural-language business questions grounded in verified data without hallucination is a massive game-changer.",
    clientRole: "VP of Engineering",
    industry: "Enterprise SaaS & BI",
    result: "Instant NL to SQL via MCP",
    badge: "Agentic AI",
  },
  {
    quote:
      "The peer-relative ML scoring pipeline across 6 advertising networks unlocked explainable prediction models for our creative teams. We cut our cost-per-acquisition by 28% and automated our ad spend optimization.",
    clientRole: "Head of Growth & Analytics",
    industry: "AdTech & Performance Marketing",
    result: "-28% CPA & Real-time Scoring",
    badge: "Predictive ML",
  },
  {
    quote:
      "The churn prediction and tender win-rate models achieved 92% accuracy on historical validation and helped our commercial team lift gross margins by 18% on accepted bids. Deployed seamlessly on AWS SageMaker.",
    clientRole: "Director of Commercial Operations",
    industry: "Healthcare & Life Sciences",
    result: "+18% Margin Lift & 92% Accuracy",
    badge: "MLOps & SageMaker",
  },
  {
    quote:
      "Shipped our Flutter platform to both Google Play and App Store on schedule with zero drama. Clean code architecture, payment processing, and responsive communication throughout every sprint.",
    clientRole: "Co-Founder & Product Lead",
    industry: "Consumer Mobile & Community",
    result: "15k+ Users across iOS & Android",
    badge: "Mobile Architecture",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Proven Track Record"
      title="Measurable Client Outcomes & Stakeholder Trust"
      description="Real results delivered across enterprise AI agents, predictive ML pipelines, and production mobile products."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 transition hover:border-blue-500/40 shadow-sm dark:shadow-md"
          >
            <div>
              {/* Top Row: Badge & Result Pill */}
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 px-2.5 py-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  {t.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <TrendingUp className="h-3 w-3" />
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Client Role & Industry */}
            <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-4">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.clientRole}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.industry}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
