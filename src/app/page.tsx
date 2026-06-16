import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ContactSection from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className=" text-gray-200">
      <Navbar />
      {/* <HeroSection /> */}
      <Hero/>
      <Skills />
      <About/>
      <Projects/>
      <ContactSection/>
    </div>
  );
}
