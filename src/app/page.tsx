import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import FeaturedProject from "@/components/FeaturedProject";
import Ventures from "@/components/Ventures";
import WhatIBring from "@/components/WhatIBring";
import Contact from "@/components/Contact";

const LINEN = "#F5F0E8";
const SAND = "#D9C4A8";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WaveDivider fromColor={LINEN} toColor={SAND} />
        <FeaturedProject />
        <WaveDivider fromColor={SAND} toColor={LINEN} />
        <Ventures />
        <WaveDivider fromColor={LINEN} toColor={SAND} />
        <WhatIBring />
        <Contact />
      </main>
    </>
  );
}
