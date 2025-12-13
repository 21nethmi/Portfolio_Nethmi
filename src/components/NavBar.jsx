import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  // Common styles for the links
  const navLinkStyle =
    "cursor-pointer text-base font-medium text-gray-200 px-3 py-1 rounded-sm transition-colors duration-150 hover:text-[#F4C2C2]";

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[60px] z-50"
      style={{
        fontFamily: "Poppins, sans-serif",
        background:
          "linear-gradient(135deg, rgba(40,40,45,0.92), rgba(30,30,35,0.88))",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(255,255,255,0.02)",
      }}
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
          <Link
            to="home"
            smooth
            duration={500}
            offset={-60}
            className={navLinkStyle}
          >
            Home
          </Link>
          <Link
            to="education"
            smooth
            duration={500}
            offset={-60}
            className={navLinkStyle}
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth
            duration={500}
            offset={-80}
            className={navLinkStyle}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className={navLinkStyle}
          >
            Projects
          </Link>
          <Link
            to="blogs"
            smooth
            duration={500}
            offset={-80}
            className={navLinkStyle}
          >
            Blogs
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-60}
            className={navLinkStyle}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
