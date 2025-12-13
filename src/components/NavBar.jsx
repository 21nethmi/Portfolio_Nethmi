import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="flex items-center ml-desktop">
          <span className="text-2xl font-bold text-white select-none">
            Nethmi Navoda
          </span>
        </div>

        {/* NAVIGATION LINKS (desktop) */}
        <div className="desktop-nav hidden lg:flex items-center gap-[32px] mr-desktop">
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

        {/* Mobile hamburger */}
        <div className="mobile-hamburger lg:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="p-2 mr-4"
            style={{ background: "transparent", borderRadius: 6 }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7H20"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="mobile-menu lg:hidden fixed left-0 right-0 top-[60px] bg-black/70 backdrop-blur z-40"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center gap-3">
            <Link
              to="home"
              smooth
              duration={500}
              offset={-60}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="education"
              smooth
              duration={500}
              offset={-60}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              to="skills"
              smooth
              duration={500}
              offset={-80}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="blogs"
              smooth
              duration={500}
              offset={-80}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-60}
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
