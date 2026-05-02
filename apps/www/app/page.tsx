import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import Hero from "~/sections/hero";
import CTA from "~/sections/cta";
import Highlights from "~/sections/highlights";
import Showcase from "~/sections/showcase";
import Credentials from "~/sections/credentials";
import profile from "@repo/data/profile";
import { siteConfig } from "@repo/data/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.productionUrl}/#website`,
        url: siteConfig.productionUrl,
        name: "Sai Ye Yint Aung",
        alternateName: "Zai",
        publisher: { "@id": `${siteConfig.productionUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.productionUrl}/#webpage`,
        url: siteConfig.productionUrl,
        name: "Sai Ye Yint Aung | Zai",
        description:
          "Sai Ye Yint Aung (Zai) is a software engineer and entrepreneur building thoughtful products and technology ventures.",
        isPartOf: { "@id": `${siteConfig.productionUrl}/#website` },
        about: { "@id": `${siteConfig.productionUrl}/#person` },
        primaryImageOfPage: `${siteConfig.productionUrl}/open-graph.png`,
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.productionUrl}/#person`,
        name: profile.fullName,
        alternateName: profile.nickName,
        url: siteConfig.productionUrl,
        mainEntityOfPage: { "@id": `${siteConfig.productionUrl}/#webpage` },
        image: `${siteConfig.productionUrl}/open-graph.png`,
        description: profile.summary,
        jobTitle: "Software Engineer and Entrepreneur",
        knowsAbout: [
          "Software engineering",
          "Product development",
          "Technology ventures",
          "Emerging technology",
          "Technical leadership",
        ],
        sameAs: [
          siteConfig.aboutUrl,
          siteConfig.resumeUrl,
          profile.urls.github,
          profile.urls.linkedIn,
          profile.urls.x,
          profile.urls.youtube,
          profile.urls.instagram,
          profile.urls.huggingFace,
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <Hero />
      <Credentials />
      <Showcase />
      <Highlights />
      <CTA />

      <Footer />
    </main>
  );
}
