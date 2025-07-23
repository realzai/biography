import { Container } from "@repo/ui/components/ui/container";
import { Code2, Globe } from "lucide-react";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

export default function Projects() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-primary/10">
            <Code2 className="mr-2 h-4 w-4 text-primary" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Projects That
            <span className="block text-primary">Make Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions that have transformed businesses
            and delighted users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Project 1 */}
          <Card className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="E-commerce Platform"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Platform
              </h3>
              <p className="text-muted-foreground mb-4">
                A full-stack e-commerce solution with real-time inventory,
                payment processing, and analytics dashboard.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View Project <Globe className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mobile Banking App"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                    React Native
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mobile Banking App</h3>
              <p className="text-muted-foreground mb-4">
                Secure mobile banking application with biometric authentication
                and real-time transaction monitoring.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View Project <Globe className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "hover:bg-primary hover:text-primary-foreground transition-colors duration-300",
            })}
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
