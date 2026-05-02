import type { Metadata } from "next";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Container } from "@repo/ui/components/ui/container";
import profile from "@repo/data/profile";
import { siteConfig } from "@repo/data/site";

import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ContactForm } from "~/components/contact-form";

const description =
  "Send a message about your product, role, or collaboration. Include goals and timeline so we can move quickly.";
const seoDescription =
  "Contact Sai Ye Yint Aung (Zai) about software engineering, product work, technology ventures, roles, and collaboration opportunities.";

export const metadata: Metadata = {
  title: "Contact Sai Ye Yint Aung | Zai",
  description: seoDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Sai Ye Yint Aung",
    title: "Contact Sai Ye Yint Aung | Zai",
    description: seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sai Ye Yint Aung | Zai",
    description: seoDescription,
  },
};

const socials = [
  { href: profile.urls.github, icon: Github, label: "GitHub" },
  { href: profile.urls.linkedIn, icon: Linkedin, label: "LinkedIn" },
  { href: profile.urls.instagram, icon: Instagram, label: "Instagram" },
  { href: profile.urls.youtube, icon: Youtube, label: "YouTube" },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.productionUrl}/contact#contact`,
    url: `${siteConfig.productionUrl}/contact`,
    name: "Contact Sai Ye Yint Aung",
    description: seoDescription,
    about: { "@id": `${siteConfig.productionUrl}/#person` },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <Container className="mt-16 sm:mt-24 mb-10 sm:mb-14 max-w-3xl text-center sm:text-left space-y-5">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[3rem] sm:leading-[3.5rem]">
          Let&apos;s Build Something Useful
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      </Container>

      <Container className="max-w-3xl space-y-6 mb-20 sm:mb-28">
        <aside className="rounded-lg border bg-muted/30 p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-primary">
                Direct Channels
              </p>
              <h2 className="text-xl font-bold">Reach me directly</h2>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 lg:text-right">
                Elsewhere
              </p>
              <ul className="flex items-center gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
              <Link
                href={`mailto:${profile.email}`}
                className="hover:text-primary break-all"
              >
                {profile.email}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
              <span>{profile.phoneNumber}</span>
            </li>
            <li className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
              <span>
                {profile.streetAddress}
                <br />
                {profile.city}, {profile.country}
              </span>
            </li>
          </ul>
        </aside>

        <section className="rounded-lg border p-5 sm:p-6">
          <ContactForm />
        </section>
      </Container>

      <Footer />
    </main>
  );
}
