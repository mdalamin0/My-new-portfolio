"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import DetailsModal, { Project } from "./DetailsModal ";

const projects = [
  {
    id: 1,
    title: "GearUp - Sports & Outdoor Gear Rental Platform",
    description:
      "GearUp is a full-stack sports and outdoor gear rental platform that allows customers to discover and rent equipment, providers to manage their gear and rental orders, and administrators to oversee the entire platform. The application features role-based authentication and dashboards, protected routes with intelligent redirection, gear search and filtering, rental management with date-based pricing and stock validation, SSLCommerz payment integration, customer reviews, and Google authentication for customers. Built with Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, and Prisma ORM, the project demonstrates full-stack development skills across frontend architecture, REST API development, authentication, authorization, database management, payment processing, validation, error handling, and responsive UI design.",

    image: "/images/project.png",

    type: "Full Stack",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "SSLCommerz",
    ],

    features: [
      "Role-based authentication with separate Customer, Provider, and Admin dashboards.",

      "Built gear discovery with category filtering, search, sorting, and provider inventory management.",

      "Implemented rental booking with date-based pricing, quantity validation, and real-time stock checks.",

      "Integrated SSLCommerz for secure payment initiation, verification, and transaction tracking.",

      "Added customer reviews with validation based on completed rental and returned gear.",

      "Developed responsive UI with protected routes, reusable components, loading states, and user-friendly error handling.",
    ],

    challenges_faced: [
      "While implementing role-based authentication, I faced challenges in protecting dashboard routes and maintaining proper login redirection.",

      "While building the rental system, I faced challenges in handling rental dates, stock, quantity, and automatic price calculation.",

      "While integrating SSLCommerz, I faced challenges in managing payment initiation, verification, and the complete rental payment flow.",

      "While connecting the Next.js frontend with the Express.js backend, I faced challenges in handling authentication cookies, API errors, and secure communication.",
    ],

    future_plans: [
      "Implement advanced gear availability management based on overlapping rental dates.",

      "Add provider analytics with rental revenue, popular gear, and order performance statistics.",

      "Introduce wishlist and favorite gear functionality for customers.",
    ],

    frontendRepo: "https://github.com/mdalamin0/GearUp-Frontend",
    backendRepo: "https://github.com/mdalamin0/GearUp-Backend",

    live: "https://gear-up-frontend-one.vercel.app",
  },
  {
    id: 2,
    title: "DevAssess - Developer Assessment & Coding Platform",
    description:
      "DevAssess is a full-stack developer assessment platform that allows recruiters to create and manage assessments, build reusable MCQ problem banks, invite candidates, evaluate submissions, and track results, while candidates can accept invitations and take timed assessments. The platform features role-based authentication and dashboards, protected routes, assessment and problem management, candidate invitations, timed assessment workflows, result tracking, audit logs, and bKash payment integration for paid assessments. Built with Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, Prisma ORM, Redis, JWT, and Zod, the project demonstrates full-stack development skills across frontend architecture, REST API development, authentication, authorization, database management, payment processing, validation, caching, and responsive UI design.",

    image: "/images/dev-assess.png",

    type: "Full Stack",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "JWT",
      "bKash",
      "Zod",
    ],

    features: [
      "Built recruiter assessment workflows with Next.js, Express & PostgreSQL, streamlining assessment creation, candidate invitations, timed evaluation, and result tracking.",
      "Engineered reusable MCQ problem management with React, Prisma & Zod, reducing repetitive assessment setup and improving question consistency.",
      "Implemented candidate invitation workflows with Express & Nodemailer, automatically notifying candidates by email to ensure assessment invitations are not missed.",
      "Integrated bKash Tokenized Checkout with Express & PostgreSQL, ensuring paid assessments are published only after successful payment verification and validation.",
      "Developed secure role-based dashboards with Next.js, JWT & Redis, enabling candidates, recruiters, and admins to manage assessments and platform activities efficiently.",
    ],

    challenges_faced: [
      "While implementing role-based authentication, I faced challenges in protecting dashboard routes and maintaining proper role-based access and redirection.",

      "While building the assessment workflow, I faced challenges in managing invitations, assessment availability, timed attempts, answer submission, and result generation.",

      "While integrating bKash, I faced challenges in handling payment initiation, token management, verification, failed payments, and payment-gated assessment publishing.",

      "While connecting the Next.js frontend with the Express.js backend, I faced challenges in handling authentication cookies, API errors, caching, and secure communication.",
    ],

    future_plans: [
      "Introduce public practice assessments with instant auto-evaluation and result feedback for candidates.",

      "Add advanced recruiter analytics with assessment performance, candidate scores, and evaluation statistics.",

      "Expand the assessment system with additional question types and more detailed candidate performance reports.",
    ],

    frontendRepo:
      "https://github.com/mdalamin0/Developer-Assessment-Coding-Platform-Frontend",

    backendRepo:
      "https://github.com/mdalamin0/Developer-Assessment-Coding-Platform",

    live: "https://developer-assessment-coding-platfor-pi.vercel.app",
  },
  {
    id: 3,
    title: "The Dragon News Hub",
    description:
      "The Dragon News Hub is a modern and fully responsive news web application that provides users with an engaging and seamless news-reading experience. The platform allows users to explore news through category-based filtering, access detailed articles via dynamic routing, and securely authenticate using Email/Password, Google, or GitHub accounts. It features protected routes with intelligent redirection to preserve user navigation flow, a dynamic news details page with extended content viewing, and real-time elements such as a live date display and breaking news marquee. Built with React.js, React Router, Context API, and Firebase Authentication, the application demonstrates strong frontend development skills in authentication, state management, routing, responsive UI design, and modern React architecture while delivering a clean, user-friendly, and performance-focused experience across all devices.",
    image: "/images/news-dragon.jpg",
    type: "Frontend",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Context API",
      "Firebase",
    ],
    features: [
      "Developed a responsive news portal with category-based filtering and dynamic content rendering.",
      "Implemented protected routes with authentication (Email/Password, Google, GitHub) using Firebase.",
      "Built a dynamic news details page with conditional navigation (redirect to login if unauthenticated).",
      "Integrated real-time UI features like live date display and latest news marquee",
      "Responsive design for all devices",
    ],
    challenges_faced: [
      "Implementing protected routes while ensuring users are redirected back to their intended page after successful login.",
      "Creating a responsive layout that provides an optimal reading experience across desktop, tablet, and mobile devices.",
    ],
    future_plans: [
      "Integrate a real-time news API to display live and continuously updated news content.",
      "Add bookmarking functionality so users can save articles for later reading.",
      "Implement a search feature to help users quickly find news articles by keywords.",
      "Add a comment and reaction system to increase user engagement.",
    ],
    repo: "https://github.com/mdalamin0/The-Dragon-News-Hub",
    live: "https://the-dragon-news-hub.web.app/category/0",
  },
];

const cardVariants: Variants= {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 14,
      delay:
        typeof window !== "undefined" && window.innerWidth >= 768
          ? index * 0.15
          : 0,
    },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="scroll-mt-20 container py-12">
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
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index} 
            viewport={{
              once: true,
              amount:
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? 0.1
                  : 0.2,
            }}
            whileHover={{
              y: -8,
              borderColor: "rgba(255, 113, 90, 0.3)",
              boxShadow: "0px 15px 35px rgba(255, 113, 90, 0.12)",
            }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-shadow duration-300"
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
                  {project.description.length > 150
                    ? `${project.description.slice(0, 150)}...`
                    : project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-4 pt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary px-3 sm:px-4 md:px-7 py-2.5 text-center font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-90"
                >
                  Live
                  <FaExternalLinkAlt className="text-sm" />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 text-center btn-outline active:scale-90"
                >
                  Details
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <DetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
