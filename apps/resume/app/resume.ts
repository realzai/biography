import { GitHubIcon, LinkedInIcon, XIcon } from "~/components/icons";
import profile from "@repo/data/profile";
import clients from "@repo/data/profile/clients";
import credentials from "@repo/data/profile/credentials";
import skills from "@repo/data/profile/skills";
import education from "@repo/data/profile/education";
import projects from "@repo/data/profile/projects";
import works from "@repo/data/profile/works";

export const RESUME_DATA = {
  name: profile.fullName,
  initials: profile.nickName,
  location: profile.location,
  locationLink: profile.locationLink,
  about: profile.about,
  summary: profile.summary,
  avatarUrl: profile.avatar,
  personalWebsiteUrl: profile.website,
  contact: {
    email: profile.email,
    social: [
      {
        name: "GitHub",
        url: profile.urls.github,
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: profile.urls.linkedIn,
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: profile.urls.x,
        icon: XIcon,
      },
    ],
  },
  works,
  skills,
  education: education.filter((e) => e.resume),
  projects: projects.filter((p) => p.resume),
  credentials: credentials.filter((c) => c.resume),
  clients,
} as const;
