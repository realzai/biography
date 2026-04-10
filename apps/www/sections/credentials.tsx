import { Container } from "@repo/ui/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import credentials from "@repo/data/profile/credentials";

export default function Credentials() {
  return (
    <section className="py-16 sm:py-20 border-y border-border/50 bg-slate-50/50 dark:bg-slate-900/50">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            Certified & Recognized By
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-14">
          {credentials.filter((c) => c.www).map((item) => (
            <article
              key={item.name}
              className="group flex flex-col items-center gap-3 sm:gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {item.credentialUrl ? (
                <Link
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center px-2 group-hover:border-primary/20 transition-colors"
                  aria-label={`${item.shortName} credential`}
                >
                  {item.logoSrc ? (
                    <Image
                      src={item.logoSrc}
                      alt={`${item.shortName} logo`}
                      width={64}
                      height={64}
                      className={`${item.logoClassName} object-contain`}
                    />
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-muted-foreground/80 tracking-wide">
                      {item.mark}
                    </span>
                  )}
                </Link>
              ) : (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center px-2 group-hover:border-primary/20 transition-colors">
                  {item.logoSrc ? (
                    <Image
                      src={item.logoSrc}
                      alt={`${item.shortName} logo`}
                      width={64}
                      height={64}
                      className={`${item.logoClassName} object-contain`}
                    />
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-muted-foreground/80 tracking-wide">
                      {item.mark}
                    </span>
                  )}
                </div>
              )}
              <span className="text-sm sm:text-base font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
                {item.shortName}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
