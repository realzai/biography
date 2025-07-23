import { Container } from "@repo/ui/components/ui/container";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import Link from "next/link";
import { siteConfig } from "@repo/data/site";
import { Code2, Globe, Rocket, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Rapid development cycles without compromising quality, getting your ideas to market faster.",
  },

  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized applications that deliver lightning-fast user experiences across all devices.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Building solutions that can scale globally, handling millions of users seamlessly.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time and grows with your business needs.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Designing with your users in mind, creating intuitive interfaces that people love to use.",
  },

  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Enterprise-grade security implementations to protect your data and user privacy.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <Container className="relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            Premium Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Crafting Excellence in
            <span className="block text-primary">Every Detail</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering world-class technology solutions with meticulous
            attention to detail, performance, and user experience that sets new
            industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-primary/90 group-hover:text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href={siteConfig.contactUrl}
            className={buttonVariants({
              size: "lg",
              className:
                "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300",
            })}
          >
            Start Your Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
