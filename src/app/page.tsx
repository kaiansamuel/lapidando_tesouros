import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Founder } from "@/components/sections/founder";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Process } from "@/components/sections/process";
import { Recognition } from "@/components/sections/recognition";
import { Support } from "@/components/sections/support";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Process />
      <Founder />
      <Gallery />
      <Recognition />
      <Support />
      <Faq />
      <Contact />
    </>
  );
}
