import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { HowCanWeHelp } from "./_components/how-can-we-help";

export default function MorzenLanding() {
  return (
    <main>
      <Hero />
      <HowCanWeHelp />
      {/* <Services /> */}
      <About />
      {/* UMA HORA  */}
      {/* <Stats /> */}
      <Contact />
      <Footer />
    </main>
  );
}
