import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MushHubImg from "../assets/projects/MushHub.jpg";
import SilektaImg from "../assets/projects/silekta.png";
import NitrolineImg from "../assets/projects/nitroline.png";
import CricbotImg from "../assets/projects/cricbot.jpg";

const projectData = [
  {
    title: "MushHub",
    role: "Full-Stack Developer",
    techStack: ["Angular 19", "Asp.Net Core 8", "MySQL"],
    description:
      "MushHub is a full-stack e-commerce platform built for mushroom seed distribution, offering product browsing, ordering, real-time stock visibility, order tracking, secure payment slip uploads, and mini-ERP capabilities like inventory and production scheduling.",
    image: MushHubImg,
    projectLink:
      "https://www.linkedin.com/posts/nethmi-navoda-336664278_excited-to-announce-the-completion-of-activity-7357298840787435521-lGIM",
  },
  {
    title: "Silekta",
    role: "Front-End Developer",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Silekta is a web application developed for the MIS module to automate and streamline the management processes of Silekta, a paper-based production company. The system includes core ERP features such as inventory, customer, order, payroll, employee, invoice, and supplier management. It also provides report generation and an interactive dashboard to support quick, data-driven decision-making.",
    image: SilektaImg,
    projectLink: "https://github.com/MIS-Silekta/silekta-frontend",
  },
  {
    title: "NitroLine",
    role: ["Front-End Developer", "API Integration & Testing"],
    techStack: ["Next.js", "SpringBoot", "PostgreSQL"],
    description:
      "Nitroline is a web-based automobile service portal developed for the EAD module, offering a complete workflow for customers, managers, and technicians. Customers can request appointments, manage their profiles, store vehicle and service history, and communicate with technicians. Managers can assign service tasks, monitor progress, and oversee operations. Technicians can view their assigned tasks through a calendar and update the service status (start, pause, complete), with time tracking automatically calculated. Nitroline streamlines service coordination and enhances transparency across all user roles.",
    image: NitrolineImg,
    projectLink: "https://github.com/Automobile-System",
  },
  {
    title: "CricBot",
    role: "Hardware Project",
    techStack: "Arduino",
    description:
      "CricBOT is an IoT-enabled cricket practice machine designed to automate and customize training sessions for players. Built with Arduino and real-time sensor integrations, the system allows users to configure ball types, speeds, delays, and counts through a keypad and LCD interface. A dedicated mobile app provides wireless machine control via Wi-Fi, while multiple safety and error-detection sensors ensure smooth and reliable operation. CricBOT enhances training efficiency with intelligent automation and user-friendly customization.",
    image: CricbotImg,
    projectLink:
      "https://www.linkedin.com/posts/nethmi-navoda-336664278_i-am-thrilled-to-share-the-completion-of-activity-7236568603200798720-6Jl1",
  },
];

export default function ProjectSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => {
    setDir(1);
    setIdx((i) => (i + 1) % projectData.length);
  };
  const prev = () => {
    setDir(-1);
    setIdx((i) => (i - 1 + projectData.length) % projectData.length);
  };

  const p = projectData[idx];

  useEffect(() => {
    // preload images to avoid layout/content shift during transitions
    projectData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center py-8 px-4 lg:px-20 overflow-visible"
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      <div className="relative z-10 w-full max-w-[1100px] mx-auto">
        <h2
          className="text-white font-bold text-center mb-6"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
            letterSpacing: "2px",
          }}
        >
          Project Highlights
        </h2>
        <p
          className="text-gray-300 text-center max-w-[900px] mx-auto mb-8"
          style={{ lineHeight: 1.35, fontSize: "clamp(0.9rem,1.8vw,1.1rem)" }}
        >
          Showcasing projects that combine software development, hardware
          integration, and business process automation, highlighting my
          expertise in creating practical, real-world solutions.
        </p>
        <br />
        <br />

        <div className="relative flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 z-20 bg-transparent p-2 rounded-full"
            aria-label="previous"
            style={{ top: "50%", transform: "translateY(-50%)", left: "-48px" }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                fill="rgba(10,12,18,0.6)"
              />
              <path
                d="M14 7L9 12L14 17"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-full flex justify-center">
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "calc(100vh - 300px)",
              }}
            >
              <AnimatePresence mode="sync">
                <motion.div
                  key={p.title}
                  custom={dir}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: (d) => ({ x: d > 0 ? 320 : -320, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d) => ({ x: d > 0 ? -320 : 320, opacity: 0 }),
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 260, damping: 28 },
                    opacity: { duration: 0.16 },
                  }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="w-full max-w-[720px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(10,12,18,0.88), rgba(6,4,6,0.65))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow:
                      "0 40px 90px rgba(2,2,6,0.9), 0 10px 30px rgba(244,194,194,0.04)",
                    padding: 20,
                    borderRadius: 20,
                    maxHeight: "calc(100vh - 320px)",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div
                    className="flex flex-col md:flex-row gap-4"
                    style={{ alignItems: "flex-start" }}
                  >
                    <div
                      className="w-full md:w-5/12 bg-black/60 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
                      style={{ height: "28vh", minHeight: 140, padding: 8 }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="max-w-full max-h-full object-contain p-2 bg-black rounded-lg"
                        style={{
                          display: "block",
                          transition: "transform .28s ease",
                          borderRadius: 12,
                        }}
                      />
                    </div>
                    <div className="flex-1" style={{ paddingBottom: 6 }}>
                      <h3
                        className="text-white text-xl font-semibold mb-1"
                        style={{ lineHeight: 1.05 }}
                      >
                        {p.title}
                      </h3>
                      {p.role && (
                        <p
                          className="text-gray-300 mt-1 mb-2"
                          style={{ fontSize: "0.92rem" }}
                        >
                          {Array.isArray(p.role) ? p.role.join(" · ") : p.role}
                        </p>
                      )}
                      <p
                        className="text-gray-300 mt-2 mb-3"
                        style={{ fontSize: "0.95rem", lineHeight: 1.45 }}
                      >
                        {p.description}
                      </p>
                      <div
                        className="mt-3"
                        style={{
                          fontSize: "0.92rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#F4C2C2",
                        }}
                      >
                        {p.techStack &&
                          (Array.isArray(p.techStack)
                            ? p.techStack.join(" • ")
                            : p.techStack)}
                      </div>
                      {p.projectLink && (
                        <div className="mt-4">
                          <a
                            href={p.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-[#F4C2C2] no-underline px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                            style={{ textDecoration: "none" }}
                          >
                            View Project
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-20 bg-transparent p-2 rounded-full"
            aria-label="next"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              right: "-48px",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                fill="rgba(10,12,18,0.6)"
              />
              <path
                d="M10 7L15 12L10 17"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
