import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";

function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        Resume Access
      </motion.h2>

      <div className="max-w-6xl mx-auto glass neon-border rounded-[30px] p-6 md:p-8 robot-card-hover">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <FaFilePdf className="text-cyan-300 text-2xl" />
              <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm">
                Professional Profile
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              View My <span className="gradient-text">Resume</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mt-4 max-w-xl">
              You can preview my resume directly from this section or download it
              to explore my education, skills, training, and project background.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full neon-button text-white font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                <FaEye />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Pratush_Rawat_Resume.pdf"
                className="px-6 py-3 rounded-full glass neon-border text-cyan-300 font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-5">
              {/* TODO: resume file ko public/resume.pdf path par rakhna hai */}
              Place your PDF at: <span className="text-cyan-300">public/resume.pdf</span>
            </p>
          </div>

          <div className="glass rounded-[24px] border border-cyan-300/10 overflow-hidden min-h-[420px]">
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full h-[420px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;