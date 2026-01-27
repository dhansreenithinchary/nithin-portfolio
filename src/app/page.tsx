import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyMe from "@/components/sections/WhyMe";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Navbar />
      <Hero />
      <WhyMe />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
