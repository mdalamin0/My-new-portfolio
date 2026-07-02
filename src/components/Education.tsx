"use client";

import { motion } from "motion/react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    title: "Diploma in Engineering",
    field: "Computer Technology",
    institution: "Munshiganj Polytechnic Institute",
    year: "Session: 2020 - 2024",
    icon: <FaGraduationCap />,
    result: "CGPA: 3.47",
  },
  {
    title: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Bhabanipur High School",
    year: "Passed: 2020",
    icon: <FaSchool />,
    result: "GPA: 4.72",
  },
];

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20 container pt-16 pb-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Educations</h2>

        <div className="flex flex-col items-center mt-4">
          <div className="w-[2px] h-10 bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary mt-1" />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-primary" />

        {educationData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className={`relative mb-10 flex items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-[#0f172a] z-10" />

            {/* Card */}
            <div
              className="
                w-full md:w-[45%]
                border border-white/10
                rounded-2xl
                p-6
                hover:border-[#FF715A]/50
                transition-all duration-300
                group
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-xl
                    bg-[#FF715A]/10
                    text-orange
                    text-3xl
                    flex items-center justify-center
                    shrink-0
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-orange mt-1">{item.field}</p>

                  <p className="text-gray-400 mt-2">{item.institution}</p>

                  <p className="text-gray-500 text-sm mt-1">{item.year}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;