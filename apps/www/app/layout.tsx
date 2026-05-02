import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@repo/data/site";
import { Toaster } from "~/components/toaster";

const mono = JetBrains_Mono({ subsets: ["latin"] });
const description =
  "Sai Ye Yint Aung (Zai) is a software engineer and entrepreneur building thoughtful products and technology ventures with clear strategy, technical rigor, and refined execution.";

export const metadata: Metadata = {
  title: "Sai Ye Yint Aung | Zai",
  description,
  metadataBase: new URL(siteConfig.productionUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Sai Ye Yint Aung", url: siteConfig.productionUrl }],
  creator: "Sai Ye Yint Aung",
  publisher: "Sai Ye Yint Aung",
  applicationName: "Sai Ye Yint Aung",
  keywords: [
    "Sai Ye Yint Aung",
    "Zai",
    "Sai Ye Yint Aung Zai",
    "software engineer",
    "entrepreneur",
    "founder",
    "product engineer",
    "product builder",
    "digital product builder",
    "technology ventures",
    "emerging technology",
    "startup founder",
    "product strategy",
    "technical leadership",
    "software consulting",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sai Ye Yint Aung",
    title: "Sai Ye Yint Aung | Zai",
    description,
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Sai Ye Yint Aung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Ye Yint Aung | Zai",
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
