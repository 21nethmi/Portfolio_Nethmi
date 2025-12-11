import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Particles from "./components/Particles.jsx";
import BackgroundLayer from "./components/BackgroundLayer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <BackgroundLayer />
      <Particles count={60} />
      <div style={{ position: "relative", zIndex: 20 }}>
        <NavBar />
        <Home />
        <Education />
        <Skills />
      </div>
    </>
  </StrictMode>
);
