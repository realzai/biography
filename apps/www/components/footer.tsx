import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import Link from "next/link";
import { Github, Instagram, LinkedinIcon, YoutubeIcon } from "lucide-react";
import profile from "@repo/data/profile";

const footerLinks = [
  { route: profile.urls.github, icon: Github },
  { route: profile.urls.linkedIn, icon: LinkedinIcon },
  { route: profile.urls.instagram, icon: Instagram },
  { route: profile.urls.youtube, icon: YoutubeIcon },
]

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-24" aria-label="Site Footer">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-sm font-medium text-center md:text-left">
          Copyright © {year} Sai Ye Yint Aung
        </p>
        <nav aria-label="Social Media Links">
          <ul className="flex items-center space-x-6">
            {footerLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.route} target="_blank" rel="noopener noreferrer" aria-label={item.route}>
                  <item.icon className="h-6 w-6 p-1 border rounded text-muted-foreground hover:text-foreground/70" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className={"h-16 md:h-0"} />

    </footer>
  );
};
