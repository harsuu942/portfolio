"use client";

import { useState } from "react";
import CalEmbed from "@/components/CalEmbed";
import { CheckCircle2, Mail, Phone, Sparkles } from "@/components/ui/icons";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentViaClient, setSentViaClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Agentic AI & MCP System",
    budget: "$5k–$15k",
    timeline: "1–2 months",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (accessKey && accessKey.trim() !== "") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Portfolio Scope Inquiry: ${formData.projectType} from ${formData.name}`,
            from_name: `${formData.name} (Portfolio Inquiry)`,
            name: formData.name,
            email: formData.email,
            project_type: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            replyto: formData.email,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setFormSent(true);
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.error("Web3Forms submission error:", err);
      }
    }

    // Direct Email Client Fallback to harsh942.mi@gmail.com
    const subject = encodeURIComponent(`Portfolio Scope Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\nI would like to discuss a project:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Core Focus: ${formData.projectType}\n` +
      `• Budget: ${formData.budget}\n` +
      `• Timeline: ${formData.timeline}\n\n` +
      `Project Summary:\n${formData.message}\n`
    );
    window.location.href = `mailto:harsh942.mi@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setSentViaClient(true);
    setIsSubmitting(false);
  }

  function handleWhatsAppSubmit() {
    const text =
      `🚀 *New Project Scope Inquiry*\n\n` +
      `👤 *Name:* ${formData.name || "Client"}\n` +
      `📧 *Work Email:* ${formData.email || "Not specified"}\n` +
      `🎯 *Core Focus:* ${formData.projectType}\n` +
      `💰 *Budget:* ${formData.budget}\n` +
      `⏱️ *Timeline:* ${formData.timeline}\n\n` +
      `📝 *Project Summary:*\n${formData.message || "Hi Harsh, I would like to discuss a project scope."}`;

    window.open(`https://wa.me/919313838165?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <>
      {/* ============ BOOK A CALL SECTION ============ */}
      <section id="book" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 dark:from-slate-900 dark:via-[#090d16] dark:to-blue-950/40 p-8 md:p-14 text-slate-900 dark:text-white shadow-xl dark:shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 dark:bg-indigo-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-100/70 dark:bg-blue-950/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Direct Calendar Access
                </div>
                <h2 className="mt-3 font-syne text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                  Book a Free 30-Min Architecture Call
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-light max-w-xl">
                  In 30 minutes, we&rsquo;ll review your project scope, assess data readiness for AI, recommend optimal stacks (local models vs APIs), and sketch out a 2–4 week delivery plan. Zero sales pitch.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://wa.me/919313838165"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 px-5 py-2.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 transition hover:bg-emerald-100 dark:hover:bg-emerald-900/50 shadow-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Prefer WhatsApp? Chat Instantly</span>
                </a>
              </div>
            </div>

            {/* Calendar Embed */}
            <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white p-2 shadow-xl">
              <CalEmbed />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      </div>

      {/* ============ CONTACT INQUIRY SECTION ============ */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 md:p-14 text-slate-900 dark:text-white grid gap-10 lg:grid-cols-2 items-start shadow-xl dark:shadow-2xl backdrop-blur-2xl">
            {/* Left Column: Scope Intake Form */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-syne">
                Project Scope Inquiry
              </div>
              <h2 className="mt-3 font-syne text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl leading-tight">
                Tell Us What You Want to Build
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Whether you have detailed technical specifications or just an early concept, share a few details and we&rsquo;ll respond with feasibility and next steps within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Core Focus</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-3 py-3 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
                    >
                      <option value="Agentic AI & MCP System">Agentic AI &amp; MCP</option>
                      <option value="Mobile App (Flutter/Android)">Mobile App (Flutter)</option>
                      <option value="Web Platform & SaaS">Web Platform &amp; SaaS</option>
                      <option value="Shopify Plus & eCommerce">Shopify &amp; eCommerce</option>
                      <option value="Production RAG Pipeline">ColBERT RAG Pipeline</option>
                      <option value="Predictive ML & Analytics">Predictive Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-3 py-3 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
                    >
                      <option value="< $5,000">&lt; $5,000</option>
                      <option value="$5,000–$15,000">$5,000–$15,000</option>
                      <option value="$15,000–$30,000">$15,000–$30,000</option>
                      <option value="$30,000+">$30,000+</option>
                      <option value="Retainer Model">Monthly Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-3 py-3 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
                    >
                      <option value="Immediate (1–2 weeks)">ASAP (1–2 wks)</option>
                      <option value="1–2 months">1–2 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Exploratory">Exploratory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">Project Summary &amp; Success Goals</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you're building, target users, any existing APIs or data assets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div className="space-y-2.5 pt-2">
                  {/* Primary WhatsApp Action */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 py-3.5 text-xs font-bold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Phone className="h-4 w-4 text-white" />
                    <span>Send Directly to WhatsApp (+91 93138 38165) →</span>
                  </button>

                  {/* Submit via Email */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-3 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Delivering to harsh942.mi@gmail.com...
                      </span>
                    ) : formSent ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Delivered to harsh942.mi@gmail.com
                      </span>
                    ) : (
                      <>
                        <Mail className="h-3.5 w-3.5" />
                        <span>Or Submit via Email (harsh942.mi@gmail.com)</span>
                      </>
                    )}
                  </button>
                </div>

                {formSent && (
                  <div className="rounded-xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-950/40 p-3.5 text-xs text-emerald-900 dark:text-emerald-200 animate-in fade-in duration-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Message delivered directly to harsh942.mi@gmail.com</p>
                        <p className="mt-1 text-[11px] text-emerald-800/80 dark:text-emerald-300/80">
                          {sentViaClient
                            ? "Your email client was opened with the inquiry details. If it did not open, you can also send directly via email or WhatsApp."
                            : "We review all technical requirements and respond with feasibility within 24 hours."}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                          <a
                            href="mailto:harsh942.mi@gmail.com"
                            className="inline-flex items-center gap-1 font-semibold underline hover:text-emerald-950 dark:hover:text-white"
                          >
                            <Mail className="h-3 w-3" /> Email harsh942.mi@gmail.com
                          </a>
                          <span>•</span>
                          <a
                            href="https://wa.me/919313838165"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-semibold underline hover:text-emerald-950 dark:hover:text-white"
                          >
                            <Phone className="h-3 w-3" /> WhatsApp (+91 93138 38165)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                  Submissions are forwarded directly to Harsh Shah (<span className="text-slate-700 dark:text-slate-200 font-medium">harsh942.mi@gmail.com</span>)
                </p>
              </form>
            </div>

            {/* Right Column: Direct Channels & Enterprise Assurances */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4 font-syne">
                  Direct Founder Contact
                </div>

                <div className="space-y-3 text-xs">
                  <a
                    href="mailto:harsh942.mi@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 transition hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Direct Email</div>
                      <div className="font-semibold text-slate-900 dark:text-white">harsh942.mi@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919313838165"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 transition hover:border-emerald-400 dark:hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">WhatsApp / Direct Phone</div>
                      <div className="font-semibold text-slate-900 dark:text-white">+91 93138 38165</div>
                    </div>
                  </a>

                  <a
                    href="https://cal.com/harsuu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 transition hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Calendar Direct</div>
                      <div className="font-semibold text-slate-900 dark:text-white">cal.com/harsuu</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Engagement Standards Card */}
              <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/30 dark:to-slate-900 p-6 shadow-sm">
                <div className="font-syne text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Client Delivery Commitments
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span><b className="text-slate-900 dark:text-white">Mutual NDA:</b> Signed prior to reviewing any proprietary schemas or datasets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span><b className="text-slate-900 dark:text-white">100% IP Assignment:</b> All codebases, trained model weights, and assets belong to you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span><b className="text-slate-900 dark:text-white">Weekly Demos:</b> Working builds shipped to test devices every Friday.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
