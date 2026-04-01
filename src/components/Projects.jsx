import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaRobot } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        Project Systems
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-slate-300 leading-relaxed mb-14"
      >
        These are some of the major systems and full stack applications I have
        built, focused on modern user experience, backend logic, authentication,
        dashboards, and futuristic digital interfaces.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-[28px] overflow-hidden p-6 robot-card-hover group"
          >
            {/* Top Project Preview */}
            <div className="relative h-56 rounded-2xl overflow-hidden border border-cyan-300/10 mb-6 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/15 flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-2xl glass neon-border flex items-center justify-center text-cyan-300 mb-4">
                    <FaRobot size={24} />
                  </div>
                  <p className="text-cyan-300 font-semibold text-lg">
                    Holographic Preview
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    {/* TODO: add project screenshot in projects.js */}
                    Add project screenshot here later
                  </p>
                </div>
              )}

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 border border-cyan-300/20 text-cyan-300 text-xs uppercase tracking-[0.2em]">
                {project.status}
              </div>
            </div>

            {/* Project Title */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white leading-snug">
                {project.title}
              </h3>

              <div className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-cyan-300 shrink-0">
                <FaRobot />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 mt-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 border border-cyan-300/20 text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full neon-button text-white font-medium flex items-center gap-2 hover:scale-105 transition"
              >
                <FaGithub />
                Source Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full glass neon-border text-cyan-300 font-medium flex items-center gap-2 hover:scale-105 transition"
              >
                <FaExternalLinkAlt />
                Launch Demo
              </a>
            </div>

            {/* Footer line */}
            <div className="mt-6 pt-5 border-t border-cyan-300/10 flex items-center justify-between text-xs text-slate-400 uppercase tracking-[0.15em]">
              <span>Project Module</span>
              <span>System Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;