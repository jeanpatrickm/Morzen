import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { About } from "./_components/about";
import { Stats } from "./_components/stats";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";

export default function MorzenLanding() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
