import React from "react";

export default function BackgroundLayer() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(135deg, #0a0102 0%, #150105 50%, #0d0103 100%)",
      }}
    />
  );
}
