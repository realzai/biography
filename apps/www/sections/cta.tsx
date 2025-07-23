import Link from "next/link";
import { Container } from "@repo/ui/components/ui/container";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { siteConfig } from "@repo/data/site";
import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <Container className="my-32 sm:my-40 py-24 sm:py-32 bg-gradient-to-br from-foreground via-foreground to-foreground text-white relative overflow-hidden rounded-lg md:rounded:xl">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something
            <span className="block text-primary">Amazing Together?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how I can bring your vision
            to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.contactUrl}
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300",
              })}
            >
              Start Your Project
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.aboutUrl}
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
              })}
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
