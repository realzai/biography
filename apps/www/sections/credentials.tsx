import { Container } from "@repo/ui/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  {
    name: "Harvard University",
    shortName: "Harvard",
    mark: "HU",
    type: "Certification",
    logoSrc: "/logos/credentials/harvard-crest.svg",
    logoClassName: "h-10 w-10 sm:h-12 sm:w-12",
    credentialUrl:
      "https://credentials.edx.org/credentials/195da1c3a0264f63ab855f8d7cd16ab1/",
  },
  {
    name: "Google",
    shortName: "Google",
    mark: "G",
    type: "Certified",
    logoSrc: "/logos/credentials/google.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/RWXGPCA2N3Z7",
  },
  {
    name: "Yale University",
    shortName: "Yale",
    mark: "YU",
    type: "Course",
    logoSrc: "/logos/credentials/yale.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/X6JZHIKIBR2X",
  },
  {
    name: "Meta",
    shortName: "Meta",
    mark: "M",
    type: "Certified",
    logoSrc: "/logos/credentials/meta.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/QDC7Y240BP4U",
  },
  {
    name: "Johns Hopkins University",
    shortName: "Johns Hopkins",
    mark: "JH",
    type: "Certification",
    logoSrc: "/logos/credentials/johns-hopkins.png",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/4SYL7L0X1424",
  },
  {
    name: "Duke University",
    shortName: "Duke",
    mark: "DU",
    type: "Certified",
    logoSrc: "/logos/credentials/duke.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/C5IW9QFDTKSH",
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

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-14">
          {credentials.map((item) => (
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
