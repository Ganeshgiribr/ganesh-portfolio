import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function scrollToSection(e, href) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth",
    });
  }
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={darkMode ? "fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 shadow z-50" : "fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow z-50"}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className={darkMode ? "font-bold text-xl text-purple-400" : "font-bold text-xl text-purple-700"}>Ganesh Giri</span>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={darkMode ? "text-gray-200 hover:text-purple-400 font-medium transition-colors duration-200 cursor-pointer" : "text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 cursor-pointer"}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 ${darkMode ? "bg-purple-400" : "bg-purple-700"} mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${darkMode ? "bg-purple-400" : "bg-purple-700"} mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${darkMode ? "bg-purple-400" : "bg-purple-700"} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <button
          className={darkMode ? "ml-6 px-3 py-1 rounded-full bg-purple-700 text-white font-semibold shadow hover:bg-purple-600 transition" : "ml-6 px-3 py-1 rounded-full bg-gray-200 text-purple-700 font-semibold shadow hover:bg-purple-100 transition"}
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className={darkMode ? "md:hidden flex flex-col gap-6 px-6 py-4 bg-gray-900 shadow-lg border-t border-gray-800" : "md:hidden flex flex-col gap-6 px-6 py-4 bg-white shadow-lg border-t border-gray-200"}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setMenuOpen(false);
                }}
                className={darkMode ? "text-gray-200 hover:text-purple-400 font-medium transition-colors duration-200 cursor-pointer" : "text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 cursor-pointer"}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
