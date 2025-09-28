import { experience } from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-white text-gray-900 rounded-3xl shadow-lg mx-4 my-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">Work Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-purple-700">{exp.role} @ {exp.company}</h3>
            <p className="text-gray-500">{exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
        <div className="text-center mt-10">
          <a href="/GaneshGiri_CV.pdf" download className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}
