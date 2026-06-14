"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden container">
      <div className="">
        <div className="grid grid-cols-2 items-center">
          {/* Left Content */}
          <div className="z-10">
            <p className="text-5xl font-bold text-white">
              Hello<span className=" text-orange-500 ">!</span>
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="h-[2px] w-32 bg-orange-500" />

              <h3 className="text-5xl font-light text-white">
                I&apos;m Jensen
              </h3>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
              Software Developer
            </h1>

            <div className="mt-16 flex gap-5">
              {/* Primary button */}
              <button className="bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-600">
                Got a project?
              </button>

              {/* Outline button */}
              <button className="border border-orange-500 px-8 py-4 text-lg text-white transition hover:bg-orange-500">
                My resume
              </button>
            </div>
          </div>

          {/* Right Image */}
          <Image
            src="/images/profile3.png"
            alt="Hero"
            width={800}
            height={900}
            className="w-full h-auto"
            style={{
  WebkitMaskImage:
    "radial-gradient(circle at center, black 30%, rgba(0,0,0,.7) 45%, rgba(0,0,0,.3) 60%, transparent 100%)",
  maskImage:
    "radial-gradient(circle at center, black 30%, rgba(0,0,0,.7) 45%, rgba(0,0,0,.3) 60%, transparent 100%)",
}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
