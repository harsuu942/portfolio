import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harsh Shah – Lead Mobile, AI, Web & eCommerce Architect",
  description:
    "Lead Mobile, AI & Full-Stack Solutions Architect with 8+ years experience. Specializing in cross-platform Flutter/Android apps, Agentic AI (MCP, Bedrock), modern SaaS web platforms, and custom Shopify eCommerce storefronts.",
  metadataBase: new URL("https://harsuu.vercel.app"),
  alternates: {
    canonical: "https://harsuu.vercel.app",
  },
  keywords: [
    "Harsh Shah",
    "Flutter Developer",
    "Android Developer",
    "AI Engineer",
    "Agentic AI",
    "Model Context Protocol",
    "MCP",
    "AWS Bedrock",
    "ColBERT RAG",
    "Milvus Vector DB",
    "Next.js Developer",
    "React Web Developer",
    "Shopify Developer",
    "Shopify Plus Expert",
    "Headless Commerce",
    "SaaS Platform Architect",
    "Mobile Solutions Architect",
    "Technical Product Consultant",
    "Full-Stack Engineer",
    "MLOps SageMaker",
    "Apache Airflow",
  ],
  authors: [{ name: "Harsh Shah", url: "https://harsuu.vercel.app" }],
  creator: "Harsh Shah",
  publisher: "Harsh Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Harsh Shah – Lead Mobile, AI, Web & eCommerce Architect",
    description:
      "8+ years architecting Flutter/Android mobile apps, Agentic AI (MCP, Bedrock), SaaS web platforms, and custom Shopify eCommerce storefronts.",
    url: "https://harsuu.vercel.app",
    siteName: "Harsh Shah – Lead Solutions Architect",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://harsuu.vercel.app/harsh_profile.jpg",
        secureUrl: "https://harsuu.vercel.app/harsh_profile.jpg",
        width: 442,
        height: 580,
        alt: "Harsh Shah – Lead Mobile, AI, Web & eCommerce Solutions Architect",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Shah – Lead Mobile, AI, Web & eCommerce Architect",
    description:
      "Cross-platform mobile apps, Agentic AI (MCP, Bedrock), SaaS web platforms, and Shopify eCommerce solutions.",
    creator: "@harsuu942",
    images: ["https://harsuu.vercel.app/harsh_profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Portfolio & Engineering Consulting",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://harsuu.vercel.app/#website",
      url: "https://harsuu.vercel.app",
      name: "Harsh Shah – Lead Solutions Architect",
      description: "Portfolio of Harsh Shah: Mobile, AI, Web & eCommerce Engineering.",
      publisher: {
        "@id": "https://harsuu.vercel.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://harsuu.vercel.app/#person",
      name: "Harsh Shah",
      jobTitle: "Lead Mobile, AI, Web & eCommerce Solutions Architect",
      image: "https://harsuu.vercel.app/harsh_profile.jpg",
      url: "https://harsuu.vercel.app",
      sameAs: [
        "https://github.com/harsuu942",
        "https://www.linkedin.com/in/harsh-shah-16001b99",
        "https://cal.com/harsuu"
      ],
      knowsAbout: [
        "Flutter & Cross-Platform Mobile Applications",
        "Android Native (Kotlin/Java)",
        "Agentic AI & Model Context Protocol (MCP)",
        "Amazon Bedrock & AgentCore",
        "Retrieval-Augmented Generation (RAG) with ColBERT",
        "Milvus Vector Database",
        "Next.js & Modern SaaS Web Platforms",
        "Shopify Plus & Headless eCommerce",
        "AWS SageMaker & Apache Airflow MLOps"
      ],
      description: "Solutions architect delivering high-scale mobile applications, Agentic AI systems, modern SaaS web platforms, and custom Shopify storefronts."
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://harsuu.vercel.app/#service",
      name: "Harsh Shah – Technical Product & AI Consulting",
      image: "https://harsuu.vercel.app/harsh_profile.jpg",
      url: "https://harsuu.vercel.app",
      priceRange: "$$$",
      telephone: "+91 93138 38165",
      email: "harsh942.mi@gmail.com",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Engineering Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "Cross-platform Flutter and native Android/iOS mobile applications with offline-first synchronization."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agentic AI & Model Context Protocol (MCP)",
              description: "Autonomous tool-calling multi-agent systems, AWS Bedrock AgentCore, and natural-language BI querying."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Platforms & SaaS Development",
              description: "High-performance web applications built with Next.js, TypeScript, role-based dashboards, and APIs."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "eCommerce & Shopify Solutions",
              description: "Custom Shopify Plus storefronts, headless commerce architectures, and conversion-optimized checkout funnels."
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        {/* Anti-flash theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-300 antialiased">
        {children}
      </body>
    </html>
  );
}
