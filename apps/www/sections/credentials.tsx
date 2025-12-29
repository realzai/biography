import { Container } from "@repo/ui/components/ui/container";

const credentials = [
  {
    name: "Harvard",
    type: "Certification",
  },
  {
    name: "Google",
    type: "Certified",
  },
  {
    name: "MIT",
    type: "Course",
  },
  {
    name: "Meta",
    type: "Certified",
  },
  {
    name: "Stanford",
    type: "Certification",
  },
  {
    name: "AWS",
    type: "Certified",
  },
];

export default function Credentials() {
  return (
    <section className="py-16 sm:py-20 border-y border-border/50 bg-slate-50/50 dark:bg-slate-900/50">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            Certified & Recognized By
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-20">
          {credentials.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Placeholder for logo - replace with actual image/svg */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:border-primary/20 transition-colors">
                <span className="text-lg sm:text-xl font-bold text-muted-foreground/50">
                  {item.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm sm:text-base font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity -mt-1">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
