import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[rgba(21,1,5,0.86)] backdrop-blur-md border-b border-[#2b030a] text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-[#FFD700]">Nethmi</h1>

        <div className="space-x-6 hidden md:flex">
          <Link
            to="hero"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="tech"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            Tech
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="blogs"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            Blogs
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-lg text-[#e0e0e0] hover:text-[#FFD700] hover:-translate-y-px transition-all duration-150 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
