import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  // Common styles for the links
  const navLinkStyle =
    "cursor-pointer text-base font-medium text-gray-200 px-3 py-1 rounded-sm transition-colors duration-150 hover:text-[#F4C2C2]";

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[60px] bg-[#080306]/85 backdrop-blur-lg z-50 shadow-lg"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6">
        {/* LOGO SECTION */}
        <div className="flex items-center" style={{ marginLeft: "40px" }}>
          <span className="text-2xl font-bold text-white select-none">
            Nethmi Navoda
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <div
          className="flex items-center"
          style={{ gap: "32px", marginRight: "40px" }}
        >
          <Link to="home" smooth duration={500} className={navLinkStyle}>
            Home
          </Link>
          <Link to="education" smooth duration={500} className={navLinkStyle}>
            Education
          </Link>
          <Link to="skills" smooth duration={500} className={navLinkStyle}>
            Skills
          </Link>
          <Link to="projects" smooth duration={500} className={navLinkStyle}>
            Projects
          </Link>
          <Link to="blogs" smooth duration={500} className={navLinkStyle}>
            Blogs
          </Link>
          <Link to="contact" smooth duration={500} className={navLinkStyle}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
