import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Education from "./components/Education.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <NavBar />
      <Home />
      <Education />
    </>
  </StrictMode>
);
