import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-14 text-center bg-gray-800 text-white mx-4 my-10"
    >
      <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-lg">I am an MCA student and aspiring Data Scientist / AI Engineer. I love building data-driven solutions, predictive models, and modern web apps. Explore my work and experience below!</p>
    </motion.section>
  );
}
