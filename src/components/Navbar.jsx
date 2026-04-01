import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Education", href: "#education" },
    { name: "Training", href: "#training-certificates" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto mt-4 px-4 md:px-6">
          <div className="glass neon-border rounded-full px-5 md:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full glass neon-border flex items-center justify-center text-cyan-300">
                <FaRobot />
              </div>

              <div>
                <h1 className="text-lg md:text-xl font-bold gradient-text">
                  Pratush Rawat
                </h1>
                <p className="text-[10px] md:text-xs text-slate-400 tracking-[0.2em] uppercase">
                  AI Portfolio Interface
                </p>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 text-sm text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-300 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 rounded-full neon-button text-white font-medium hover:scale-105 transition"
            >
              Initialize Contact
            </a>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-11 h-11 rounded-full glass neon-border flex items-center justify-center text-cyan-300"
            >
              <HiMenuAlt3 size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[78%] max-w-sm glass neon-border border-r-0 rounded-l-[28px] p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xl font-bold gradient-text">Menu Panel</h2>
              <p className="text-xs text-slate-400 tracking-[0.18em] uppercase mt-1">
                Navigation System
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-11 h-11 rounded-full glass neon-border flex items-center justify-center text-cyan-300"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="glass rounded-2xl px-5 py-4 text-slate-200 hover:text-cyan-300 hover:translate-x-1 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-5 py-4 rounded-2xl neon-button text-white font-semibold"
            >
              Initialize Contact
            </a>
          </div>

          {/* TODO: if you want resume button add here */}
        </div>
      </div>
    </>
  );
}

export default Navbar;