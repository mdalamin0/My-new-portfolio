"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            
            <Image
              src="/images/logo.png"
              alt="Alamin"
              width={80}
              height={80}
              priority
              className="w-[110px] sm:w-[130px] lg:w-[150px] h-[90] md:h-[110px] "
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#home"
              className={`font-medium transition-all duration-200 ${
                activeSection === "home"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`font-medium transition-all duration-200 ${
                activeSection === "about"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              About
            </Link>

            {/* <Link
              href="#skills"
              className={`font-medium transition-all duration-200 ${
                activeSection === "skills"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Skills
            </Link> */}

            <Link
              href="#projects"
              className={`font-medium transition-all duration-200 ${
                activeSection === "projects"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`font-medium transition-all duration-200 ${
                activeSection === "contact"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Contact
            </Link>

            <Link href="#contact" className="btn-primary">
              Hire Me
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="#contact"
              className="bg-[#FF715A] text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Hire Me
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${
                  isOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${
                  isOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
            <Link
              href="#home"
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === "home"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about "
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === "about"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              About
            </Link>

            {/* <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === "skills"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Skills
            </Link> */}

            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === "projects"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === "contact"
                  ? "text-orange border-b border-[#FF715A]"
                  : "hover:text-[#FF715A]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
