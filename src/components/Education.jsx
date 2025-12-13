import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import UomLogo from "../assets/UOM logo.jpg";
import FhsLogo from "../assets/FHS logo.jpg";
import ConventLogo from "../assets/convent logo.jpg";
import RoyalLogo from "../assets/Royal_College,_Horana_Logo.jpeg";

const Education = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null); // { id, placement }
  const logoRefs = useRef({});

  const handleMouseEnter = (id) => {
    const el = logoRefs.current[id];
    const cardApproxHeight = 240; // px, approximate card height
    if (el && typeof window !== "undefined") {
      const rect = el.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const placement = spaceBelow < cardApproxHeight + 20 ? "top" : "bottom";
      setHoveredLogo({ id, placement });
    } else {
      setHoveredLogo({ id, placement: "bottom" });
    }
  };

  const educationData = [
    {
      id: "uom",
      logo: UomLogo,
      position: "bottom",
      name: "University of Moratuwa Sri Lanka",
      period: "2023 - Present",
      details: [
        "BSc (Hons) in Information Technology",
        "Faculty of IT",
        "CGPA - 3.52",
      ],
    },
    {
      id: "fhs",
      logo: FhsLogo,
      position: "top",
      name: "Ferguson High School, Ratnapura",
      period: "2019 - 2022",
      details: [
        "Completed the Maths stream with strong A/L results, laying the foundation for my tech journey.",
        "Performance: Combined Maths B | Physics B | Chemistry A",
      ],
    },
    {
      id: "convent",
      logo: ConventLogo,
      position: "bottom",
      name: "Convent of the Child Jesus Ratnapura",
      period: "2016 - 2018",
      details: [
        "Achieved 9A passes at the G.C.E. O/Ls, marking a proud academic milestone.",
      ],
    },
    {
      id: "royal",
      logo: RoyalLogo,
      position: "top",
      name: "Royal College Horana",
      period: "2008 - 2016",
      details: [
        "Took my first steps in learning during primary school, where my curiosity began to grow.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center py-16 lg:py-20 px-8 lg:px-20 overflow-visible"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* particles moved to global Particles component */}

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          // Added mb-24 to push the logos down (Gap between topic and timeline)
          className="mb-24 font-bold text-center text-white"
          style={{
            // smaller negative margin to reduce large gap between sections
            marginTop: "-6rem",
            fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
            letterSpacing: "2px",
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <br />
        {/* Timeline Container */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Horizontal Timeline Bar */}
          <div className="relative">
            {/* The Line */}
            <div
              className="absolute left-0 right-0 h-[2px] top-1/2 transform -translate-y-1/2 w-full"
              style={{
                background: "rgba(244, 194, 194, 0.8)",
                boxShadow: "0 0 10px rgba(244,194,194,0.5)",
                // Lowered Z-index so it sits BEHIND the logos
                zIndex: 0,
                borderRadius: 4,
              }}
            />

            {/* Logos Container */}
            {/* Increased Z-index to 10 to sit ON TOP of the line */}
            <div className="relative z-10 flex items-center justify-between py-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative flex flex-col items-center overflow-visible"
                  style={{ flex: "0 0 auto" }}
                  ref={(el) => (logoRefs.current[edu.id] = el)}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    type: "spring",
                    stiffness: 220,
                  }}
                  onMouseEnter={() => handleMouseEnter(edu.id)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  {/* Logo Circle */}
                  <motion.div
                    className="relative w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer overflow-visible"
                    style={{
                      boxShadow:
                        hoveredLogo === edu.id
                          ? "0 0 30px rgba(244, 194, 194, 1), 0 8px 30px rgba(0, 0, 0, 0.6)"
                          : "0 4px 20px rgba(0, 0, 0, 0.5)",
                      border: "2px solid",
                      borderColor:
                        hoveredLogo === edu.id ? "#F4C2C2" : "#ffffff",
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -6,
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.name}
                      className="w-[48px] h-[48px] object-cover rounded-full"
                    />
                  </motion.div>

                  {/* Popout Cards */}
                  {hoveredLogo?.id === edu.id &&
                  (edu.id === "fhs" || edu.id === "convent") ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 26,
                      }}
                      className="absolute z-50 transform -translate-x-1/2 left-1/2"
                      style={{
                        width: 420,
                        maxWidth: "92vw",
                        top: "100%",
                        marginTop: 12,
                      }}
                    >
                      <div
                        className="overflow-hidden rounded-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow:
                            "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
                          padding: "12px 14px",
                          borderRadius: 12,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-[44px] h-[44px] rounded-full bg-white overflow-hidden flex-shrink-0 border"
                            style={{ borderColor: "rgba(255,255,255,0.12)" }}
                          >
                            <img
                              src={edu.logo}
                              alt={edu.name}
                              className="object-cover w-full h-full rounded-full"
                            />
                          </div>
                          <div className="flex flex-col justify-center flex-1 min-w-0">
                            <h4
                              className="font-semibold text-white truncate"
                              style={{
                                fontSize: "1rem",
                                lineHeight: 1.05,
                                margin: 10,
                              }}
                            >
                              {edu.name}
                            </h4>
                            <p
                              className="text-[#F4C2C2]"
                              style={{
                                fontSize: "0.88rem",
                                margin: 10,
                              }}
                            >
                              {edu.period}
                            </p>
                          </div>
                        </div>

                        <div
                          className="mt-3"
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.03)",
                            paddingTop: 10,
                          }}
                        >
                          {edu.details.map((d, i) => (
                            <p
                              key={i}
                              className="text-gray-200"
                              style={{
                                fontSize: "0.92rem",
                                lineHeight: 1.55,
                                marginTop: i ? 8 : 0,
                              }}
                            >
                              {d}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : hoveredLogo?.id === edu.id ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 26,
                      }}
                      className="absolute z-50 transform -translate-x-1/2 left-1/2"
                      style={{
                        width: 420,
                        maxWidth: "92vw",
                        ...(hoveredLogo?.placement === "bottom"
                          ? { top: "100%", marginTop: 12 }
                          : { bottom: "100%", marginBottom: 12 }),
                      }}
                    >
                      <div
                        className="overflow-hidden rounded-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow:
                            "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
                          padding: "12px 14px",
                          borderRadius: 12,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-[48px] h-[48px] rounded-full bg-white overflow-hidden flex-shrink-0 border"
                            style={{ borderColor: "rgba(255,255,255,0.12)" }}
                          >
                            <img
                              src={edu.logo}
                              alt={edu.name}
                              className="object-cover w-full h-full rounded-full"
                            />
                          </div>
                          <div className="flex flex-col justify-center flex-1 min-w-0">
                            <h4
                              className="font-semibold text-white truncate"
                              style={{
                                fontSize: "1rem",
                                lineHeight: 1.05,
                                margin: 10,
                              }}
                            >
                              {edu.name}
                            </h4>
                            <p
                              className="text-[#F4C2C2]"
                              style={{
                                fontSize: "0.88rem",
                                margin: 10,
                              }}
                            >
                              {edu.period}
                            </p>
                          </div>
                        </div>

                        <div
                          className="mt-3"
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.03)",
                            paddingTop: 10,
                          }}
                        >
                          {edu.details.map((d, i) => (
                            <p
                              key={i}
                              className="text-gray-200"
                              style={{
                                fontSize: "0.92rem",
                                lineHeight: 1.55,
                                marginTop: i ? 8 : 0,
                              }}
                            >
                              {d}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
