import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@repo/data/site";
import { Toaster } from "~/components/toaster";

const mono = JetBrains_Mono({ subsets: ["latin"] });
const description =
  "Sai Ye Yint Aung (Zai) helps ideas become exceptional products through clear strategy, technical rigor, and refined execution.";

export const metadata: Metadata = {
  title: "Zai | Turning Ideas Into Products",
  description,
  metadataBase: new URL(siteConfig.productionUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sai Ye Yint Aung",
    "Zai",
    "Sai Ye Yint Aung Zai",
    "Myanmar",
    "Burma",
    "Zai personal website",
    "personal website",
    "product engineer",
    "software engineer",
    "entrepreneur",
    "digital product builder",
    "AI product builder",
    "founder-minded engineer",
    "product strategy",
    "technical leadership",
    "premium software consulting",
    "high-impact digital products",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Zai",
    title: "Zai | Turning Ideas Into Products",
    description,
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Sai Ye Yint Aung portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zai | Turning Ideas Into Products",
    description,
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mono.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
