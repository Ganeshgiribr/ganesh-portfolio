import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 text-center bg-gray-900 text-white min-h-screen flex flex-col justify-center"
    >
      <img src="/assets/profile.jpg" alt="Ganesh Giri" className="mx-auto rounded-full w-48 h-48 mb-6 border-4 border-purple-500 shadow-lg object-cover" />
      <h1 className="text-5xl font-extrabold mb-2 text-purple-400">Ganesh Giri</h1>
      <p className="text-xl text-gray-300 mb-8">MCA Student | Aspiring Data Scientist / AI Engineer</p>
      <div className="flex justify-center gap-8">
        <a href="https://github.com/Ganeshgiribr" target="_blank" rel="noopener" className="hover:text-purple-400 font-medium transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/ganesh-b-r-ganesh-b7321b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener" className="hover:text-blue-400 font-medium transition-colors">LinkedIn</a>
        <a href="mailto:ganeshbr742002@gmail.com" className="hover:text-pink-400 font-medium transition-colors">Email</a>
      </div>
    </motion.header>
  );
}
