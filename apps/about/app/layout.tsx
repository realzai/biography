import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { mono } from "~/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "~/components/toaster";

export const metadata: Metadata = {
  title: "Who Is Sai Ye Yint Aung? | Zai",
  description:
    "The personal story of Sai Ye Yint Aung, also known as Zai: a software engineer, entrepreneur, and product builder.",
  keywords: [
    "Sai Ye Yint Aung",
    "Software Engineer",
    "Entrepreneur",
    "Myanmar",
    "Full Stack Developer",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Tech Blog",
    "About",
    "Startup",
    "Innovation",
    "Open Source",
    "Ruby on Rails",
    "Node.js",
    "Business",
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
