import Link from "next/link";
import { Container } from "@repo/ui/components/ui/container";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { siteConfig } from "@repo/data/site";
import Image from "next/image";

export default function Hero() {
  return (
    <Container className="flex flex-col sm:flex-row justify-between items-center mt-24 sm:mt-48 mb-24 sm:mb-48 gap-12 text-center sm:text-left">
      <article className="max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[3rem] sm:leading-[3.5rem]">
          Building The Future With Technology
          {/*技術の 力で より良い未来を 築いています*/}
        </h1>
        <p className="max-w-lg text-base">
          I believe technology should serve humanity. My goal is to create
          products that make a difference and bring good things to the world.
          {/*テクノロジーが人々のために役立つものであるべきだと信じています。世界に良い変化をもたらす製品を作ることが私の使命です。*/}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
          <Link
            href={siteConfig.aboutUrl}
            className={buttonVariants({ size: "lg" })}
          >
            About Me
            {/*私について*/}
          </Link>
          <Link
            href={siteConfig.contactUrl}
            className={buttonVariants({ size: "lg", variant: "ghost" })}
          >
            Contact Now
            {/*お問い合わせ*/}
          </Link>
        </div>
      </article>

      <figure className="relative h-[300px] w-[300px] sm:h-[424px] sm:w-[424px] rounded-lg overflow-hidden bg-primary">
        <Image
          src={
            "https://5dtle1ixev.ufs.sh/f/NVoH0HnelgtLFSA1ZSnozrHKMLJ42PFAc6tv0IOwpglBkWq1"
          }
          alt={"Zai"}
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
    </Container>
  );
}
