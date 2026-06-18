"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="container pb-10 pt-5"
      >
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Left */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Alamin"
              width={80}
              height={80}
              priority
              className="w-[110px] sm:w-[130px] lg:w-[150px] h-[90] md:h-[110px] mx-auto lg:mx-0"
            />

            <p className=" max-w-sm text-sm text-gray-400">
              Full Stack Developer focused on building scalable, user-friendly,
              and modern web applications.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-6 text-sm ">
            <Link
              href="#home"
              className="hover:text-[#FF715A] transition-colors duration-300"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="hover:text-[#FF715A] transition-colors duration-300"
            >
              About
            </Link>

            <Link
              href="#projects"
              className="hover:text-[#FF715A] transition-colors duration-300"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="hover:text-[#FF715A] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
                                href="https://www.facebook.com/md.al.amin.626694"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                              >
                                <FaFacebookF />
                              </a>
            
                              <a
                                href="https://www.linkedin.com/in/md-al-amin-60aa32219/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                              >
                                <FaLinkedinIn />
                              </a>
            
                              <a
                                href="https://github.com/mdalamin0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn "
                              >
                                <FaGithub />
                              </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Md Alamin. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
