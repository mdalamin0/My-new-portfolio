"use client";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="container mt-9 ">
      <div className="flex justify-between relative items-center min-h-[600px]">
        <div className="left-content  ">
          <p className="text-xl font-bold">
            Hello<span className=" text-orange ">! </span> <span>I&apos;m</span>
          </p>
          <div className="border- border-amber-300 relative mt-8 flex items-center gap-6">
            <div className="h-[2px] absolute -left-36 bottom-0 w-40 bg-primary" />
            <h3 className="text-7xl ml-7 ">Md Alamin</h3>
          </div>
          <h2 className="mt-8 font-bold leading-tight text-5xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
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
          <div className="mt-16 flex gap-5">
            {/* Primary button */}
            <button className="btn-primary inline-flex items-center gap-2 ">
              Get Resume <IoMdDownload />
            </button>

            {/* Outline button */}
            <button className="btn-whatsapp inline-flex items-center gap-2">
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
        <div className="right-content absolute  -top-12 right-0">
          <Image
            src="/images/left-arrow.png"
            alt="left arrow"
            width={80}
            height={80}
            className="absolute -left-8 top-36 z-20 opacity-60"
          />
          <Image
            src="/images/profile3.png"
            alt="Alamin"
            width={800}
            height={900}
            className="w-full h-auto blended-image"
          />
          <Image
            src="/images/right-arrow.png"
            alt="left arrow"
            width={80}
            height={80}
            className="absolute right-0 bottom-10 z-20 opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
