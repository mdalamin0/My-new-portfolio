"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="font-bold text-xl md:text-2xl tracking-wide transition-colors duration-300">
              Md Alamin
            </h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium transition-all duration-200 hover:text-[#FF715A]"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="font-medium transition-all duration-200 hover:text-[#FF715A]"
            >
              About
            </Link>
            <Link
              href="/about"
              className="font-medium transition-all duration-200 hover:text-[#FF715A]"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="font-medium transition-all duration-200 hover:text-[#FF715A]"
            >
              Projects
            </Link>

            <Link href="/contact" className="btn-primary">
              Hire Me
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/contact"
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
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium transition-all duration-300 hover:text-[#FF715A]"
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium transition-all duration-300 hover:text-[#FF715A]"
            >
              About
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium transition-all duration-300 hover:text-[#FF715A]"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium transition-all duration-300 hover:text-[#FF715A]"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}