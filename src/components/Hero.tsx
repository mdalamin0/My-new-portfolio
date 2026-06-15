"use client";

import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mt-8 lg:mt-0">
      <div className="relative flex flex-col lg:flex-row justify-between items-center lg:min-h-[600px]">
        {/* Left Content */}
        <div className="left-content  order-1 w-full text-center lg:text-left z-10">
          <p className="text-lg md:text-xl font-bold">
            Hello
            <span className="text-orange">! </span>
            <span>I&apos;m</span>
          </p>

          <div className="relative mt-6 lg:mt-8 flex items-center justify-center lg:justify-start">
            <div className="hidden lg:block absolute -left-36 bottom-0 h-[2px] w-40 bg-primary" />

            <div>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl lg:ml-7">
                Md Alamin
              </h3>
              <div className="mx-auto mt-2 lg:hidden h-[2px] w-40 bg-primary" />
            </div>
          </div>

          <h2 className="mt-8 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight min-h-[60px] lg:min-h-[90px]">
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

          <div className=" flex w-full justify-center lg:justify-start flex-row gap-2 sm:gap-3  ">
            <button className="btn-primary flex-1 sm:flex-none">
              <span className="md:hidden">Resume</span>

              <span className="hidden md:inline">My Resume</span>
              <IoMdDownload className="text-lg ml-2" />
            </button>

            <button className="btn-whatsapp flex-1 sm:flex-none">
              <span className="md:hidden">Start Chat</span>

              <span className="hidden md:inline">Chat on WhatsApp</span>
              <FaWhatsapp className="text-lg ml-2" />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="
            right-content
            order-2

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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
