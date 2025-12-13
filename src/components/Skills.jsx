import React from "react";
import { motion } from "framer-motion";
// Ensure you have these imports correct based on your file structure
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css-3.png";
import Js from "../assets/skills/js.png";
import ReactLogo from "../assets/skills/react.png";
import Next from "../assets/skills/Next.png";
import Angular from "../assets/skills/angular.png";
import Bootstrap from "../assets/skills/Bootstrap.png";
import Tailwind from "../assets/skills/tailwind.png";
import Net from "../assets/skills/.net.png";
import Php from "../assets/skills/php.png";
import Mysql from "../assets/skills/mysql.png";

import C from "../assets/skills/c.png";
import Java from "../assets/skills/java.png";

import Figma from "../assets/skills/figma.png";
import Canva from "../assets/skills/canva.jpg";
import Git from "../assets/git.png";
import Jira from "../assets/skills/jira.png";

const IconCard = ({ img, label }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div
      className="flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-110"
      style={{
        width: "80px",
        height: "80px",
        padding: "10px",
        margin: 8,
      }}
    >
      <img
        src={img}
        alt={label}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: 8,
          objectFit: "contain",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
        }}
        className="transition-opacity opacity-95 group-hover:opacity-100"
      />
    </div>

    <span
      className="text-gray-400 font-medium tracking-wide group-hover:text-[#F4C2C2] transition-colors"
      style={{ fontSize: "0.8rem", marginTop: 2, marginBottom: 9 }}
    >
      {label}
    </span>
  </div>
);

const Skills = () => {
  // Styles for the 4 category boxes
  const boxStyle = {
    background: "rgba(20, 20, 25, 0.36)",
    border: "2px solid rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: "24px",
    boxShadow:
      "0 12px 40px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(255, 255, 255, 0.03), inset 0 1px 0 rgba(255,255,255,0.08)",
  };

  return (
    <section
      id="skills"
      className="relative z-10 flex flex-col w-full min-h-screen px-4 pt-32 pb-16 overflow-hidden lg:pt-40 lg:pb-20 lg:px-16"
      style={{
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "100px",
      }}
    >
      <h2
        className="mb-16 font-bold text-center text-white"
        style={{
          fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
          letterSpacing: "2px",
          //  textShadow: "0 0 30px rgba(0,0,0,0.25)",
        }}
      >
        My Skills
      </h2>
      <br />

      <div
        className="max-w-[1400px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "40px",
          rowGap: "40px",
        }}
      >
        {/* 1. Frontend */}
        <div
          className="px-16 pt-20 pb-20 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-lg text-[#F4C2C2] font-semibold mb-16 tracking-wider uppercase opacity-90" style={{ paddingTop: '15px' }}>
            Frontend
          </h3>
          <div className="grid grid-cols-4 gap-x-12 gap-y-14 justify-items-center">
            <IconCard img={Html} label="HTML" />
            <IconCard img={Css} label="CSS" />
            <IconCard img={Js} label="JS" />
            <IconCard img={ReactLogo} label="React" />
            <IconCard img={Next} label="Next" />
            <IconCard img={Angular} label="Angular" />
            <IconCard img={Tailwind} label="Tailwind" />
            <IconCard img={Bootstrap} label="Bootstrap" />
          </div>
        </div>

        {/* 2. Backend */}
        <div
          className="px-16 pt-20 pb-20 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-lg text-[#F4C2C2] font-semibold mb-16 tracking-wider uppercase opacity-90">
            Backend
          </h3>
          <div className="grid grid-cols-3 gap-x-16 gap-y-16 justify-items-center">
            <IconCard img={Net} label=".NET" />
            <IconCard img={Php} label="PHP" />
            <IconCard img={Mysql} label="MySQL" />
          </div>
        </div>

        {/* 3. Tools */}
        <div
          className="px-16 pt-20 pb-20 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-lg text-[#F4C2C2] font-semibold mb-16 tracking-wider uppercase opacity-90" style={{ paddingTop: '15px' }}>
            Tools
          </h3>
          <div className="grid grid-cols-4 gap-x-14 gap-y-16 justify-items-center">
            <IconCard img={Git} label="Git" />
            <IconCard img={Figma} label="Figma" />
            <IconCard img={Canva} label="Canva" />
            <IconCard img={Jira} label="Jira" />
          </div>
        </div>

        {/* 4. Languages */}
        <div
          className="px-16 pt-20 pb-20 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-lg text-[#F4C2C2] font-semibold mb-16 tracking-wider uppercase opacity-90" style={{ paddingTop: '15px' }}>
            Languages
          </h3>
          <div className="grid grid-cols-2 gap-x-24 gap-y-18 justify-items-center">
            <IconCard img={C} label="C" />
            <IconCard img={Java} label="Java" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br></br>
    </section>
  );
};

export default Skills;
