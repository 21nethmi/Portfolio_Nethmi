import React from "react";
import { motion } from "framer-motion";

export default function Particles({ count = 60 }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 5, pointerEvents: "none" }}
    >
      {[...Array(count)].map((_, i) => {
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
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              borderRadius: "9999px",
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
  );
}
