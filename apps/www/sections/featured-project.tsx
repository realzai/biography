import { Container } from "@repo/ui/components/ui/container";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@repo/data/site";
import { Github, ArrowUpRight, Folder } from "lucide-react";
import projects from "@repo/data/profile/projects";

const otherProjects = [
  {
    title: "Burmese Wiki Dataset",
    description: "Curated dataset for Burmese NLP research",
    tech: ["HuggingFace", "NLP"],
    link: "https://huggingface.co/datasets/zaibutcooler/wiki-burmese",
  },
  {
    title: "Personal Portfolio",
    description: "This website - built with Next.js & Tailwind",
    tech: ["Next.js", "TypeScript"],
    link: "https://github.com/realzai/biography",
  },
  {
    title: "Premerly",
    description: "AI-powered platform for real estate agents",
    tech: ["React", "AI"],
    link: "https://github.com/realzai",
  },
  {
    title: "ML Experiments",
    description: "Collection of machine learning notebooks",
    tech: ["Python", "PyTorch"],
    link: "https://github.com/realzai",
  },
  {
    title: "Open Source",
    description: "Various contributions to the community",
    tech: ["OSS"],
    link: "https://github.com/realzai",
  },
];

export default function FeaturedProject() {
  const featuredProject = projects[0];

  if (!featuredProject) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project - Left */}
          <div className="group h-full relative rounded-2xl border bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-8 hover:shadow-xl transition-all duration-300">
            {/* Status */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                {featuredProject.status}
              </span>
              <span className="text-xs text-muted-foreground ml-auto">
                Featured
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {featuredProject.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {featuredProject.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.techStack.slice(0, 4).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={featuredProject.links[0]?.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
              <Link
                href={featuredProject.links[1]?.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                HuggingFace
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Other Projects - Right */}
          <div className="space-y-3">
            {otherProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-center gap-4 p-4 rounded-xl border bg-background hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-primary/20 transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover/item:bg-primary/10 transition-colors">
                  <Folder className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover/item:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {project.description}
                  </p>
                </div>
                <div className="hidden sm:flex gap-1.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}

            {/* View all */}
            <Link
              href={siteConfig.projectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-dashed text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              View all projects on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
