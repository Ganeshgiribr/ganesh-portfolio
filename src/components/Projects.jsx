import { projects } from "../data/projects";
import { motion } from "framer-motion";
import React, { useRef } from "react";

function useTilt() {
  const ref = useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    function handleMouseMove(e) {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * 8;
      node.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    }
    function handleMouseLeave() {
      node.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return ref;
}

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-800 text-white mx-4 my-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => {
          const tiltRef = useTilt();
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              ref={tiltRef}
              className="bg-gray-700 rounded-xl shadow-lg overflow-hidden group border border-gray-600 will-change-transform"
              style={{ transition: "transform 0.2s cubic-bezier(.03,.98,.52,.99)" }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
