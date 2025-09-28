import Navbar from "./components/Navbar";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <div className="pt-20 relative z-10">
        <section id="home">
          <Header />
        </section>
        <div className="-mt-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
            <path fill="url(#wave1)" fillOpacity="1" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"></path>
            <defs>
              <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section id="about">
          <About />
        </section>
        <div className="-mt-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
            <path fill="url(#wave2)" fillOpacity="1" d="M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z"></path>
            <defs>
              <linearGradient id="wave2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section id="skills">
          <Skills />
        </section>
        <div className="-mt-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
            <path fill="url(#wave3)" fillOpacity="1" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"></path>
            <defs>
              <linearGradient id="wave3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section id="projects">
          <Projects />
        </section>
        <div className="-mt-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
            <path fill="url(#wave4)" fillOpacity="1" d="M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z"></path>
            <defs>
              <linearGradient id="wave4" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section id="contact">
          <Contact />
        </section>
        <footer className="py-10 text-center text-white rounded-t-3xl relative overflow-hidden">
          <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 opacity-80 blur-lg"></div>
          <span className="relative z-10 font-semibold text-lg">&copy; 2025 Ganesh Giri. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
