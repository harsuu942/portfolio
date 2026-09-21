export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-100/80 dark:bg-[#090d16] py-14 px-6 text-xs text-slate-600 dark:text-slate-400 transition-colors">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-syne font-bold text-base text-slate-900 dark:text-white">
              Harsh Shah
            </div>
            <p className="mt-1 text-slate-500 dark:text-slate-400 font-light max-w-md">
              Lead Solutions Architect • Mobile (Flutter/Android), Agentic AI (MCP, Bedrock), SaaS Web Platforms, and Shopify Plus eCommerce.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="https://github.com/harsuu942" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>•</span>
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="https://www.linkedin.com/in/harsh-shah-16001b99" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>•</span>
            <a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium" href="https://wa.me/919313838165" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <span>•</span>
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="mailto:harsh942.mi@gmail.com">
              Email
            </a>
            <span>•</span>
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="https://cal.com/harsuu" target="_blank" rel="noreferrer">
              Cal.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-slate-500">
          © {currentYear} Harsh Shah. All rights reserved. Built for production scale and high-converting client delivery.
        </div>
      </div>
    </footer>
  );
}
