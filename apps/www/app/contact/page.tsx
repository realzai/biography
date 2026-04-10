import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@repo/ui/components/ui/container";
import profile from "@repo/data/profile";

export const metadata: Metadata = {
  title: "Contact | Zai",
  description:
    "Contact Zai for product, web, and AI collaboration opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container className="max-w-3xl space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-primary">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Let&apos;s Build Something Useful
          </h1>
          <p className="text-lg text-muted-foreground">
            If you have a product idea, team role, or collaboration, send a
            message and include context on goals and timeline.
          </p>
        </header>

        <section className="rounded-xl border p-6 sm:p-7 space-y-4">
          <h2 className="text-2xl font-bold">Direct Channels</h2>
          <p>
            Email:{" "}
            <Link
              href={`mailto:${profile.email}`}
              className="underline underline-offset-4"
            >
              {profile.email}
            </Link>
          </p>
          <p>
            LinkedIn:{" "}
            <Link
              href={profile.urls.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {profile.urls.linkedIn}
            </Link>
          </p>
          <p>
            GitHub:{" "}
            <Link
              href={profile.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {profile.urls.github}
            </Link>
          </p>
        </section>
      </Container>
    </main>
  );
}

