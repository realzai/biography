import { Container } from "@repo/ui/components/ui/container";
import { Users } from "lucide-react";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import testimonials from "@repo/data/profile/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-primary/10">
            <Users className="mr-2 h-4 w-4 text-primary" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            What Everyone Say
            <span className="block text-primary">About My Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonials[0]?.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">JH</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[0]?.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0]?.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "Incredible work ethic and problem-solving skills. He delivered
                a complex solution ahead of schedule and under budget."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, StartupXYZ
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "Professional, reliable, and innovative. The mobile app he built
                for us has received outstanding user reviews and engagement."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">EL</span>
                </div>
                <div>
                  <div className="font-semibold">Emily Liu</div>
                  <div className="text-sm text-muted-foreground">
                    Product Manager, InnovateCo
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
