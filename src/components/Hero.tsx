"use client";

import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-24 container lg:mt-0">
      <div className="relative flex flex-col md:flex-row justify-between items-center md:min-h-[600px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="left-content order-2  md:order-1 w-full text-center md:text-left z-10"
        >
          <div className=" flex items-end justify-center md:justify-start mb-8 mt-8 lg:mt-0">
            <div className="hidden lg:block 0 h-[2px] w-40 bg-primary" />
            <p className="text-lg md:text-xl font-bold ml-2">
              Hello
              <span className="text-orange">! </span>
              <span>I&apos;m</span>
            </p>
          </div>

          <div className="relative mt-6 lg:mt-8 flex items-center justify-center md:justify-start">

            <div>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ">
              Md Alamin
              </h3>
              <div className="mx-auto  mt-2 md:hidden h-[2px] w-40 bg-primary" />
            </div>
          </div>

          <h2 className="text-orange h-18 mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight min-h-[60px] lg:min-h-[90px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Backend Developer",
                2000,
                "Next.js Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <div className="mt-8 flex w-full justify-center md:justify-start flex-row gap-2 sm:gap-3  ">
            <a
              href="resume/resume.pdf"
              download="Md-Alamin-Resume.pdf"
              className="btn-primary flex-1 sm:flex-none"
            >
              <span className="md:hidden">Resume</span>

              <span className="hidden md:inline">My Resume</span>
              <IoMdDownload className="text-xl ml-2" />
            </a>

            <a
              href="https://wa.me/8801611148685"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 sm:flex-none"
            >
              <span className="lg:hidden">Start Chat</span>

              <span className="hidden lg:inline">Chat on WhatsApp</span>
              <FaWhatsapp className="text-xl ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="
            right-content
            order-1
            md:order-2

            relative
            w-full
            max-w-[280px]
            sm:max-w-[380px]
            md:max-w-[500px]

            mx-auto
            mt-3

            lg:absolute
            lg:right-0
            lg:-top-12
            lg:mt-0
          "
        >
          <Image
            src="/images/left-arrow.png"
            alt="left arrow"
            width={80}
            height={80}
            className="
              absolute
              left-0
              top-20
              lg:-left-8
              lg:top-36
              w-10
              md:w-14
              lg:w-20
              opacity-60
              z-20
            "
          />

          <Image
            src="/images/profile3.png"
            alt="Alamin"
            width={800}
            height={900}
            priority
            className="w-full h-auto blended-image "
          />

          <Image
            src="/images/right-arrow.png"
            alt="right arrow"
            width={80}
            height={80}
            className="
              absolute
              right-0
              bottom-6
              lg:bottom-10
              w-10
              md:w-14
              lg:w-20
              opacity-60
              z-20
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
