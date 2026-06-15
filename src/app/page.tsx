import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div className=" text-[#F9FDFB]">
      <Navbar />
      {/* <HeroSection /> */}
      <Hero/>
      <Skills />
      <About/>
      <ContactSection/>
    </div>
  );
}
