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
      "CricBOT is an IoT-powered cricket practice machine that automates and customizes player training. Built with Arduino and real-time sensors, it lets users set ball type, speed, delay, and count through a keypad and LCD. A mobile app enables wireless control via Wi-Fi, while safety sensors ensure reliable operation. CricBOT boosts training efficiency with smart automation and easy customization.",
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
      className="relative flex flex-col justify-center px-4 py-8 overflow-visible lg:px-20"
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      <div className="relative z-10 w-full max-w-[1100px] mx-auto">
        <h2
          className="mb-6 font-bold text-center text-white"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
            letterSpacing: "2px",
          }}
        >
          Project Highlights
        </h2> <br/>
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
            className="absolute left-0 z-20 p-2 bg-transparent rounded-full"
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

          <div className="flex justify-center w-full">
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                minHeight: 520,
                paddingBottom: 48,
              }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={p.title}
                  custom={dir}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: (d) => ({ x: d > 0 ? 360 : -360, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d) => ({ x: d > 0 ? -360 : 360, opacity: 0 }),
                  }}
                  transition={{
                    x: {
                      type: "tween",
                      duration: 0.45,
                      ease: [0.22, 0.1, 0.12, 0.96],
                    },
                    opacity: { duration: 0.22 },
                  }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="w-full max-w-[720px]"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                    background:
                      "linear-gradient(135deg, rgba(10,12,18,0.88), rgba(6,4,6,0.65))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow:
                      "0 40px 90px rgba(2,2,6,0.9), 0 10px 30px rgba(244,194,194,0.04)",
                    padding: 20,
                    borderRadius: 20,
                    willChange: "transform, opacity",
                  }}
                >
                  <div
                    className="flex flex-col gap-4 md:flex-row"
                    style={{ alignItems: "flex-start" }}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-full overflow-hidden rounded-lg md:w-5/12 bg-black/60"
                      style={{ height: "180px", minHeight: 140, padding: 8 }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-contain w-auto h-full p-2 bg-black rounded-lg"
                        style={{
                          display: "block",
                          transition: "transform .28s ease",
                          borderRadius: 12,
                          maxWidth: "100%",
                          willChange: "transform",
                        }}
                      />
                    </div>
                    <div className="flex-1" style={{ paddingBottom: 6 }}>
                      <h3
                        className="mb-1 text-xl font-semibold text-white"
                        style={{ lineHeight: 1.05 }}
                      >
                        {p.title}
                      </h3>
                      {p.role && (
                        <p
                          className="mt-1 mb-2 text-gray-300"
                          style={{ fontSize: "0.92rem" }}
                        >
                          {Array.isArray(p.role) ? p.role.join(" · ") : p.role}
                        </p>
                      )}
                      <p
                        className="mt-2 mb-3 text-gray-300"
                        style={{ fontSize: "0.95rem", lineHeight: 1.45 }}
                      >
                        {p.description}
                      </p>
                      <div
                        className="mt-3"
                        style={{ fontSize: "0.92rem", color: "#F4C2C2" }}
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
            className="absolute right-0 z-20 p-2 bg-transparent rounded-full"
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
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
