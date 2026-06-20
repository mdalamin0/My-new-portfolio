"use client";

import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiFigma,
  SiOpenai,
  SiClaude
} from "react-icons/si";


const FigmaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 180" fill="none">
    <rect x="20" y="10" width="60" height="60" rx="30" fill="#F24E1E" />
    <rect x="80" y="10" width="60" height="60" rx="30" fill="#FF7262" />
    <rect x="20" y="70" width="60" height="60" rx="30" fill="#A259FF" />
    <rect x="80" y="70" width="60" height="60" rx="30" fill="#1ABCFE" />
    <rect x="20" y="130" width="60" height="60" rx="30" fill="#0ACF83" />
  </svg>
);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: "⚡" },
      { name: "JWT Auth", icon: "🔐" },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500" />,
      },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Figma", icon: <FigmaIcon/> },
      { name: "ChatGPT", icon: <SiOpenai className="text-green-500" /> },
      { name: "Claude", icon: <SiClaude className="text-[#D97757]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-14 container py-16">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>

        <div className="flex flex-col items-center mt-4">
          <div className="w-[2px] h-10 bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary mt-1" />
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              border border-white/10
              bg-white/[0.01]
              rounded-2xl
              p-6
              hover:border-[#FF715A]/50
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-bold text-orange mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + skillIndex * 0.08,
                    ease: "easeOut",
                  }}
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    border border-white/10
                    hover:border-[#FF715A]
                    hover:-translate-y-1
                    transition-all duration-300
                    cursor-default
                  "
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
