"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "The Dragon News Hub",
    description:
      "I recently developed a fully responsive news web application where users can explore categorized news, view detailed articles, and authenticate securely.",
    image: "/images/project1.jpg",
    type: "Frontend",
    technologies: ["React.js", "Tailwind CSS", "Context API", "Firebase"],
    repo: "https://github.com/mdalamin0/The-Dragon-News-Hub",
    live: "https://the-dragon-news-hub.web.app/category/0",
  },
  {
    id: 2,
    title: "Hero App House",
    description:
      "A responsive web application that allows users to explore apps, view detailed information, and manage installations with persistent local storage support.",
    image: "/images/project2.jpg",
    type: "Frontend",
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "LocalStorage",
      "Axios",
    ],
    repo: "https://github.com/mdalamin0/Hero-IO-App-House",
    live: "https://hero-io-app-house.vercel.app/",
  },
  {
    id: 3,
    title: "DevPulse Issue Tracker API",
    description:
      "A RESTful Issue Tracking System built with Node.js, Express, and PostgreSQL with role-based access control for managing bugs and feature requests.",
    image: "/images/project3.png",
    type: "Backend",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "bcryptjs ",
    ],
    repo: "https://github.com/mdalamin0/DevPulse",
    live: "https://dev-pulse-six-mu.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 container py-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>

        <div className="flex flex-col items-center mt-5">
          <div className="w-[2px] h-10 bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary mt-1" />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.14,
              ease: "circInOut",
            }}
            className=" group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF715A]/30 hover:shadow-[0_15px_35px_rgba(255,113,90,0.12)]"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              <span
                className={`absolute top-3 right-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  project.type === "Full Stack"
                    ? "bg-[#FF715A]/80"
                    : project.type === "Frontend"
                      ? "bg-blue-500/80"
                      : "bg-green-500/80"
                }`}
              >
                {project.type}
              </span>
            </div>

            {/* Content */}
            <div className="p-2 md:p-6 flex flex-col flex-1">
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-4 pt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center  btn-outline active:scale-90"
                >
                  Repository
                  <FaGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary px-3 sm:px-4 md:px-7 py-2.5 text-center font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-90"
                >
                  Live
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
