import React from "react";
import { motion } from "framer-motion";
import Nethmi from "../assets/Nethmi.jpg";

const Home = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-12 py-20 overflow-hidden lg:px-20"
      style={{
        fontFamily: "Poppins, sans-serif",
        background:
          "linear-gradient(135deg, #0a0102 0%, #150105 50%, #0d0103 100%)",
      }}
    >
      {/* Animated Dust Particles */}
      <div
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 4 + 1.5;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const moveDistance = Math.random() * 100 + 50;
          const angle = Math.random() * Math.PI * 2;
          const moveX = Math.cos(angle) * moveDistance;
          const moveY = Math.sin(angle) * moveDistance;
          const isPink = i % 7 === 0;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                backgroundColor: isPink ? "#F4C2C2" : "#FFFFFF",
                boxShadow: isPink
                  ? "0 0 10px rgba(244, 194, 194, 0.9)"
                  : "0 0 8px rgba(255, 255, 255, 0.7)",
              }}
              animate={{
                x: [0, moveX, 0],
                y: [0, moveY, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 12 + 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          );
        })}
      </div>

      <div className="relative w-full max-w-[1450px] mx-auto flex flex-row items-center justify-between gap-10 lg:gap-18 z-10">
        {/* LEFT: Text Content */}
        <motion.div
          className="flex-1 max-w-[750px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="mb-6 font-bold leading-tight text-white whitespace-nowrap"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              letterSpacing: "1.5px",
            }}
          >
            Hi, I'm Nethmi Navoda
          </h1>

          <h3
            className="text-[#F4C2C2] font-medium mb-6 leading-relaxed"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              letterSpacing: "1.2px",
            }}
          >
            Full-Stack Developer | Software Engineer | Tech Explorer
          </h3>

          <p
            className="mb-20 leading-relaxed text-white"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
              letterSpacing: "0.3px",
            }}
          >
            Driven by curiosity and a passion for building scalable
            applications,
            <br />
            I craft efficient solutions while constantly exploring new
            technologies.
            <br />
            I thrive on challenges and refuse to be confined to a single domain
            <br />
            versatility and continuous learning drive my growth as a software
            engineer.
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1VcIFrxCS3zr0PCYTFgNGy6wOYzMPyCVn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
                fontWeight: "600",
                padding: "18px 56px",
                marginTop: "30px",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow:
                  "0 25px 50px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(0, 0, 0, 0.6)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(145deg, #1a1a1a, #000000)",
              }}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#F4C2C2",
                boxShadow:
                  "0 20px 40px rgba(244, 194, 194, 0.3), 0 0 20px rgba(244, 194, 194, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-[400px] h-[400px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden shadow-2xl relative"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 25px 50px -12px rgba(244, 194, 194, 0.5)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="absolute inset-0 z-10 border-4 border-black rounded-full"></div>
            <img
              src={Nethmi}
              alt="Nethmi"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
