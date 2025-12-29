import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import Hero from "~/sections/hero";
import CTA from "~/sections/cta";
import Highlights from "~/sections/highlights";
import Showcase from "~/sections/showcase";
import Credentials from "~/sections/credentials";

export default function Page() {
  return (
    <main>
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
