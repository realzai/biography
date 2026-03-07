import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import { siteConfig } from "@repo/data/site";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

import { Logo } from "@repo/ui/components/logo";
import { MobileNav } from "~/components/mobile-nav";
import { cn } from "@repo/ui/lib/utils";

const links = [
  { name: "About", href: siteConfig.aboutUrl },
  { name: "Resume", href: siteConfig.resumeUrl },
  { name: "Projects", href: siteConfig.projectsUrl },
];

export const Navbar: React.FC = () => (
  <>
    {/* Desktop Navbar */}
    <header
      className="sticky top-0 z-40 -mt-8 hidden h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg md:flex"
      aria-label="Main Navigation"
    >
      <Container className="flex justify-between items-center h-full w-full">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="flex gap-4">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              className={buttonVariants({
                variant: "ghost",
                className: "text-xs font-medium",
              })}
              href={href}
              aria-label={name}
            >
              {name}
            </Link>
          ))}

          {/*<Button variant={"ghost"} size={"icon"}>*/}
          {/*  <Sun className={"h-4 w-4"} />*/}
          {/*</Button>*/}

          <Link
            className={cn(
              buttonVariants({ className: "rounded-full text-xs" }),
            )}
            href={siteConfig.contactUrl}
            aria-label="Contact"
          >
            Contact Me
          </Link>
        </nav>
      </Container>
    </header>

    {/* Mobile Navbar */}
    <MobileNav />
  </>
);
