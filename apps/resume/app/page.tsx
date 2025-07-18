import { RESUME_DATA } from "./resume";
import { Button } from "@repo/ui/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Menu } from "~/components/menu";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Section } from "~/components/section";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground pb-2">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <Link
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </Link>
            </p>
            <div className="flex gap-x-1.5 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                  <Button className="h-8 w-8" variant="outline" size="icon">
                    <MailIcon className="h-4 w-4" />
                  </Button>
                </Link>
              ) : null}

              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                >
                  <Link href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </Link>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.works.map((work) => {
            return (
              <Card key={work.company} className={"border border-muted"}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <Link className="hover:underline" href={work.link}>
                        {work.company}
                      </Link>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1 px-3">
            {RESUME_DATA.projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden border border-muted p-3"
              >
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-base">
                      {project.links[0] ? (
                        <Link
                          href={project.links[0].href}
                          target="_blank"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {project.title}{" "}
                          <span className="h-1 w-1 rounded-full bg-green-500"></span>
                        </Link>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <div className="hidden font-mono text-xs underline print:visible">
                      {project.links[0]
                        ? project.links[0].href
                            .replace("https://", "")
                            .replace("www.", "")
                            .replace("/", "")
                        : null}
                    </div>
                    <CardDescription className="font-mono text-xs">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto flex">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.techStack.map((tag) => (
                      <Badge
                        className="px-1 py-0 text-[10px]"
                        variant="secondary"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Clients</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 px-3">
            {RESUME_DATA.clients.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col overflow-hidden border border-muted p-3"
              >
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-base">
                      {project.link ? (
                        <Link
                          href={project.link.href}
                          target="_blank"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {project.title}{" "}
                          <span className="h-1 w-1 rounded-full bg-green-500"></span>
                        </Link>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <div className="hidden font-mono text-xs underline print:visible">
                      {project.link?.href
                        .replace("https://", "")
                        .replace("www.", "")
                        .replace("/", "")}
                    </div>
                    <CardDescription className="font-mono text-xs">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto flex">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.techStack.map((tag) => (
                      <Badge
                        className="px-1 py-0 text-[10px]"
                        variant="secondary"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge
                  className={
                    "bg-foreground text-background hover:bg-foreground/70"
                  }
                  key={skill}
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
      </section>

      <Menu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
