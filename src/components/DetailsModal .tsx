"use client";

import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { motion } from "motion/react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  features: string[];
  challenges_faced: string[];
  future_plans: string[];
  repo: string;
  live: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function DetailsModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-2xl p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-end mb-6">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border flex items-center justify-center border-[#FF715A] text-[#FF715A] transition-all duration-300 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Technologies */}
        <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Description</h3>

          <p className="text-gray-300 leading-8">{project.description}</p>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-orange mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* challenges faced */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Challenges Faced</h3>

          <ul className="space-y-3">
            {project.challenges_faced.map((challenge_faced) => (
              <li key={challenge_faced} className="flex items-start gap-3">
                <span className="text-orange mt-1">✓</span>
                <span>{challenge_faced}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Future Plans */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Future Plans</h3>

          <ul className="space-y-3">
            {project.future_plans.map((future_plan) => (
              <li key={future_plan} className="flex items-start gap-3">
                <span className="text-orange mt-1">✓</span>
                <span>{future_plan}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center gap-2 rounded-full bg-primary px-5 md:px-7 py-2.5 text-center font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-90"
          >
            Live
            <FaExternalLinkAlt className="text-sm" />
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center gap-2 text-center  btn-outline active:scale-90"
          >
            Repository
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
