import { cn } from "@/lib/cn";

export default function Section({
  id,
  title,
  eyebrow,
  description,
  className,
  children,
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 py-16 md:py-24", className)}>
      {(title || eyebrow) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-live-pulse" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl font-syne">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-500/30 dark:from-blue-500/40 via-slate-200 dark:via-slate-800 to-transparent" />
        </div>
      )}
      {children}
    </section>
  );
}
