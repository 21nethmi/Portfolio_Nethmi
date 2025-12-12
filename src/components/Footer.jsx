import React from "react";
import GitHubIcon from "../assets/git.png";
import LinkedInIcon from "../assets/LinkedIn.png";
import MediumIcon from "../assets/medium.png";

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        className="relative flex flex-col items-center px-4 pt-24 pb-20 lg:px-20"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="w-full max-w-[1100px] mx-auto">
          <h2
            className="mb-12 font-bold text-center text-white"
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
              letterSpacing: "1px",
            }}
          >
            Contact Me
          </h2>

          <div className="mx-auto w-full max-w-[820px]">
            <div
              className="overflow-hidden rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,12,18,0.88), rgba(6,4,6,0.65))",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow:
                  "0 40px 90px rgba(2,2,6,0.9), 0 10px 30px rgba(244,194,194,0.04)",
                padding: 18,
                margin: 15,
                borderRadius: 20,
              }}
            >
              <div style={{ paddingTop: 14 }}>
                <h4
                  className="mb-2 text-xl font-semibold text-white text-center"
                  style={{ lineHeight: 1.05 }}
                >
                  Get in touch
                </h4>
                <p
                  className="mb-8 text-gray-300 text-center"
                  style={{ fontSize: "0.98rem", lineHeight: 1.45 }}
                >
                  I’m available for freelance work and collaboration. Reach out
                  via phone or email.
                </p>
               <br/>
                
                <div className="flex flex-col gap-5 w-fit mx-auto mb-8">
                  
                  {/* Phone Number */}
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        background: "rgba(244,194,194,0.18)",
                        width: 32, // CHANGE: Smaller size
                        height: 32, // CHANGE: Smaller size
                        borderRadius: 9999,
                        minWidth: 32,
                      }}
                      className="flex items-center justify-center"
                    >
                      <svg
                        width="14" // CHANGE: Smaller icon
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.07 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.78 3.03a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.4 1.98.66 3.03.78A2 2 0 0 1 22 16.92z"
                          fill="#fff"
                        /> 
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-gray-200" style={{margin:10}}>+94 715787627</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        background: "rgba(244,194,194,0.18)",
                        width: 32, // CHANGE: Smaller size
                        height: 32, // CHANGE: Smaller size
                        borderRadius: 9999,
                        minWidth: 32,
                      }}
                      className="flex items-center justify-center"
                    >
                      <svg
                        width="14" // CHANGE: Smaller icon
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 4.25L12 12.76 5.4 8.25"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:nnavoda21@gmail.com"
                      className="text-sm md:text-base !text-white no-underline hover:opacity-80 transition-opacity"
                      style={{ textDecoration: "none", color: "white",margin:10 }}
                    >
                      nnavoda21@gmail.com
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        background: "rgba(244,194,194,0.18)",
                        width: 32, // CHANGE: Smaller size
                        height: 32, // CHANGE: Smaller size
                        borderRadius: 9999,
                        minWidth: 32,
                      }}
                      className="flex items-center justify-center"
                    >
                      <svg
                        width="14" // CHANGE: Smaller icon
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-gray-200" style={{margin:10}}>Horana</span>
                  </div>
                </div>
               <br/>
                {/* Social Media Icons */}
                {/* CHANGE: Increased gap to gap-8 for more space */}
                <div className="flex items-center justify-center gap-8 mt-6 mb-2 ">
                  <a
                    href="https://www.linkedin.com/in/nethmi-navoda-336664278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      style={{
                        background: "rgba(244,194,194,0.12)",
                        padding: 8,
                        borderRadius: 8,
                        margin:8,
                      }}
                    >
                      <img
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        className="object-contain"
                        style={{ width: 28, height: 28 }}
                      />
                    </div>
                  </a>
                  <a
                    href="https://github.com/21nethmi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      style={{
                        background: "rgba(244,194,194,0.12)",
                        padding: 8,
                        borderRadius: 8,
                        margin:8,
                      }}
                    >
                      <img
                        src={GitHubIcon}
                        alt="GitHub"
                        className="object-contain"
                        style={{ width: 28, height: 28, opacity: 0.95 }}
                      />
                    </div>
                  </a>
                  <a
                    href="https://medium.com/@navodatot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      style={{
                        background: "rgba(244,194,194,0.12)",
                        padding: 8,
                        borderRadius: 8,
                        margin:8,
                      }}
                    >
                      <img
                        src={MediumIcon}
                        alt="Medium"
                        className="object-contain"
                        style={{ width: 28, height: 28 }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /><br />
      <footer className="w-full py-6 text-gray-300 bg-transparent">
        <div className="max-w-5xl px-6 mx-auto text-sm text-center">
          © 2025 Nethmi Navoda. All rights reserved.
        </div>
        <br />
      </footer>
    </>
  );
}