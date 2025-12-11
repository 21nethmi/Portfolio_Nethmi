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
  <div className="flex flex-col items-center gap-10 group">
    <div
      className="flex items-center justify-center rounded-2xl transition-all duration-300 transform group-hover:-translate-y-4 group-hover:shadow-[0_22px_80px_rgba(244,194,194,0.32)]"
      style={{
        width: "70px",
        height: "70px",
        padding: "12px",
        margin: 15,
        background:
          "linear-gradient(145deg, rgba(30,30,30,0.66), rgba(10,10,10,0.92))",
        boxShadow:
          "10px 12px 50px rgba(0,0,0,0.65), -8px -8px 28px rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.035)",
        borderRadius: "16px",
      }}
    >
      <img
        src={img}
        alt={label}
        style={{
          width: "64px",
          height: "64px",
          objectFit: "contain",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.45))",
        }}
        className="transition-opacity opacity-95 group-hover:opacity-100"
      />
    </div>

    <span
      className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-[#F4C2C2] transition-colors"
      style={{ marginTop: 12 }}
    >
      {label}
    </span>
  </div>
);

const Skills = () => {
  // Styles for the 4 category boxes
  const boxStyle = {
    background: "rgba(20, 20, 25, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    minHeight: "300px",
  };

  return (
    <section
      className="relative z-10 w-full px-6 py-16 overflow-visible lg:px-20"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        className="mb-16 font-bold text-center text-white"
        style={{
          fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
          letterSpacing: "3px",
          textShadow: "0 0 30px rgba(0,0,0,0.25)",
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
          gap: "48px",
          rowGap: "56px",
        }}
      >
        {/* 1. Frontend */}
        <div
          // FIXED: Changed minHeight to 'auto' and added 'pb-16' 
          // to ensure the card grows with content and text doesn't touch the border
          className="p-16 pb-16 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={{ ...boxStyle, minHeight: "auto", height: "auto" }}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Frontend
          </h3>
          <div className="grid grid-cols-4 gap-x-20 gap-y-24 justify-items-center">
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
          // FIXED: Removed 'justify-center' so Title stays at the top.
          className="p-16 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Backend
          </h3>
          {/* Added 'my-auto' to this container. This pushes the logos to the vertical center 
              of the remaining space, while the Title stays at the top. */}
          <div className="grid grid-cols-3 my-auto gap-x-36 gap-y-28 justify-items-center">
            <IconCard img={Net} label=".NET" />
            <IconCard img={Php} label="PHP" />
            <IconCard img={Mysql} label="MySQL" />
          </div>
        </div>

        {/* 3. Tools */}
        <div
          className="p-16 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Tools
          </h3>
          <div className="grid grid-cols-4 gap-x-28 gap-y-28 justify-items-center">
            <IconCard img={Git} label="Git" />
            <IconCard img={Figma} label="Figma" />
            <IconCard img={Canva} label="Canva" />
            <IconCard img={Jira} label="Jira" />
          </div>
        </div>

        {/* 4. Languages */}
        <div
          className="p-16 flex flex-col items-center hover:bg-white/[0.02] transition-colors duration-500"
          style={boxStyle}
        >
          <h3 className="text-xl text-[#F4C2C2] font-semibold mb-14 tracking-wider uppercase opacity-90">
            Languages
          </h3>
          <div className="grid grid-cols-2 my-auto gap-x-40 gap-y-28 justify-items-center">
            <IconCard img={C} label="C" />
            <IconCard img={Java} label="Java" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;