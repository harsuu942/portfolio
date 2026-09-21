import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const faqs = [
  {
    q: "Who owns the intellectual property, fine-tuned model weights, and source code?",
    a: "You own 100% of all intellectual property, source code, data pipelines, and custom model weights. Everything is built directly inside your private repositories and cloud accounts under a strict mutual NDA.",
  },
  {
    q: "How do you protect data privacy and ensure zero model leaks?",
    a: "We deploy private open-source models (LLaMA 3, Mistral) on dedicated virtual private cloud (VPC) instances on AWS SageMaker or vLLM with zero data retention. Your proprietary enterprise data is never shared with third-party model trainers.",
  },
  {
    q: "How do you eliminate AI hallucinations in production RAG pipelines?",
    a: "We move past basic semantic chunking. We use ColBERT late-interaction re-ranking, Milvus binary quantization, and RAG Fusion with strict confidence-banding and honesty reason tags. Every response is verified using the RAGAS evaluation framework for faithfulness and context recall.",
  },
  {
    q: "Can you integrate with our existing data stack (Airflow, Snowflake, AWS)?",
    a: "Yes. We have extensive experience managing 100+ production Airflow DAGs, AWS Bedrock AgentCore, Athena, Glue, and Amazon DataZone, bridging modern Model Context Protocol (MCP) tooling into legacy enterprise databases.",
  },
  {
    q: "What engagement models do you offer for new client projects?",
    a: "We offer two primary options: (1) Fixed-Scope Sprints (2–4 weeks) to deliver a working proof-of-concept, evaluation report, and technical prototype; and (2) Dedicated Retainers for full-lifecycle architecture, MLOps, and production mobile engineering.",
  },
  {
    q: "Do you also build the front-end user experience and mobile apps for the AI?",
    a: "Yes. Unlike pure ML consultancies that leave you with raw Python scripts, we deliver complete end-to-end products: from backend models and MCP servers to cross-platform Flutter/iOS/Android mobile apps and responsive web interfaces.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="Frequently Asked Questions"
      title="Client Inquiries & Enterprise Standards"
      description="Clear answers regarding IP ownership, enterprise data security, model accuracy, and engagement models."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq, idx) => (
          <Card
            key={idx}
            className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 transition hover:border-blue-500/40 shadow-sm dark:shadow-md"
          >
            <h3 className="text-sm font-bold text-slate-900 dark:text-white md:text-base font-syne">
              {faq.q}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 md:text-sm font-light">
              {faq.a}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
