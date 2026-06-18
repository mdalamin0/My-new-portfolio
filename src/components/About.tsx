"use client";

import { FaLaptopCode, FaCode, FaServer } from "react-icons/fa";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className=" container py-16 lg:py-28">
      <div className="grid md:grid-cols-2 items-center  gap-16 md:gap-0 lg:gap-24">
        {/* About Content - Mobile First */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About me
          </h2>

          <p className="mt-8 text-gray-300 leading-8 text-base md:text-lg">
            I am a <span className="text-orange font-medium">AI Powerd</span>{" "}
            Full Stack Developer focused on creating modern, responsive and
            scalable web applications using Next.js, Node.js, Express,
            PostgreSQL and Prisma. I love learning new technologies and turning ideas into
            real products.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3  mt-12">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                5<span className="text-orange">+</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                100<span className="text-orange">%</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Dedication
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                1<span className="text-orange">+</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Years Learning
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="order-2  md:order-1 relative"
        >
          <div className="space-y- md:space-y-">
            {/* Website Development */}
            <div className="relative flex items-center gap-5">
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-20 md:h-28 bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary mt-1" />
              </div>
              <FaLaptopCode className="ml-2 lg:ml-10 text-4xl md:text-5xl " />

              <h3 className="text-xl md:text-2xl font-semibold">
                Website Development
              </h3>
            </div>

            {/* Frontend Development */}
            <div className="relative flex items-center gap-5">
              <div className="flex flex-col items-center mt-1">
                <div className="w-[2px] h-20 md:h-28 bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary mt-1" />
              </div>

              <FaCode className="ml-2 lg:ml-10 text-4xl md:text-5xl " />

              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Development
              </h3>
            </div>

            {/* Backend Development */}
            <div className="relative flex items-center gap-5">
              <div className="flex flex-col items-center  mt-1">
                <div className="w-[2px] h-20 md:h-28 bg-primary" />
                <div className=" w-2 h-2 rounded-full bg-[#0f172a] mt-1" />
              </div>

              <FaServer className="ml-2 lg:ml-10 text-4xl md:text-5xl " />

              <h3 className="text-xl md:text-2xl font-semibold">
                Backend Development
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
