import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ContactSection from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" text-gray-200">
      <Navbar />
      <Hero/>
      <Skills />
      <About/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
