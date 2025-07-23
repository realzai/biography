import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Code2, Globe, Rocket, Shield, Users, Zap } from "lucide-react";
import Hero from "~/sections/hero";
import Features from "~/sections/features";
import CTA from "~/sections/cta";

export default function Page() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Features />
      <CTA />

      <Footer />
    </main>
  );
}
