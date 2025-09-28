import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-800 text-white mx-4 my-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center p-6 bg-gray-700 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-full mb-3 flex items-center justify-center shadow-lg">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-semibold" aria-hidden="true">
                  {skill.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="text-white text-lg font-semibold text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
