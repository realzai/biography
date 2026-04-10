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
        name: "Zai",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.productionUrl}/#person`,
        name: profile.fullName,
        alternateName: profile.nickName,
        url: siteConfig.productionUrl,
        image: `${siteConfig.productionUrl}/open-graph.png`,
        description: profile.summary,
        sameAs: [
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
