import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Signature from "@/components/sections/Signature";
import BlogTeaser from "@/components/sections/BlogTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Signature />
      <Experience />
      <Skills />
      <BlogTeaser />
      <Contact />
    </>
  );
}
