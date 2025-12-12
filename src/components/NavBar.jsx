import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  // Common styles for the links
  // Use Poppins via nav container; link sizing, padding and hover use pink accent
  const navLinkStyle =
    "cursor-pointer text-base font-medium text-gray-200 px-3 py-1 rounded-sm transition-colors duration-150 hover:text-[#F4C2C2]";

  return (
    // FIXED: Height is set to h-[60px] to match your original preference
    // Darker glassmorphism background, stronger blur and shadow, Poppins font applied
    <nav
      className="fixed top-0 left-0 w-full h-[60px] bg-[#080306]/85 backdrop-blur-lg border-b border-white/6 z-50 shadow-lg"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Container matches the height (h-full) */}
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6">
        {/* LOGO SECTION */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white select-none">
            Nethmi Navoda
          </span>
        </div>

        <div className="flex items-center gap-10">
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
