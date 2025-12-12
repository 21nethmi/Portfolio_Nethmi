import React from "react";
import { motion } from "framer-motion";
import SilentWave from "../assets/silent wave.png";
import ReactJsImg from "../assets/react-js.png";

const BlogCard = ({ img, title, description, link }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="block w-[520px]"
  >
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
      <div style={{ height: 200, overflow: "hidden", borderRadius: 12 }}>
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>
      <div style={{ paddingTop: 14 }}>
        <h4
          className="mb-2 text-xl font-semibold text-white"
          style={{ lineHeight: 1.05 }}
        >
          {title}
        </h4>
        <p
          className="mb-4 text-gray-300"
          style={{ fontSize: "0.98rem", lineHeight: 1.45 }}
        >
          {description}
        </p>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-[#F4C2C2] inline-block no-underline"
            style={{ textDecoration: "none" }}
          >
            Read Story
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Blog() {
  const blogs = [
    {
      title: "Silent Waves — Healing Minds",
      description:
        "Silent waves Healing Minds-A new therapy is emerging—using nature’s unheard sounds to support mental well-being",
      img: SilentWave,
      link: "https://medium.com/@navodatot/silent-waves-healing-minds-b03e8a622179",
    },
    {
      title: "React.js Essentials",
      description:
        "A clear and simple breakdown of the key React concepts every beginner must know.",
      img: ReactJsImg,
      link: "https://medium.com/@navodatot/react-b7f0f759e02f",
    },
  ];

  return (
    <section
      id="blog"
      // INCREASED GAP: Changed mt-28 to mt-40 and lg:mt-32 to lg:mt-48
      className="relative flex flex-col justify-center px-6 py-10 mt-40 lg:px-20 lg:mt-48"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="relative z-10 w-full max-w-[1100px] mx-auto">
        <motion.h2
          className="mb-6 font-bold text-center text-white"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
            letterSpacing: "2px",
          }}
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Blogs
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((b) => (
            <BlogCard
              key={b.title}
              img={b.img}
              title={b.title}
              description={b.description}
              link={b.link}
            />
          ))}
        </div>
      </div><br /><br /><br /><br />
    </section>
  );
}
