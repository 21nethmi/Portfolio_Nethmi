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
import Git from "../assets/skills/github.png";
import Jira from "../assets/skills/jira.png";

const IconCard = ({ img, label }) => (
  <div className="flex flex-col items-center gap-6 group">
    <div
      className="flex items-center justify-center rounded-2xl transition-all duration-300 transform group-hover:-translate-y-3 group-hover:shadow-[0_18px_60px_rgba(244,194,194,0.28)]"
      style={{
        width: "56px",
        height: "56px",
        padding: "8px",
        margin: 10,
        background:
          "linear-gradient(145deg, rgba(30,30,30,0.66), rgba(10,10,10,0.92))",
        boxShadow:
          "8px 10px 34px rgba(0,0,0,0.6), -6px -6px 20px rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.03)",
        borderRadius: "12px",
      }}
    >
      <img
        src={img}
        alt={label}
        style={{
          width: "48px",
          height: "48px",
          objectFit: "contain",
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.42))",
        }}
        className="transition-opacity opacity-95 group-hover:opacity-100"
      />
    </div>

    <span
      className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-[#F4C2C2] transition-colors"
      style={{ marginTop: 8, marginBottom: 12 }}
    >
      {label}
    </span>
  </div>
);

const Skills = () => {
  // Styles for the 4 category boxes
  const boxStyle = {
    background: "rgba(20, 20, 25, 0.36)",
    border: "1px solid rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.28)",
    minHeight: "220px",
  };

  return (
    <section
      className="relative z-10 w-full px-4 py-8 overflow-hidden lg:px-16"
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "calc(100vh - 120px)",
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
        className="max-w-[1200px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "28px",
          rowGap: "32px",
        }}
      >
        {/* 1. Frontend */}
        <div
          className="p-12 pb-12 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={{ ...boxStyle, minHeight: "auto", height: "auto" }}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Frontend
          </h3>
          <div className="grid grid-cols-4 gap-x-10 gap-y-12 justify-items-center">
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
          className="p-12 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Backend
          </h3>
          {/* Added 'my-auto' to this container. This pushes the logos to the vertical center 
              of the remaining space, while the Title stays at the top. */}
          <div className="grid grid-cols-3 my-auto gap-x-18 gap-y-20 justify-items-center">
            <IconCard img={Net} label=".NET" />
            <IconCard img={Php} label="PHP" />
            <IconCard img={Mysql} label="MySQL" />
          </div>
        </div>

        {/* 3. Tools */}
        <div
          className="p-12 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
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
          className="p-12 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Languages
          </h3>
          <div className="grid grid-cols-2 my-auto gap-x-18 gap-y-16 justify-items-center">
            <IconCard img={C} label="C" />
            <IconCard img={Java} label="Java" />
          </div>
        </div>
      </div><br /><br /><br/>
    </section>
  );
};

export default Skills;
