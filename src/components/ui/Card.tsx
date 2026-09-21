import { cn } from "@/lib/cn";

export default function Card({
  className,
  children,
  highlight = false,
}: {
  className?: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-3xl bg-white dark:bg-slate-900/80 p-7 transition-all duration-300",
        "border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-xl hover:shadow-lg dark:hover:shadow-blue-950/20 hover:-translate-y-1 backdrop-blur-xl hover:border-blue-500/40 dark:hover:border-blue-500/40",
        highlight && "border-blue-500/50 dark:border-blue-500/60 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
