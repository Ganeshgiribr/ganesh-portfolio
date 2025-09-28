import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-800 text-white mx-4 my-10"
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-400">Contact Me</h2>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-2">Let's Talk</h3>
        <p className="text-gray-400">Submit the form below to get in touch with me</p>
      </div>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
        className="max-w-lg mx-auto bg-gray-700 p-8 rounded-xl flex flex-col gap-6 border border-gray-600"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <label htmlFor="bot-field">Don’t fill this out if you're human:</label>
          <input id="bot-field" name="bot-field" />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-600 text-white border border-gray-500 placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-600 text-white border border-gray-500 placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded bg-gray-600 text-white border border-gray-500 placeholder-gray-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded transition"
        >
          Send Message
        </button>
      </motion.form>
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://linkedin.com/in/ganeshgiri"
          target="_blank"
          className="text-2xl text-purple-400 hover:text-purple-300 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ganeshgiri"
          target="_blank"
          className="text-2xl text-purple-400 hover:text-purple-300 transition"
        >
          GitHub
        </a>
        <a
          href="mailto:ganeshgiri@example.com"
          className="text-2xl text-purple-400 hover:text-purple-300 transition"
        >
          Email
        </a>
      </div>
    </motion.section>
  );
}