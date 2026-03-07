import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@repo/ui/components/ui/container";
import { Badge } from "@repo/ui/components/ui/badge";
import profile from "@repo/data/profile";
import works from "@repo/data/profile/works";

export const metadata: Metadata = {
  title: "About | Zai",
  description:
    "Learn about Sai Ye Yint Aung (Zai), a software engineer and entrepreneur focused on building useful products with AI and web technologies.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container className="space-y-14">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-primary">About</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Sai Ye Yint Aung (Zai)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="space-y-4">
            {works.map((work) => (
              <article key={`${work.company}-${work.start}`} className="rounded-xl border p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{work.company}</h3>
                  <span className="text-sm text-muted-foreground">
                    {work.start} - {work.end}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{work.title}</p>
                <p className="mt-3 text-muted-foreground">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm underline underline-offset-4"
                >
                  Visit company
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

