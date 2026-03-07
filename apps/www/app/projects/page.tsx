import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@repo/ui/components/ui/container";
import { Badge } from "@repo/ui/components/ui/badge";
import projects from "@repo/data/profile/projects";
import { siteConfig } from "@repo/data/site";

export const metadata: Metadata = {
  title: "Projects | Zai",
  description:
    "Browse selected projects by Zai, including AI and full-stack builds with open-source repositories and live resources.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container className="space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-primary">Projects</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Selected Work</h1>
          <p className="text-lg text-muted-foreground">
            A few projects focused on practical impact across AI and product
            engineering.
          </p>
        </header>

        <section className="grid gap-5">
          {projects.map((project) => (
            <article key={project.projectId} className="rounded-xl border p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <span className="text-sm text-muted-foreground">{project.status}</span>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>

        <Link
          href={siteConfig.projectsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm underline underline-offset-4"
        >
          See all repositories on GitHub
        </Link>
      </Container>
    </main>
  );
}

